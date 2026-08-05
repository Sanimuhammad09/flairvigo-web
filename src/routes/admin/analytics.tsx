import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/analytics')({
  component: AdminAnalytics,
})

function AdminAnalytics() {
  return (
    <main className="flex-1 flex flex-col h-screen overflow-y-auto">
      {/* Top Action Bar */}
      <header className="sticky top-0 z-40 bg-surface-cream/90 backdrop-blur-md border-b border-ink-deep/10 px-margin-desktop py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-ink-deep mb-1">Deep Analytics</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Comprehensive performance overview.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Date Range Picker (Simplified UI) */}
          <div className="flex items-center border border-ink-deep/10 bg-neutral-light rounded-sm overflow-hidden flex-1 md:flex-none">
            <button className="px-4 py-2 text-label-sm font-label-bold text-on-surface-variant hover:bg-surface-container-high transition-colors border-r border-ink-deep/10">Last 7 Days</button>
            <button className="px-4 py-2 text-label-sm font-label-bold text-ink-deep bg-surface-cream">30 Days</button>
            <button className="px-4 py-2 text-label-sm font-label-bold text-on-surface-variant hover:bg-surface-container-high transition-colors border-l border-ink-deep/10">YTD</button>
            <div className="px-3 border-l border-ink-deep/10 flex items-center text-on-surface-variant cursor-pointer hover:text-ink-deep">
              <span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
            </div>
          </div>
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
              <h3 className="font-headline-lg text-headline-lg text-ink-deep">₦124,500</h3>
              <div className="flex items-center text-accent-gold gap-1 pb-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span className="font-label-sm text-label-sm">+12.5%</span>
              </div>
            </div>
          </div>
          {/* Metric Card 2 */}
          <div className="bg-neutral-light p-6 border border-ink-deep/5 hover:border-accent-gold/30 transition-colors group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-gold/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-2 relative z-10">Orders</p>
            <div className="flex items-end justify-between relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-ink-deep">842</h3>
              <div className="flex items-center text-accent-gold gap-1 pb-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span className="font-label-sm text-label-sm">+5.2%</span>
              </div>
            </div>
          </div>
          {/* Metric Card 3 */}
          <div className="bg-neutral-light p-6 border border-ink-deep/5 hover:border-accent-gold/30 transition-colors group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-error/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-2 relative z-10">Avg Order Value</p>
            <div className="flex items-end justify-between relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-ink-deep">₦147.80</h3>
              <div className="flex items-center text-error gap-1 pb-1">
                <span className="material-symbols-outlined text-[16px]">trending_down</span>
                <span className="font-label-sm text-label-sm">-1.1%</span>
              </div>
            </div>
          </div>
          {/* Metric Card 4 */}
          <div className="bg-neutral-light p-6 border border-ink-deep/5 hover:border-accent-gold/30 transition-colors group relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-gold/5 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-2 relative z-10">Conversion Rate</p>
            <div className="flex items-end justify-between relative z-10">
              <h3 className="font-headline-lg text-headline-lg text-ink-deep">3.2%</h3>
              <div className="flex items-center text-accent-gold gap-1 pb-1">
                <span className="material-symbols-outlined text-[16px]">trending_up</span>
                <span className="font-label-sm text-label-sm">+0.4%</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Charts Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
          {/* Large Line Chart: Sales Over Time */}
          <div className="lg:col-span-2 bg-neutral-light p-6 border border-ink-deep/5 flex flex-col min-h-[400px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-md text-headline-md text-ink-deep">Sales Velocity</h3>
              <button className="text-on-surface-variant hover:text-ink-deep transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            <div className="flex-1 relative w-full h-full bg-ink-deep/5 rounded flex items-center justify-center">
              <p className="text-on-surface-variant">Chart Placeholder</p>
            </div>
          </div>
          
          {/* Vertical Layout: Top Products & Category Mix */}
          <div className="lg:col-span-1 flex flex-col gap-gutter">
            {/* Top Products Bar Chart */}
            <div className="bg-neutral-light p-6 border border-ink-deep/5 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md text-headline-md text-ink-deep">Top Movers</h3>
              </div>
              <div className="flex-1 relative w-full h-full min-h-[200px] bg-ink-deep/5 rounded flex items-center justify-center">
                <p className="text-on-surface-variant">Chart Placeholder</p>
              </div>
            </div>
            {/* Category Breakdown Pie Chart */}
            <div className="bg-neutral-light p-6 border border-ink-deep/5 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md text-headline-md text-ink-deep">Category Mix</h3>
              </div>
              <div className="flex-1 relative w-full h-full min-h-[200px] flex items-center justify-center bg-ink-deep/5 rounded">
                <p className="text-on-surface-variant">Chart Placeholder</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Spacing */}
        <div className="h-12 w-full"></div>
      </div>
    </main>
  )
}
