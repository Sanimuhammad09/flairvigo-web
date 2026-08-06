import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '../../store/auth'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../lib/api'

export const Route = createFileRoute('/_store/account')({
  beforeLoad: () => {
    const { user } = useAuthStore.getState()
    if (!user) {
      throw redirect({
        to: '/sign-in',
      })
    }
  },
  component: AccountDashboard,
})

function AccountDashboard() {
  const { user, logout } = useAuthStore()

  // Fetch orders (if the API supports it, assuming GET /orders or something similar)
  // For now we'll just show the user details
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ['my-orders'],
    queryFn: async () => {
      try {
        const response = await api.get('/orders')
        return response.data
      } catch (err) {
        return []
      }
    },
  })

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 font-body-md text-ink-deep">
      <h1 className="font-headline-lg text-4xl font-bold mb-8 uppercase tracking-widest text-center">My Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar / Profile Info */}
        <div className="col-span-1">
          <div className="bg-surface-cream border border-brand-border p-6 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-neutral-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-3xl text-on-surface-variant">person</span>
            </div>
            <h2 className="font-headline-md text-xl text-center mb-1">{user?.firstName} {user?.lastName}</h2>
            <p className="text-on-surface-variant text-center mb-6">{user?.email}</p>
            
            <div className="space-y-2 border-t border-brand-border pt-6">
              <button className="w-full text-left px-4 py-2 font-label-bold text-ink-deep bg-neutral-light rounded transition-colors flex items-center gap-3">
                <span className="material-symbols-outlined">shopping_bag</span>
                Orders
              </button>
              <button 
                onClick={() => {
                  logout()
                  window.location.href = '/'
                }} 
                className="w-full text-left px-4 py-2 font-label-bold text-error hover:bg-neutral-light rounded transition-colors flex items-center gap-3"
              >
                <span className="material-symbols-outlined">logout</span>
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content (Orders) */}
        <div className="col-span-1 md:col-span-2">
          <div className="bg-white border border-brand-border p-6 rounded-lg shadow-sm">
            <h3 className="font-headline-md text-2xl mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-gold">receipt_long</span>
              Order History
            </h3>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ink-deep"></div>
              </div>
            ) : orders.length === 0 ? (
              <div className="text-center py-12 bg-neutral-light/30 rounded-lg border border-dashed border-brand-border">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">inbox</span>
                <p className="font-body-md text-on-surface-variant">You haven't placed any orders yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order: any) => (
                  <div key={order.id} className="border border-brand-border rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <p className="font-label-bold text-ink-deep mb-1">Order #{order.id.substring(0, 8).toUpperCase()}</p>
                      <p className="text-sm text-on-surface-variant">{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-label-bold text-accent-gold">₦{Number(order.totalAmount).toLocaleString()}</p>
                      <span className="inline-block mt-1 px-2 py-1 bg-neutral-light text-xs font-label-bold uppercase rounded">
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
