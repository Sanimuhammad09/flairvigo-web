import { Link } from '@tanstack/react-router'

export function AdminSidebar() {
  return (
    <aside className="hidden lg:flex flex-col h-screen sticky top-0 p-gutter docked left-0 w-64 bg-neutral-light border-r border-ink-deep/5 flat no shadows">
      <div className="mb-12 flex flex-col items-center">
        <Link to="/">
          <img alt="Flair Vigo Logo" className="h-16 w-auto mb-6 object-contain cursor-pointer hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuyf_YLPJ-uAika6zi0ciCVAS-uISkteIM2ux371p2IMF6mb5MG4DIBPJpanL7NsSwbMP3B61T5txuiJVr2b9upM_X5aaeCLK2EY73taf6I2mr3V2ze8U1S8oUNvl7KW6tobocmENZfuuVRXsZqb8w4Z67wwNGFErnjvSL6SrP8dk42dcM2Tv6BB8O8TGpWzEGVzcCzDiB-K9iyb3VB1MjIMiC-MqvRZGGVEhM0rJdFsV89822ykyGLHxw51m2jFWUI9M" />
        </Link>
        <h2 className="font-headline-md text-headline-md text-ink-deep">Flair Admin</h2>
        <p className="text-on-surface-variant font-body-md text-sm mt-1">Store Manager</p>
      </div>
      
      <nav className="flex-1 space-y-2">
        <Link to="/admin" activeOptions={{ exact: true }} className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
          <span className="material-symbols-outlined icon-fill group-hover:text-accent-gold transition-colors">dashboard</span>
          <span className="font-label-bold group-hover:text-accent-gold transition-colors">Dashboard</span>
        </Link>
        <Link to="/admin/analytics" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
          <span className="material-symbols-outlined icon-fill group-hover:text-accent-gold transition-colors">insert_chart</span>
          <span className="font-label-bold group-hover:text-accent-gold transition-colors">Analytics</span>
        </Link>
        <Link to="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
          <span className="material-symbols-outlined group-hover:text-accent-gold transition-colors">package_2</span>
          <span className="font-label-bold group-hover:text-accent-gold transition-colors">Orders</span>
        </Link>
        <Link to="/admin/inventory" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
          <span className="material-symbols-outlined group-hover:text-accent-gold transition-colors">inventory_2</span>
          <span className="font-label-bold group-hover:text-accent-gold transition-colors">Inventory</span>
        </Link>
        <Link to="/admin/customers" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
          <span className="material-symbols-outlined group-hover:text-accent-gold transition-colors">group</span>
          <span className="font-label-bold group-hover:text-accent-gold transition-colors">Customers</span>
        </Link>
        <Link to="/admin/marketing" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
          <span className="material-symbols-outlined group-hover:text-accent-gold transition-colors">campaign</span>
          <span className="font-label-bold group-hover:text-accent-gold transition-colors">Marketing</span>
        </Link>
        <Link to="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg group activeProps={{ className: 'bg-surface-cream text-accent-gold font-bold translate-x-1' }}">
          <span className="material-symbols-outlined group-hover:text-accent-gold transition-colors">settings</span>
          <span className="font-label-bold group-hover:text-accent-gold transition-colors">Settings</span>
        </Link>
      </nav>
      
      <div className="mt-auto border-t border-ink-deep/10 pt-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-ink-deep/20">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSAOAtrZeNQTCX-cCjttw2b7DcMe717K7nnlXoOj43uxG_ZGyIBKs9UxELLCxOPq_gHLd26fejs-rp7HVU4SEQ2VNYZGH15ysrXm-LHlbrlSEkdFcA1ZYavmY-epCJ5ESvttNHIPDkUnVGdeQO2o799EZNxlFqHwNekY6YYlk1FpdvYYCftqSp3wKuKOlAqJQUsIMDzccPakthOOFM7nl4XjZfOJfO_too1MqPceBiz1nFBYR9DLxiZg" />
          </div>
          <div>
            <p className="font-label-bold text-ink-deep text-sm">Admin Profile</p>
            <button className="text-accent-gold text-xs font-label-bold uppercase hover:underline">Sign Out</button>
          </div>
        </div>
        <button className="w-full bg-ink-deep text-surface-cream font-label-bold py-3 rounded-lg hover:bg-ink-deep/90 transition-colors">
          Export Reports
        </button>
      </div>
    </aside>
  )
}
