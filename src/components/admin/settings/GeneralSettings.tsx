export function GeneralSettings() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="space-y-8">
        {/* Section: Store Profile */}
        <section className="bg-surface p-6 md:p-8 rounded-xl border border-ink-deep/10 shadow-sm">
          <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-gold">storefront</span>
            Store Profile
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">Store Name</label>
                <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="text" defaultValue="Flair Vigo" />
              </div>
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">Legal Business Name</label>
                <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="text" defaultValue="Flair Holdings LLC" />
              </div>
            </div>
            <div>
              <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">Store Description</label>
              <textarea className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50 resize-none" rows={3} defaultValue="High-end performance apparel and minimalist accessories designed for the modern professional." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">Contact Email</label>
                <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="email" defaultValue="hello@flairvigo.com" />
              </div>
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">Support Phone</label>
                <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Section: Address */}
        <section className="bg-surface p-6 md:p-8 rounded-xl border border-ink-deep/10 shadow-sm">
          <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-gold">location_on</span>
            Primary Address
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">Street Address</label>
              <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="text" defaultValue="100 Fashion Avenue, Suite 400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">City</label>
                <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="text" defaultValue="New York" />
              </div>
              <div className="md:col-span-1">
                <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">State / Province</label>
                <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="text" defaultValue="NY" />
              </div>
              <div className="md:col-span-1">
                <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">ZIP / Postal</label>
                <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="text" defaultValue="10001" />
              </div>
            </div>
            <div>
              <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">Country</label>
              <select className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>
          </div>
        </section>
      </div>
      
      {/* Right Column */}
      <div className="space-y-8">
        {/* Section: Profile & Security */}
        <section className="bg-surface p-6 md:p-8 rounded-xl border border-ink-deep/10 shadow-sm">
          <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-gold">security</span>
            Profile & Security
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">Manager Name</label>
                <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="text" defaultValue="Jane Doe" />
              </div>
              <div>
                <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">Login Email</label>
                <input className="w-full bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="email" defaultValue="jane.doe@flairvigo.com" />
              </div>
            </div>
            <div>
              <label className="block font-label-bold text-label-bold text-ink-deep/70 mb-1">Password</label>
              <div className="flex gap-4 items-end">
                <input className="flex-1 bg-transparent border-0 border-b border-ink-deep/20 px-0 py-2 focus:ring-0 focus:border-accent-gold font-body-md text-body-md transition-colors placeholder-on-surface-variant/50" type="password" defaultValue="********" />
                <button className="px-4 py-2 bg-ink-deep/10 text-ink-deep font-label-bold text-label-bold hover:bg-ink-deep/20 transition-colors whitespace-nowrap">Change</button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-surface-cream border border-accent-gold/20 rounded-lg">
              <div>
                <p className="font-label-bold text-label-bold text-ink-deep">Two-Factor Authentication</p>
                <p className="text-sm text-on-surface-variant">Add an extra layer of security to your account.</p>
              </div>
              <button className="px-4 py-2 border border-accent-gold text-accent-gold font-label-bold text-label-bold hover:bg-accent-gold hover:text-surface-cream transition-colors">Enable 2FA</button>
            </div>
          </div>
        </section>
        
        {/* Status Card */}
        <div className="bg-gradient-to-br from-ink-deep to-neutral-800 p-6 md:p-8 rounded-xl text-surface-cream shadow-md">
          <h4 className="font-label-bold text-label-bold text-surface-cream/70 mb-4 uppercase tracking-wider">Store Status</h4>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-green-400 border-2 border-surface-cream animate-pulse"></span>
              <span className="font-display-lg text-4xl font-bold">Active</span>
            </div>
            <span className="material-symbols-outlined text-4xl opacity-50">public</span>
          </div>
          <p className="text-surface-cream/80 mb-6 text-sm">Your store is currently live and accepting orders from customers worldwide.</p>
          <button className="w-full py-3 border border-surface-cream text-surface-cream font-label-bold text-label-bold hover:bg-surface-cream hover:text-ink-deep transition-colors text-sm rounded">
            Put Store on Pause
          </button>
        </div>
        
        {/* Regional Settings */}
        <div className="bg-surface p-6 md:p-8 rounded-xl border border-ink-deep/10 shadow-sm">
          <h4 className="font-label-bold text-label-bold text-ink-deep/70 mb-4 uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-accent-gold text-lg">language</span>
            Regional Details
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 hover:bg-surface-cream rounded-lg transition-colors group">
              <div>
                <label className="text-xs font-label-bold text-ink-deep/50 block mb-1">Store Currency</label>
                <span className="font-body-md text-body-md font-semibold text-ink-deep">NGN (₦)</span>
              </div>
              <button className="text-accent-gold text-sm hover:underline opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><span className="material-symbols-outlined text-sm">edit</span> Edit</button>
            </div>
            <hr className="border-ink-deep/5" />
            <div className="flex items-center justify-between p-3 hover:bg-surface-cream rounded-lg transition-colors group">
              <div>
                <label className="text-xs font-label-bold text-ink-deep/50 block mb-1">Timezone</label>
                <span className="font-body-md text-body-md font-semibold text-ink-deep">(GMT-05:00) EST</span>
              </div>
              <button className="text-accent-gold text-sm hover:underline opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><span className="material-symbols-outlined text-sm">edit</span> Edit</button>
            </div>
            <hr className="border-ink-deep/5" />
            <div className="flex items-center justify-between p-3 hover:bg-surface-cream rounded-lg transition-colors group">
              <div>
                <label className="text-xs font-label-bold text-ink-deep/50 block mb-1">System of Measurement</label>
                <span className="font-body-md text-body-md font-semibold text-ink-deep">Imperial (lb, in)</span>
              </div>
              <button className="text-accent-gold text-sm hover:underline opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><span className="material-symbols-outlined text-sm">edit</span> Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
