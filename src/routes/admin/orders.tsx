import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/orders')({
  component: AdminOrders,
})

function AdminOrders() {
  return (
    <main className="flex-1 px-margin-mobile md:px-margin-desktop py-section-gap-md max-w-container-max mx-auto w-full">
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
          <button className="flex-1 md:flex-none bg-ink-deep text-surface-cream px-6 py-3 hover:bg-accent-gold transition-colors font-label-bold text-label-bold">
            Create Order
          </button>
        </div>
      </header>

      {/* Filters & Search Bar */}
      <div className="bg-surface-cream border border-ink-deep/10 p-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Tabs */}
        <div className="flex gap-6 border-b border-ink-deep/10 w-full md:w-auto overflow-x-auto no-scrollbar">
          <button className="text-accent-gold border-b-2 border-accent-gold pb-2 font-label-bold text-label-bold whitespace-nowrap">All Orders</button>
          <button className="text-on-surface-variant hover:text-ink-deep pb-2 font-label-bold text-label-bold transition-colors whitespace-nowrap">Unfulfilled</button>
          <button className="text-on-surface-variant hover:text-ink-deep pb-2 font-label-bold text-label-bold transition-colors whitespace-nowrap">Pending</button>
          <button className="text-on-surface-variant hover:text-ink-deep pb-2 font-label-bold text-label-bold transition-colors whitespace-nowrap">Completed</button>
        </div>
        {/* Search & Filter */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
            <input className="w-full bg-neutral-light border-0 border-b border-ink-deep/20 pl-10 pr-4 py-2 focus:ring-0 focus:border-accent-gold transition-colors font-body-md text-body-md placeholder-on-surface-variant" placeholder="Search orders..." type="text" />
          </div>
          <button className="flex items-center gap-2 border border-ink-deep/20 px-4 py-2 hover:border-accent-gold hover:text-accent-gold transition-colors">
            <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
            <span className="font-label-bold text-label-bold hidden md:inline">Filters</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-surface-cream border border-ink-deep/10 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-neutral-light/50 border-b border-ink-deep/10">
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest w-12">
                <input className="border-ink-deep/20 text-ink-deep focus:ring-ink-deep rounded-sm bg-transparent" type="checkbox" />
              </th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Order ID</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Date</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Customer</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Total</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Payment</th>
              <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-widest">Fulfillment</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md divide-y divide-ink-deep/5">
            {/* Row 1 */}
            <tr className="hover:bg-neutral-light/30 transition-colors group">
              <td className="py-4 px-6">
                <input className="border-ink-deep/20 text-ink-deep focus:ring-ink-deep rounded-sm bg-transparent" type="checkbox" />
              </td>
              <td className="py-4 px-6 font-label-bold text-label-bold hover:text-accent-gold cursor-pointer transition-colors">#ORD-0921</td>
              <td className="py-4 px-6 text-on-surface-variant">Oct 24, 2024</td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-ink-deep/5 flex items-center justify-center font-label-bold text-label-bold text-ink-deep">ES</div>
                  <span>Elena Silva</span>
                </div>
              </td>
              <td className="py-4 px-6 font-label-bold text-label-bold">₦1,245.00</td>
              <td className="py-4 px-6">
                <span className="inline-flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded-full text-label-sm font-label-sm border border-ink-deep/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> Paid
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="inline-flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded-full text-label-sm font-label-sm border border-ink-deep/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span> Unfulfilled
                </span>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-neutral-light/30 transition-colors group">
              <td className="py-4 px-6">
                <input className="border-ink-deep/20 text-ink-deep focus:ring-ink-deep rounded-sm bg-transparent" type="checkbox" />
              </td>
              <td className="py-4 px-6 font-label-bold text-label-bold hover:text-accent-gold cursor-pointer transition-colors">#ORD-0920</td>
              <td className="py-4 px-6 text-on-surface-variant">Oct 24, 2024</td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-ink-deep/5 flex items-center justify-center font-label-bold text-label-bold text-ink-deep">MJ</div>
                  <span>Marcus Johnson</span>
                </div>
              </td>
              <td className="py-4 px-6 font-label-bold text-label-bold">₦340.50</td>
              <td className="py-4 px-6">
                <span className="inline-flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded-full text-label-sm font-label-sm border border-ink-deep/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> Paid
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="inline-flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded-full text-label-sm font-label-sm border border-ink-deep/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span> Fulfilled
                </span>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-neutral-light/30 transition-colors group">
              <td className="py-4 px-6">
                <input className="border-ink-deep/20 text-ink-deep focus:ring-ink-deep rounded-sm bg-transparent" type="checkbox" />
              </td>
              <td className="py-4 px-6 font-label-bold text-label-bold hover:text-accent-gold cursor-pointer transition-colors">#ORD-0919</td>
              <td className="py-4 px-6 text-on-surface-variant">Oct 23, 2024</td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-ink-deep/5 flex items-center justify-center font-label-bold text-label-bold text-ink-deep">SW</div>
                  <span>Sarah Wei</span>
                </div>
              </td>
              <td className="py-4 px-6 font-label-bold text-label-bold">₦890.00</td>
              <td className="py-4 px-6">
                <span className="inline-flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded-full text-label-sm font-label-sm border border-ink-deep/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Pending
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="inline-flex items-center gap-1.5 bg-surface-container-low px-2 py-1 rounded-full text-label-sm font-label-sm border border-ink-deep/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span> Unfulfilled
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Pagination */}
        <div className="p-4 border-t border-ink-deep/10 flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
          <span>Showing 1 to 10 of 45 orders</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-ink-deep/20 hover:border-accent-gold hover:text-accent-gold transition-colors disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-ink-deep/20 hover:border-accent-gold hover:text-accent-gold transition-colors">
              <span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
