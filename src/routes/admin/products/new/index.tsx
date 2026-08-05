import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/products/new/')({
  component: AddProductBasic,
})

function AddProductBasic() {
  return (
    <main className="flex-1 flex flex-col min-h-screen bg-surface-cream text-ink-deep font-body-md">
      {/* TopAppBar */}
      <header className="bg-surface-bright dark:bg-background border-b border-ink-deep/5 flex justify-between items-center w-full px-margin-desktop h-20 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <h2 className="font-headline-md text-headline-md font-semibold text-ink-deep hidden md:block">MedLux Apparel</h2>
        </div>
        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input className="w-full bg-neutral-light border-0 rounded-full py-2 pl-10 pr-4 focus:ring-1 focus:ring-accent-gold font-body-md text-body-md" placeholder="Search..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <button className="text-on-surface-variant hover:text-ink-deep transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:text-ink-deep transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
          <div className="h-8 w-px bg-ink-deep/10 mx-2"></div>
          <Link to="/admin/inventory" className="text-on-surface-variant hover:text-ink-deep font-label-bold text-label-bold transition-opacity hover:opacity-80">Discard</Link>
          <Link to="/admin/products/new/variants" className="bg-ink-deep text-surface-cream px-6 py-2 rounded font-label-bold text-label-bold hover:opacity-90 transition-opacity">Next: Variants</Link>
        </div>
      </header>

      {/* Content Canvas */}
      <div className="flex-1 p-margin-desktop overflow-y-auto">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-on-surface-variant/70 font-label-sm text-label-sm">
          <Link className="hover:text-ink-deep transition-colors" to="/admin/inventory">Inventory</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-ink-deep font-semibold">Basic Info & Media</span>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-headline-lg text-headline-lg font-semibold text-ink-deep mb-8">Basic Info & Media</h1>
          
          <div className="bg-surface-container-lowest border border-ink-deep/10 rounded-xl p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Product Title</label>
                <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 focus:ring-0 focus:border-accent-gold px-0 py-2 font-body-md text-body-md text-ink-deep transition-colors" type="text" placeholder="e.g. Premium Medical Scrubs Top"/>
              </div>
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Description</label>
                <textarea className="w-full bg-transparent border border-ink-deep/10 rounded focus:ring-1 focus:ring-accent-gold p-3 font-body-md text-body-md text-ink-deep transition-colors" rows={5} placeholder="Product description..."></textarea>
              </div>
              
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep mb-2">Media</label>
                <div className="border-2 border-dashed border-ink-deep/20 rounded-xl p-12 text-center hover:bg-neutral-light transition-colors cursor-pointer">
                   <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">add_photo_alternate</span>
                   <p className="font-body-md text-ink-deep font-medium">Add files or drop files to upload</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
