import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/api'

export const Route = createFileRoute('/admin/marketing_/new-coupon')({
  component: NewCouponPage,
})

function NewCouponPage() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  
  const [formData, setFormData] = useState({
    code: '',
    type: 'PERCENTAGE',
    value: '',
    minOrderValue: '',
    maxDiscount: '',
    usageLimit: '',
    startDate: '',
    endDate: ''
  })
  
  const [error, setError] = useState('')

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await api.post('/admin/marketing/coupons', data)
      return res.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'coupons'] })
      navigate({ to: '/admin/marketing' })
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || 'Failed to create coupon')
    }
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Formatting data for backend
    const payload = {
      code: formData.code.toUpperCase(),
      type: formData.type,
      value: parseFloat(formData.value),
      minOrderValue: formData.minOrderValue ? parseFloat(formData.minOrderValue) : null,
      maxDiscount: formData.maxDiscount ? parseFloat(formData.maxDiscount) : null,
      usageLimit: formData.usageLimit ? parseInt(formData.usageLimit, 10) : null,
      startDate: formData.startDate ? new Date(formData.startDate).toISOString() : null,
      endDate: formData.endDate ? new Date(formData.endDate).toISOString() : null,
    }
    
    if (!payload.code || !payload.value) {
      setError('Code and Discount Value are required.')
      return
    }

    createMutation.mutate(payload)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-surface-cream">
      <header className="sticky top-0 z-30 bg-surface-cream/90 backdrop-blur-md border-b border-ink-deep/10 px-margin-desktop py-6 flex justify-between items-end">
        <div>
          <Link to="/admin/marketing" className="text-label-sm font-label-sm text-on-surface-variant hover:text-ink-deep flex items-center gap-1 mb-2 transition-colors w-max">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Promotions
          </Link>
          <h2 className="font-headline-lg text-headline-lg text-ink-deep">Create Discount Code</h2>
        </div>
        <div>
          <button 
            onClick={handleSubmit} 
            disabled={createMutation.isPending}
            className="px-6 py-3 bg-ink-deep text-surface-cream font-label-bold text-label-bold hover:bg-ink-deep/90 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {createMutation.isPending ? 'Saving...' : 'Save Promotion'}
          </button>
        </div>
      </header>
      
      <div className="p-margin-desktop max-w-3xl mx-auto w-full py-12">
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 border border-ink-deep/10 rounded-sm">
          
          {error && (
            <div className="bg-red-50 text-red-600 p-4 border border-red-200 rounded-sm text-sm font-label-bold">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <h3 className="font-headline-md text-ink-deep border-b border-ink-deep/10 pb-4">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-label-bold text-ink-deep">Coupon Code *</label>
                <input 
                  type="text" 
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="e.g. SUMMER20" 
                  className="w-full p-3 bg-surface-cream border border-ink-deep/20 focus:border-accent-gold focus:outline-none transition-colors uppercase" 
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-headline-md text-ink-deep border-b border-ink-deep/10 pb-4">Discount Type & Value</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-label-bold text-ink-deep">Discount Type *</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full p-3 bg-surface-cream border border-ink-deep/20 focus:border-accent-gold focus:outline-none transition-colors"
                >
                  <option value="PERCENTAGE">Percentage (%)</option>
                  <option value="FIXED">Fixed Amount (₦)</option>
                  <option value="FREE_SHIPPING">Free Shipping</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-label-bold text-ink-deep">Discount Value *</label>
                <input 
                  type="number" 
                  name="value"
                  value={formData.value}
                  onChange={handleChange}
                  placeholder={formData.type === 'PERCENTAGE' ? "20" : "5000"} 
                  className="w-full p-3 bg-surface-cream border border-ink-deep/20 focus:border-accent-gold focus:outline-none transition-colors" 
                  required
                  min="0"
                  step={formData.type === 'PERCENTAGE' ? '1' : '100'}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-headline-md text-ink-deep border-b border-ink-deep/10 pb-4">Requirements & Limits</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-label-bold text-ink-deep">Minimum Order Value (Optional)</label>
                <input 
                  type="number" 
                  name="minOrderValue"
                  value={formData.minOrderValue}
                  onChange={handleChange}
                  placeholder="e.g. 10000" 
                  className="w-full p-3 bg-surface-cream border border-ink-deep/20 focus:border-accent-gold focus:outline-none transition-colors" 
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-label-bold text-ink-deep">Usage Limit (Optional)</label>
                <input 
                  type="number" 
                  name="usageLimit"
                  value={formData.usageLimit}
                  onChange={handleChange}
                  placeholder="Total times code can be used" 
                  className="w-full p-3 bg-surface-cream border border-ink-deep/20 focus:border-accent-gold focus:outline-none transition-colors" 
                  min="1"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-headline-md text-ink-deep border-b border-ink-deep/10 pb-4">Active Dates (Optional)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-label-bold text-ink-deep">Start Date</label>
                <input 
                  type="datetime-local" 
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full p-3 bg-surface-cream border border-ink-deep/20 focus:border-accent-gold focus:outline-none transition-colors" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-label-bold text-ink-deep">End Date</label>
                <input 
                  type="datetime-local" 
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full p-3 bg-surface-cream border border-ink-deep/20 focus:border-accent-gold focus:outline-none transition-colors" 
                />
              </div>
            </div>
          </div>

        </form>
      </div>
    </main>
  )
}
