import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/jewelry')({
  component: JewelryCollection,
})

function JewelryCollection() {
  return (
    <main className="flex-1 bg-brand-bg">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-end justify-center pb-16">
        <div className="absolute inset-0 bg-neutral-900">
          <img 
            alt="Women in stylish medical apparel" 
            className="w-full h-full object-cover opacity-80" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Yxqa1eohBtzMP39A-_DXr3_gcH37rPbM3uZS1TIArm2XQWZ9JI5Xq9UKH2RMRFUrY24xQ-B-sdwEJcE33drauQmr0KKjB0_vwOfi3yJFa9bu0dSjzemHgPEbrvzfG3iwUH6dGmoEWKXI6fnjz_dcehJRhPhB8bVV0HsrpbWXH45Jxsfq5uG0AMuA5uQ2Ilx-_Z5lVa6109vgZV5B6quC-TkdfZeyD_o3M84NjVzpg4Q9wdl4jTm5vA"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight">Jewelry Collection</h1>
          <p className="font-sans text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Medical-inspired jewelry that pairs perfectly with your favorite fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/jewelry" className="bg-white text-brand px-10 py-4 font-bold tracking-widest text-sm uppercase rounded-full hover:bg-gray-100 transition-colors">
              Shop Tops
            </Link>
            <Link to="/jewelry" className="bg-white text-brand px-10 py-4 font-bold tracking-widest text-sm uppercase rounded-full hover:bg-gray-100 transition-colors">
              Shop Pants
            </Link>
          </div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-16 px-6 max-w-[1600px] mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-brand text-center md:text-left">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/jewelry" className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-brand-lightGray">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Scrub Tops" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0USvj4Wziq65uVnqqDe6J4TgUEejVGnGCDUNdHwfm35UKdZ962vL8w7U0uijBLKyRshw4wq3wj7OzzSW3OH0GWXioL9aniRqheGzyKJ5RsOsl2NRULrG0kEojGQuNjApCC9zIb6bStIws2LDAK2Ko88AvjmrQfHUyk6nSNezt28W9x1138diZB79V6wuQUIbbsy63bNZpaaeNXSpnYR6T2UEOLBAQW2-fo2XdnUVwOVxG1zt9xoa68g" />
            </div>
            <h3 className="font-bold uppercase tracking-widest text-sm group-hover:text-gray-600 transition-colors">Scrub Tops</h3>
          </Link>
          <Link to="/jewelry" className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-brand-lightGray">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Scrub Pants" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV3N55T_wH59HmQxQAVgNyZvSddK7UC6J0WgT_hdOXnOl032Jo8_G832OI-uYECkMAE9I8I6zsr6N41nyZqhN8xsjCbPZOS06xEKx1hKLup2m7R2mFJFsHkbyEn8CCsyl3Dk8ivcehu_1iaNQKH3lhu-PcWEAvT88V_nXgkFORfeMlc47D-0CjbTNSixEdFWNk_TPwwFPKiHYnR3iG6Az03Fs3NutNo5VpRlCG7A3G09eDR9DqQ07NQw" />
            </div>
            <h3 className="font-bold uppercase tracking-widest text-sm group-hover:text-gray-600 transition-colors">Scrub Pants</h3>
          </Link>
          <Link to="/outerwear" className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-brand-lightGray">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Outerwear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSWRH8wZAfRfr6Qcv2pXzu71fAJiWaTRFoD-oD5iIQvNpABi5EmvyIkjxcYowXv5nbTew4z9dYG9P9CDUQHmXDn1U2evJQlJlR96xZ7jWSZTKea-79_ViWpbN-W8jgdte8oD_8V9zjuY82veoj2iDTOwGsVybsJwiGOK983nUsj-qoH3DI3qHJZwiqEt8kTOaS1PP-LxVqHafURkiZEuAkmhp3XLt_OiBDCFLTBuqRBgNSHiimLyqQzQ" />
            </div>
            <h3 className="font-bold uppercase tracking-widest text-sm group-hover:text-gray-600 transition-colors">Outerwear</h3>
          </Link>
          <Link to="/jewelry" className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-brand-lightGray">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Underscrubs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA824JuZykkYfBLDcTdQApOhcyuvcXUxFOCm6bpKqLbXtEqg-dqJ5An8UIEZ3v1dx5z9g9tzORySLswJiiJmIFan4-Rr-KKGOC-qPlBIAInpj7WOn5ZKEvrQD6kOnZXVKL1sw8J8DNRI7IqS3CDOxViBi7HAw4wHFAQuudYpBPUhaq2gId69f-sFahFoWkCOZFM7F4dOLVPPiUVIoxReOzgd7m96li7XQQolxdICDuCE_rBHAtkbVa7xQ" />
            </div>
            <h3 className="font-bold uppercase tracking-widest text-sm group-hover:text-gray-600 transition-colors">Underscrubs</h3>
          </Link>
        </div>
      </section>

      {/* Core Colors Bar */}
      <section className="bg-white py-16 px-6 overflow-hidden border-t border-b border-brand-border">
        <h2 className="text-2xl font-bold mb-8 text-center max-w-[1600px] mx-auto">Shop Core Colors</h2>
        <div className="flex space-x-6 overflow-x-auto no-scrollbar max-w-[1600px] mx-auto pb-4">
          <Link to="/jewelry" className="flex flex-col items-center min-w-[120px] group">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Black" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAROVgdkXZBMrBr5d6Ohp23iP-FBwJsxtlznaDIzzEf9ArynZv7oB4m2Ge8W8Czns7j37q0IqGObM74f3Qx5uc8f6nnt5NWRrbMo_cgqsaL89Hpr-WF1oMCYkjMkmWoGOhfiMiFRWkZV7oCllEfrYUC4g8VXTsw4ZdGxZqEIfOJQMzbqIm6HRHziMnlbgWr3rTWY7r8SNI7sgnqux6Nh4HtSkSgdLUgiXwnwwyFyWU4yGepJ65Z251SnA" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gray group-hover:text-brand">Black</span>
          </Link>
          <Link to="/jewelry" className="flex flex-col items-center min-w-[120px] group">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Navy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAPL3k8Ji06P2yhbD4OddCls2HA0sWt2y8YjsxZYLsTfPtGIUyx4zAkJMcNdxIA8rbMzm4b2tVChr1iAfvHD0JTY5R5ba2AGeWIscorLg8Mt5vxNgWOhHv60721Oltex8TO54ZXK9iG1RS8IQQpjUXTv8YYECRnDzEp4M2oQbDtsBqg-NFRxlRGzpOXbovnyMcQR8ohTMrrR6U8-rCnwvcJYzLPYWkYpVuLqMGp_vk7I0Vo2k5PRuAfQ" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gray group-hover:text-brand">Navy</span>
          </Link>
          <Link to="/jewelry" className="flex flex-col items-center min-w-[120px] group">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Moss" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2DTedsm49h-It39weMXg1xA6gBziAYtZkFMhhKzRQDfPuJPGolSXeM7DlsjlHe8HGh3PFitGSnljP011I4Nv4kWnsotDo2tMd9CCHlwqHtB4X7u-ZrCBxjzG2z0r1qAO8UdGyxevAssHDoNK81ZUCeWRC7tCra3CpXg81f4h18g0-3xPhJ59s_gsrTqjDlBJJwMjOJIVJnj7VRHd2uScRoCp7HhD82CavBBQwUoF7bKill2ZDLKECdA" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gray group-hover:text-brand">Moss</span>
          </Link>
          <Link to="/jewelry" className="flex flex-col items-center min-w-[120px] group">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Royal Blue" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI92xxTY3Ppwaez8emJBPsJAInyEOn4KsC-_gVgyZHTp2RCfOakCG_Q_q5tp9ok_RRbD0yiL6Pw3VnJxymEEhAMXiN5ku8ejm2Ess2O1BNFQe6M64A1y77Z9YuXu9yN-cOKgtzGoudMKIg32-iGSmbKIHbrEv5_djzHwb0Sf6SquASq5w13bSqc32Tf2qdkizfZb1HVJQbkKlbbILyBxxuO53Xa4RqOKZeq9faeyIhWi635eUtwbd9pQ" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gray group-hover:text-brand">Royal Blue</span>
          </Link>
          <Link to="/jewelry" className="flex flex-col items-center min-w-[120px] group">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-brand transition-colors shadow-sm">
              <img alt="Burgundy" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqIayL7rzCpeyMUhK4_qKY5rOMmmwt7uBRSm8fwc71saiIsFFcmzYIRvq_7KgA-nR0BUZWEPS3_hLZf4XWzzZenz4KpD9G5u1fzeztZwpCqxLBACe7_A9elybHdtdrSgPrAE47kY7ocvoMRQ-HQ5qzJlDqGYL14nMB2FLVkiLollYqKnVQKpYxJFSysozdrxFhHMW23uicxg6s8Jc2HW9WRAYavp5Ca9G0qfBYHjMUDh8dyLsCrCAJjQ" />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gray group-hover:text-brand">Burgundy</span>
          </Link>
        </div>
      </section>

      {/* Featured Product / Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-white mb-16">
        <div className="flex flex-col justify-center items-center text-center p-12 md:p-24 order-2 md:order-1">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">Meet The Precision Jogger</h2>
          <p className="text-lg text-brand-text max-w-md mb-8 leading-relaxed font-light">
            Engineered with a flattering tailored fit, four-way stretch, and a proprietary fluid-resistant finish. Elevate your everyday.
          </p>
          <Link className="inline-block bg-brand text-white font-bold py-4 px-12 rounded-full hover:bg-opacity-90 transition-opacity uppercase tracking-widest text-sm" to="/jewelry">
            Shop Joggers
          </Link>
        </div>
        <div className="relative w-full h-[500px] md:h-[700px] order-1 md:order-2">
          <img alt="Healthcare worker in charcoal grey tailored jogger scrubs" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Yxqa1eohBtzMP39A-_DXr3_gcH37rPbM3uZS1TIArm2XQWZ9JI5Xq9UKH2RMRFUrY24xQ-B-sdwEJcE33drauQmr0KKjB0_vwOfi3yJFa9bu0dSjzemHgPEbrvzfG3iwUH6dGmoEWKXI6fnjz_dcehJRhPhB8bVV0HsrpbWXH45Jxsfq5uG0AMuA5uQ2Ilx-_Z5lVa6109vgZV5B6quC-TkdfZeyD_o3M84NjVzpg4Q9wdl4jTm5vA" />
        </div>
      </section>

      {/* Best Sellers */}
      <section className="px-6 py-16 max-w-[1600px] mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-10 text-brand text-center md:text-left">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Link to="/product/$id" params={{ id: '1' }} className="group cursor-pointer block flex flex-col">
            <div className="relative aspect-[3/4] bg-brand-lightGray overflow-hidden mb-4 rounded-xl">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Burgundy Scrub Top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0USvj4Wziq65uVnqqDe6J4TgUEejVGnGCDUNdHwfm35UKdZ962vL8w7U0uijBLKyRshw4wq3wj7OzzSW3OH0GWXioL9aniRqheGzyKJ5RsOsl2NRULrG0kEojGQuNjApCC9zIb6bStIws2LDAK2Ko88AvjmrQfHUyk6nSNezt28W9x1138diZB79V6wuQUIbbsy63bNZpaaeNXSpnYR6T2UEOLBAQW2-fo2XdnUVwOVxG1zt9xoa68g" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-white text-brand font-bold text-sm uppercase tracking-widest py-3 rounded-full hover:bg-gray-100 shadow-lg">Quick Add</button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-brand mb-1">The Vigo Core Top</h3>
                <p className="text-sm text-brand-gray">Deep Burgundy</p>
              </div>
              <span className="font-semibold text-brand">₦48</span>
            </div>
          </Link>
          
          <Link to="/product/$id" params={{ id: '1' }} className="group cursor-pointer block flex flex-col">
            <div className="relative aspect-[3/4] bg-brand-lightGray overflow-hidden mb-4 rounded-xl">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Charcoal Joggers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Yxqa1eohBtzMP39A-_DXr3_gcH37rPbM3uZS1TIArm2XQWZ9JI5Xq9UKH2RMRFUrY24xQ-B-sdwEJcE33drauQmr0KKjB0_vwOfi3yJFa9bu0dSjzemHgPEbrvzfG3iwUH6dGmoEWKXI6fnjz_dcehJRhPhB8bVV0HsrpbWXH45Jxsfq5uG0AMuA5uQ2Ilx-_Z5lVa6109vgZV5B6quC-TkdfZeyD_o3M84NjVzpg4Q9wdl4jTm5vA" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-white text-brand font-bold text-sm uppercase tracking-widest py-3 rounded-full hover:bg-gray-100 shadow-lg">Quick Add</button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-brand mb-1">Precision Jogger</h3>
                <p className="text-sm text-brand-gray">Charcoal</p>
              </div>
              <span className="font-semibold text-brand">₦58</span>
            </div>
          </Link>
          
          <Link to="/product/$id" params={{ id: '1' }} className="group cursor-pointer block flex flex-col">
            <div className="relative aspect-[3/4] bg-brand-lightGray overflow-hidden mb-4 rounded-xl">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" alt="Burgundy Vest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhDLULQvEqksOD2VDgeHFMCAQcPiNinWBMdRtqaZLmanP-E9vuaFAQs2m5tTxE4-MzWdh13kGHsMxegsKG3p3DVrkezAzVlbflI-tPtm1DTBHsAml8ILCRXrsC0irxTJQ2SstksJH4a64bVYl1kjmaeODGCf-fo6gbd4gGlBg9jMRkh4uEh5jLyrTJv3a2C5Xi-rzM_uBV_AIlHxcLZXfvNav8hOMgK1xcSYYazUKOqz1pVGCe9dJlzw" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-white text-brand font-bold text-sm uppercase tracking-widest py-3 rounded-full hover:bg-gray-100 shadow-lg">Quick Add</button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-brand mb-1">The Core Tech Vest</h3>
                <p className="text-sm text-brand-gray">Deep Burgundy</p>
              </div>
              <span className="font-semibold text-brand">₦85</span>
            </div>
          </Link>

        </div>
      </section>

    </main>
  )
}
