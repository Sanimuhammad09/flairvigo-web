import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/api'
import { useState } from 'react'

export const Route = createFileRoute('/admin/inventory')({
  component: AdminInventory,
})

function AdminInventory() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
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

  // State for Modals
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  // Mutations
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/admin/products/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'products'] })
      setIsDeleteModalOpen(false)
      setSelectedProduct(null)
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || 'Failed to delete product. It may have existing orders.')
    }
  })

  const handleEditClick = (product: any) => {
    navigate({ to: '/admin/products/new', search: { productId: product.id } })
  }

  const handleDeleteClick = (product: any) => {
    setSelectedProduct(product)
    setIsDeleteModalOpen(true)
  }

  return (
    <main className="flex-1 flex flex-col min-w-0 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-8 md:py-12 relative">
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

      {/* Product Table */}
      <section className="bg-white/70 backdrop-blur-md border border-ink-deep/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto min-h-[400px]">
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
                  const totalStock = product.variants?.reduce((sum: number, v: any) => sum + (v.stockQuantity || v.inventory || 0), 0) || 0;
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
                      <td className="py-4 px-6 text-ink-deep font-semibold">₦{(product.basePrice || product.price || 0).toLocaleString()}</td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button onClick={() => handleEditClick(product)} className="text-ink-deep hover:text-accent-gold transition-colors font-label-bold uppercase text-xs tracking-widest border-b border-ink-deep hover:border-accent-gold">
                            Edit
                          </button>
                          <button onClick={() => handleDeleteClick(product)} className="text-error hover:text-red-700 transition-colors font-label-bold uppercase text-xs tracking-widest border-b border-error hover:border-red-700">
                            Delete
                          </button>
                        </div>
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
      </section>

      {/* Delete Modal */}
      {isDeleteModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-surface-cream rounded-xl shadow-2xl p-8 max-w-md w-full text-center">
            <span className="material-symbols-outlined text-6xl text-error mb-4">warning</span>
            <h3 className="font-headline-lg text-2xl text-ink-deep mb-2">Delete Product?</h3>
            <p className="font-body-md text-on-surface-variant mb-8">
              Are you sure you want to delete <strong>{selectedProduct.name}</strong>? This action cannot be undone. 
              <br/><br/>
              <span className="text-xs italic text-error">Note: You cannot delete products that have existing orders associated with them.</span>
            </p>
            <div className="flex justify-center gap-4">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-6 py-3 border border-ink-deep/20 rounded font-label-bold text-ink-deep hover:bg-neutral-light transition-colors">
                Cancel
              </button>
              <button onClick={() => deleteMutation.mutate(selectedProduct.id)} disabled={deleteMutation.isPending} className="px-6 py-3 bg-error text-surface-cream rounded font-label-bold hover:bg-red-700 transition-colors shadow-lg">
                {deleteMutation.isPending ? 'Deleting...' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
