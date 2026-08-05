import { createFileRoute } from '@tanstack/react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/api'
import { useState } from 'react'

export const Route = createFileRoute('/admin/orders')({
  component: AdminOrders,
})

function AdminOrders() {
  const queryClient = useQueryClient()
  const { data: orders, isLoading } = useQuery({
    queryKey: ['admin', 'orders'],
    queryFn: async () => {
      try {
        const res = await api.get('/admin/orders')
        return res.data.data || res.data || []
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
      await api.put(`/admin/orders/${id}/status`, { status })
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
              orders.map((order: any) => (
                <tr key={order.id} className="hover:bg-neutral-light/50 transition-colors group">
                  <td className="py-4 px-6 font-label-bold text-label-bold text-ink-deep">
                    #{order.orderNumber || order.id.substring(0,8).toUpperCase()}
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-ink-deep flex items-center justify-center font-label-bold text-label-bold text-surface-cream">
                        {(order.user?.firstName?.[0] || 'G') + (order.user?.lastName?.[0] || '')}
                      </div>
                      <span>{order.user?.firstName || 'Guest'} {order.user?.lastName || ''}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-label-bold text-label-bold text-ink-deep">₦{order.totalAmount?.toLocaleString() || order.total || 0}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-2 py-1 bg-surface-variant text-ink-deep text-xs font-label-bold rounded-full">
                      {order.paymentMethod?.replace('_', ' ') || 'Unknown'}
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
              <h3 className="font-headline-lg text-2xl text-ink-deep">Order #{selectedOrder.orderNumber || selectedOrder.id.substring(0,8).toUpperCase()}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-on-surface-variant hover:text-error transition-colors">
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Customer Info */}
              <div>
                <h4 className="font-label-bold text-on-surface-variant uppercase tracking-widest text-xs mb-3">Customer Details</h4>
                <div className="bg-neutral-light p-4 rounded border border-ink-deep/5">
                  <p className="font-label-bold text-ink-deep">{selectedOrder.user?.firstName || 'Guest'} {selectedOrder.user?.lastName || ''}</p>
                  <p className="text-sm text-on-surface-variant mb-2">{selectedOrder.user?.email || 'No email provided'}</p>
                  <div className="mt-3 pt-3 border-t border-ink-deep/5">
                    <p className="font-label-bold text-xs text-on-surface-variant uppercase">Shipping Address</p>
                    <p className="text-sm text-ink-deep mt-1">
                      {selectedOrder.shippingAddress?.firstName} {selectedOrder.shippingAddress?.lastName}<br />
                      {selectedOrder.shippingAddress?.address1} {selectedOrder.shippingAddress?.address2}<br />
                      {selectedOrder.shippingAddress?.city}, {selectedOrder.shippingAddress?.state}<br />
                      {selectedOrder.shippingAddress?.country}
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
                    <span className="font-label-bold">₦{selectedOrder.subtotal?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-on-surface-variant">Tax</span>
                    <span className="font-label-bold">₦{selectedOrder.taxAmount?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-on-surface-variant">Shipping</span>
                    <span className="font-label-bold">₦{selectedOrder.shippingCost?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mt-3 pt-3 border-t border-ink-deep/5">
                    <span className="text-sm font-label-bold text-ink-deep uppercase">Total</span>
                    <span className="font-headline-md text-accent-gold text-xl">₦{selectedOrder.totalAmount?.toLocaleString()}</span>
                  </div>
                  <div className="mt-4 inline-flex items-center px-3 py-1 bg-surface-variant text-ink-deep text-xs font-label-bold rounded-full">
                    Method: {selectedOrder.paymentMethod?.replace('_', ' ') || 'Unknown'}
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
                      {item.variant?.product?.images?.[0]?.url ? (
                        <img src={item.variant.product.images[0].url} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-on-surface-variant material-symbols-outlined text-xl">image</div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <p className="font-label-bold text-ink-deep text-sm">{item.variant?.product?.name || 'Unknown Product'}</p>
                      <p className="text-xs text-on-surface-variant">{item.variant?.color} / {item.variant?.size}</p>
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
              
              {selectedOrder.paymentMethod === 'BANK_TRANSFER' && selectedOrder.status === 'PENDING_PAYMENT' && (
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
