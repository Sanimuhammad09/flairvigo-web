import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../lib/api'

export const Route = createFileRoute('/_store/')({
  component: Index,
})

function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBRSrySpEaDsP711FokFuX5tnGitkzsU5B_9M851n7MDYjwiOEdMvIa9Rsn-i9Vk3I2RuuOI4ddlRE1WGaWE7i_EuDdT3x4V0nh3YXhVpk-_8pJ5rtLjmJ19tULU1V16bsHOnOmWQ678Ui0JEuUJn8Y8ZQigG2nYNd9boxHgvehOFj-tdV2dmMxGNfVgoH_ZRWoJC5Qd_zT_6qtcC7-IOralmlc-RpRhXoT4nGDBl_SYhvJ3hMGWi-Kuw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuByRwwktz1xvkxZGHel2qsjNddoW9nd7pxHZAgC35xxP_zeQbgx8sJV9EnXazbrjFzQKr4SRXDuOFx9aDLrvHCFwwHRF7PWjZt2u2QN9I6bQuDOgPNaYgZ7yNolVV_yHgbmL2O_bPDGnWU3xCHimbzkxtE24ROpAnj_fxOgNxqw4XSXLR9zPlmIyhKZNLP3iup7u05dt-op9MetK7YJl0LM2vu--Bi3CzjRCjfwJ7KZdzvrWsK3xbXywA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAStrbSer9oNhiZZzuxKGYjBithu_dNDi_NCnCxd2KMOL4DEe-8X90-UA542uEmnql3KoNWt_HXpwU5SdhVDIJKZC4uarOPt6zQa8LM2_LXpnK4jd6VbCNbdNG8F_Ab9s0JnEUtW7u-0u4UrVns9gtA89ZCBWgRdHX91zK3Pv7xSQxRaNbP6qZBfi_An1zNUh3Ng5s8yG8HdL9mB1z5q5U_vxa4mYaA4renqqrAqZTMqeD59_q1t4mYgg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2DTedsm49h-It39weMXg1xA6gBziAYtZkFMhhKzRQDfPuJPGolSXeM7DlsjlHe8HGh3PFitGSnljP011I4Nv4kWnsotDo2tMd9CCHlwqHtB4X7u-ZrCBxjzG2z0r1qAO8UdGyxevAssHDoNK81ZUCeWRC7tCra3CpXg81f4h18g0-3xPhJ59s_gsrTqjDlBJJwMjOJIVJnj7VRHd2uScRoCp7HhD82CavBBQwUoF7bKill2ZDLKECdA"
  ];

  const { data: featuredProducts, isLoading: featuredLoading } = useQuery({
    queryKey: ['products', 'featured'],
    queryFn: async () => {
      const res = await api.get('/products/featured?limit=4');
      return res.data; // assuming array of products
    }
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await api.get('/categories');
      return res.data;
    }
  });

  const categories = categoriesData?.data || categoriesData || [];

  return (
    <main className="flex-1 bg-surface-cream text-ink-deep">
      {/* BEGIN: Color Category Bar */}
      <section className="py-8 px-6 bg-surface-cream overflow-hidden">
        <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 relative items-start">
          
          {/* Color Item: Black */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Black" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAROVgdkXZBMrBr5d6Ohp23iP-FBwJsxtlznaDIzzEf9ArynZv7oB4m2Ge8W8Czns7j37q0IqGObM74f3Qx5uc8f6nnt5NWRrbMo_cgqsaL89Hpr-WF1oMCYkjMkmWoGOhfiMiFRWkZV7oCllEfrYUC4g8VXTsw4ZdGxZqEIfOJQMzbqIm6HRHziMnlbgWr3rTWY7r8SNI7sgnqux6Nh4HtSkSgdLUgiXwnwwyFyWU4yGepJ65Z251SnA"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Black</span>
          </Link>
          
          {/* Color Item: Navy */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Navy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAPL3k8Ji06P2yhbD4OddCls2HA0sWt2y8YjsxZYLsTfPtGIUyx4zAkJMcNdxIA8rbMzm4b2tVChr1iAfvHD0JTY5R5ba2AGeWIscorLg8Mt5vxNgWOhHv60721Oltex8TO54ZXK9iG1RS8IQQpjUXTv8YYECRnDzEp4M2oQbDtsBqg-NFRxlRGzpOXbovnyMcQR8ohTMrrR6U8-rCnwvcJYzLPYWkYpVuLqMGp_vk7I0Vo2k5PRuAfQ"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Navy</span>
          </Link>
          
          {/* Color Item: Moss */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Moss" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2DTedsm49h-It39weMXg1xA6gBziAYtZkFMhhKzRQDfPuJPGolSXeM7DlsjlHe8HGh3PFitGSnljP011I4Nv4kWnsotDo2tMd9CCHlwqHtB4X7u-ZrCBxjzG2z0r1qAO8UdGyxevAssHDoNK81ZUCeWRC7tCra3CpXg81f4h18g0-3xPhJ59s_gsrTqjDlBJJwMjOJIVJnj7VRHd2uScRoCp7HhD82CavBBQwUoF7bKill2ZDLKECdA"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Moss</span>
          </Link>
          
          {/* Color Item: Royal Blue */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Royal Blue" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI92xxTY3Ppwaez8emJBPsJAInyEOn4KsC-_gVgyZHTp2RCfOakCG_Q_q5tp9ok_RRbD0yiL6Pw3VnJxymEEhAMXiN5ku8ejm2Ess2O1BNFQe6M64A1y77Z9YuXu9yN-cOKgtzGoudMKIg32-iGSmbKIHbrEv5_djzHwb0Sf6SquASq5w13bSqc32Tf2qdkizfZb1HVJQbkKlbbILyBxxuO53Xa4RqOKZeq9faeyIhWi635eUtwbd9pQ"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Royal Blue</span>
          </Link>
          
          {/* Color Item: Burgundy */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Burgundy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqIayL7rzCpeyMUhK4_qKY5rOMmmwt7uBRSm8fwc71saiIsFFcmzYIRvq_7KgA-nR0BUZWEPS3_hLZf4XWzzZenz4KpD9G5u1fzeztZwpCqxLBACe7_A9elybHdtdrSgPrAE47kY7ocvoMRQ-HQ5qzJlDqGYL14nMB2FLVkiLollYqKnVQKpYxJFSysozdrxFhHMW23uicxg6s8Jc2HW9WRAYavp5Ca9G0qfBYHjMUDh8dyLsCrCAJjQ"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Burgundy</span>
          </Link>
          
          {/* Color Item: Charcoal */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Charcoal" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC60ToK_Fc9XhtKL9JGZjuGWKTYvzXjSSmFZBc5lUV0uoKbJovu-4WvQyGxbsv8n4JJmCbL8zDKDvfkaMcGz7GYY0563NCwUwWtuiUzq-pq6aFLYtHEhTa9UPeKaal319N0SFPuVQGKbyPQKGjCtPy2QBbcAfh0XxiumPRncbh54y2stYJ53ulZssMQb-q8oqnPRcO1oaoVzdqmEMBvyrSHuWnBMdM-bwJAUxHxled79dgiKBDRmtwXHg"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Charcoal</span>
          </Link>

          {/* Color Item: Dark Harbor */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Dark Harbor" className="w-full h-full object-cover filter brightness-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC60ToK_Fc9XhtKL9JGZjuGWKTYvzXjSSmFZBc5lUV0uoKbJovu-4WvQyGxbsv8n4JJmCbL8zDKDvfkaMcGz7GYY0563NCwUwWtuiUzq-pq6aFLYtHEhTa9UPeKaal319N0SFPuVQGKbyPQKGjCtPy2QBbcAfh0XxiumPRncbh54y2stYJ53ulZssMQb-q8oqnPRcO1oaoVzdqmEMBvyrSHuWnBMdM-bwJAUxHxled79dgiKBDRmtwXHg"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Dark Harbor</span>
          </Link>

          {/* Color Item: Ceil Blue */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Ceil Blue" className="w-full h-full object-cover filter hue-rotate-[190deg]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI92xxTY3Ppwaez8emJBPsJAInyEOn4KsC-_gVgyZHTp2RCfOakCG_Q_q5tp9ok_RRbD0yiL6Pw3VnJxymEEhAMXiN5ku8ejm2Ess2O1BNFQe6M64A1y77Z9YuXu9yN-cOKgtzGoudMKIg32-iGSmbKIHbrEv5_djzHwb0Sf6SquASq5w13bSqc32Tf2qdkizfZb1HVJQbkKlbbILyBxxuO53Xa4RqOKZeq9faeyIhWi635eUtwbd9pQ"/>
            </div>
            <span className="text-[13px] font-bold tracking-widest uppercase text-brand-text">Ceil Blue</span>
          </Link>

          {/* Color Item: Deep Purple */}
          <Link className="flex flex-col min-w-[160px] md:min-w-[180px] group" to="/women">
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Deep Purple" className="w-full h-full object-cover filter hue-rotate-[-30deg]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI92xxTY3Ppwaez8emJBPsJAInyEOn4KsC-_gVgyZHTp2RCfOakCG_Q_q5tp9ok_RRbD0yiL6Pw3VnJxymEEhAMXiN5ku8ejm2Ess2O1BNFQe6M64A1y77Z9YuXu9yN-cOKgtzGoudMKIg32-iGSmbKIHbrEv5_djzHwb0Sf6SquASq5w13bSqc32Tf2qdkizfZb1HVJQbkKlbbILyBxxuO53Xa4RqOKZeq9faeyIhWi635eUtwbd9pQ"/>
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
          {slides.map((src, index) => (
            <img 
              key={index}
              alt={`Jewelry on wrist ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`} 
              src={src}
            />
          ))}
          {/* Slider Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
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
            <span className="block text-2xl md:text-3xl font-sans font-normal mb-2 tracking-normal text-ink-deep">The</span>
            CHARMACY
          </h2>
          <p className="text-lg md:text-xl text-ink-deep max-w-lg mb-8 leading-relaxed font-light">
            V Coterie is officially joining the Flair Vigo family. Shop our exclusive collection of medical-inspired jewelry that pairs perfectly with your favorite fits.
          </p>
          <Link className="inline-block bg-ink-deep text-surface-cream font-bold py-4 px-12 rounded-full hover:bg-opacity-90 transition-opacity" to="/jewelry">SHOP JEWELRY</Link>
        </div>
      </section>

      {/* BEGIN: Featured Products from API */}
      <section className="px-6 py-12 max-w-[1600px] mx-auto mb-12">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-3xl font-bold text-ink-deep">Featured Drops</h3>
          <Link to="/new-arrivals" className="font-label-bold text-ink-deep border-b border-ink-deep hover:text-accent-gold hover:border-accent-gold transition-colors">Shop All New Arrivals</Link>
        </div>
        
        {featuredLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[3/4] bg-surface-variant rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts && Array.isArray(featuredProducts.data || featuredProducts) && (featuredProducts.data || featuredProducts).length > 0 ? (
              (featuredProducts.data || featuredProducts)
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
                      />
                      {product.images?.length > 1 && (
                        <img 
                          alt={`${product.name} alternate view`} 
                          className="absolute inset-0 w-full h-full object-cover z-0" 
                          src={hoverImage}
                        />
                      )}
                      
                      {product.variants?.[0]?.inventory === 0 && (
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-20">
                          <span className="font-label-bold text-ink-deep bg-surface-cream px-4 py-2 rounded-full shadow-md text-sm">Waitlist Available</span>
                        </div>
                      )}
                      
                      {/* Interactive Image Indicators for 'all images' feel */}
                      {product.images?.length > 1 && (
                         <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           {product.images.slice(0, 4).map((_: any, idx: number) => (
                              <div key={idx} className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-ink-deep/80' : 'bg-white/80'} shadow-sm`} />
                           ))}
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
              })
            ) : (
              <div className="col-span-full py-12 text-center text-on-surface-variant">
                No featured products at this time. Check back later!
              </div>
            )}
          </div>
        )}
      </section>

      {/* BEGIN: By Category Grid */}
      <section className="px-6 py-12 max-w-[1600px] mx-auto mb-12">
        <h3 className="text-3xl font-bold mb-8 text-ink-deep">Flair Vigo By Category</h3>
        
        {categoriesLoading ? (
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-pulse">
             {[1, 2, 3, 4, 5, 6].map(i => (
               <div key={i} className="aspect-[3/4] bg-surface-variant rounded-lg"></div>
             ))}
           </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.length > 0 ? categories.map((cat: any) => (
              <Link key={cat.id} className="group" to={`/${cat.slug}` as any}>
                <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4] relative">
                  {cat.image ? (
                    <img 
                      alt={cat.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={cat.image} 
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-surface-variant text-ink-deep group-hover:bg-ink-deep group-hover:text-surface-cream transition-colors duration-500">
                       <span className="material-symbols-outlined text-4xl">category</span>
                    </div>
                  )}
                </div>
                <h4 className="font-bold tracking-widest text-sm uppercase">{cat.name}</h4>
              </Link>
            )) : (
              <div className="col-span-full text-center text-on-surface-variant">
                No categories available.
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  )
}
