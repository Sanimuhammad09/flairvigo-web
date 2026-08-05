import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/inventory')({
  component: AdminInventory,
})

function AdminInventory() {
  return (
    <main className="flex-1 flex flex-col min-w-0 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      {/* Header Actions */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep mb-2">Inventory</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage your product catalog, stock levels, and pricing.</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full pl-10 pr-4 py-3 bg-transparent border-b border-ink-deep/10 focus:border-accent-gold focus:outline-none font-body-md text-body-md transition-colors placeholder:text-on-surface-variant" placeholder="Search products, SKUs..." type="text" />
          </div>
          <button className="bg-ink-deep text-surface-cream px-8 py-3 font-label-bold text-label-bold rounded hover:bg-ink-deep/90 transition-colors whitespace-nowrap flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Add New Product
          </button>
        </div>
      </header>

      {/* Alerts Section */}
      <section className="mb-10 flex gap-4 overflow-x-auto pb-4 snap-x">
        <div className="bg-white/70 backdrop-blur-md border border-ink-deep/10 p-6 min-w-[300px] flex-1 rounded-lg border-l-4 border-l-error snap-start">
          <div className="flex justify-between items-start mb-2">
            <span className="material-symbols-outlined text-error">warning</span>
            <span className="font-label-sm text-label-sm text-error bg-error/10 px-2 py-1 rounded">Low Stock</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-ink-deep mb-1">Vigo Scrub Top</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">Only 3 units left in Medium / Navy.</p>
          <a className="font-label-bold text-label-bold text-accent-gold hover:underline" href="#">Reorder Now</a>
        </div>
        <div className="bg-white/70 backdrop-blur-md border border-ink-deep/10 p-6 min-w-[300px] flex-1 rounded-lg border-l-4 border-l-accent-gold snap-start">
          <div className="flex justify-between items-start mb-2">
            <span className="material-symbols-outlined text-accent-gold">trending_up</span>
            <span className="font-label-sm text-label-sm text-accent-gold bg-accent-gold/10 px-2 py-1 rounded">Trending</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-ink-deep mb-1">Gold Link Necklace</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">Sales up 24% this week. Consider promoting.</p>
          <a className="font-label-bold text-label-bold text-ink-deep hover:underline" href="#">View Insights</a>
        </div>
        <div className="bg-white/70 backdrop-blur-md border border-ink-deep/10 p-6 min-w-[300px] flex-1 rounded-lg border-l-4 border-l-surface-tint snap-start">
          <div className="flex justify-between items-start mb-2">
            <span className="material-symbols-outlined text-surface-tint">local_shipping</span>
            <span className="font-label-sm text-label-sm text-surface-tint bg-surface-tint/10 px-2 py-1 rounded">Shipment Arriving</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-ink-deep mb-1">Tailored Scrub Pants</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">Restock of 150 units arriving tomorrow.</p>
          <a className="font-label-bold text-label-bold text-ink-deep hover:underline" href="#">Track Order</a>
        </div>
      </section>

      {/* Product Table */}
      <section className="bg-white/70 backdrop-blur-md border border-ink-deep/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-ink-deep/10 bg-neutral-light/50">
                <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant">Product</th>
                <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant">SKU</th>
                <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant">Category</th>
                <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant">Stock</th>
                <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant">Price</th>
                <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md divide-y divide-ink-deep/5">
              {/* Item 1 */}
              <tr className="hover:bg-neutral-light/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-16 rounded bg-neutral-light overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" data-alt="A modern, high-quality photograph of a sleek navy blue medical scrub top, flat lay on a cream background, minimalist and premium aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp5anKEeEIIA7CQmoNHmPZC70QDMgCFSu9ATK2G4MO992RDQrNTMIvH65wozdtYPDdQuJSezPk7mMG4u-iBPFI8sOpbCuIdkyji0xYSjQJSr8gC_4btIQnfRsUi4qLsx-RY-hf57xY9ox48_JeJArA_S6TUU_xPijyQyDrnjcBRqNsbhKuYewBLgtuspWz8s3-3lIdiLf_vzf3nteRQH_TfQj7fP7kOB8IpeMVnPxVE2dKMmWlpqEJLg" />
                    </div>
                    <div>
                      <p className="font-headline-md font-semibold text-ink-deep text-lg">Vigo Classic Scrub Top</p>
                      <p className="text-on-surface-variant text-sm">Navy Blue</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-on-surface-variant">VIG-TOP-NAV-M</td>
                <td className="py-4 px-6 text-on-surface-variant">Apparel</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-error/10 text-error font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                    3 Left
                  </span>
                </td>
                <td className="py-4 px-6 text-ink-deep font-semibold">₦58.00</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-on-surface-variant hover:text-accent-gold transition-colors p-2">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              {/* Item 2 */}
              <tr className="hover:bg-neutral-light/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-16 rounded bg-neutral-light overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" data-alt="A modern, high-quality photograph of tailored black medical scrub pants, flat lay on a neutral light background, highlighting the fabric texture and clean lines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIYUrmdNr8QhQb0f1CiwMC4AcvSnplMT_hC3sy0daBJ-XTuSF0fs_iUjg08jGVS-ipqpg5pYJkyqlY-GtCYNhHUV3oD4BguKTxJzWmcjFmE6d_hOuajMhDobTqlx5_U5Fx8g6nLlSSePtE2na5TbXCTkgdy5JFnTFmyG7cAJlifKNmIOTMAL0DqqeC4mvm_UGd8f0if-i3eufBI3lDobFLxOYEt7sjd6WHNq42jyJRSkEzkf-qw41Dig" />
                    </div>
                    <div>
                      <p className="font-headline-md font-semibold text-ink-deep text-lg">Tailored Cargo Pants</p>
                      <p className="text-on-surface-variant text-sm">Onyx Black</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-on-surface-variant">VIG-PNT-BLK-L</td>
                <td className="py-4 px-6 text-on-surface-variant">Apparel</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-surface-tint/10 text-surface-tint font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-surface-tint"></span>
                    142 In Stock
                  </span>
                </td>
                <td className="py-4 px-6 text-ink-deep font-semibold">₦68.00</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-on-surface-variant hover:text-accent-gold transition-colors p-2">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
              {/* Item 3 */}
              <tr className="hover:bg-neutral-light/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-16 rounded bg-neutral-light overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" data-alt="A close-up, high-end editorial photo of a minimalist gold pendant necklace resting on a textured cream surface, soft warm lighting, luxurious feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC88ecPBumpeOCqx4f5TE4EMON367c8mJzYayNHEBKcQnFJXG36n6Grmkj6wrA6C9YKTN4UhU30O_XJYyVRpeEdECISJiWTD90kfPdY0wOWDm5IeY8K9aUsNQGxjZggZdm5VZgi1oCyLZp6t8BVnT7jVjK9CPdESo0sjCkomZPzjCYPCPj0JkHNW3Y5r3DUaHjib1kuio8sUP-eOI6beft19DGQfzIkPgQWrFyNZrWGKoBXShrhzaruyw" />
                    </div>
                    <div>
                      <p className="font-headline-md font-semibold text-ink-deep text-lg">Minimalist Drop Pendant</p>
                      <p className="text-on-surface-variant text-sm">14k Gold Fill</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-on-surface-variant">FLR-JWL-PND-G</td>
                <td className="py-4 px-6 text-on-surface-variant">Jewelry</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-surface-tint/10 text-surface-tint font-label-sm text-label-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-surface-tint"></span>
                    24 In Stock
                  </span>
                </td>
                <td className="py-4 px-6 text-ink-deep font-semibold">₦120.00</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-on-surface-variant hover:text-accent-gold transition-colors p-2">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-ink-deep/10 flex items-center justify-between">
          <p className="font-body-md text-sm text-on-surface-variant">Showing 1 to 3 of 45 entries</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-ink-deep/10 text-on-surface-variant hover:border-accent-gold hover:text-accent-gold transition-colors disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-ink-deep text-surface-cream font-label-bold text-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-ink-deep/10 text-on-surface-variant hover:border-accent-gold hover:text-accent-gold transition-colors font-label-bold text-sm">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-ink-deep/10 text-on-surface-variant hover:border-accent-gold hover:text-accent-gold transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
