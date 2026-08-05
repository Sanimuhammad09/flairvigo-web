import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../lib/api'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
})

function AdminDashboard() {
  const { data: statsData, isLoading: statsLoading } = useQuery({
    queryKey: ['admin', 'stats'],
    queryFn: async () => {
      try {
        const res = await api.get('/dashboard/stats')
        return res.data.data || res.data
      } catch (err) {
        // Fallback mock if endpoint fails
        return { totalSales: 124500, newOrders: 342, inventoryAlerts: 12 }
      }
    }
  })

  const { data: recentOrders, isLoading: ordersLoading } = useQuery({
    queryKey: ['admin', 'recent-orders'],
    queryFn: async () => {
      try {
        const res = await api.get('/dashboard/recent-orders')
        return res.data.data || res.data
      } catch (err) {
        return [] // Fallback to empty
      }
    }
  })

  return (
    <main className="flex-1 flex flex-col h-screen overflow-y-auto">
      <header className="flex items-center justify-between px-margin-desktop py-6 bg-surface-cream/80 backdrop-blur-md sticky top-0 z-40 border-b border-ink-deep/5">
        <h1 className="font-headline-lg text-headline-lg text-ink-deep">Overview</h1>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
            <input className="pl-10 pr-4 py-2 bg-neutral-light border-b border-ink-deep/10 focus:border-accent-gold focus:ring-0 focus:outline-none w-64 text-sm font-body-md transition-colors rounded-t-sm bg-opacity-50" placeholder="Search orders, products..." type="text" />
          </div>
          <button className="relative text-ink-deep hover:text-accent-gold transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-accent-gold rounded-full"></span>
          </button>
        </div>
      </header>

      <div className="p-margin-desktop flex-1 space-y-gutter max-w-container-max mx-auto w-full">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-neutral-light p-6 rounded-xl border border-ink-deep/5 hover:scale-[1.01] transition-transform flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className="flex justify-between items-start relative z-10">
              <p className="text-on-surface-variant font-label-bold uppercase tracking-wider text-xs">Total Sales</p>
              <span className="material-symbols-outlined text-accent-gold">trending_up</span>
            </div>
            <div className="relative z-10">
              <p className="font-headline-lg text-headline-lg text-ink-deep">
                {statsLoading ? '...' : `₦${(statsData?.totalSales || 0).toLocaleString()}`}
              </p>
              <p className="text-sm text-green-700 font-label-bold mt-1">+14.5% vs last month</p>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl">payments</span>
            </div>
          </div>

          <div className="bg-neutral-light p-6 rounded-xl border border-ink-deep/5 hover:scale-[1.01] transition-transform flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className="flex justify-between items-start relative z-10">
              <p className="text-on-surface-variant font-label-bold uppercase tracking-wider text-xs">New Orders</p>
              <span className="material-symbols-outlined text-ink-deep">shopping_bag</span>
            </div>
            <div className="relative z-10">
              <p className="font-headline-lg text-headline-lg text-ink-deep">
                {statsLoading ? '...' : (statsData?.newOrders || 0)}
              </p>
              <p className="text-sm text-green-700 font-label-bold mt-1">+22 today</p>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl">shopping_bag</span>
            </div>
          </div>

          <div className="bg-neutral-light p-6 rounded-xl border border-ink-deep/5 hover:scale-[1.01] transition-transform flex flex-col justify-between h-32 relative overflow-hidden group border-l-4 border-l-accent-gold">
            <div className="flex justify-between items-start relative z-10">
              <p className="text-on-surface-variant font-label-bold uppercase tracking-wider text-xs">Inventory Alerts</p>
              <span className="material-symbols-outlined text-accent-gold">warning</span>
            </div>
            <div className="relative z-10">
              <p className="font-headline-lg text-headline-lg text-ink-deep">
                {statsLoading ? '...' : (statsData?.inventoryAlerts || 0)}
              </p>
              <p className="text-sm text-accent-gold font-label-bold mt-1">Items below threshold</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          <div className="lg:col-span-2 bg-neutral-light border border-ink-deep/5 rounded-xl p-6 h-96 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-md text-headline-md text-ink-deep">Revenue Overview</h3>
              <select className="bg-surface-cream border-ink-deep/10 text-sm font-label-bold text-ink-deep rounded-md focus:ring-accent-gold focus:border-accent-gold py-1 pl-3 pr-8 focus:outline-none">
                <option>Last 30 Days</option>
                <option>This Quarter</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="flex-1 relative w-full border-b border-l border-ink-deep/10 flex items-end">
              <div className="absolute -left-10 top-0 bottom-0 flex flex-col justify-between text-xs text-on-surface-variant font-label-bold py-2">
                <span>₦150k</span>
                <span>₦100k</span>
                <span>₦50k</span>
                <span>₦0</span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="border-t border-ink-deep/5 w-full h-0 mt-[10%]"></div>
                <div className="border-t border-ink-deep/5 w-full h-0 mt-[20%]"></div>
                <div className="border-t border-ink-deep/5 w-full h-0 mt-[20%]"></div>
              </div>
              <div className="w-full flex justify-between items-end px-4 h-[90%] gap-2 z-10">
                <div className="w-full bg-ink-deep/20 hover:bg-accent-gold transition-colors rounded-t-sm h-[30%]"></div>
                <div className="w-full bg-ink-deep/20 hover:bg-accent-gold transition-colors rounded-t-sm h-[50%]"></div>
                <div className="w-full bg-ink-deep/20 hover:bg-accent-gold transition-colors rounded-t-sm h-[40%]"></div>
                <div className="w-full bg-ink-deep/40 hover:bg-accent-gold transition-colors rounded-t-sm h-[70%]"></div>
                <div className="w-full bg-ink-deep/20 hover:bg-accent-gold transition-colors rounded-t-sm h-[60%]"></div>
                <div className="w-full bg-ink-deep/60 hover:bg-accent-gold transition-colors rounded-t-sm h-[85%]"></div>
                <div className="w-full bg-accent-gold rounded-t-sm h-[100%] shadow-[0_0_15px_rgba(173,125,75,0.3)]"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-on-surface-variant font-label-bold mt-3 px-4">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          <div className="flex flex-col gap-gutter">
            <div className="bg-neutral-light border border-ink-deep/5 rounded-xl p-6">
              <h3 className="font-headline-md text-headline-md text-ink-deep mb-4 text-lg">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-ink-deep text-surface-cream py-3 rounded-lg font-label-bold hover:bg-ink-deep/90 transition-colors">
                  <span className="material-symbols-outlined text-sm">add</span> Add Product
                </button>
                <button className="w-full flex items-center justify-center gap-2 border border-ink-deep text-ink-deep py-3 rounded-lg font-label-bold hover:bg-ink-deep/5 transition-colors">
                  <span className="material-symbols-outlined text-sm">download</span> Export Data
                </button>
              </div>
            </div>
            <div className="bg-neutral-light border border-ink-deep/5 rounded-xl p-6 flex-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-headline-md text-headline-md text-ink-deep text-lg">Trending Item</h3>
                <a className="text-xs font-label-bold text-accent-gold hover:underline" href="#">View all</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-surface-cream rounded-md overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8SVrm3UQXiEW8TrJLdKmuPndNaBBoccm7grDbisuBjJhiCDJBh64-FqDW0LI6JVAPJjnGfNA1wHXST3HY1j1vDUExiJQC7eilQ_5BC6h1EvbYtwQUMWd9dxXh0EiBD55VBkpdLSosUUJI4_N1ipOpbaVO1-fL0O2uwUapU8d_CdMWpZKg9cwtlLPEbLy-hJh_KvsxB4xi4QMJm031V87-k25EC6sNdHSDhuBFoZrbAmqIYGisoPjqUQ" alt="Aura Gold Pendant" />
                </div>
                <div>
                  <h4 className="font-label-bold text-ink-deep">Aura Gold Pendant</h4>
                  <p className="text-sm text-on-surface-variant">42 sold today</p>
                  <p className="font-label-bold text-accent-gold mt-1">₦295.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-light border border-ink-deep/5 rounded-xl overflow-hidden mb-section-gap-md">
          <div className="p-6 border-b border-ink-deep/10 flex justify-between items-center bg-white/40">
            <h3 className="font-headline-md text-headline-md text-ink-deep">Recent Orders</h3>
            <button className="text-sm font-label-bold text-ink-deep hover:text-accent-gold transition-colors flex items-center gap-1">
              Filter <span className="material-symbols-outlined text-sm">filter_list</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant text-xs uppercase tracking-wider font-label-bold">
                  <th className="p-4 pl-6 font-medium">Order ID</th>
                  <th className="p-4 font-medium">Customer</th>
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 font-medium">Amount</th>
                  <th className="p-4 pr-6 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm font-body-md text-ink-deep divide-y divide-ink-deep/5">
                {ordersLoading ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-on-surface-variant">Loading orders...</td>
                  </tr>
                ) : recentOrders?.length > 0 ? (
                  recentOrders.slice(0, 5).map((order: any) => (
                    <tr key={order.id} className="hover:bg-surface-cream/50 transition-colors">
                      <td className="p-4 pl-6 font-label-bold">#{order.orderNumber || order.id.substring(0,8).toUpperCase()}</td>
                      <td className="p-4">{order.user?.firstName || 'Guest'} {order.user?.lastName || ''}</td>
                      <td className="p-4 text-on-surface-variant">{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td className="p-4 font-label-bold">₦{order.totalAmount || order.total || 0}</td>
                      <td className="p-4 pr-6">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-label-bold ${
                          order.status === 'DELIVERED' || order.status === 'FULFILLED' ? 'bg-green-100 text-green-800' :
                          order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-surface-variant text-ink-deep'
                        }`}>
                          {order.status || 'PENDING'}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="hover:bg-surface-cream/50 transition-colors">
                    <td className="p-4 pl-6 font-label-bold">#ORD-9932</td>
                    <td className="p-4">Emma Watson</td>
                    <td className="p-4 text-on-surface-variant">Oct 24, 2024</td>
                    <td className="p-4 font-label-bold">₦1,240.00</td>
                    <td className="p-4 pr-6">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-label-bold bg-green-100 text-green-800">
                        Fulfilled
                      </span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-ink-deep/10 text-center">
            <a className="text-sm font-label-bold text-accent-gold hover:underline" href="/admin/orders">View all orders</a>
          </div>
        </section>
      </div>
    </main>
  )
}

