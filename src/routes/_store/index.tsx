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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-pulse">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[3/4] bg-surface-variant rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts && featuredProducts.length > 0 ? (
              featuredProducts.map((product: any) => (
                <Link key={product.id} className="group" to={`/product/${product.slug}`}>
                  <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4] relative">
                    <img 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={product.images?.[0]?.url || 'https://via.placeholder.com/400x500?text=No+Image'}
                    />
                    {product.variants?.[0]?.inventory === 0 && (
                      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                        <span className="font-label-bold text-ink-deep bg-surface-cream px-4 py-2 rounded-full">Waitlist Available</span>
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold tracking-widest text-sm uppercase text-ink-deep">{product.name}</h4>
                  <p className="text-on-surface-variant">₦{product.basePrice}</p>
                </Link>
              ))
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <Link className="group" to="/women">
            <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4]">
              <img alt="Scrub Tops" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJw6PHBK6oUf_zXDPiuMY9QHR-D-Fb1_ZkmXe6GS6V6APf8gGyZfYFGlLUS8MitvblS1b_sRnhNPS5kUrkzOZoCGXIoytRytHaaAmOUrgs0iDWXYMPO_2tp7iBSFfz-9800Fx-d2eaAf2hB2J29OBg2P8cwaMwofy3UXM9dftpBxaSILf8hffP0BF2579pAMKenrptF3VulSLg9STzvqHagTDQrr-YWhBWcFE09ubgn4lLtpmtpoRB3g"/>
            </div>
            <h4 className="font-bold tracking-widest text-sm uppercase">Scrub Tops</h4>
          </Link>
          
          <Link className="group" to="/women">
            <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4]">
              <img alt="Scrub Pants" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV3N55T_wH59HmQxQAVgNyZvSddK7UC6J0WgT_hdOXnOl032Jo8_G832OI-uYECkMAE9I8I6zsr6N41nyZqhN8xsjCbPZOS06xEKx1hKLup2m7R2mFJFsHkbyEn8CCsyl3Dk8ivcehu_1iaNQKH3lhu-PcWEAvT88V_nXgkFORfeMlc47D-0CjbTNSixEdFWNk_TPwwFPKiHYnR3iG6Az03Fs3NutNo5VpRlCG7A3G09eDR9DqQ07NQw"/>
            </div>
            <h4 className="font-bold tracking-widest text-sm uppercase">Scrub Pants</h4>
          </Link>
          
          <Link className="group" to="/women">
            <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4]">
              <img alt="Underscrubs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA824JuZykkYfBLDcTdQApOhcyuvcXUxFOCm6bpKqLbXtEqg-dqJ5An8UIEZ3v1dx5z9g9tzORySLswJiiJmIFan4-Rr-KKGOC-qPlBIAInpj7WOn5ZKEvrQD6kOnZXVKL1sw8J8DNRI7IqS3CDOxViBi7HAw4wHFAQuudYpBPUhaq2gId69f-sFahFoWkCOZFM7F4dOLVPPiUVIoxReOzgd7m96li7XQQolxdICDuCE_rBHAtkbVa7xQ"/>
            </div>
            <h4 className="font-bold tracking-widest text-sm uppercase">Underscrubs</h4>
          </Link>
          
          <Link className="group" to="/outerwear">
            <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4]">
              <img alt="Outerwear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSWRH8wZAfRfr6Qcv2pXzu71fAJiWaTRFoD-oD5iIQvNpABi5EmvyIkjxcYowXv5nbTew4z9dYG9P9CDUQHmXDn1U2evJQlJlR96xZ7jWSZTKea-79_ViWpbN-W8jgdte8oD_8V9zjuY82veoj2iDTOwGsVybsJwiGOK983nUsj-qoH3DI3qHJZwiqEt8kTOaS1PP-LxVqHafURkiZEuAkmhp3XLt_OiBDCFLTBuqRBgNSHiimLyqQzQ"/>
            </div>
            <h4 className="font-bold tracking-widest text-sm uppercase">Outerwear</h4>
          </Link>
          
          <Link className="group" to="/women">
            <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4]">
              <img alt="Footwear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3BqC0fYOXfsKJSBu6WB3z5OFOHtE8WI2PaSTrGbsHyh8LZuuDaU8L7hbjKbJ6JSG4ozeguIT4gjvTBapRlF7cWoOUaVGCh_NklK1dcrbX-dzcOtev30FW64JxlRUO5S44kG2VZmEEnKxI-Z045ExENpLgpi3LXSG3CKZk3ra6ddYihfyhHMIbuz-pJRiRVJk8Y7Y9zv-xBy1YjwNyYQKzMOgQwgg-Bq9fZ-7806QYS5d7d1hlPN11ww"/>
            </div>
            <h4 className="font-bold tracking-widest text-sm uppercase">Footwear</h4>
          </Link>
          
          <Link className="group" to="/jewelry">
            <div className="rounded-lg overflow-hidden mb-4 bg-brand-lightGray aspect-[3/4]">
              <img alt="Accessories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByRwwktz1xvkxZGHel2qsjNddoW9nd7pxHZAgC35xxP_zeQbgx8sJV9EnXazbrjFzQKr4SRXDuOFx9aDLrvHCFwwHRF7PWjZt2u2QN9I6bQuDOgPNaYgZ7yNolVV_yHgbmL2O_bPDGnWU3xCHimbzkxtE24ROpAnj_fxOgNxqw4XSXLR9zPlmIyhKZNLP3iup7u05dt-op9MetK7YJl0LM2vu--Bi3CzjRCjfwJ7KZdzvrWsK3xbXywA"/>
            </div>
            <h4 className="font-bold tracking-widest text-sm uppercase">Accessories</h4>
          </Link>
          
        </div>
      </section>
    </main>
  )
}
