import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { api } from '../../lib/api'

export const Route = createFileRoute('/_store/product/$id')({
  component: ProductPage,
})

function ProductPage() {
  const { id } = Route.useParams()
  const [activeImage, setActiveImage] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [waitlistEmail, setWaitlistEmail] = useState("")

  const { data: product, isLoading, isError } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const res = await api.get(`/products/${id}`)
      return res.data.data || res.data // handle potential nesting
    }
  })

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

  // Set initial active image once loaded
  if (product.images?.length > 0 && !activeImage) {
    setActiveImage(product.images[0].url)
  }

  // Determine if out of stock
  const isOutOfStock = product.variants?.every((v: any) => v.inventory === 0)

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
              ₦{product.basePrice}
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
              <h3 className="font-label-bold text-label-bold uppercase tracking-widest text-ink-deep">Shop Core Colors</h3>
              <span className="font-label-sm italic text-surface-variant">Burgundy</span>
            </div>
            <p className="font-body-md text-sm text-surface-variant mb-4">Build your ultimate uniform with these Core colors—on call 24/7, 365.</p>
            <div className="flex flex-wrap gap-3">
              <button aria-label="Burgundy" className="w-10 h-10 rounded-full bg-[#340A0A] border-2 border-surface-cream ring-2 ring-ink-deep flex items-center justify-center relative shadow-sm">
                <span className="material-symbols-outlined text-surface-cream text-sm">check</span>
              </button>
              <button aria-label="Navy" className="w-10 h-10 rounded-full bg-[#0F172A] border-2 border-transparent hover:ring-2 ring-ink-deep/30 transition-all shadow-sm"></button>
              <button aria-label="Black" className="w-10 h-10 rounded-full bg-[#111111] border-2 border-transparent hover:ring-2 ring-ink-deep/30 transition-all shadow-sm"></button>
              <button aria-label="Moss" className="w-10 h-10 rounded-full bg-[#4A5D4E] border-2 border-transparent hover:ring-2 ring-ink-deep/30 transition-all shadow-sm"></button>
              <button aria-label="Charcoal" className="w-10 h-10 rounded-full bg-[#4B4B4B] border-2 border-transparent hover:ring-2 ring-ink-deep/30 transition-all shadow-sm"></button>
            </div>
          </div>
          
          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-baseline mb-3">
              <h3 className="font-label-bold text-label-bold uppercase tracking-widest text-ink-deep">Select Size</h3>
              <a className="font-label-sm text-accent-gold underline hover:text-ink-deep transition-colors" href="#">Size Guide</a>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button className="py-3 border border-primary/20 text-center font-label-sm uppercase hover:border-ink-deep transition-colors">XXS</button>
              <button className="py-3 border border-primary/20 text-center font-label-sm uppercase hover:border-ink-deep transition-colors text-surface-variant line-through bg-neutral-light cursor-not-allowed">XS</button>
              <button className="py-3 border border-ink-deep bg-ink-deep text-surface-cream text-center font-label-sm uppercase shadow-md">S</button>
              <button className="py-3 border border-primary/20 text-center font-label-sm uppercase hover:border-ink-deep transition-colors">M</button>
              <button className="py-3 border border-primary/20 text-center font-label-sm uppercase hover:border-ink-deep transition-colors">L</button>
              <button className="py-3 border border-primary/20 text-center font-label-sm uppercase hover:border-ink-deep transition-colors">XL</button>
              <button className="py-3 border border-primary/20 text-center font-label-sm uppercase hover:border-ink-deep transition-colors">2XL</button>
              <button className="py-3 border border-primary/20 text-center font-label-sm uppercase hover:border-ink-deep transition-colors">3XL</button>
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
            <button className="w-full bg-ink-deep text-surface-cream py-4 font-label-bold text-label-bold tracking-widest uppercase hover:bg-ink-deep/90 transition-colors mb-4 flex justify-center items-center gap-2">
              Add to Bag — ₦{product.basePrice}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          )}
          
          <p className="text-center font-label-sm text-[11px] text-surface-variant uppercase tracking-widest mb-8">Free shipping &amp; returns on all orders over ₦50</p>
          
          {/* Accordion Details */}
          <div className="border-t border-primary/10">
            <div className="border-b border-primary/10">
              <button className="w-full py-4 flex justify-between items-center group">
                <span className="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep group-hover:text-accent-gold transition-colors">Description</span>
                <span className="material-symbols-outlined text-ink-deep group-hover:text-accent-gold transition-colors">remove</span>
              </button>
              <div className="pb-4 text-surface-variant font-body-md text-sm leading-relaxed">
                {product.description || "The Vigo Classic Scrub Top is engineered for modern medical professionals. Featuring a tailored fit, strategic pocket placement, and crafted with our proprietary FIONx™ technology, it delivers unmatched comfort and a polished aesthetic for the longest shifts."}
              </div>
            </div>
            <div className="border-b border-primary/10">
              <button className="w-full py-4 flex justify-between items-center group">
                <span className="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep group-hover:text-accent-gold transition-colors">Fit &amp; Features</span>
                <span className="material-symbols-outlined text-ink-deep group-hover:text-accent-gold transition-colors">add</span>
              </button>
            </div>
            <div className="border-b border-primary/10">
              <button className="w-full py-4 flex justify-between items-center group">
                <span className="font-label-bold text-label-bold tracking-widest uppercase text-ink-deep group-hover:text-accent-gold transition-colors">Fabric &amp; Care</span>
                <span className="material-symbols-outlined text-ink-deep group-hover:text-accent-gold transition-colors">add</span>
              </button>
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
      
      {/* Complete The Set / Cross Sell (Bento Grid Style) */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap-md">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep mb-2">Complete The Set</h2>
            <p className="font-body-md text-surface-variant">Pair your top with our perfectly matched bottoms.</p>
          </div>
          <a className="hidden md:block font-label-bold uppercase tracking-widest text-ink-deep hover:text-accent-gold underline underline-offset-4" href="#">Shop All Pants</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <Link to="/product/$id" params={{ id: '1' }} className="group cursor-pointer block">
            <div className="relative aspect-[3/4] bg-neutral-light mb-4 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Pant 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW83G9pYfrK-UTKDaZsXIuq7KT8GrCFeNTj00h6FznDO7NugM2HPXQ8arSNEDLdAAVYEwYDZ9jaLpX8lLx395HXORcIc52DecoyZymMoJYmP3CfMkZOh_jBKT55CWgJ7Wvqb4Z7W9qx77c5qfqfQlBBpwTHlQaFhyBL9H9y_MHbvojCGHCsc1VAMMDqxnyoSg91BBZQCd8ARb74C4sgYI-SPctGhF0rvtXTEQt6xiUotq52oaaZ6Qg3Q" />
              <button className="absolute top-4 right-4 text-ink-deep hover:text-accent-gold bg-surface-cream/80 rounded-full p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              {/* Quick Add Slide Up */}
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-surface-cream text-ink-deep py-3 font-label-bold text-[12px] tracking-widest uppercase hover:bg-accent-gold hover:text-surface-cream transition-colors shadow-lg">Quick Add</button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-label-bold text-ink-deep">Vigo Straight-Leg Pant</h4>
                <p className="text-surface-variant font-label-sm mt-1">Burgundy</p>
              </div>
              <span className="font-label-bold text-ink-deep">₦52.00</span>
            </div>
          </Link>
          
          {/* Product Card 2 */}
          <Link to="/product/$id" params={{ id: '1' }} className="group cursor-pointer block">
            <div className="relative aspect-[3/4] bg-neutral-light mb-4 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Pant 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeS84bk6B2tYunjDnkBIOkUM_QW5Qi-UkjEmfT5PDtgNabnnLs3KE2EGuVtXD5rSkHt2I1kA_MaTTCCpqRiLDDonFBHWiVZCg9mhvsUqTFQvFCl0WAAe_cGhDGsGC4Bo_iHy4i5sqGJEg6PiwZQ5lEC9J2-_2N748CMTQmbUBJNPA7lNWqNb2mfs3GCDADcMtQPOy3bhZ7xP7y6GrBFlDVZLrOUkTJE2Nv7yIfdMwApZEmGHnVVeInaw" />
              <button className="absolute top-4 right-4 text-ink-deep hover:text-accent-gold bg-surface-cream/80 rounded-full p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-surface-cream text-ink-deep py-3 font-label-bold text-[12px] tracking-widest uppercase hover:bg-accent-gold hover:text-surface-cream transition-colors shadow-lg">Quick Add</button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-label-bold text-ink-deep">Vigo Jogger Scrub Pant</h4>
                <p className="text-surface-variant font-label-sm mt-1">Burgundy</p>
              </div>
              <span className="font-label-bold text-ink-deep">₦56.00</span>
            </div>
          </Link>
          
          {/* Informational Bento Box */}
          <div className="bg-surface-cream border border-primary/10 p-8 flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-4xl text-accent-gold mb-4">diamond</span>
            <h3 className="font-headline-md text-ink-deep mb-2">The Perfect Match</h3>
            <p className="font-body-md text-sm text-surface-variant mb-6">Our dyes are precision-matched to ensure your tops and bottoms align flawlessly, wash after wash.</p>
            <button className="bg-transparent border border-ink-deep text-ink-deep py-3 px-6 font-label-bold text-label-bold tracking-widest uppercase hover:bg-ink-deep hover:text-surface-cream transition-colors">
              Build a Set
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
