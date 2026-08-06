export function PaymentSettings() {
  return (
    <div className="flex flex-col gap-8">
      <div className="mb-4">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep mb-2">Payment Configuration</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Manage connected payment providers, currency settings, and automated payout schedules for your store.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Payment Providers (Large) */}
        <div className="md:col-span-2 bg-surface-cream border border-primary/10 p-6 md:p-8 rounded-xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline-md text-headline-md text-ink-deep flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-gold">account_balance_wallet</span>
                Payment Providers
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">Configure active gateways for customer checkout.</p>
            </div>
            <button className="text-accent-gold font-label-bold text-label-sm hover:underline uppercase tracking-wider">Add Provider</button>
          </div>
          
          <div className="space-y-4 flex-1">
            {/* Stripe */}
            <div className="flex items-center justify-between p-4 border border-primary/10 rounded-lg bg-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#635BFF]/10 rounded flex items-center justify-center text-[#635BFF] font-bold text-xl">S</div>
                <div>
                  <p className="font-label-bold text-label-bold text-ink-deep">Stripe</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Credit cards, Google Pay</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 bg-[#e4f8ec] text-[#0f5c2e] text-[10px] font-bold uppercase rounded-sm">Active</span>
                <button className="text-on-surface-variant hover:text-ink-deep"><span className="material-symbols-outlined text-sm">more_vert</span></button>
              </div>
            </div>
            {/* PayPal */}
            <div className="flex items-center justify-between p-4 border border-primary/10 rounded-lg bg-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#003087]/10 rounded flex items-center justify-center text-[#003087] font-bold text-xl italic">P</div>
                <div>
                  <p className="font-label-bold text-label-bold text-ink-deep">PayPal</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Express checkout</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 bg-[#e4f8ec] text-[#0f5c2e] text-[10px] font-bold uppercase rounded-sm">Active</span>
                <button className="text-on-surface-variant hover:text-ink-deep"><span className="material-symbols-outlined text-sm">more_vert</span></button>
              </div>
            </div>
            {/* Apple Pay */}
            <div className="flex items-center justify-between p-4 border border-primary/10 rounded-lg bg-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black/5 rounded flex items-center justify-center text-black font-bold text-xl">
                  <span className="material-symbols-outlined">file_download</span>
                </div>
                <div>
                  <p className="font-label-bold text-label-bold text-ink-deep">Apple Pay</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Wallet payments</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-ink-deep"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Currency Settings */}
        <div className="bg-surface-cream border border-primary/10 p-6 md:p-8 rounded-xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="font-headline-md text-headline-md text-ink-deep flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-accent-gold">payments</span>
            Currencies
          </h3>
          <div className="space-y-5">
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Base Store Currency</label>
              <select className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-accent-gold focus:ring-0 px-0 py-2 font-body-md text-body-md text-ink-deep">
                <option value="NGN">NGN - Naira (₦)</option>
                <option value="USD">USD - US Dollar ($)</option>
                <option value="EUR">EUR - Euro (€)</option>
                <option value="GBP">GBP - British Pound (£)</option>
              </select>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Accepted Currencies</label>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-ink-deep text-surface-cream rounded-full font-label-sm text-label-sm flex items-center gap-1">
                  NGN <button className="hover:text-accent-gold"><span className="material-symbols-outlined text-[14px]">close</span></button>
                </span>
                <span className="px-3 py-1 bg-ink-deep text-surface-cream rounded-full font-label-sm text-label-sm flex items-center gap-1">
                  USD <button className="hover:text-accent-gold"><span className="material-symbols-outlined text-[14px]">close</span></button>
                </span>
                <button className="px-3 py-1 border border-primary/20 text-on-surface-variant rounded-full font-label-sm text-label-sm hover:border-accent-gold hover:text-accent-gold transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">add</span> Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payout Schedule */}
        <div className="bg-surface-cream border border-primary/10 p-6 md:p-8 rounded-xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="font-headline-md text-headline-md text-ink-deep flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-accent-gold">event_upcoming</span>
            Payout Schedule
          </h3>
          <div className="space-y-4">
            <div className="p-4 border border-primary/10 rounded bg-white/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-gold"></div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Current Balance</p>
              <p className="font-headline-lg text-headline-lg-mobile text-ink-deep">₦12,450.00</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Next payout: Oct 24, 2023</p>
            </div>
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-2">Frequency</label>
              <select className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-accent-gold focus:ring-0 px-0 py-2 font-body-md text-body-md text-ink-deep">
                <option>Daily (Standard)</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Manual</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tax Calculation */}
        <div className="md:col-span-2 bg-surface-cream border border-primary/10 p-6 md:p-8 rounded-xl flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex justify-between items-start mb-6">
            <h3 className="font-headline-md text-headline-md text-ink-deep flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-gold">receipt_long</span>
              Tax Calculation
            </h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-9 h-5 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-ink-deep"></div>
              <span className="ml-3 font-label-bold text-label-bold text-ink-deep">Auto-Calculate</span>
            </label>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-label-bold text-label-bold text-ink-deep mb-2">Tax Regions</p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">You are currently collecting taxes in 3 regions.</p>
              <ul className="space-y-2">
                <li className="flex justify-between items-center py-2 border-b border-primary/10">
                  <span className="font-body-md text-body-md">Nigeria</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">VAT 7.5%</span>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-primary/10">
                  <span className="font-body-md text-body-md">Nigeria</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">State-level</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-neutral-light/50 p-4 rounded-lg border border-primary/5">
              <p className="font-label-bold text-label-bold text-ink-deep mb-3">Product Overrides</p>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-primary/10 mb-2">
                <span className="font-body-md text-body-md">Medical Scrubs</span>
                <span className="font-label-sm text-label-sm px-2 py-1 bg-surface-variant rounded">Tax Exempt</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-primary/10">
                <span className="font-body-md text-body-md">Accessories</span>
                <span className="font-label-sm text-label-sm px-2 py-1 bg-surface-variant rounded">Standard Rate</span>
              </div>
              <button className="mt-4 text-accent-gold font-label-bold text-label-sm hover:underline w-full text-center">Manage Tax Classes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
