import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '../../lib/supabase'

export const Route = createFileRoute('/_store/')({
  component: Index,
})

function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data: storeSettings } = useQuery({
    queryKey: ['store', 'settings'],
    queryFn: async () => {
      const { data } = await supabase.from('store_settings').select('*').eq('id', 'default').single();
      return data || {};
    }
  });

  const slides = storeSettings?.banner_settings && storeSettings?.banner_settings?.length > 0
    ? storeSettings.banner_settings 
    : [
        { url: "/images/hero_burgundy.png", link: "/women" },
        { url: "/images/hero_navy.png", link: "/women" },
        { url: "/images/hero_moss.png", link: "/women" },
        { url: "/images/hero_black.png", link: "/women" }
      ];

  const { data: featuredProducts, isLoading: featuredLoading } = useQuery({
    queryKey: ['products', 'featured'],
    queryFn: async () => {
      const { data } = await supabase.from('products').select('*, category:categories(*)').order('created_at', { ascending: false }).limit(4);
      return data || [];
    }
  });

  const { data: bestSellerProducts, isLoading: bestSellerLoading } = useQuery({
    queryKey: ['products', 'bestsellers'],
    queryFn: async () => {
      const { data } = await supabase.from('products').select('*, category:categories(*)').eq('is_best_seller', true).limit(4);
      return data || [];
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);



  return (
    <main className="flex-1 bg-surface-cream text-ink-deep">
      {/* BEGIN: Color Category Bar */}
      <section className="py-8 px-6 bg-surface-cream overflow-hidden">
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 relative items-start">
          
          {/* Color Item: Black */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Black" className="w-full h-full object-cover" src="/images/hero_black.png"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Black</span>
          </Link>
          
          {/* Color Item: Navy */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Navy" className="w-full h-full object-cover" src="/images/hero_navy.png"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Navy</span>
          </Link>
          
          {/* Color Item: Moss */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Moss" className="w-full h-full object-cover" src="/images/hero_moss.png"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Moss</span>
          </Link>
          
          {/* Color Item: Royal Blue */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Royal Blue" className="w-full h-full object-cover" src="/images/cat_scrub_dresses.png"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Royal Blue</span>
          </Link>
          
          {/* Color Item: Burgundy */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Burgundy" className="w-full h-full object-cover" src="/images/hero_burgundy.png"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Burgundy</span>
          </Link>
          
          {/* Color Item: Charcoal */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Charcoal" className="w-full h-full object-cover" src="/images/cat_scrub_tops.png"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Charcoal</span>
          </Link>

          {/* Color Item: Dark Harbor */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Dark Harbor" className="w-full h-full object-cover" src="/images/cat_scrub_pants.png"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Dark Harbor</span>
          </Link>

          {/* Color Item: Ceil Blue */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Ceil Blue" className="w-full h-full object-cover" src="/images/cat_lab_coats.png"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Ceil Blue</span>
          </Link>

          {/* Color Item: Deep Purple */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Deep Purple" className="w-full h-full object-cover" src="/images/editorial_main.png"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Deep Purple</span>
          </Link>

          {/* Navigation Arrow */}
          <div className="absolute right-8 top-[90px] -translate-y-1/2 hidden md:flex items-center justify-center pointer-events-none">
            <button className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 border border-gray-100 pointer-events-auto">
              <svg className="h-6 w-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      {/* BEGIN: Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-surface-cream mb-16">
        <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden">
          {slides.map((slide: any, index: number) => (
            <Link key={index} to={slide.link || "/women"} className="block absolute inset-0 w-full h-full">
              <img 
                alt={`Hero Banner ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0 z-0'}`} 
                src={slide.url || slide}
              />
            </Link>
          ))}
          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${currentSlide === index ? 'bg-ink-deep' : 'bg-white/50 hover:bg-white/80'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-12 md:p-24 bg-surface-cream">
          <h2 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight text-ink-deep">
            <span className="block text-2xl md:text-3xl font-sans font-normal mb-2 tracking-normal text-ink-deep">Premium</span>
            MEDICAL WEAR
          </h2>
          <p className="text-lg md:text-xl text-ink-deep max-w-lg mb-8 leading-relaxed font-light">
            Experience the next generation of medical apparel. Shop our exclusive collection of premium scrubs, lab coats, and accessories designed for comfort and style.
          </p>
          <Link className="inline-block bg-ink-deep text-surface-cream font-bold py-4 px-12 rounded-full hover:bg-opacity-90 transition-opacity" to="/women">SHOP SCRUBS</Link>
        </div>
      </section>

      {/* BEGIN: Featured Products from API */}
      <section className="px-6 py-12 max-w-[1600px] mx-auto mb-12">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-3xl font-bold text-ink-deep">Featured Products</h3>
          <Link to="/new-arrivals" className="font-label-bold text-ink-deep border-b border-ink-deep hover:text-accent-gold hover:border-accent-gold transition-colors">Shop All</Link>
        </div>
        
        {featuredLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[3/4] bg-surface-variant rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts && Array.isArray(featuredProducts) && featuredProducts.length > 0 ? (
              featuredProducts
                .filter((product: any) => !product.name.toLowerCase().includes('perfume'))
                .slice(0, 4)
                .map((product: any) => {
                const primaryImage = product.images?.find((img: any) => img.isMain)?.url || product.images?.[0]?.url || 'https://via.placeholder.com/400x500?text=No+Image';
                const hoverImage = product.images?.length > 1 ? product.images[1].url : primaryImage;
                
                return (
                  <Link key={product.id} className="group flex flex-col h-full" to={`/product/${product.slug}` as any}>
                    <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4] relative">
                      <img 
                        alt={product.name} 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${product.images?.length > 1 ? 'group-hover:opacity-0 z-10' : 'z-10'}`} 
                        src={primaryImage}
                        onError={(e) => { e.currentTarget.src = "/images/home1.jpg" }}
                      />
                      {product.images?.length > 1 && (
                        <img 
                          alt={`${product.name} alternate view`} 
                          className="absolute inset-0 w-full h-full object-cover z-0" 
                          src={hoverImage}
                          onError={(e) => { e.currentTarget.src = "/images/home1.jpg" }}
                        />
                      )}
                      
                      {product.variants?.[0]?.inventory === 0 && (
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-20">
                          <span className="font-label-bold text-ink-deep bg-surface-cream px-4 py-2 rounded-full shadow-md text-sm">Waitlist Available</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-bold tracking-widest text-sm uppercase text-ink-deep mb-1 group-hover:text-accent-gold transition-colors">{product.name}</h4>
                      {product.description && (
                        <p className="text-on-surface-variant text-sm line-clamp-2 mb-2 leading-relaxed flex-1">
                          {product.description}
                        </p>
                      )}
                      <p className="text-ink-deep font-semibold mt-auto">₦{(product.price || product.basePrice || 0).toLocaleString()}</p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full py-12 text-center text-on-surface-variant">
                No featured products at this time. Check back later!
              </div>
            )}
          </div>
        )}
      </section>

      {/* BEGIN: Best Sellers from API */}
      <section className="px-6 py-12 max-w-[1600px] mx-auto mb-12 bg-neutral-light/50 rounded-3xl">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-3xl font-bold text-ink-deep">Best Sellers</h3>
          <Link to="/new-arrivals" className="font-label-bold text-ink-deep border-b border-ink-deep hover:text-accent-gold hover:border-accent-gold transition-colors">Shop All</Link>
        </div>
        
        {bestSellerLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[3/4] bg-surface-variant rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(() => {
              const staticBestSellers = [
                { id: "bs1", slug: "vigo-core-top", name: "The Vigo Core Top", description: "Deep Burgundy", basePrice: 48000, images: [{ isMain: true, url: "/images/hero_burgundy.png" }] },
                { id: "bs2", slug: "precision-jogger", name: "Precision Jogger", description: "Charcoal", basePrice: 58000, images: [{ isMain: true, url: "/images/hero_black.png" }] },
                { id: "bs3", slug: "core-tech-vest", name: "The Core Tech Vest", description: "Moss", basePrice: 85000, images: [{ isMain: true, url: "/images/hero_moss.png" }] },
                { id: "bs4", slug: "navy-scrub-set", name: "Classic Navy Set", description: "Navy Blue", basePrice: 95000, images: [{ isMain: true, url: "/images/hero_navy.png" }] }
              ];
              const apiProducts = bestSellerProducts && Array.isArray(bestSellerProducts) ? bestSellerProducts.filter((p: any) => !p.name.toLowerCase().includes('perfume')) : [];
              const productsToDisplay = apiProducts.length > 0 ? apiProducts : staticBestSellers;
              
              return productsToDisplay.slice(0, 4).map((product: any) => {
                const primaryImage = product.images?.find((img: any) => img.isMain)?.url || product.images?.[0]?.url || 'https://via.placeholder.com/400x500?text=No+Image';
                const hoverImage = product.images?.length > 1 ? product.images[1].url : primaryImage;
                
                return (
                  <Link key={product.id} className="group flex flex-col h-full" to={`/product/${product.slug}` as any}>
                    <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4] relative">
                      <img 
                        alt={product.name} 
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${product.images?.length > 1 ? 'group-hover:opacity-0 z-10' : 'z-10'}`} 
                        src={primaryImage}
                        onError={(e) => { e.currentTarget.src = "/images/home1.jpg" }}
                      />
                      {product.images?.length > 1 && (
                        <img 
                          alt={`${product.name} alternate view`} 
                          className="absolute inset-0 w-full h-full object-cover z-0" 
                          src={hoverImage}
                          onError={(e) => { e.currentTarget.src = "/images/home1.jpg" }}
                        />
                      )}
                      
                      {product.variants?.[0]?.inventory === 0 && (
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-20">
                          <span className="font-label-bold text-ink-deep bg-surface-cream px-4 py-2 rounded-full shadow-md text-sm">Waitlist Available</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-bold tracking-widest text-sm uppercase text-ink-deep mb-1 group-hover:text-accent-gold transition-colors">{product.name}</h4>
                      {product.description && (
                        <p className="text-on-surface-variant text-sm line-clamp-2 mb-2 leading-relaxed flex-1">
                          {product.description}
                        </p>
                      )}
                      <p className="text-ink-deep font-semibold mt-auto">₦{product.basePrice.toLocaleString()}</p>
                    </div>
                  </Link>
                );
              });
            })()}
          </div>
        )}
      </section>

      {/* BEGIN: Trending Now (New Section) */}
      <section className="bg-surface py-12 mb-12 border-y border-primary/5">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
            <h3 className="text-3xl font-bold text-ink-deep flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-gold" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              Trending Now
            </h3>
            <Link to="/new-arrivals" className="font-label-bold text-ink-deep border-b border-ink-deep hover:text-accent-gold hover:border-accent-gold transition-colors">See All Trends</Link>
          </div>
          
          {bestSellerLoading ? (
            <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="min-w-[280px] h-[400px] bg-surface-variant rounded-lg animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 snap-x snap-mandatory">
              {(() => {
                const bestSellerArray = Array.isArray(bestSellerProducts) ? bestSellerProducts : [];
                const apiProducts = bestSellerArray.filter((p: any) => !p.name?.toLowerCase().includes('perfume'));
                // Reverse bestsellers to make "trending" look different, or use static fallback
                const trendingProducts = apiProducts.length > 0 ? [...apiProducts].reverse() : [
                  { id: "t1", slug: "vigo-core-top", name: "The Vigo Core Top", basePrice: 48000, images: [{ url: "/images/cat_scrub_tops.png" }] },
                  { id: "t2", slug: "precision-jogger", name: "Precision Jogger", basePrice: 58000, images: [{ url: "/images/cat_scrub_pants.png" }] },
                  { id: "t3", slug: "classic-dress", name: "Classic Scrub Dress", basePrice: 75000, images: [{ url: "/images/cat_scrub_dresses.png" }] },
                  { id: "t4", slug: "lab-coat-pro", name: "Pro Lab Coat", basePrice: 105000, images: [{ url: "/images/cat_lab_coats.png" }] },
                  { id: "t5", slug: "accessory-kit", name: "Luxury Kit", basePrice: 15000, images: [{ url: "/images/cat_accessories.png" }] },
                ];
                
                return trendingProducts.slice(0, 6).map((product: any, idx: number) => {
                  const primaryImage = product.images?.[0]?.url || 'https://via.placeholder.com/400x500';
                  return (
                    <Link key={product.id || idx} className="group flex flex-col min-w-[280px] md:min-w-[300px] snap-start" to={`/product/${product.slug}` as any}>
                      <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4] relative">
                        <img 
                          alt={product.name} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          src={primaryImage}
                          onError={(e) => { e.currentTarget.src = "/images/hero_moss.png" }}
                        />
                        <div className="absolute top-3 left-3 bg-accent-gold text-surface-cream text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-widest">
                          #{idx + 1} Trending
                        </div>
                      </div>
                      
                      <div className="flex-1 flex flex-col">
                        <h4 className="font-bold tracking-widest text-sm uppercase text-ink-deep mb-1 group-hover:text-accent-gold transition-colors">{product.name}</h4>
                        <p className="text-ink-deep font-semibold mt-auto">₦{product.basePrice.toLocaleString()}</p>
                      </div>
                    </Link>
                  );
                });
              })()}
            </div>
          )}
        </div>
      </section>

      {/* BEGIN: By Category Grid */}
      <section className="px-6 py-12 max-w-[1600px] mx-auto mb-12">
        <h3 className="text-3xl font-bold mb-8 text-ink-deep">Shop By Category</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Scrub Tops", link: "/women", img: "/images/cat_scrub_tops.png" },
            { name: "Scrub Dresses", link: "/women", img: "/images/cat_scrub_dresses.png" },
            { name: "Scrub Pants", link: "/women", img: "/images/cat_scrub_pants.png" },
            { name: "Gift Sets", link: "/women", img: "/images/editorial_main.png" },
            { name: "Lab Coats", link: "#", img: "/images/cat_lab_coats.png" },
            { name: "Accessories", link: "/women", img: "/images/cat_accessories.png" }
          ].map((cat, index) => (
            <Link key={index} className="group" to={cat.link as any}>
              <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4] relative">
                <img 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={cat.img} 
                  onError={(e) => { e.currentTarget.src = `/images/hero_burgundy.png` }}
                />
              </div>
              <h4 className="font-bold tracking-widest text-sm uppercase text-ink-deep group-hover:text-accent-gold transition-colors">{cat.name}</h4>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
