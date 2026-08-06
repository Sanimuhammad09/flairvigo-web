import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function AdminSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = (
    <>
      <Link to="/admin" activeOptions={{ exact: true }} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
        <span className="material-symbols-outlined icon-fill group-hover:text-accent-gold transition-colors">dashboard</span>
        <span className="font-label-bold group-hover:text-accent-gold transition-colors">Dashboard</span>
      </Link>
      <Link to="/admin/analytics" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
        <span className="material-symbols-outlined icon-fill group-hover:text-accent-gold transition-colors">insert_chart</span>
        <span className="font-label-bold group-hover:text-accent-gold transition-colors">Analytics</span>
      </Link>
      <Link to="/admin/orders" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
        <span className="material-symbols-outlined group-hover:text-accent-gold transition-colors">package_2</span>
        <span className="font-label-bold group-hover:text-accent-gold transition-colors">Orders</span>
      </Link>
      <Link to="/admin/inventory" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
        <span className="material-symbols-outlined group-hover:text-accent-gold transition-colors">inventory_2</span>
        <span className="font-label-bold group-hover:text-accent-gold transition-colors">Inventory</span>
      </Link>
      <Link to="/admin/customers" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
        <span className="material-symbols-outlined group-hover:text-accent-gold transition-colors">group</span>
        <span className="font-label-bold group-hover:text-accent-gold transition-colors">Customers</span>
      </Link>
      <Link to="/admin/marketing" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
        <span className="material-symbols-outlined group-hover:text-accent-gold transition-colors">campaign</span>
        <span className="font-label-bold group-hover:text-accent-gold transition-colors">Marketing</span>
      </Link>
      <Link to="/admin/settings" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
        <span className="material-symbols-outlined group-hover:text-accent-gold transition-colors">settings</span>
        <span className="font-label-bold group-hover:text-accent-gold transition-colors">Settings</span>
      </Link>
    </>
  )

  return (
    <>
      {/* Mobile Top Header */}
      <header className="lg:hidden flex items-center justify-between p-4 bg-surface-cream border-b border-ink-deep/10 sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2">
          <img alt="Flair Vigo Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyf_YLPJ-uAika6zi0ciCVAS-uISkteIM2ux371p2IMF6mb5MG4DIBPJpanL7NsSwbMP3B61T5txuiJVr2b9upM_X5aaeCLK2EY73taf6I2mr3V2ze8U1S8oUNvl7KW6tobocmENZfuuVRXsZqb8w4Z67wwNGFErnjvSL6SrP8dk42dcM2Tv6BB8O8TGpWzEGVzcCzDiB-K9iyb3VB1MjIMiC-MqvRZGGVEhM0rJdFsV89822ykyGLHxw51m2jFWUI9M" />
        </Link>
        <button onClick={() => setIsMobileMenuOpen(true)} className="text-ink-deep p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[60] lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-surface-cream shadow-2xl z-[70] flex flex-col transform transition-transform duration-300 lg:hidden">
            <div className="p-4 flex justify-between items-center border-b border-ink-deep/10">
              <h2 className="font-headline-md text-ink-deep">Admin Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant hover:text-ink-deep">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-2">
              {navLinks}
            </nav>
            <div className="p-4 border-t border-ink-deep/10">
              <button 
                onClick={() => {
                  import('../store/auth').then(({ useAuthStore }) => {
                    useAuthStore.getState().logout()
                    window.location.href = '/sign-in'
                  })
                }} 
                className="w-full bg-error text-surface-cream font-label-bold py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col h-screen sticky top-0 p-gutter docked left-0 w-64 bg-neutral-light border-r border-ink-deep/5 flat no shadows z-30">
        <div className="mb-12 flex flex-col items-center">
          <Link to="/">
            <img alt="Flair Vigo Logo" className="h-16 w-auto mb-6 object-contain cursor-pointer hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyf_YLPJ-uAika6zi0ciCVAS-uISkteIM2ux371p2IMF6mb5MG4DIBPJpanL7NsSwbMP3B61T5txuiJVr2b9upM_X5aaeCLK2EY73taf6I2mr3V2ze8U1S8oUNvl7KW6tobocmENZfuuVRXsZqb8w4Z67wwNGFErnjvSL6SrP8dk42dcM2Tv6BB8O8TGpWzEGVzcCzDiB-K9iyb3VB1MjIMiC-MqvRZGGVEhM0rJdFsV89822ykyGLHxw51m2jFWUI9M" />
          </Link>
          <h2 className="font-headline-md text-headline-md text-ink-deep">Flair Admin</h2>
          <p className="text-on-surface-variant font-body-md text-sm mt-1">Store Manager</p>
        </div>
        
        <nav className="flex-1 space-y-2">
          {navLinks}
        </nav>
        
        <div className="mt-auto border-t border-ink-deep/10 pt-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-ink-deep/20">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSAOAtrZeNQTCX-cCjttw2b7DcMe717K7nnlXoOj43uxG_ZGyIBKs9UxELLCxOPq_gHLd26fejs-rp7HVU4SEQ2VNYZGH15ysrXm-LHlbrlSEkdFcA1ZYavmY-epCJ5ESvttNHIPDkUnVGdeQO2o799EZNxlFqHwNekY6YYlk1FpdvYYCftqSp3wKuKOlAqJQUsIMDzccPakthOOFM7nl4XjZfOJfO_too1MqPceBiz1nFBYR9DLxiZg" />
            </div>
            <div>
              <p className="font-label-bold text-ink-deep text-sm">Admin Profile</p>
              <button 
                onClick={() => {
                  import('../store/auth').then(({ useAuthStore }) => {
                    useAuthStore.getState().logout()
                    window.location.href = '/sign-in'
                  })
                }} 
                className="text-accent-gold text-xs font-label-bold uppercase hover:underline"
              >
                Sign Out
              </button>
            </div>
          </div>
          <button className="w-full bg-ink-deep text-surface-cream font-label-bold py-3 rounded-lg hover:bg-ink-deep/90 transition-colors">
            Export Reports
          </button>
        </div>
      </aside>
    </>
  )
}
