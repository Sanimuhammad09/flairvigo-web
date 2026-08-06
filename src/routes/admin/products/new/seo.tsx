import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useProductFormStore } from '../../../../../store/productFormStore'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../../../../lib/api'
import { z } from 'zod'

const productSearchSchema = z.object({
  productId: z.string().optional(),
})

export const Route = createFileRoute('/admin/products/new/seo')({
  validateSearch: productSearchSchema,
  component: AddProductSEO,
})

function AddProductSEO() {
  const { productId } = Route.useSearch()
  const store = useProductFormStore()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const saveMutation = useMutation({
    mutationFn: async () => {
      const data = {
        name: store.name,
        description: store.description,
        basePrice: store.basePrice,
        category: store.category,
        seoTitle: store.seoTitle,
        seoDescription: store.seoDescription,
        seoKeywords: store.seoKeywords,
        isDraft: store.isDraft,
      }
      if (store.id) {
        await api.put(`/admin/products/${store.id}`, data)
      } else {
        await api.post('/admin/products', data)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'products'] })
      store.reset()
      navigate({ to: '/admin/inventory' })
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || 'Failed to save product')
    }
  })

  return (
    <main className="flex-1 flex flex-col min-h-screen bg-surface-cream text-ink-deep font-body-md h-full">
      {/* TopAppBar */}
      <header className="bg-surface-bright dark:bg-background border-b border-ink-deep/5 flex justify-between items-center w-full px-margin-desktop h-20 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <h2 className="font-headline-md text-headline-md font-semibold text-ink-deep hidden md:block">MedLux Apparel</h2>
        </div>
        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full bg-neutral-light border-0 rounded-full py-2 pl-10 pr-4 focus:ring-1 focus:ring-accent-gold font-body-md text-body-md" placeholder="Search..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <button className="text-on-surface-variant hover:text-ink-deep transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:text-ink-deep transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
          <div className="h-8 w-px bg-ink-deep/10 mx-2"></div>
          <Link to="/admin/products/new/variants" search={{ productId }} className="text-on-surface-variant hover:text-ink-deep font-label-bold text-label-bold transition-opacity hover:opacity-80">Back</Link>
          <button 
            onClick={() => saveMutation.mutate()}
            disabled={saveMutation.isPending}
            className="bg-ink-deep text-surface-cream px-6 py-2 rounded font-label-bold text-label-bold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {saveMutation.isPending ? 'Saving...' : 'Save Product'}
          </button>
        </div>
      </header>

      {/* Content Canvas */}
      <div className="flex-1 p-margin-desktop overflow-y-auto">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-on-surface-variant/70 font-label-sm text-label-sm">
          <Link className="hover:text-ink-deep transition-colors" to="/admin/inventory">Inventory</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-ink-deep font-semibold">{store.id ? 'Edit Product' : 'Add New Product'}</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-ink-deep font-semibold">SEO & Logistics</span>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-headline-lg text-headline-lg font-semibold text-ink-deep mb-8">SEO & Logistics Settings</h1>
          
          {/* SEO Card */}
          <div className="bg-surface-container-lowest border border-ink-deep/10 rounded-xl p-8 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-headline-md text-headline-md font-semibold text-ink-deep">Search Engine Listing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Add a title and description to see how this product might appear in a search engine listing.</p>
              </div>
            </div>
            {/* SEO Preview */}
            <div className="mb-8 p-4 bg-neutral-light rounded-lg border border-ink-deep/5">
              <h4 className="text-[#1a0dab] font-body-lg text-body-lg mb-1 truncate">{store.seoTitle || store.name || 'Product Title'} - FlairVigo</h4>
              <div className="text-[#006621] font-body-md text-body-md mb-2 flex items-center gap-1">
                <span>https://flairvigo.com.ng</span>
                <span className="text-on-surface-variant">› products › {store.name ? store.name.toLowerCase().replace(/ /g, '-') : 'product'}</span>
              </div>
              <p className="text-on-surface-variant font-body-md text-body-md line-clamp-2">{store.seoDescription || store.description || 'Product description'}</p>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Page Title</label>
                <input 
                  value={store.seoTitle}
                  onChange={e => store.setField('seoTitle', e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-0 py-2 font-body-md text-body-md text-ink-deep transition-colors" 
                  type="text" 
                  placeholder="SEO Title"
                />
              </div>
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Meta Description</label>
                <textarea 
                  value={store.seoDescription}
                  onChange={e => store.setField('seoDescription', e.target.value)}
                  className="w-full bg-transparent border border-ink-deep/10 rounded focus:ring-1 focus:ring-accent-gold p-3 font-body-md text-body-md text-ink-deep transition-colors" 
                  rows={3} 
                  placeholder="SEO Description"
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Logistics Card */}
          <div className="bg-surface-container-lowest border border-ink-deep/10 rounded-xl p-8 shadow-sm">
            <h3 className="font-headline-md text-headline-md font-semibold text-ink-deep mb-2">Shipping & Fulfillment</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Enter weight and dimension data to accurately calculate shipping rates.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Weight */}
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep mb-4">Weight</label>
                <div className="flex items-center gap-4">
                  <input className="w-32 bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-0 py-2 font-body-md text-body-md text-ink-deep text-center transition-colors" type="number" defaultValue="0.5"/>
                  <select className="bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-2 py-2 font-body-md text-body-md text-ink-deep transition-colors pr-8">
                    <option>lb</option>
                    <option>oz</option>
                    <option>kg</option>
                    <option>g</option>
                  </select>
                </div>
              </div>
              {/* Customs */}
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep mb-4">Customs Information</label>
                <div className="space-y-4">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Country/Region of origin</label>
                    <select className="w-full bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-0 py-2 font-body-md text-body-md text-ink-deep transition-colors">
                      <option>Nigeria</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">HS (Harmonized System) code</label>
                    <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-0 py-2 font-body-md text-body-md text-ink-deep transition-colors" placeholder="Search or enter code" type="text"/>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-ink-deep/10">
              <label className="block font-label-bold text-label-bold text-ink-deep mb-4">Package Dimensions (Optional)</label>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Length</label>
                  <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-0 py-2 font-body-md text-body-md text-ink-deep transition-colors" placeholder="0" type="number"/>
                </div>
                <div className="flex-1">
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Width</label>
                  <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-0 py-2 font-body-md text-body-md text-ink-deep transition-colors" placeholder="0" type="number"/>
                </div>
                <div className="flex-1">
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Height</label>
                  <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-0 py-2 font-body-md text-body-md text-ink-deep transition-colors" placeholder="0" type="number"/>
                </div>
                <div className="w-24">
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1">Unit</label>
                  <select className="w-full bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-0 py-2 font-body-md text-body-md text-ink-deep transition-colors">
                    <option>in</option>
                    <option>cm</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
