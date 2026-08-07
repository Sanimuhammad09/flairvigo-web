import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useProductFormStore, ProductVariant } from '../../../../store/productFormStore'

export const Route = createFileRoute('/admin/products/new/variants')({
  component: AddProductVariants,
})

function AddProductVariants() {
  const { productId } = Route.useSearch() as { productId?: string }
  const store = useProductFormStore()
  
  const [colors, setColors] = useState<string[]>([])
  const [sizes, setSizes] = useState<string[]>([])
  const [newColor, setNewColor] = useState('')
  const [newSize, setNewSize] = useState('')

  // Initialize colors and sizes from existing variants
  useEffect(() => {
    if (store.variants && store.variants.length > 0) {
      const existingColors = new Set(store.variants.map(v => v.color).filter(Boolean))
      const existingSizes = new Set(store.variants.map(v => v.size).filter(Boolean))
      setColors(Array.from(existingColors))
      setSizes(Array.from(existingSizes))
    }
  }, [store.variants])

  const handleAddColor = () => {
    if (newColor.trim() && !colors.includes(newColor.trim())) {
      setColors([...colors, newColor.trim()])
      setNewColor('')
    }
  }

  const handleRemoveColor = (color: string) => {
    setColors(colors.filter(c => c !== color))
  }

  const handleAddSize = () => {
    if (newSize.trim() && !sizes.includes(newSize.trim())) {
      setSizes([...sizes, newSize.trim()])
      setNewSize('')
    }
  }

  const handleRemoveSize = (size: string) => {
    setSizes(sizes.filter(s => s !== size))
  }

  const generateVariants = () => {
    const newVariants: ProductVariant[] = []
    
    colors.forEach(color => {
      sizes.forEach(size => {
        // Check if variant already exists to preserve data
        const existing = store.variants.find(v => v.color === color && v.size === size)
        if (existing) {
          newVariants.push(existing)
        } else {
          newVariants.push({
            color,
            size,
            sku: `${store.name.substring(0, 3).toUpperCase()}-${color.substring(0, 3).toUpperCase()}-${size.toUpperCase()}`,
            priceAdjustment: 0,
            inventory: 0,
          })
        }
      })
    })

    store.setField('variants', newVariants)
  }

  const handleVariantChange = (index: number, field: keyof ProductVariant, value: any) => {
    const updatedVariants = [...store.variants]
    updatedVariants[index] = { ...updatedVariants[index], [field]: value }
    store.setField('variants', updatedVariants)
  }

  const handleRemoveVariant = (index: number) => {
    const updatedVariants = store.variants.filter((_, i) => i !== index)
    store.setField('variants', updatedVariants)
  }

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
            <Link to="/admin/products/new" search={{ productId }} className="px-6 py-2 border border-ink-deep text-ink-deep font-label-bold text-label-bold rounded-DEFAULT hover:bg-neutral-light transition-colors">
              Back
            </Link>
            <Link to="/admin/products/new/seo" search={{ productId }} className="px-6 py-2 bg-ink-deep text-surface-cream font-label-bold text-label-bold rounded-DEFAULT hover:opacity-90 transition-opacity">
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
            <button 
              onClick={generateVariants}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-surface-container-high border border-ink-deep/10 text-ink-deep font-label-bold text-label-bold rounded-DEFAULT hover:bg-surface-variant/50 transition-colors"
            >
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
                <div className="flex flex-wrap gap-3 items-center">
                  {colors.map(color => (
                    <div key={color} className="flex items-center gap-2 px-3 py-1.5 bg-neutral-light border border-ink-deep/10 rounded-DEFAULT">
                      <span className="font-body-md text-sm">{color}</span>
                      <button onClick={() => handleRemoveColor(color)} className="text-on-surface-variant hover:text-error transition-colors ml-1">
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center gap-1 border border-dashed border-ink-deep/30 rounded-DEFAULT px-2">
                    <input 
                      type="text" 
                      value={newColor}
                      onChange={e => setNewColor(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleAddColor()}
                      placeholder="Add Color"
                      className="bg-transparent border-none text-sm focus:ring-0 w-24"
                    />
                    <button onClick={handleAddColor} className="text-ink-deep hover:text-accent-gold transition-colors p-1">
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Size Options */}
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep mb-3">Size</label>
                <div className="flex flex-wrap gap-3 items-center">
                  {sizes.map(size => (
                    <div key={size} className="flex items-center gap-2 px-3 py-1.5 bg-neutral-light border border-ink-deep/10 rounded-DEFAULT">
                      <span className="font-body-md text-sm">{size}</span>
                      <button onClick={() => handleRemoveSize(size)} className="text-on-surface-variant hover:text-error transition-colors ml-1">
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center gap-1 border border-dashed border-ink-deep/30 rounded-DEFAULT px-2">
                    <input 
                      type="text" 
                      value={newSize}
                      onChange={e => setNewSize(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleAddSize()}
                      placeholder="Add Size"
                      className="bg-transparent border-none text-sm focus:ring-0 w-24"
                    />
                    <button onClick={handleAddSize} className="text-ink-deep hover:text-accent-gold transition-colors p-1">
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* High-Density Data Table */}
          <div className="bg-surface-container-lowest border border-ink-deep/10 rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 border-b border-ink-deep/10 bg-neutral-light/50 flex justify-between items-center">
              <h4 className="font-label-bold text-label-bold text-ink-deep">{store.variants.length} Variants</h4>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
                  <input className="pl-9 pr-4 py-1.5 text-sm bg-surface-container-lowest border border-ink-deep/10 rounded-DEFAULT focus:outline-none focus:border-accent-gold transition-colors w-48" placeholder="Search SKU..." type="text"/>
                </div>
              </div>
            </div>
            
            {store.variants.length === 0 ? (
              <div className="p-8 text-center text-on-surface-variant">
                No variants generated yet. Add colors and sizes, then click "Generate Variants".
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-light/30 border-b border-ink-deep/10 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      <th className="px-4 py-3 font-medium">Variant</th>
                      <th className="px-4 py-3 font-medium">SKU</th>
                      <th className="px-4 py-3 font-medium text-right">Price Adjust (₦)</th>
                      <th className="px-4 py-3 font-medium text-right">Available</th>
                      <th className="px-4 py-3 w-12"></th>
                    </tr>
                  </thead>
                  <tbody className="font-body-md text-sm divide-y divide-ink-deep/5">
                    {store.variants.map((variant, index) => (
                      <tr key={index} className="hover:bg-neutral-light/50 transition-colors group">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div>
                              <span className="block font-medium text-ink-deep">{variant.color} / {variant.size}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <input 
                            className="w-full bg-transparent border-b border-transparent focus:border-accent-gold focus:outline-none py-1 font-mono text-xs text-on-surface" 
                            type="text" 
                            value={variant.sku || ''}
                            onChange={(e) => handleVariantChange(index, 'sku', e.target.value)}
                          />
                        </td>
                        <td className="px-4 py-4 text-right">
                          <input 
                            className="w-24 text-right bg-transparent border-b border-ink-deep/10 focus:border-accent-gold focus:outline-none py-1 text-ink-deep" 
                            type="number" 
                            value={variant.priceAdjustment || 0}
                            onChange={(e) => handleVariantChange(index, 'priceAdjustment', parseFloat(e.target.value) || 0)}
                          />
                        </td>
                        <td className="px-4 py-4 text-right">
                          <input 
                            className="w-20 text-right bg-transparent border-b border-transparent focus:border-accent-gold focus:outline-none py-1 text-ink-deep" 
                            type="number" 
                            value={variant.inventory || 0}
                            onChange={(e) => handleVariantChange(index, 'inventory', parseInt(e.target.value, 10) || 0)}
                          />
                        </td>
                        <td className="px-4 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => handleRemoveVariant(index)} className="text-on-surface-variant hover:text-error transition-colors p-1">
                            <span className="material-symbols-outlined text-[20px]">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          
          {/* Bottom Action Bar (Mobile only, mirrors top actions) */}
          <div className="md:hidden sticky bottom-0 bg-surface-bright border-t border-ink-deep/10 p-4 flex gap-4 z-40 mt-8">
            <Link to="/admin/products/new" search={{ productId }} className="flex-1 py-3 text-center border border-ink-deep text-ink-deep font-label-bold text-label-bold rounded-DEFAULT hover:bg-neutral-light transition-colors">
              Back
            </Link>
            <Link to="/admin/products/new/seo" search={{ productId }} className="flex-1 py-3 text-center bg-ink-deep text-surface-cream font-label-bold text-label-bold rounded-DEFAULT hover:opacity-90 transition-opacity">
              Next: SEO
            </Link>
          </div>
          {/* Spacer for mobile bottom bar */}
          <div className="h-20 md:hidden"></div>
        </div>
      </div>
    </main>
  )
}
