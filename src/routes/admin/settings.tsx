import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { GeneralSettings } from '../../components/admin/settings/GeneralSettings'
import { ShippingSettings } from '../../components/admin/settings/ShippingSettings'
import { PaymentSettings } from '../../components/admin/settings/PaymentSettings'
import { TeamSettings } from '../../components/admin/settings/TeamSettings'

export const Route = createFileRoute('/admin/settings')({
  component: AdminSettings,
})

function AdminSettings() {
  const [activeTab, setActiveTab] = useState('General')
  
  const renderContent = () => {
    switch (activeTab) {
      case 'General':
        return <GeneralSettings />
      case 'Shipping':
        return <ShippingSettings />
      case 'Payments':
        return <PaymentSettings />
      case 'Team & Roles':
        return <TeamSettings />
      default:
        return <GeneralSettings />
    }
  }

  return (
    <main className="flex-1 flex flex-col min-h-screen">
      <div className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">Settings</h1>
          <p className="text-on-surface-variant">Manage your store preferences, team access, and operational details.</p>
        </div>
        
        {/* Settings Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-ink-deep/10 mb-8 gap-4">
          {['General', 'Shipping', 'Payments', 'Team & Roles'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-label-bold text-label-bold border-b-2 transition-all duration-300 whitespace-nowrap ${
                activeTab === tab
                  ? 'border-accent-gold text-accent-gold'
                  : 'border-transparent text-on-surface-variant hover:text-ink-deep'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Settings Content Area */}
        <div className="mb-20">
          {renderContent()}
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-12 pt-6 border-t border-ink-deep/10 sticky bottom-0 bg-surface-cream/90 backdrop-blur-sm pb-6 z-10">
          <button className="px-8 py-3 border-2 border-ink-deep text-ink-deep font-label-bold text-label-bold hover:bg-ink-deep hover:text-surface-cream transition-colors rounded">
            Cancel
          </button>
          <button className="px-10 py-3 bg-accent-gold text-surface-cream font-label-bold text-label-bold hover:bg-ink-deep transition-colors shadow-lg rounded">
            Save Changes
          </button>
        </div>
      </div>
    </main>
  )
}
