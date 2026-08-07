import { createFileRoute, Link } from '@tanstack/react-router'
import { useProductFormStore } from '../../../../store/productFormStore'
import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../../../lib/api'
import { z } from 'zod'
import { supabase } from '../../../../lib/supabase'
import { useState } from 'react'

const productSearchSchema = z.object({
  productId: z.string().optional(),
})

export const Route = createFileRoute('/admin/products/new/')({
  validateSearch: productSearchSchema,
  component: AddProductBasic,
})

function AddProductBasic() {
  const { productId } = Route.useSearch()
  const { name, description, fabricDetails, careInstructions, collection, images, isFeatured, isBestSeller, setField, setProduct, reset } = useProductFormStore()
  const [isUploading, setIsUploading] = useState(false)

  // Fetch product if editing
  const { data: existingProduct, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      if (!productId) return null
      const res = await api.get(`/products/admin/${productId}`)
      return res.data?.data || res.data
    },
    enabled: !!productId
  })

  // Fetch collections for dropdown
  const { data: collectionsData } = useQuery({
    queryKey: ['collections'],
    queryFn: async () => {
      const res = await api.get('/collections')
      return res.data?.data || res.data || []
    }
  })

  // Initialize store with existing product data
  useEffect(() => {
    if (existingProduct) {
      setProduct(existingProduct)
    } else if (!productId) {
      reset() // Reset form if not editing
    }
  }, [existingProduct, productId, setProduct, reset])

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      alert('Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env')
      return
    }

    try {
      setIsUploading(true)
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `products/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { data } = supabase.storage.from('images').getPublicUrl(filePath)
      
      const newImage = { url: data.publicUrl, isMain: images.length === 0 }
      setField('images', [...images, newImage])
    } catch (error: any) {
      alert(`Error uploading image: ${error.message}`)
    } finally {
      setIsUploading(false)
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    if (newImages.length > 0 && !newImages.some(img => img.isMain)) {
      newImages[0].isMain = true
    }
    setField('images', newImages)
  }

  const setMainImage = (index: number) => {
    const newImages = images.map((img, i) => ({ ...img, isMain: i === index }))
    setField('images', newImages)
  }

  return (
    <main className="flex-1 flex flex-col min-h-screen bg-surface-cream text-ink-deep font-body-md">
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
          <Link to="/admin/inventory" className="text-on-surface-variant hover:text-ink-deep font-label-bold text-label-bold transition-opacity hover:opacity-80">Discard</Link>
          <Link to="/admin/products/new/variants" search={{ productId }} className="bg-ink-deep text-surface-cream px-6 py-2 rounded font-label-bold text-label-bold hover:opacity-90 transition-opacity">Next: Variants</Link>
        </div>
      </header>

      {/* Content Canvas */}
      <div className="flex-1 p-margin-desktop overflow-y-auto">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-on-surface-variant/70 font-label-sm text-label-sm">
          <Link className="hover:text-ink-deep transition-colors" to="/admin/inventory">Inventory</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-ink-deep font-semibold">{productId ? 'Edit Product' : 'Add Product'} - Basic Info</span>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-headline-lg text-headline-lg font-semibold text-ink-deep mb-8">{productId ? 'Edit Product' : 'Basic Info & Media'}</h1>
          
          {isLoading ? (
            <div className="py-12 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ink-deep"></div></div>
          ) : (
            <div className="bg-surface-container-lowest border border-ink-deep/10 rounded-xl p-8 shadow-sm">
              <div className="space-y-6">
                <div>
                  <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Product Title</label>
                  <input 
                    value={name} 
                    onChange={e => setField('name', e.target.value)} 
                    className="w-full bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-0 py-2 font-body-md text-body-md text-ink-deep transition-colors" 
                    type="text" 
                    placeholder="e.g. Premium Medical Scrubs Top"
                  />
                </div>
                <div>
                  <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Description</label>
                  <textarea 
                    value={description}
                    onChange={e => setField('description', e.target.value)}
                    className="w-full bg-transparent border border-ink-deep/10 rounded focus:ring-1 focus:ring-accent-gold p-3 font-body-md text-body-md text-ink-deep transition-colors" 
                    rows={5} 
                    placeholder="Product description..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Fabric Details</label>
                    <textarea 
                      value={fabricDetails}
                      onChange={e => setField('fabricDetails', e.target.value)}
                      className="w-full bg-transparent border border-ink-deep/10 rounded focus:ring-1 focus:ring-accent-gold p-3 font-body-md text-body-md text-ink-deep transition-colors" 
                      rows={3} 
                      placeholder="e.g. 72% Polyester, 21% Rayon, 7% Spandex..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Care Instructions</label>
                    <textarea 
                      value={careInstructions}
                      onChange={e => setField('careInstructions', e.target.value)}
                      className="w-full bg-transparent border border-ink-deep/10 rounded focus:ring-1 focus:ring-accent-gold p-3 font-body-md text-body-md text-ink-deep transition-colors" 
                      rows={3} 
                      placeholder="e.g. Machine wash cold with like colors..."
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Collection</label>
                  <select 
                    value={collection}
                    onChange={e => setField('collection', e.target.value)}
                    className="w-full bg-transparent border border-ink-deep/10 rounded focus:ring-1 focus:ring-accent-gold p-3 font-body-md text-body-md text-ink-deep transition-colors"
                  >
                    <option value="">Select a collection...</option>
                    {collectionsData?.map((col: any) => (
                      <option key={col.id} value={col.id}>{col.name}</option>
                    ))}
                  </select>
                </div>
              
                <div>
                  <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Media</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {images.map((img, index) => (
                      <div key={index} className="relative group aspect-square rounded-xl overflow-hidden border border-ink-deep/10">
                        <img src={img.url} alt="Product upload" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center gap-2">
                          {!img.isMain && (
                            <button onClick={() => setMainImage(index)} className="bg-white/20 hover:bg-white/40 text-white px-3 py-1 rounded text-xs font-bold">
                              Set Main
                            </button>
                          )}
                          <button onClick={() => removeImage(index)} className="bg-red-500/80 hover:bg-red-500 text-white px-3 py-1 rounded text-xs font-bold">
                            Remove
                          </button>
                        </div>
                        {img.isMain && (
                          <div className="absolute top-2 left-2 bg-accent-gold text-white text-[10px] font-bold px-2 py-0.5 rounded">
                            MAIN
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <label className="border-2 border-dashed border-ink-deep/20 rounded-xl p-12 text-center hover:bg-neutral-light transition-colors cursor-pointer block relative">
                     <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">add_photo_alternate</span>
                     <p className="font-body-md text-ink-deep font-medium">
                       {isUploading ? 'Uploading...' : 'Add files or click to upload'}
                     </p>
                     <input type="file" accept="image/*" onChange={handleFileUpload} disabled={isUploading} className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed w-full h-full" />
                  </label>
                </div>
                
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={isFeatured} 
                      onChange={e => setField('isFeatured', e.target.checked)} 
                      className="w-5 h-5 rounded border-ink-deep/20 text-ink-deep focus:ring-accent-gold cursor-pointer"
                    />
                    <span className="font-label-bold text-ink-deep">Mark as Featured (Shows on Homepage)</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={isBestSeller} 
                      onChange={e => setField('isBestSeller', e.target.checked)} 
                      className="w-5 h-5 rounded border-ink-deep/20 text-ink-deep focus:ring-accent-gold cursor-pointer"
                    />
                    <span className="font-label-bold text-ink-deep">Mark as Best Seller (Shows on Homepage)</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
