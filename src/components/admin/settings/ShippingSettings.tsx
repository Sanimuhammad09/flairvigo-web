export function ShippingSettings() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-ink-deep">Shipping & Delivery</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">Configure global shipping zones, carrier integrations, and strategic free shipping thresholds to optimize conversion rates.</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Shipping Zones (Primary Large Area) */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <div className="bg-surface-lowest rounded-xl border border-primary/10 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 h-full bg-white">
            <div className="flex justify-between items-center border-b border-primary/10 pb-4">
              <h3 className="font-headline-md text-headline-md text-ink-deep flex items-center gap-2">
                <span className="material-symbols-outlined">public</span>
                Shipping Zones
              </h3>
              <button className="text-accent-gold font-label-bold text-label-bold hover:text-ink-deep transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">add</span> Add Zone
              </button>
            </div>

            {/* Domestic Zone */}
            <div className="p-6 rounded-lg bg-surface-cream border border-primary/10 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-gold"></div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline-md text-[18px] font-semibold text-ink-deep">Domestic (United States)</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">50 States, Puerto Rico, and APO/FPO addresses</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ink-deep"></div>
                </label>
              </div>
              <div className="flex gap-2 flex-wrap mt-2">
                <span className="px-3 py-1 rounded-full bg-neutral-light border border-primary/10 font-label-sm text-label-sm text-on-surface-variant">Standard</span>
                <span className="px-3 py-1 rounded-full bg-neutral-light border border-primary/10 font-label-sm text-label-sm text-on-surface-variant">Express (2-Day)</span>
                <span className="px-3 py-1 rounded-full bg-neutral-light border border-primary/10 font-label-sm text-label-sm text-on-surface-variant">Overnight</span>
              </div>
            </div>

            {/* International Zone */}
            <div className="p-6 rounded-lg border border-primary/10 flex flex-col gap-4 relative overflow-hidden hover:bg-surface-cream transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-outline-variant"></div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline-md text-[18px] font-semibold text-ink-deep">International (Rest of World)</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">240+ countries and territories</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ink-deep"></div>
                </label>
              </div>
              <div className="flex gap-2 flex-wrap mt-2">
                <span className="px-3 py-1 rounded-full bg-neutral-light border border-primary/10 font-label-sm text-label-sm text-on-surface-variant opacity-60">Standard Intl</span>
                <span className="px-3 py-1 rounded-full bg-neutral-light border border-primary/10 font-label-sm text-label-sm text-on-surface-variant opacity-60">DHL Express</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Settings (Right Sidebar) */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          {/* Free Shipping Threshold */}
          <div className="bg-ink-deep rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-surface-cream relative overflow-hidden">
            {/* Abstract decorative bg */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-gold/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-accent-gold">redeem</span>
                <h3 className="font-headline-md text-[20px] font-semibold text-surface-cream">Free Shipping</h3>
              </div>
              <p className="font-body-md text-[14px] text-surface-cream/80 mb-6">Incentivize larger cart sizes by offering free domestic shipping over a specific threshold.</p>
              
              <div className="bg-surface-cream/10 p-4 rounded-lg border border-surface-cream/20 backdrop-blur-sm">
                <label className="block font-label-sm text-label-sm text-surface-cream/70 mb-2">Order Subtotal Threshold (USD)</label>
                <div className="flex items-center">
                  <span className="text-xl font-headline-md text-accent-gold mr-2">$</span>
                  <input className="w-full bg-transparent border-b border-surface-cream/30 text-headline-md font-headline-md text-surface-cream focus:outline-none focus:border-accent-gold focus:ring-0 pb-1" type="text" defaultValue="150.00" />
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-surface-variant/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-gold"></div>
                </label>
                <span className="font-label-sm text-label-sm text-surface-cream/70">Enable promotional banner</span>
              </div>
            </div>
          </div>

          {/* Carrier Integrations */}
          <div className="bg-white rounded-xl border border-primary/10 p-6 shadow-sm hover:shadow-md transition-shadow flex-grow flex flex-col">
            <h3 className="font-headline-md text-[18px] font-semibold text-ink-deep mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">local_shipping</span>
              Active Carriers
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* Carrier Item */}
              <div className="flex items-center justify-between p-3 rounded bg-neutral-light border border-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-white border border-primary/10 flex items-center justify-center font-bold text-ink-deep text-xs tracking-tighter">
                    FEDEX
                  </div>
                  <span className="font-body-md font-semibold text-on-surface">FedEx API</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Connected</span>
                </div>
              </div>

              {/* Carrier Item */}
              <div className="flex items-center justify-between p-3 rounded bg-neutral-light border border-primary/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-white border border-primary/10 flex items-center justify-center font-bold text-secondary text-xs tracking-tighter">
                    UPS
                  </div>
                  <span className="font-body-md font-semibold text-on-surface">UPS Connect</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Connected</span>
                </div>
              </div>

              {/* Carrier Item */}
              <div className="flex items-center justify-between p-3 rounded border border-dashed border-primary/20 opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-surface-dim flex items-center justify-center font-bold text-on-surface-variant text-xs tracking-tighter">
                    DHL
                  </div>
                  <span className="font-body-md text-on-surface-variant">DHL Express</span>
                </div>
                <button className="font-label-sm text-accent-gold hover:underline">Connect</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
