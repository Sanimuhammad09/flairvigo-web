import { Link } from '@tanstack/react-router'
import { useCartStore } from '../store/cart'
import { useAuthStore } from '../store/auth'
import { useState } from 'react'

export function Header() {
  const { items, isOpen, toggleCart, setIsOpen, removeItem, updateQuantity, getCartTotal, getCartCount } = useCartStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#222] text-white text-xs font-semibold tracking-widest uppercase text-center py-2.5 relative z-50">
        <p>Free shipping for ₦50,000+ orders and free returns</p>
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
              <Link className="font-semibold text-sm hover:text-brand transition-colors h-full flex items-center px-2" to="/collections">Collections</Link>
              {/* Mega Menu Dropdown */}
              <div className="mega-menu hidden group-hover:flex absolute top-full left-1/2 -translate-x-1/2 w-screen bg-white shadow-xl border-t border-brand-border z-50 p-8 justify-center gap-12">
                <div>
                  <h4 className="font-bold text-sm mb-4">Our Collections</h4>
                  <ul className="space-y-2 text-sm text-brand-gray">
                    <li><Link className="hover:text-brand" to="/collections/sidrah-collection">Sidrah Collection</Link></li>
                    <li><Link className="hover:text-brand" to="/collections/layna-collection">Layna Collection</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-4">Shop By</h4>
                  <ul className="space-y-2 text-sm text-brand-gray">
                    <li><Link className="hover:text-brand" to="/collections">All Scrubs</Link></li>
                    <li><a className="hover:text-brand" href="#">Best Sellers</a></li>
                    <li><a className="hover:text-brand" href="#">New Arrivals</a></li>
                  </ul>
                </div>
                <div>
                  <img alt="Collections" className="rounded-lg object-cover w-[300px] h-[200px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9njcCrx7iDvf_KH1UsJIvODLmlEvnfazkFX58LRYggap_wnVvCBTwTCsQ7Px4rtYjjH86JKpHiCl-11Qc7TTVwq98x7Xz3pD2BLFCJ1YSrOIvFstTKhoGam69YHLXQlFxWUQIZQSky5-3SGFF2OVpuQuA4v1Z9BZra-aVvNMCDSZHep3vaoVDOTmASTmnlahR3vyhTY7pAN-xCuUARu5EBGLfiJiGyqU9JPVbKRLSE3ZRYeJXkfi-Zw"/>
                  <p className="mt-2 font-bold text-sm">Shop The Launch Collections</p>
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
            {useAuthStore().user ? (
              <div className="relative group">
                <div 
                  className="hover:text-brand flex items-center gap-1 cursor-pointer py-2"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div className="absolute right-0 top-full pt-1 w-48 hidden group-hover:block z-50">
                  <div className="bg-white shadow-xl border border-brand-border rounded-md overflow-hidden">
                    <div className="block p-4 border-b border-brand-border bg-neutral-light/50">
                      <p className="text-sm font-label-bold text-ink-deep truncate">Hi, {useAuthStore().user?.firstName || 'User'}</p>
                      <p className="text-xs text-on-surface-variant truncate">{useAuthStore().user?.email}</p>
                    </div>
                    <Link to="/account" className="w-full text-left px-4 py-3 text-sm font-label-bold text-ink-deep hover:bg-neutral-light transition-colors flex items-center gap-2 border-b border-brand-border">
                      <span className="material-symbols-outlined text-[16px]">person</span>
                      My Dashboard
                    </Link>
                    {(() => {
                      const user = useAuthStore().user;
                      const userRole = user?.role?.toUpperCase();
                      const userRoles = user?.roles?.map((r: string) => r.toUpperCase()) || [];
                      const isAdmin = userRole === 'ADMIN' || userRole === 'STAFF' || userRoles.includes('ADMIN') || userRoles.includes('STAFF');
                      return isAdmin ? (
                        <Link to="/admin" className="w-full text-left px-4 py-3 text-sm font-label-bold text-ink-deep hover:bg-neutral-light transition-colors flex items-center gap-2 border-b border-brand-border">
                          <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
                          Admin Dashboard
                        </Link>
                      ) : null;
                    })()}
                    <button 
                      onClick={() => {
                        useAuthStore.getState().logout()
                        window.location.href = '/'
                      }} 
                      className="w-full text-left px-4 py-3 text-sm font-label-bold text-error hover:bg-neutral-light transition-colors flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[16px]">logout</span>
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/sign-in" className="hover:text-brand">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </Link>
            )}

            {/* Wishlist Icon */}
            <Link to="/wishlist" className="hover:text-brand">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </Link>
            
            {/* Bag Icon */}
            <button onClick={toggleCart} className="hover:text-brand relative">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-ink-deep text-surface-cream text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            
            {/* Menu Icon */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="hover:text-brand lg:hidden">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Cart Slide-out Panel */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />
          
          {/* Panel */}
          <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface-cream shadow-2xl z-[70] flex flex-col transform transition-transform duration-300 ease-in-out border-l border-brand-border">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brand-border">
              <h2 className="font-headline-md text-ink-deep tracking-widest uppercase text-xl">Your Bag ({getCartCount()})</h2>
              <button onClick={() => setIsOpen(false)} className="text-surface-variant hover:text-ink-deep p-2">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 hide-scrollbar">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-surface-variant text-center space-y-4">
                  <span className="material-symbols-outlined text-5xl opacity-50">shopping_bag</span>
                  <p className="font-body-md">Your bag is currently empty.</p>
                  <button onClick={() => setIsOpen(false)} className="border-b border-ink-deep text-ink-deep font-label-bold pb-1 uppercase tracking-widest mt-4">Continue Shopping</button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    {/* Image */}
                    <Link to={`/product/${item.slug}` as any} onClick={() => setIsOpen(false)} className="w-24 aspect-[3/4] bg-neutral-light rounded overflow-hidden shrink-0">
                      <img src={item.image || 'https://via.placeholder.com/150'} alt={item.name} className="w-full h-full object-cover" />
                    </Link>
                    
                    {/* Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-1">
                        <Link to={`/product/${item.slug}` as any} onClick={() => setIsOpen(false)} className="font-label-bold text-ink-deep uppercase tracking-widest text-sm hover:text-accent-gold transition-colors line-clamp-1 pr-2">
                          {item.name}
                        </Link>
                        <button onClick={() => removeItem(item.id)} className="text-surface-variant hover:text-red-500">
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                      
                      <p className="text-surface-variant font-label-sm text-xs mb-3">{item.color} / {item.size}</p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-brand-border rounded">
                          <button 
                            disabled={item.quantity <= 1}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-ink-deep hover:bg-neutral-light disabled:opacity-30"
                          >-</button>
                          <span className="px-3 py-1 font-label-bold text-sm min-w-[2rem] text-center">{item.quantity}</span>
                          <button 
                            disabled={item.quantity >= item.maxInventory}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-ink-deep hover:bg-neutral-light disabled:opacity-30"
                          >+</button>
                        </div>
                        
                        <p className="font-label-bold text-ink-deep">₦{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-brand-border bg-white mt-auto space-y-4">
                <div className="flex justify-between items-center text-ink-deep font-headline-sm">
                  <span>Subtotal</span>
                  <span>₦{getCartTotal().toLocaleString()}</span>
                </div>
                <p className="text-surface-variant text-xs font-label-sm">Shipping & taxes calculated at checkout</p>
                <Link 
                  to="/checkout" 
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center bg-ink-deep text-surface-cream py-4 font-label-bold tracking-widest uppercase hover:bg-ink-deep/90 transition-colors shadow-lg"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </div>
        </>
      )}

      {/* Mobile Menu Slide-out */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[70] flex flex-col transform transition-transform duration-300 ease-in-out border-r border-brand-border lg:hidden">
            <div className="flex items-center justify-between p-6 border-b border-brand-border">
              <h2 className="font-headline-md text-ink-deep text-xl">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-surface-variant hover:text-ink-deep p-2">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 font-semibold text-ink-deep">
              <Link to="/collections" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-ink-deep/10 hover:text-brand transition-colors">Collections</Link>
              <Link to="/collections/sidrah-collection" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-ink-deep/10 hover:text-brand transition-colors pl-4 text-sm font-normal text-surface-variant">Sidrah Collection</Link>
              <Link to="/collections/layna-collection" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-ink-deep/10 hover:text-brand transition-colors pl-4 text-sm font-normal text-surface-variant">Layna Collection</Link>
              <Link to="/jewelry" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-ink-deep/10 hover:text-brand transition-colors">Jewelry</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-ink-deep/10 hover:text-brand transition-colors">About</Link>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-ink-deep/10 hover:text-brand transition-colors">Group Orders</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-ink-deep/10 hover:text-brand transition-colors">Students</a>
            </nav>
            <div className="p-6 border-t border-brand-border mt-auto">
              <div className="flex items-center space-x-2 mb-4">
                <img alt="US Flag" className="w-6 h-auto rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMlicBlnxrwTNQpyrmDfxZHHb2cBYCvuqn5zfHMrplISdLdfL27_Hm9tY3_C7DaUEiYFx-Ms3hn441LJGga29N2xzCXBEVs_Ts3H35NVYYA_u5MbRhswhllEq2lKU95r1PSeMHa6-Dt0AJViguWZNk_Rpyj6H4P7bu_YwGaCpNcwOyzTADqDB_b5C0_WxBNst1C4exOM2EwKjy6AW4Il0T9eZcOKSI1hxRRpOC-fqcWr-xutt6-54GaQ"/>
                <span className="text-sm font-semibold text-ink-deep">EN</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
