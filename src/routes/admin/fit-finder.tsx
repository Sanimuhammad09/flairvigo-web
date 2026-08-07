import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/api'

export const Route = createFileRoute('/admin/fit-finder')({
  component: AdminFitFinder,
})

function AdminFitFinder() {
  const queryClient = useQueryClient()
  const [sizeChart, setSizeChart] = useState<any>({
    S: { bustMin: 0, bustMax: 34, hipMin: 0, hipMax: 36 },
    M: { bustMin: 35, bustMax: 37, hipMin: 37, hipMax: 39 },
    L: { bustMin: 38, bustMax: 40, hipMin: 40, hipMax: 42 },
    XL: { bustMin: 41, bustMax: 44, hipMin: 43, hipMax: 46 },
    XXL: { bustMin: 45, bustMax: 48, hipMin: 47, hipMax: 50 },
  })
  
  const { isLoading } = useQuery({
    queryKey: ['admin', 'settings'],
    queryFn: async () => {
      const res = await api.get('/admin/settings')
      const settings = res.data?.data || res.data
      if (settings?.fitFinderChart) {
        setSizeChart(settings.fitFinderChart)
      }
      return settings
    }
  })

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      await api.put('/admin/settings', { fitFinderChart: data })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'settings'] })
      alert('Fit Finder settings saved successfully!')
    }
  })

  const handleSave = () => {
    saveMutation.mutate(sizeChart)
  }

  const updateSize = (size: string, field: string, value: string) => {
    setSizeChart((prev: any) => ({
      ...prev,
      [size]: {
        ...prev[size],
        [field]: Number(value)
      }
    }))
  }

  return (
    <main className="flex-1 flex flex-col min-w-0 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-8 md:py-12 relative">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-ink-deep mb-2">Fit Finder Settings</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Configure the size recommendation algorithm.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={saveMutation.isPending}
          className="bg-ink-deep text-surface-cream px-8 py-3 font-label-bold text-label-bold rounded hover:bg-ink-deep/90 transition-colors whitespace-nowrap"
        >
          {saveMutation.isPending ? 'Saving...' : 'Save Settings'}
        </button>
      </header>

      {isLoading ? (
        <div className="py-12 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ink-deep"></div></div>
      ) : (
        <section className="bg-white/70 backdrop-blur-md border border-ink-deep/10 rounded-xl overflow-hidden p-8">
          <h3 className="font-headline-md text-xl text-ink-deep mb-6">Size Recommendation Matrix</h3>
          <p className="text-on-surface-variant mb-8 text-sm max-w-2xl">
            Set the minimum and maximum measurements (in inches) for each size. When a customer enters their measurements, the system will find the size where their measurements fall within these ranges.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-ink-deep/10">
                  <th className="py-4 pr-6 font-label-bold text-ink-deep">Size</th>
                  <th className="py-4 px-6 font-label-bold text-ink-deep text-center" colSpan={2}>Bust (Inches)</th>
                  <th className="py-4 px-6 font-label-bold text-ink-deep text-center" colSpan={2}>Hip (Inches)</th>
                </tr>
                <tr className="border-b border-ink-deep/10 bg-neutral-light/30">
                  <th></th>
                  <th className="py-2 px-6 font-label-sm text-xs text-on-surface-variant text-center">Min</th>
                  <th className="py-2 px-6 font-label-sm text-xs text-on-surface-variant text-center">Max</th>
                  <th className="py-2 px-6 font-label-sm text-xs text-on-surface-variant text-center">Min</th>
                  <th className="py-2 px-6 font-label-sm text-xs text-on-surface-variant text-center">Max</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-deep/5">
                {Object.keys(sizeChart).map((size) => (
                  <tr key={size} className="hover:bg-neutral-light/20 transition-colors">
                    <td className="py-4 pr-6 font-label-bold text-ink-deep">{size}</td>
                    <td className="py-4 px-2 text-center">
                      <input 
                        type="number" 
                        value={sizeChart[size].bustMin} 
                        onChange={(e) => updateSize(size, 'bustMin', e.target.value)}
                        className="w-20 text-center border border-ink-deep/20 rounded py-1 focus:ring-1 focus:ring-accent-gold"
                      />
                    </td>
                    <td className="py-4 px-2 text-center">
                      <input 
                        type="number" 
                        value={sizeChart[size].bustMax} 
                        onChange={(e) => updateSize(size, 'bustMax', e.target.value)}
                        className="w-20 text-center border border-ink-deep/20 rounded py-1 focus:ring-1 focus:ring-accent-gold"
                      />
                    </td>
                    <td className="py-4 px-2 text-center border-l border-ink-deep/5">
                      <input 
                        type="number" 
                        value={sizeChart[size].hipMin} 
                        onChange={(e) => updateSize(size, 'hipMin', e.target.value)}
                        className="w-20 text-center border border-ink-deep/20 rounded py-1 focus:ring-1 focus:ring-accent-gold"
                      />
                    </td>
                    <td className="py-4 px-2 text-center">
                      <input 
                        type="number" 
                        value={sizeChart[size].hipMax} 
                        onChange={(e) => updateSize(size, 'hipMax', e.target.value)}
                        className="w-20 text-center border border-ink-deep/20 rounded py-1 focus:ring-1 focus:ring-accent-gold"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  )
}
