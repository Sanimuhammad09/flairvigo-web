import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/customers')({
  component: AdminCustomers,
})

function AdminCustomers() {
  return (
    <main className="flex-grow p-gutter md:p-margin-desktop max-w-container-max mx-auto w-full">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-section-gap-md gap-4">
        <div>
          <h2 className="font-display-lg text-display-lg text-ink-deep mb-2">Customers</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Manage relationships and view purchase histories.</p>
        </div>
        <div className="relative w-full md:w-auto">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
          <input className="w-full md:w-80 pl-12 pr-4 py-3 bg-transparent border-b border-ink-deep/10 focus:border-accent-gold focus:outline-none transition-colors font-body-md text-body-md text-ink-deep placeholder-on-surface-variant" placeholder="Search customers..." type="text" />
        </div>
      </header>
      
      {/* Metrics Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-section-gap-md">
        <div className="bg-neutral-light p-gutter border border-ink-deep/5 flex flex-col justify-between h-40">
          <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Total Customers</p>
          <p className="font-display-lg text-display-lg text-ink-deep">12,450</p>
        </div>
        <div className="bg-neutral-light p-gutter border border-ink-deep/5 flex flex-col justify-between h-40">
          <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Active This Month</p>
          <p className="font-display-lg text-display-lg text-ink-deep">3,892</p>
        </div>
        <div className="bg-neutral-light p-gutter border border-ink-deep/5 flex flex-col justify-between h-40">
          <p className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Avg. Lifetime Value</p>
          <p className="font-display-lg text-display-lg text-accent-gold">₦1,240</p>
        </div>
      </div>
      
      {/* Customer List Table */}
      <div className="w-full overflow-x-auto pb-8">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-ink-deep/10">
              <th className="py-4 px-2 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Customer</th>
              <th className="py-4 px-2 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Status</th>
              <th className="py-4 px-2 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Total Spend</th>
              <th className="py-4 px-2 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">Last Order</th>
              <th className="py-4 px-2 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md text-ink-deep divide-y divide-ink-deep/5">
            {/* Row 1 */}
            <tr className="hover:bg-neutral-light transition-colors group">
              <td className="py-4 px-2 flex items-center gap-4">
                <div className="w-10 h-10 bg-ink-deep rounded-full flex items-center justify-center text-surface-cream font-label-bold text-label-bold">EA</div>
                <div>
                  <p className="font-label-bold text-label-bold">Elena Alvarez</p>
                  <p className="text-on-surface-variant text-sm">elena.a@example.com</p>
                </div>
              </td>
              <td className="py-4 px-2">
                <span className="inline-flex items-center px-2 py-1 bg-surface-container-high text-on-surface-variant text-xs font-label-bold rounded-full">Active</span>
              </td>
              <td className="py-4 px-2 font-body-lg text-body-lg">₦4,250.00</td>
              <td className="py-4 px-2 text-on-surface-variant">Oct 12, 2024</td>
              <td className="py-4 px-2 text-right">
                <button className="text-accent-gold hover:text-ink-deep font-label-bold text-label-bold transition-colors inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 focus:opacity-100">
                  View Details <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="hover:bg-neutral-light transition-colors group">
              <td className="py-4 px-2 flex items-center gap-4">
                <div className="w-10 h-10 bg-ink-deep rounded-full flex items-center justify-center text-surface-cream font-label-bold text-label-bold">MR</div>
                <div>
                  <p className="font-label-bold text-label-bold">Marcus Reed</p>
                  <p className="text-on-surface-variant text-sm">m.reed@example.com</p>
                </div>
              </td>
              <td className="py-4 px-2">
                <span className="inline-flex items-center px-2 py-1 bg-surface-container-high text-on-surface-variant text-xs font-label-bold rounded-full">VIP</span>
              </td>
              <td className="py-4 px-2 font-body-lg text-body-lg">₦12,890.50</td>
              <td className="py-4 px-2 text-on-surface-variant">Oct 10, 2024</td>
              <td className="py-4 px-2 text-right">
                <button className="text-accent-gold hover:text-ink-deep font-label-bold text-label-bold transition-colors inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 focus:opacity-100">
                  View Details <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </td>
            </tr>
            {/* Row 3 */}
            <tr className="hover:bg-neutral-light transition-colors group">
              <td className="py-4 px-2 flex items-center gap-4">
                <div className="w-10 h-10 bg-ink-deep rounded-full flex items-center justify-center text-surface-cream font-label-bold text-label-bold">SJ</div>
                <div>
                  <p className="font-label-bold text-label-bold">Sarah Jenkins</p>
                  <p className="text-on-surface-variant text-sm">sarahj@example.com</p>
                </div>
              </td>
              <td className="py-4 px-2">
                <span className="inline-flex items-center px-2 py-1 bg-surface-container-highest text-on-surface-variant text-xs font-label-bold rounded-full">Inactive</span>
              </td>
              <td className="py-4 px-2 font-body-lg text-body-lg">₦850.00</td>
              <td className="py-4 px-2 text-on-surface-variant">Feb 22, 2024</td>
              <td className="py-4 px-2 text-right">
                <button className="text-accent-gold hover:text-ink-deep font-label-bold text-label-bold transition-colors inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 focus:opacity-100">
                  View Details <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </td>
            </tr>
            {/* Row 4 */}
            <tr className="hover:bg-neutral-light transition-colors group">
              <td className="py-4 px-2 flex items-center gap-4">
                <div className="w-10 h-10 bg-ink-deep rounded-full flex items-center justify-center text-surface-cream font-label-bold text-label-bold">TC</div>
                <div>
                  <p className="font-label-bold text-label-bold">Tom Chen</p>
                  <p className="text-on-surface-variant text-sm">t.chen@example.com</p>
                </div>
              </td>
              <td className="py-4 px-2">
                <span className="inline-flex items-center px-2 py-1 bg-surface-container-high text-on-surface-variant text-xs font-label-bold rounded-full">Active</span>
              </td>
              <td className="py-4 px-2 font-body-lg text-body-lg">₦2,100.00</td>
              <td className="py-4 px-2 text-on-surface-variant">Sep 15, 2024</td>
              <td className="py-4 px-2 text-right">
                <button className="text-accent-gold hover:text-ink-deep font-label-bold text-label-bold transition-colors inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 focus:opacity-100">
                  View Details <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Pagination Placeholder */}
      <div className="flex justify-end gap-2 mt-4">
        <button className="p-2 text-on-surface-variant hover:text-ink-deep transition-colors">
          <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
        </button>
        <button className="p-2 text-ink-deep font-label-bold border-b-2 border-accent-gold">1</button>
        <button className="p-2 text-on-surface-variant hover:text-ink-deep transition-colors font-label-bold">2</button>
        <button className="p-2 text-on-surface-variant hover:text-ink-deep transition-colors font-label-bold">3</button>
        <button className="p-2 text-on-surface-variant hover:text-ink-deep transition-colors">
          <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
        </button>
      </div>
    </main>
  )
}
