import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { api } from '../../lib/api'
import { useCartStore } from '../../store/cart'

export const Route = createFileRoute('/_store/product/$id')({
  component: ProductPage,
})

function ProductPage() {
  const { id } = Route.useParams()
  const addItem = useCartStore((state) => state.addItem)
  
  const [activeImage, setActiveImage] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [openAccordion, setOpenAccordion] = useState<string | null>('description')

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const res = await api.get(`/products/${id}`)
      return res.data.data || res.data // handle potential nesting
    }
  })

  // Initialize selected color and active image once product is loaded
  useEffect(() => {
    if (product) {
      if (product.images?.length > 0 && !activeImage) {
        setActiveImage(product.images[0].url)
      }
      if (product.variants?.length > 0 && !selectedColor) {
        const uniqueColors = Array.from(new Set(product.variants.map((v: any) => v.color)))
        setSelectedColor(uniqueColors[0] as string)
      }
    }
  }, [product, activeImage, selectedColor])

  const waitlistMutation = useMutation({
    mutationFn: async (email: string) => {
      await api.post('/waitlist/join', { productId: product?.id, email })
    },
    onSuccess: () => {
      alert("You've been added to the waitlist!")
      setWaitlistEmail("")
    }
  })

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading product...</div>
  }

  if (isError || !product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found.</div>
  }

  // Derive variants for color/size selectors
  const allVariants = product.variants || []
  
  // Extract unique colors based on variants
  const uniqueColorsMap = new Map()
  allVariants.forEach((v: any) => {
    if (!uniqueColorsMap.has(v.color)) {
      uniqueColorsMap.set(v.color, v.colorHex || '#111111')
    }
  })
  const colors = Array.from(uniqueColorsMap.entries()).map(([color, hex]) => ({ name: color, hex }))

  // Extract unique sizes for the currently selected color
  const variantsForColor = allVariants.filter((v: any) => v.color === selectedColor)
  
  // Default to first available size if current one is not valid for this color
  if (variantsForColor.length > 0 && !variantsForColor.find((v: any) => v.size === selectedSize)) {
    // try to find first in stock
    const inStock = variantsForColor.find((v: any) => v.inventory > 0)
    setSelectedSize((inStock || variantsForColor[0]).size)
  }
  
  // Get the specifically selected variant
  const selectedVariant = variantsForColor.find((v: any) => v.size === selectedSize) || variantsForColor[0]
  
  // Override price if variant has price offset
  const currentPrice = product.basePrice + (selectedVariant?.priceOffset || 0)

  // Determine if out of stock
  const isOutOfStock = selectedVariant ? selectedVariant.inventory === 0 : true

  const handleAddToCart = () => {
    if (!selectedVariant || isOutOfStock) return
    
    addItem({
      id: selectedVariant.id || selectedVariant.sku,
      productId: product.id,
      variantId: selectedVariant.id || selectedVariant.sku,
      name: product.name,
      slug: product.slug,
      price: currentPrice,
      quantity: 1,
      color: selectedVariant.color,
      size: selectedVariant.size,
      image: product.images?.[0]?.url,
      maxInventory: selectedVariant.inventory
    })
  }

  const toggleAccordion = (accordionId: string) => {
    setOpenAccordion(prev => prev === accordionId ? null : accordionId)
  }

  // List of possible sizes to order them correctly
  const sizeOrder = ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']
  const availableSizes = variantsForColor.sort((a: any, b: any) => {
    return sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size)
  })

  return (
    <div className="bg-surface text-ink-deep font-body-md selection:bg-accent-gold/20">
      {/* Main Product Section */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 pb-section-gap-md grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Image Gallery (Left Side) */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 h-[60vh] md:h-[80vh]">
          {/* Thumbnails (Desktop) */}
          <div className="hidden md:flex flex-col gap-4 w-24 overflow-y-auto hide-scrollbar">
            {product.images?.map((img: any, idx: number) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(img.url)}
                className={`w-full aspect-[3/4] border transition-opacity ${activeImage === img.url ? 'border-accent-gold opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                <img className="w-full h-full object-cover" alt={`Thumb ${idx}`} src={img.url} />
              </button>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1 relative bg-neutral-light h-full">
            <img className="w-full h-full object-cover object-center" alt={product.name} src={activeImage || 'https://via.placeholder.com/800x1000'} />
            {isOutOfStock && (
              <div className="absolute top-4 left-4 bg-red-100 text-red-800 font-label-bold px-3 py-1 text-sm rounded">
                Out of Stock
              </div>
            )}
          </div>
        </div>
        
        {/* Product Details (Right Side) */}
        <div className="lg:col-span-5 flex flex-col pt-4 md:pt-0 lg:pl-8">
          {/* Breadcrumb */}
          <nav className="flex text-label-sm text-surface-variant font-label-sm uppercase tracking-widest mb-4">
            <Link className="hover:text-ink-deep" to="/">Store</Link>
            <span className="mx-2">/</span>
            <span className="text-ink-deep">{product.name}</span>
          </nav>
          
          {/* Title & Price */}
          <div className="mb-6 flex justify-between items-start">
            <div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex text-accent-gold text-sm">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                </div>
                <span className="text-label-sm text-surface-variant underline cursor-pointer">(1,248 Reviews)</span>
              </div>
            </div>
            <div className="font-headline-md text-headline-md text-ink-deep">
              ₦{currentPrice.toLocaleString()}
            </div>
          </div>
          
          {/* Value Props Icons */}
          <div className="flex space-x-6 mb-8 text-center">
            <div className="flex flex-col items-center group cursor-help">
              <span className="material-symbols-outlined text-accent-gold mb-1 text-3xl group-hover:-translate-y-1 transition-transform">water_drop</span>
              <span className="font-label-sm text-[10px] uppercase tracking-wider text-surface-variant">Moisture Wicking</span>
            </div>
            <div className="flex flex-col items-center group cursor-help">
              <span className="material-symbols-outlined text-accent-gold mb-1 text-3xl group-hover:-translate-y-1 transition-transform">compress</span>
              <span className="font-label-sm text-[10px] uppercase tracking-wider text-surface-variant">4-Way Stretch</span>
            </div>
            <div className="flex flex-col items-center group cursor-help">
              <span className="material-symbols-outlined text-accent-gold mb-1 text-3xl group-hover:-translate-y-1 transition-transform">iron</span>
              <span className="font-label-sm text-[10px] uppercase tracking-wider text-surface-variant">Anti-Wrinkle</span>
            </div>
          </div>
          
          <hr className="border-t border-primary/10 mb-8" />
          
          {/* Color Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-3">
              <h3 className="font-label-bold text-label-bold uppercase tracking-widest text-ink-deep">Select Color</h3>
              <span className="font-label-sm italic text-surface-variant">{selectedColor}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button 
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={color.name} 
                  style={{ backgroundColor: color.hex }}
                  className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.name ? 'border-surface-cream ring-2 ring-ink-deep relative' : 'border-transparent hover:ring-2 ring-ink-deep/30'} transition-all shadow-sm flex items-center justify-center`}
                >
                  {selectedColor === color.name && (
                    <span className="material-symbols-outlined text-surface-cream text-sm mix-blend-difference">check</span>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-3">
              <h3 className="font-label-bold text-label-bold uppercase tracking-widest text-ink-deep">Select Size</h3>
              <a className="font-label-sm text-accent-gold underline hover:text-ink-deep transition-colors" href="#">Size Guide</a>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {availableSizes.map((variant: any) => (
                <button 
                  key={variant.size}
                  onClick={() => setSelectedSize(variant.size)}
                  disabled={variant.inventory === 0}
                  className={`py-3 border text-center font-label-sm uppercase transition-colors 
                    ${selectedSize === variant.size 
                      ? 'border-ink-deep bg-ink-deep text-surface-cream shadow-md' 
                      : variant.inventory === 0 
                        ? 'border-primary/20 text-surface-variant line-through bg-neutral-light cursor-not-allowed'
                        : 'border-primary/20 hover:border-ink-deep'
                    }`}
                >
                  {variant.size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Waitlist or Add to Bag CTA */}
          {isOutOfStock ? (
            <div className="mb-4">
              <p className="font-label-bold text-ink-deep mb-2">This product is currently out of stock.</p>
              <form 
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  waitlistMutation.mutate(waitlistEmail);
                }}
              >
                <input 
                  type="email" 
                  placeholder="Enter your email to join waitlist" 
                  required
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="flex-1 border border-ink-deep/20 py-3 px-4 focus:outline-none focus:border-accent-gold"
                />
                <button 
                  type="submit" 
                  disabled={waitlistMutation.isPending}
                  className="bg-accent-gold text-surface-cream py-3 px-6 font-label-bold hover:bg-accent-gold/90 transition-colors disabled:opacity-50"
                >
                  {waitlistMutation.isPending ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
            </div>
          ) : (
            <button 
              onClick={handleAddToCart}
              className="w-full bg-ink-deep text-surface-cream py-4 font-label-bold text-label-bold tracking-widest uppercase hover:bg-ink-deep/90 transition-colors mb-4 flex justify-center items-center gap-2"
            >
              Add to Bag — ₦{currentPrice.toLocaleString()}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          )}
          
          <p className="text-center font-label-sm text-[11px] text-surface-variant uppercase tracking-widest mb-8">Free shipping &amp; returns on all orders over ₦50,000</p>
          
          {/* Accordion Details */}
          <div className="border-t border-primary/10">
            {/* Description */}
            <div className="border-b border-primary/10">
              <button onClick={() => toggleAccordion('description')} className="w-full py-4 flex justify-between items-center group">
                <span className="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep group-hover:text-accent-gold transition-colors">Description</span>
                <span className="material-symbols-outlined text-ink-deep group-hover:text-accent-gold transition-colors">
                  {openAccordion === 'description' ? 'remove' : 'add'}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'description' ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-surface-variant font-body-md text-sm leading-relaxed">
                  {product.description || "Premium medical apparel engineered for modern healthcare professionals. Designed for comfort, durability, and a polished aesthetic."}
                </p>
              </div>
            </div>
            
            {/* Fit & Features */}
            <div className="border-b border-primary/10">
              <button onClick={() => toggleAccordion('fit')} className="w-full py-4 flex justify-between items-center group">
                <span className="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep group-hover:text-accent-gold transition-colors">Fit &amp; Features</span>
                <span className="material-symbols-outlined text-ink-deep group-hover:text-accent-gold transition-colors">
                  {openAccordion === 'fit' ? 'remove' : 'add'}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'fit' ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-surface-variant font-body-md text-sm leading-relaxed">
                  {product.fabricDetails || "Tailored fit with strategic pocket placement. Engineered with four-way stretch, moisture-wicking technology, and anti-wrinkle properties."}
                </p>
              </div>
            </div>
            
            {/* Fabric & Care */}
            <div className="border-b border-primary/10">
              <button onClick={() => toggleAccordion('care')} className="w-full py-4 flex justify-between items-center group">
                <span className="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep group-hover:text-accent-gold transition-colors">Fabric &amp; Care</span>
                <span className="material-symbols-outlined text-ink-deep group-hover:text-accent-gold transition-colors">
                  {openAccordion === 'care' ? 'remove' : 'add'}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'care' ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-surface-variant font-body-md text-sm leading-relaxed">
                  {product.careInstructions || "Machine wash cold with like colors. Tumble dry low. Do not bleach. Cool iron if needed."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Editorial Section */}
      <section className="bg-neutral-light py-section-gap-md my-section-gap-md relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-[500px] shadow-lg">
            <img className="w-full h-full object-cover" alt="Editorial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsRRIXb-Yizx3ll_Wgtys2WsD-W-Df2IkMej6kkgHLOmLfddthuMDCCJNYhvq2hFewdrTLIOTYh0XSlbBuUtqAl7-d4SF7HSxOOp5SC9Nskp5jcj8CLtSBgUattBYPP5hC3LPniyHuwyMlHd6sMVibrzhfvlEJ_zyG5WhSq8DSmKgCwuBFQB2CxjeMlKz9GSCouaABBpqZ0ZYAHqb1jO97V3Af6ZlsIoiB3NEZIi4Rlk3arME-vE46Aw" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-editorial text-5xl md:text-6xl text-ink-deep mb-6 italic leading-tight">Why You'll<br/>Love It</h2>
            <p className="font-body-md text-surface-variant mb-8 text-lg max-w-md leading-relaxed">
              Meticulously designed for those who demand excellence. The Vigo Classic doesn't just perform under pressure; it ensures you look effortlessly sophisticated while doing so. Experience the intersection of high-performance utility and premium editorial flair.
            </p>
            <a className="inline-flex items-center space-x-2 text-ink-deep font-label-bold uppercase tracking-widest hover:text-accent-gold transition-colors border-b-2 border-ink-deep hover:border-accent-gold pb-1" href="#">
              <span>Explore FIONx™ Fabric</span>
              <span className="material-symbols-outlined text-sm">east</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
