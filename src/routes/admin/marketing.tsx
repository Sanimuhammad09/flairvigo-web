import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/marketing')({
  component: AdminMarketing,
})

function AdminMarketing() {
  return (
    <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-surface-cream">
      {/* Top Bar for Main Content */}
      <header className="sticky top-0 z-30 bg-surface-cream/90 backdrop-blur-md border-b border-ink-deep/10 px-margin-desktop py-6 flex justify-between items-end">
        <div>
          <div className="text-label-sm font-label-sm text-accent-gold uppercase tracking-widest mb-1">Marketing</div>
          <h2 className="font-headline-lg text-headline-lg text-ink-deep">Promotions Management</h2>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-ink-deep/20 text-ink-deep font-label-bold text-label-bold hover:border-accent-gold hover:text-accent-gold transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Campaign
          </button>
          <button className="px-6 py-3 bg-ink-deep text-surface-cream font-label-bold text-label-bold hover:bg-ink-deep/90 transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">sell</span>
            Create Code
          </button>
        </div>
      </header>
      
      <div className="p-margin-desktop max-w-container-max mx-auto w-full space-y-section-gap-md">
        {/* Bento Grid: Overview & Quick Actions */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Promo Stats */}
          <div className="md:col-span-2 bg-neutral-light p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 opacity-5 pointer-events-none transition-transform duration-700 group-hover:scale-110">
              <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>loyalty</span>
            </div>
            <div className="z-10">
              <h3 className="font-headline-md text-headline-md mb-2">Active Impact</h3>
              <p className="text-on-surface-variant font-body-md mb-8">Performance metrics for current promotional campaigns.</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-display-lg font-display-lg text-ink-deep">12</div>
                  <div className="text-label-bold font-label-bold text-accent-gold">Active Codes</div>
                </div>
                <div>
                  <div className="text-display-lg font-display-lg text-ink-deep">4.2k</div>
                  <div className="text-label-bold font-label-bold text-accent-gold">Total Redemptions</div>
                </div>
                <div>
                  <div className="text-display-lg font-display-lg text-ink-deep">+18%</div>
                  <div className="text-label-bold font-label-bold text-accent-gold">Conversion Lift</div>
                </div>
              </div>
            </div>
          </div>
          {/* Next Scheduled */}
          <div className="bg-ink-deep text-surface-cream p-8 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-headline-md text-headline-md">Upcoming</h3>
              <span className="material-symbols-outlined text-accent-gold" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
            </div>
            <div className="space-y-4 flex-1">
              <div className="border-l-2 border-accent-gold pl-4">
                <div className="text-label-sm font-label-sm text-surface-cream/60 mb-1">Starts Oct 15</div>
                <div className="font-label-bold text-label-bold">FALL20 - Outerwear Event</div>
                <div className="text-sm mt-1 opacity-80">20% off all jackets & coats</div>
              </div>
              <div className="border-l-2 border-surface-cream/20 pl-4">
                <div className="text-label-sm font-label-sm text-surface-cream/60 mb-1">Starts Nov 01</div>
                <div className="font-label-bold text-label-bold">VIP Early Access</div>
                <div className="text-sm mt-1 opacity-80">Exclusive tier only</div>
              </div>
            </div>
            <button className="mt-6 text-accent-gold font-label-bold text-label-bold flex items-center gap-1 hover:text-surface-cream transition-colors w-max">
              View Schedule <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
