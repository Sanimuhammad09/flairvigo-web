import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#222] text-white text-xs font-semibold tracking-widest uppercase text-center py-2.5 relative z-50">
        <p>Free shipping for ₦50+ orders and free returns</p>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-brand-border sticky top-0 z-40">
        <div className="px-6 h-16 flex items-center justify-between">
          
          {/* Logo (Left) */}
          <div className="flex items-center">
            <Link className="flex items-center" to="/">
              <img alt="Flair Vigo Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyf_YLPJ-uAika6zi0ciCVAS-uISkteIM2ux371p2IMF6mb5MG4DIBPJpanL7NsSwbMP3B61T5txuiJVr2b9upM_X5aaeCLK2EY73taf6I2mr3V2ze8U1S8oUNvl7KW6tobocmENZfuuVRXsZqb8w4Z67wwNGFErnjvSL6SrP8dk42dcM2Tv6BB8O8TGpWzEGVzcCzDiB-K9iyb3VB1MjIMiC-MqvRZGGVEhM0rJdFsV89822ykyGLHxw51m2jFWUI9M" />
            </Link>
          </div>
          
          {/* Navigation (Center) */}
          <nav className="hidden lg:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2 h-full">
            <div className="group h-full flex items-center">
              <Link className="font-semibold text-sm hover:text-brand transition-colors h-full flex items-center px-2" to="/women">Women</Link>
              {/* Mega Menu Dropdown */}
              <div className="mega-menu hidden group-hover:flex absolute top-full left-1/2 -translate-x-1/2 w-screen bg-white shadow-xl border-t border-brand-border z-50 p-8 justify-center gap-12">
                <div>
                  <h4 className="font-bold text-sm mb-4">Shop By</h4>
                  <ul className="space-y-2 text-sm text-brand-gray">
                    <li><Link className="hover:text-brand" to="/new-arrivals">New Arrivals</Link></li>
                    <li><Link className="hover:text-brand" to="/best-sellers">Best Sellers</Link></li>
                    <li><a className="hover:text-brand" href="#">Core Colors</a></li>
                    <li><a className="hover:text-brand" href="#">Limited Edition</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-4">Categories</h4>
                  <ul className="space-y-2 text-sm text-brand-gray">
                    <li><a className="hover:text-brand" href="#">Scrub Tops</a></li>
                    <li><a className="hover:text-brand" href="#">Scrub Pants</a></li>
                    <li><a className="hover:text-brand" href="#">Underscrubs</a></li>
                    <li><Link className="hover:text-brand" to="/outerwear">Outerwear</Link></li>
                  </ul>
                </div>
                <div>
                  <img alt="New Collection" className="rounded-lg object-cover w-[300px] h-[200px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9njcCrx7iDvf_KH1UsJIvODLmlEvnfazkFX58LRYggap_wnVvCBTwTCsQ7Px4rtYjjH86JKpHiCl-11Qc7TTVwq98x7Xz3pD2BLFCJ1YSrOIvFstTKhoGam69YHLXQlFxWUQIZQSky5-3SGFF2OVpuQuA4v1Z9BZra-aVvNMCDSZHep3vaoVDOTmASTmnlahR3vyhTY7pAN-xCuUARu5EBGLfiJiGyqU9JPVbKRLSE3ZRYeJXkfi-Zw"/>
                  <p className="mt-2 font-bold text-sm">Shop The New Collection</p>
                </div>
              </div>
            </div>
            
            <div className="group h-full flex items-center">
              <Link className="font-semibold text-sm hover:text-brand transition-colors h-full flex items-center px-2" to="/men">Men</Link>
              {/* Mega Menu Dropdown */}
              <div className="mega-menu hidden group-hover:flex absolute top-full left-1/2 -translate-x-1/2 w-screen bg-white shadow-xl border-t border-brand-border z-50 p-8 justify-center gap-12">
                <div>
                  <h4 className="font-bold text-sm mb-4">Shop By</h4>
                  <ul className="space-y-2 text-sm text-brand-gray">
                    <li><Link className="hover:text-brand" to="/new-arrivals">New Arrivals</Link></li>
                    <li><Link className="hover:text-brand" to="/best-sellers">Best Sellers</Link></li>
                    <li><a className="hover:text-brand" href="#">Core Colors</a></li>
                    <li><a className="hover:text-brand" href="#">Limited Edition</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-4">Categories</h4>
                  <ul className="space-y-2 text-sm text-brand-gray">
                    <li><Link className="hover:text-brand" to="/men">Scrub Tops</Link></li>
                    <li><Link className="hover:text-brand" to="/men">Scrub Pants</Link></li>
                    <li><Link className="hover:text-brand" to="/men">Underscrubs</Link></li>
                    <li><Link className="hover:text-brand" to="/outerwear">Outerwear</Link></li>
                  </ul>
                </div>
                <div>
                  <img alt="Men's Collection" className="rounded-lg object-cover w-[300px] h-[200px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqV3D2D37nB2sKjQ1uL8X5l2ZqB0eH6o6_YwA3tF5gE3F9_r7J5tP6O8bL9xT4J2W8K0G9N6H1Z2A3tF5gE3F9_r7J5tP6O8bL9xT4J2W8K0G9N6H1Z2A3tF5g" />
                  <p className="mt-2 font-bold text-sm">Shop Men's Collection</p>
                </div>
              </div>
            </div>
            <Link className="font-semibold text-sm hover:text-brand transition-colors" to="/jewelry">Jewelry</Link>
            <a className="font-semibold text-sm hover:text-brand transition-colors" href="#">Group Orders</a>
            <a className="font-semibold text-sm hover:text-brand transition-colors" href="#">Students</a>
            <Link className="font-semibold text-sm hover:text-brand transition-colors" to="/about">About</Link>
          </nav>
          
          {/* Actions (Right) */}
          <div className="flex items-center space-x-5">
            <div className="relative hidden md:block">
              <input className="pl-8 pr-4 py-1.5 border border-brand-border rounded-full text-sm w-48 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand" placeholder="Search" type="text"/>
              <svg className="h-4 w-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <img alt="US Flag" className="w-5 h-auto rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMlicBlnxrwTNQpyrmDfxZHHb2cBYCvuqn5zfHMrplISdLdfL27_Hm9tY3_C7DaUEiYFx-Ms3hn441LJGga29N2xzCXBEVs_Ts3H35NVYYA_u5MbRhswhllEq2lKU95r1PSeMHa6-Dt0AJViguWZNk_Rpyj6H4P7bu_YwGaCpNcwOyzTADqDB_b5C0_WxBNst1C4exOM2EwKjy6AW4Il0T9eZcOKSI1hxRRpOC-fqcWr-xutt6-54GaQ"/>
              <span className="text-sm font-semibold">EN</span>
            </div>
            
            {/* User Icon */}
            <Link to="/sign-in" className="hover:text-brand">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </Link>

            {/* Wishlist Icon */}
            <Link to="/wishlist" className="hover:text-brand">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </Link>
            
            {/* Bag Icon */}
            <Link to="/checkout" className="hover:text-brand">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </Link>
            
            {/* Menu Icon */}
            <button className="hover:text-brand">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
