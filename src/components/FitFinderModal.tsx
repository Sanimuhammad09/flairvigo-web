import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '../lib/api'

interface FitFinderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FitFinderModal({ isOpen, onClose }: FitFinderModalProps) {
  const [bust, setBust] = useState('')
  const [hip, setHip] = useState('')
  const [length, setLength] = useState('')
  const [recommendation, setRecommendation] = useState<string | null>(null)

  const { data: settings } = useQuery({
    queryKey: ['settings', 'global'],
    queryFn: async () => {
      const res = await api.get('/admin/settings') // Using admin endpoint for now, or you could expose a public one
      return res.data?.data || res.data
    }
  })

  const calculateSize = (e: React.FormEvent) => {
    e.preventDefault()
    if (!settings?.fitFinderChart) {
      setRecommendation("Size chart data is unavailable. Please check the size guide.")
      return
    }

    const b = Number(bust)
    const h = Number(hip)
    const chart = settings.fitFinderChart
    let foundSize = null

    for (const [size, ranges] of Object.entries<any>(chart)) {
      if (b >= ranges.bustMin && b <= ranges.bustMax && h >= ranges.hipMin && h <= ranges.hipMax) {
        foundSize = size
        break
      }
    }

    if (foundSize) {
      const fullSizeName = 
        foundSize === 'S' ? 'Small (S)' :
        foundSize === 'M' ? 'Medium (M)' :
        foundSize === 'L' ? 'Large (L)' :
        foundSize === 'XL' ? 'Extra Large (XL)' :
        foundSize === 'XXL' ? 'Extra Extra Large (XXL)' : foundSize;

      setRecommendation(`Based on your measurements, we recommend ${fullSizeName}.`)
    } else {
      setRecommendation("We couldn't find a perfect match. Please refer to the size guide.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-surface-cream rounded-xl shadow-2xl p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-on-surface-variant hover:text-ink-deep">
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-4xl text-accent-gold mb-2">straighten</span>
          <h3 className="font-headline-lg text-2xl text-ink-deep mb-2">Fit Finder</h3>
          <p className="font-body-md text-on-surface-variant">Enter your measurements to find your perfect size.</p>
        </div>

        <form onSubmit={calculateSize} className="space-y-4">
          <div>
            <label className="block font-label-bold text-ink-deep mb-1 text-sm">Bust (inches)</label>
            <input 
              type="number" 
              required
              value={bust}
              onChange={(e) => setBust(e.target.value)}
              className="w-full bg-transparent border border-ink-deep/20 rounded py-3 px-4 focus:ring-1 focus:ring-accent-gold font-body-md" 
              placeholder="e.g. 36"
            />
          </div>
          <div>
            <label className="block font-label-bold text-ink-deep mb-1 text-sm">Hip (inches)</label>
            <input 
              type="number" 
              required
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              className="w-full bg-transparent border border-ink-deep/20 rounded py-3 px-4 focus:ring-1 focus:ring-accent-gold font-body-md" 
              placeholder="e.g. 38"
            />
          </div>
          <div>
            <label className="block font-label-bold text-ink-deep mb-1 text-sm">Preferred Full Length (Optional)</label>
            <input 
              type="text" 
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full bg-transparent border border-ink-deep/20 rounded py-3 px-4 focus:ring-1 focus:ring-accent-gold font-body-md" 
              placeholder="e.g. Regular, Petite, Tall"
            />
          </div>

          <button type="submit" className="w-full bg-ink-deep text-surface-cream py-4 rounded font-label-bold mt-6 hover:bg-ink-deep/90 transition-colors uppercase tracking-widest shadow-lg">
            Find My Fit
          </button>
        </form>

        {recommendation && (
          <div className="mt-8 p-6 bg-neutral-light border border-accent-gold/30 rounded-lg text-center animate-fade-in">
            <p className="font-label-bold text-ink-deep text-lg">{recommendation}</p>
          </div>
        )}
      </div>
    </div>
  )
}
