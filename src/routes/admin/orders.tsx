import { supabase } from '../../lib/supabase';
import { createFileRoute } from '@tanstack/react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { generateInvoicePDF } from '../../utils/generateInvoice'

export const Route = createFileRoute('/admin/orders')({
  component: AdminOrders,
})

function AdminOrders() {
  const queryClient = useQueryClient()
  const { data: orders, isLoading } = useQuery({
    queryKey: ['admin', 'orders'],
    queryFn: async () => {
      try {
        const { data } = await supabase.from('orders').select('*, user:profiles(*), items:order_items(*, product:products(*))').order('created_at', { ascending: false })
        return data || []
      } catch (err) {
        return []
      }
    },
    refetchInterval: 5000 // Auto-refresh orders every 5 seconds to catch new payments
  })

  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newStatus, setNewStatus] = useState<string>('')

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string, status: string }) => {
      await supabase.from('orders').update({ status }).eq('id', id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'orders'] })
      setIsModalOpen(false)
      setSelectedOrder(null)
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || 'Failed to update status')
    }
  })

  const handleManageClick = (order: any) => {
    setSelectedOrder(order)
    setNewStatus(order.status)
    setIsModalOpen(true)
  }

  const handleStatusUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedOrder || newStatus === selectedOrder.status) return
    updateStatusMutation.mutate({ id: selectedOrder.id, status: newStatus })
  }

  return (
    <main className="flex-1 px-margin-mobile md:px-margin-desktop py-section-gap-md max-w-container-max mx-auto w-full relative">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Orders</h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg">Manage and track your recent sales.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 border border-ink-deep/20 text-ink-deep px-6 py-3 hover:border-accent-gold hover:text-accent-gold transition-colors font-label-bold text-label-bold">
            <span className="material-symbols-outlined" data-icon="download">download</span>
            Export
          </button>
        </div>
      </header>

      {/* Table Container */}
      <div className="bg-surface-cream border border-ink-deep/10 overflow-x-auto min-h-[400px]">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-neutral-light/50 border-b border-ink-deep/10">
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Order ID</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Date</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Customer</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Total</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Method</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Status</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest text-right">Action</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md divide-y divide-ink-deep/5">
            {isLoading ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-on-surface-variant">Loading orders...</td>
              </tr>
            ) : orders?.length > 0 ? (
              (orders || []).map((order: any) => (
                <tr key={order.id} className="hover:bg-neutral-light/50 transition-colors group">
                  <td className="py-4 px-6 font-label-bold text-label-bold text-ink-deep">
                    #{order.order_number || order.id.substring(0,8).toUpperCase()}
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">{new Date(order.created_at).toLocaleDateString()}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-ink-deep flex items-center justify-center font-label-bold text-label-bold text-surface-cream">
                        {(order.user?.first_name?.[0] || 'G') + (order.user?.last_name?.[0] || '')}
                      </div>
                      <span>{order.user?.first_name || 'Guest'} {order.user?.last_name || ''}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-label-bold text-label-bold text-ink-deep">₦{order.total_amount?.toLocaleString() || order.total || 0}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2 py-1 bg-surface-variant text-ink-deep text-xs font-label-bold rounded-full">
                      {order.payment_info?.method?.replace('_', ' ') || 'Unknown'}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-label-sm font-label-bold border ${
                      order.status === 'CONFIRMED' || order.status === 'SHIPPED' || order.status === 'DELIVERED' ? 'bg-green-100 text-green-800 border-green-200' :
                      order.status === 'PENDING_PAYMENT' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                      'bg-surface-container-low text-on-surface-variant border-ink-deep/10'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        order.status === 'CONFIRMED' || order.status === 'SHIPPED' || order.status === 'DELIVERED' ? 'bg-green-600' :
                        order.status === 'PENDING_PAYMENT' ? 'bg-yellow-600' :
                        'bg-on-surface-variant'
                      }`}></span> 
                      {order.status || 'Pending'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button 
                      onClick={() => handleManageClick(order)}
                      className="text-ink-deep hover:text-accent-gold transition-colors font-label-bold uppercase text-xs tracking-widest border-b border-ink-deep hover:border-accent-gold"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-8 text-center text-on-surface-variant">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Manage Order Modal */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-surface-cream rounded-xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-lg text-2xl text-ink-deep">Order #{selectedOrder.order_number || selectedOrder.id.substring(0,8).toUpperCase()}</h3>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => generateInvoicePDF(selectedOrder)} 
                  className="flex items-center gap-2 text-ink-deep hover:text-accent-gold transition-colors font-label-bold text-xs uppercase tracking-widest"
                >
                  <span className="material-symbols-outlined text-xl">download</span>
                  Invoice
                </button>
                <button onClick={() => setIsModalOpen(false)} className="text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Customer Info */}
              <div>
                <h4 className="font-label-bold text-on-surface-variant uppercase tracking-widest text-xs mb-3">Customer Details</h4>
                <div className="bg-neutral-light p-4 rounded border border-ink-deep/5">
                  <p className="font-label-bold text-ink-deep">{selectedOrder.user?.first_name || 'Guest'} {selectedOrder.user?.last_name || ''}</p>
                  <p className="text-sm text-on-surface-variant mb-2">{selectedOrder.user?.email || 'No email provided'}</p>
                  <div className="mt-3 pt-3 border-t border-ink-deep/5">
                    <p className="font-label-bold text-xs text-on-surface-variant uppercase">Shipping Address</p>
                    <p className="text-sm text-ink-deep mt-1">
                      {selectedOrder.shipping_address?.firstName} {selectedOrder.shipping_address?.lastName}<br />
                      {selectedOrder.shipping_address?.address1} {selectedOrder.shipping_address?.address2}<br />
                      {selectedOrder.shipping_address?.city}, {selectedOrder.shipping_address?.state}<br />
                      {selectedOrder.shipping_address?.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Info */}
              <div>
                <h4 className="font-label-bold text-on-surface-variant uppercase tracking-widest text-xs mb-3">Payment Summary</h4>
                <div className="bg-neutral-light p-4 rounded border border-ink-deep/5">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-on-surface-variant">Subtotal</span>
                    <span className="font-label-bold">₦{selectedOrder.total_amount?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mt-3 pt-3 border-t border-ink-deep/5">
                    <span className="text-sm font-label-bold text-ink-deep uppercase">Total</span>
                    <span className="font-headline-md text-accent-gold text-xl">₦{selectedOrder.total_amount?.toLocaleString()}</span>
                  </div>
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-surface-variant text-ink-deep text-xs font-label-bold rounded-full">
                    Method: {selectedOrder.payment_info?.method?.replace('_', ' ') || 'Unknown'}
                  </div>
                </div>
              </div>
            </div>

            {/* Items Ordered */}
            <div className="mb-8">
              <h4 className="font-label-bold text-on-surface-variant uppercase tracking-widest text-xs mb-3">Items Ordered</h4>
              <div className="border border-ink-deep/10 rounded-lg overflow-hidden">
                {selectedOrder.items?.map((item: any) => (
                  <div key={item.id} className="flex gap-4 items-center p-4 border-b border-ink-deep/10 last:border-0 bg-white">
                    <div className="w-12 h-16 bg-neutral-light rounded overflow-hidden shrink-0">
                      {item.product?.images?.[0] ? (
                        <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-on-surface-variant material-symbols-outlined text-xl">image</div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <p className="font-label-bold text-ink-deep text-sm">{item.product?.name || 'Unknown Product'}</p>
                      <p className="text-xs text-on-surface-variant">{item.color} / {item.size}</p>
                      <p className="text-xs font-label-bold mt-1">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
                {!selectedOrder.items || selectedOrder.items.length === 0 ? (
                  <div className="p-4 text-sm text-on-surface-variant text-center">No item details available.</div>
                ) : null}
              </div>
            </div>

            {/* Status Update Form */}
            <form onSubmit={handleStatusUpdate} className="bg-surface-variant/30 p-6 rounded-lg border border-ink-deep/10">
              <h4 className="font-label-bold text-ink-deep mb-4">Update Order Status</h4>
              
              {selectedOrder.payment_info?.method === 'BANK_TRANSFER' && selectedOrder.status === 'PENDING' && (
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded text-sm flex items-start gap-2">
                  <span className="material-symbols-outlined text-yellow-600">info</span>
                  <p>This order used Bank Transfer. Once you have verified the funds in your bank account, update the status to <strong>CONFIRMED</strong> below to begin processing.</p>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-grow w-full">
                  <label className="block font-label-bold text-xs text-on-surface-variant uppercase tracking-widest mb-2">Current Status</label>
                  <select 
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="w-full bg-white border border-ink-deep/20 rounded p-3 focus:outline-none focus:border-accent-gold cursor-pointer"
                  >
                    <option value="PENDING_PAYMENT">Pending Payment</option>
                    <option value="PENDING">Pending</option>
                    <option value="CONFIRMED">Payment Confirmed</option>
                    <option value="PROCESSING">Processing</option>
                    <option value="SHIPPED">Shipped</option>
                    <option value="DELIVERED">Delivered</option>
                    <option value="CANCELLED">Cancelled</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  disabled={updateStatusMutation.isPending || newStatus === selectedOrder.status}
                  className="w-full md:w-auto px-8 py-3 bg-ink-deep text-surface-cream rounded font-label-bold hover:bg-ink-deep/90 transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {updateStatusMutation.isPending ? 'Updating...' : 'Update Status'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
