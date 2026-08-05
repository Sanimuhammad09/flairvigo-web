import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/products/new/variants')({
  component: AddProductVariants,
})

function AddProductVariants() {
  return (
    <main className="flex-1 flex flex-col min-w-0 bg-surface-cream text-ink-deep font-body-md h-full">
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-8 md:px-margin-desktop h-20 sticky top-0 z-40 bg-surface-bright border-b border-ink-deep/5 flat no shadows">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-ink-deep p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="text-sm font-label-sm text-on-surface-variant flex items-center gap-2">
            <Link className="hover:text-ink-deep transition-colors" to="/admin/inventory">Inventory</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link className="hover:text-ink-deep transition-colors" to="/admin/products/new">Add New Product</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="font-semibold text-ink-deep">Variants</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-ink-deep transition-colors p-2">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-ink-deep transition-colors p-2">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
          <div className="hidden md:flex items-center gap-3 border-l border-ink-deep/10 pl-6 ml-2">
            <Link to="/admin/products/new" className="px-6 py-2 border border-ink-deep text-ink-deep font-label-bold text-label-bold rounded-DEFAULT hover:bg-neutral-light transition-colors">
              Back
            </Link>
            <Link to="/admin/products/new/seo" className="px-6 py-2 bg-ink-deep text-surface-cream font-label-bold text-label-bold rounded-DEFAULT hover:opacity-90 transition-opacity">
              Next: SEO & Logistics
            </Link>
          </div>
        </div>
      </header>
      
      {/* Page Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:px-margin-desktop">
        <div className="max-w-container-max mx-auto space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep">Manage Variants</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
                Configure SKU details, inventory levels, and specific pricing overrides for each product variation. Ensure all attributes align with the Technical Luxury standard.
              </p>
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-surface-container-high border border-ink-deep/10 text-ink-deep font-label-bold text-label-bold rounded-DEFAULT hover:bg-surface-variant/50 transition-colors">
              <span className="material-symbols-outlined">auto_awesome</span>
              Generate Variants
            </button>
          </div>
          
          {/* Attributes Configuration Card */}
          <div className="bg-surface-container-lowest p-6 rounded-lg border border-ink-deep/10">
            <h3 className="font-headline-md text-headline-md text-ink-deep mb-6">Variant Attributes</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Color Options */}
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep mb-3">Color</label>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-light border border-ink-deep/10 rounded-DEFAULT">
                    <div className="w-4 h-4 rounded-full bg-[#1A1A1A]"></div>
                    <span className="font-body-md text-sm">Obsidian</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors ml-1"><span className="material-symbols-outlined text-[16px]">close</span></button>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-light border border-ink-deep/10 rounded-DEFAULT">
                    <div className="w-4 h-4 rounded-full bg-[#F5F5DC]"></div>
                    <span className="font-body-md text-sm">Clinical Cream</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors ml-1"><span className="material-symbols-outlined text-[16px]">close</span></button>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-light border border-ink-deep/10 rounded-DEFAULT">
                    <div className="w-4 h-4 rounded-full bg-[#340A0A]"></div>
                    <span className="font-body-md text-sm">Deep Burgundy</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors ml-1"><span className="material-symbols-outlined text-[16px]">close</span></button>
                  </div>
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-dashed border-ink-deep/30 text-ink-deep rounded-DEFAULT hover:bg-neutral-light transition-colors font-label-bold text-xs">
                    <span className="material-symbols-outlined text-[16px]">add</span> Add Value
                  </button>
                </div>
              </div>
              {/* Size Options */}
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep mb-3">Size</label>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-light border border-ink-deep/10 rounded-DEFAULT">
                    <span className="font-body-md text-sm">S</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors ml-1"><span className="material-symbols-outlined text-[16px]">close</span></button>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-light border border-ink-deep/10 rounded-DEFAULT">
                    <span className="font-body-md text-sm">M</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors ml-1"><span className="material-symbols-outlined text-[16px]">close</span></button>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-light border border-ink-deep/10 rounded-DEFAULT">
                    <span className="font-body-md text-sm">L</span>
                    <button className="text-on-surface-variant hover:text-error transition-colors ml-1"><span className="material-symbols-outlined text-[16px]">close</span></button>
                  </div>
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-dashed border-ink-deep/30 text-ink-deep rounded-DEFAULT hover:bg-neutral-light transition-colors font-label-bold text-xs">
                    <span className="material-symbols-outlined text-[16px]">add</span> Add Value
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* High-Density Data Table */}
          <div className="bg-surface-container-lowest border border-ink-deep/10 rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 border-b border-ink-deep/10 bg-neutral-light/50 flex justify-between items-center">
              <h4 className="font-label-bold text-label-bold text-ink-deep">9 Variants Generated</h4>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
                  <input className="pl-9 pr-4 py-1.5 text-sm bg-surface-container-lowest border border-ink-deep/10 rounded-DEFAULT focus:outline-none focus:border-accent-gold transition-colors w-48" placeholder="Search SKU..." type="text"/>
                </div>
                <button className="text-on-surface-variant hover:text-ink-deep p-1"><span className="material-symbols-outlined">filter_list</span></button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-light/30 border-b border-ink-deep/10 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    <th className="px-4 py-3 w-12"><input className="accent-ink-deep" type="checkbox"/></th>
                    <th className="px-4 py-3 font-medium">Variant</th>
                    <th className="px-4 py-3 font-medium">SKU</th>
                    <th className="px-4 py-3 font-medium text-right">Price Override (₦)</th>
                    <th className="px-4 py-3 font-medium text-right">Available</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 w-12"></th>
                  </tr>
                </thead>
                <tbody className="font-body-md text-sm divide-y divide-ink-deep/5">
                  {/* Row 1 */}
                  <tr className="hover:bg-neutral-light/50 transition-colors group">
                    <td className="px-4 py-4"><input className="accent-ink-deep" type="checkbox"/></td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-DEFAULT bg-[#1A1A1A] border border-ink-deep/10"></div>
                        <div>
                          <span className="block font-medium text-ink-deep">Obsidian / S</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <input className="w-full bg-transparent border-b border-transparent focus:border-accent-gold focus:outline-none py-1 font-mono text-xs text-on-surface" type="text" defaultValue="MED-OBS-S-001"/>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <input className="w-20 text-right bg-transparent border-b border-ink-deep/10 focus:border-accent-gold focus:outline-none py-1 text-ink-deep" placeholder="--" type="text"/>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <input className="w-20 text-right bg-transparent border-b border-transparent focus:border-accent-gold focus:outline-none py-1 text-ink-deep" type="number" defaultValue="145"/>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-surface-container-high text-ink-deep uppercase">Active</span>
                    </td>
                    <td className="px-4 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-on-surface-variant hover:text-ink-deep"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-neutral-light/50 transition-colors group">
                    <td className="px-4 py-4"><input className="accent-ink-deep" type="checkbox"/></td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-DEFAULT bg-[#1A1A1A] border border-ink-deep/10"></div>
                        <div>
                          <span className="block font-medium text-ink-deep">Obsidian / M</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <input className="w-full bg-transparent border-b border-transparent focus:border-accent-gold focus:outline-none py-1 font-mono text-xs text-on-surface" type="text" defaultValue="MED-OBS-M-002"/>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <input className="w-20 text-right bg-transparent border-b border-ink-deep/10 focus:border-accent-gold focus:outline-none py-1 text-ink-deep" placeholder="--" type="text"/>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <input className="w-20 text-right bg-transparent border-b border-transparent focus:border-accent-gold focus:outline-none py-1 text-ink-deep" type="number" defaultValue="320"/>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-surface-container-high text-ink-deep uppercase">Active</span>
                    </td>
                    <td className="px-4 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-on-surface-variant hover:text-ink-deep"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
                    </td>
                  </tr>
                  {/* Row 3 (Price Override Example) */}
                  <tr className="hover:bg-neutral-light/50 transition-colors group bg-surface-cream/30">
                    <td className="px-4 py-4"><input className="accent-ink-deep" type="checkbox"/></td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-DEFAULT bg-[#F5F5DC] border border-ink-deep/10"></div>
                        <div>
                          <span className="block font-medium text-ink-deep">Clinical Cream / S</span>
                          <span className="block text-[10px] text-accent-gold">Special Edition</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <input className="w-full bg-transparent border-b border-transparent focus:border-accent-gold focus:outline-none py-1 font-mono text-xs text-on-surface" type="text" defaultValue="MED-CRM-S-003"/>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <input className="w-20 text-right bg-transparent border-b border-accent-gold focus:outline-none py-1 text-ink-deep font-semibold" type="text" defaultValue="24.00"/>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <input className="w-20 text-right bg-transparent border-b border-transparent focus:border-accent-gold focus:outline-none py-1 text-error font-medium" type="number" defaultValue="12"/>
                      <span className="block text-[10px] text-error mt-1">Low Stock</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-surface-container-high text-ink-deep uppercase">Active</span>
                    </td>
                    <td className="px-4 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-on-surface-variant hover:text-ink-deep"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="hover:bg-neutral-light/50 transition-colors group">
                    <td className="px-4 py-4"><input className="accent-ink-deep" type="checkbox"/></td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-DEFAULT bg-[#340A0A] border border-ink-deep/10"></div>
                        <div>
                          <span className="block font-medium text-ink-deep">Deep Burgundy / L</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <input className="w-full bg-transparent border-b border-transparent focus:border-accent-gold focus:outline-none py-1 font-mono text-xs text-on-surface" type="text" defaultValue="MED-BRG-L-009"/>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <input className="w-20 text-right bg-transparent border-b border-ink-deep/10 focus:border-accent-gold focus:outline-none py-1 text-ink-deep" placeholder="--" type="text"/>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <input className="w-20 text-right bg-transparent border-b border-transparent focus:border-accent-gold focus:outline-none py-1 text-on-surface-variant opacity-50" type="number" defaultValue="0"/>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-surface-variant text-on-surface-variant uppercase">Out of Stock</span>
                    </td>
                    <td className="px-4 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-on-surface-variant hover:text-ink-deep"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination / Footer */}
            <div className="p-4 border-t border-ink-deep/10 flex justify-between items-center text-sm text-on-surface-variant bg-neutral-light/30">
              <span>Showing 1 to 4 of 9 entries</span>
              <div className="flex gap-1">
                <button className="px-2 py-1 border border-ink-deep/10 rounded-DEFAULT hover:bg-neutral-light transition-colors disabled:opacity-50" disabled><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
                <button className="px-2 py-1 border border-ink-deep/10 rounded-DEFAULT hover:bg-neutral-light transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
              </div>
            </div>
          </div>
          
          {/* Bottom Action Bar (Mobile only, mirrors top actions) */}
          <div className="md:hidden sticky bottom-0 bg-surface-bright border-t border-ink-deep/10 p-4 flex gap-4 z-40 mt-8">
            <button className="flex-1 py-3 border border-ink-deep text-ink-deep font-label-bold text-label-bold rounded-DEFAULT hover:bg-neutral-light transition-colors">
              Discard
            </button>
            <button className="flex-1 py-3 bg-ink-deep text-surface-cream font-label-bold text-label-bold rounded-DEFAULT hover:opacity-90 transition-opacity">
              Next: SEO
            </button>
          </div>
          {/* Spacer for mobile bottom bar */}
          <div className="h-20 md:hidden"></div>
        </div>
      </div>
    </main>
  )
}
