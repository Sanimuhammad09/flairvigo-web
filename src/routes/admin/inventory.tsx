import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../lib/api'

export const Route = createFileRoute('/admin/inventory')({
  component: AdminInventory,
})

function AdminInventory() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['admin', 'products'],
    queryFn: async () => {
      try {
        const res = await api.get('/admin/products')
        return res.data.data || res.data || []
      } catch (err) {
        return []
      }
    }
  })

  // Since we fetch products, we can compute total inventory across variants if available.
  // We'll flatten variants if possible, or just show the top-level product stock.

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
          <Link to="/admin/products/new" className="bg-ink-deep text-surface-cream px-8 py-3 font-label-bold text-label-bold rounded hover:bg-ink-deep/90 transition-colors whitespace-nowrap flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Add New Product
          </Link>
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
                <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant">Category</th>
                <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant">Stock (Total)</th>
                <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant">Price</th>
                <th className="py-4 px-6 font-label-bold text-label-bold text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md divide-y divide-ink-deep/5">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-on-surface-variant">Loading inventory...</td>
                </tr>
              ) : products?.length > 0 ? (
                products.map((product: any) => {
                  const totalStock = product.variants?.reduce((sum: number, v: any) => sum + (v.stockQuantity || 0), 0) || 0;
                  const isLowStock = totalStock > 0 && totalStock <= 5;
                  const isOutOfStock = totalStock === 0;

                  return (
                    <tr key={product.id} className="hover:bg-neutral-light/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-16 rounded bg-neutral-light overflow-hidden shrink-0">
                            {product.images?.[0]?.url ? (
                              <img className="w-full h-full object-cover" src={product.images[0].url} alt={product.name} />
                            ) : (
                              <div className="w-full h-full bg-ink-deep/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-on-surface-variant">image</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-headline-md font-semibold text-ink-deep text-lg">{product.name}</p>
                            <p className="text-on-surface-variant text-sm line-clamp-1 max-w-[200px]">{product.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-on-surface-variant">{product.category?.name || 'Uncategorized'}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full font-label-sm text-label-sm ${
                          isOutOfStock ? 'bg-error/10 text-error' :
                          isLowStock ? 'bg-yellow-100 text-yellow-800' :
                          'bg-surface-tint/10 text-surface-tint'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            isOutOfStock ? 'bg-error' :
                            isLowStock ? 'bg-yellow-600' :
                            'bg-surface-tint'
                          }`}></span>
                          {totalStock} {totalStock === 1 ? 'Unit' : 'Units'}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-ink-deep font-semibold">₦{product.price?.toLocaleString()}</td>
                      <td className="py-4 px-6 text-right">
                        <button className="text-on-surface-variant hover:text-accent-gold transition-colors p-2">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-on-surface-variant">No products in inventory.</td>
                </tr>
              )}
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
