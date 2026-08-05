import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../lib/api'

export const Route = createFileRoute('/admin/analytics')({
  component: AdminAnalytics,
})

function AdminAnalytics() {
  const { data: analytics, isLoading } = useQuery({
    queryKey: ['admin', 'analytics'],
    queryFn: async () => {
      const res = await api.get('/admin/analytics/overview')
      return res.data.data || res.data
    },
    refetchInterval: 30000 // Refetch every 30 seconds
  })

  // Calculate metrics safely
  const totalRevenue = analytics?.totalRevenue || 0
  const totalOrders = analytics?.totalOrders || 0
  const activeCustomers = analytics?.activeCustomers || 0
  const aov = totalOrders > 0 ? (totalRevenue / totalOrders) : 0
  const topProducts = analytics?.topProducts || []

  return (
    <main className="flex-1 flex flex-col h-screen overflow-y-auto">
      {/* Top Action Bar */}
      <header className="sticky top-0 z-40 bg-surface-cream/90 backdrop-blur-md border-b border-ink-deep/10 px-margin-desktop py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-ink-deep mb-1">Deep Analytics</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive performance overview.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Download Action */}
          <button className="border border-ink-deep text-ink-deep px-6 py-2 font-label-bold text-label-bold hover:bg-ink-deep hover:text-surface-cream transition-colors flex items-center gap-2 whitespace-nowrap">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download Report
          </button>
        </div>
      </header>
      
      {/* Dashboard Content */}
      <div className="p-margin-desktop pt-8 max-w-container-max mx-auto w-full flex flex-col gap-gutter">
        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Metric Card 1 */}
          <div className="bg-neutral-light p-6 border border-ink-deep/5 hover:border-accent-gold/30 transition-colors group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-gold/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-2 relative z-10">Total Revenue</p>
            <div className="flex items-end justify-between relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-ink-deep">
                {isLoading ? '...' : `₦${totalRevenue.toLocaleString()}`}
              </h3>
            </div>
          </div>
          {/* Metric Card 2 */}
          <div className="bg-neutral-light p-6 border border-ink-deep/5 hover:border-accent-gold/30 transition-colors group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-gold/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-2 relative z-10">Total Orders</p>
            <div className="flex items-end justify-between relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-ink-deep">
                {isLoading ? '...' : totalOrders.toLocaleString()}
              </h3>
            </div>
          </div>
          {/* Metric Card 3 */}
          <div className="bg-neutral-light p-6 border border-ink-deep/5 hover:border-accent-gold/30 transition-colors group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-gold/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-2 relative z-10">Avg Order Value</p>
            <div className="flex items-end justify-between relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-ink-deep">
                {isLoading ? '...' : `₦${aov.toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
              </h3>
            </div>
          </div>
          {/* Metric Card 4 */}
          <div className="bg-neutral-light p-6 border border-ink-deep/5 hover:border-accent-gold/30 transition-colors group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-gold/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-2 relative z-10">Active Customers</p>
            <div className="flex items-end justify-between relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-ink-deep">
                {isLoading ? '...' : activeCustomers.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
        
        {/* Main Charts Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Top Products */}
          <div className="lg:col-span-3 bg-neutral-light p-6 border border-ink-deep/5 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-md text-headline-md text-ink-deep">Top Selling Products</h3>
            </div>
            
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-ink-deep/10 text-on-surface-variant font-label-bold text-xs uppercase tracking-widest">
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Variant</th>
                    <th className="py-3 px-4 text-right">Units Sold</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-deep/5">
                  {isLoading ? (
                    <tr><td colSpan={3} className="py-8 text-center">Loading...</td></tr>
                  ) : topProducts.length > 0 ? (
                    topProducts.map((item: any, idx: number) => {
                      // Handle both new structure { variant, totalQuantitySold } and old { variantId, _sum }
                      const isNewStruct = item.variant !== undefined;
                      const name = isNewStruct ? item.variant?.product?.name : item.variantId;
                      const image = isNewStruct ? item.variant?.product?.images?.[0]?.url : null;
                      const qty = isNewStruct ? item.totalQuantitySold : item._sum?.quantity;
                      const details = isNewStruct ? `${item.variant?.color} / ${item.variant?.size}` : 'Unknown';

                      return (
                        <tr key={idx} className="hover:bg-neutral-light/50 transition-colors">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              {image ? (
                                <img src={image} className="w-10 h-10 object-cover rounded bg-ink-deep/5" />
                              ) : (
                                <div className="w-10 h-10 rounded bg-ink-deep/5 flex items-center justify-center">
                                  <span className="material-symbols-outlined text-on-surface-variant text-[16px]">inventory_2</span>
                                </div>
                              )}
                              <span className="font-label-bold text-ink-deep">{name || 'Unknown Product'}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-sm text-on-surface-variant">{details}</td>
                          <td className="py-4 px-4 text-right font-headline-md text-ink-deep">{qty}</td>
                        </tr>
                      )
                    })
                  ) : (
                    <tr><td colSpan={3} className="py-8 text-center text-on-surface-variant">No sales data yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Bottom Spacing */}
        <div className="h-12 w-full"></div>
      </div>
    </main>
  )
}

