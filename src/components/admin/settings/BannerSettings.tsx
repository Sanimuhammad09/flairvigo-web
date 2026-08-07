import { useState, useEffect } from 'react'
import { api } from '../../../lib/api'
import { supabase } from '../../../lib/supabase'

export function BannerSettings() {
  const [banners, setBanners] = useState<any[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await api.get('/admin/settings')
        if (res.data?.homepageBanners) {
          setBanners(res.data.homepageBanners)
        } else {
          // Defaults if none exist
          setBanners([
            { id: '1', url: '/images/cat3.png', link: '/new-arrivals' }
          ])
        }
      } catch (error) {
        console.error('Error fetching banners:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchSettings()
  }, [])

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      alert('Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env')
      return
    }

    try {
      setIsUploading(true)
      const fileExt = file.name.split('.').pop()
      const fileName = `banner-${Math.random()}.${fileExt}`
      const filePath = `banners/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage.from('images').getPublicUrl(filePath)
      
      setBanners([...banners, { id: Math.random().toString(), url: data.publicUrl, link: '/' }])
    } catch (error: any) {
      alert(`Error uploading image: ${error.message}`)
    } finally {
      setIsUploading(false)
    }
  }

  const handleRemove = (idToRemove: string) => {
    setBanners(banners.filter(b => b.id !== idToRemove))
  }

  const handleLinkChange = (id: string, newLink: string) => {
    setBanners(banners.map(b => b.id === id ? { ...b, link: newLink } : b))
  }

  const handleSave = async () => {
    try {
      setIsSaving(true)
      await api.put('/admin/settings', {
        homepageBanners: banners
      })
      alert('Banners saved successfully!')
    } catch (error: any) {
      alert(error.response?.data?.message || 'Error saving banners')
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return <div className="py-12 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ink-deep"></div></div>
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-surface-container-lowest border border-ink-deep/10 rounded-xl p-8">
        <h2 className="font-headline-md text-ink-deep mb-6">Homepage Banners</h2>
        <p className="text-on-surface-variant mb-6">
          Upload and manage the rotating banners that appear at the top of the homepage.
        </p>

        <div className="space-y-6">
          {banners.map((banner, index) => (
            <div key={banner.id} className="flex flex-col md:flex-row gap-6 p-4 border border-ink-deep/10 rounded-xl bg-neutral-light/30">
              <div className="w-full md:w-1/3 aspect-[21/9] bg-brand-lightGray rounded-lg overflow-hidden relative group">
                <img src={banner.url} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
                <button 
                  onClick={() => handleRemove(banner.id)}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white font-label-bold"
                >
                  Remove Banner
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <label className="block font-label-bold text-ink-deep mb-2">Link Destination</label>
                <input 
                  type="text" 
                  value={banner.link}
                  onChange={(e) => handleLinkChange(banner.id, e.target.value)}
                  placeholder="e.g. /collections/sidrah"
                  className="w-full bg-transparent border border-ink-deep/20 rounded py-2 px-3 focus:ring-1 focus:ring-accent-gold"
                />
                <p className="text-xs text-on-surface-variant mt-2">Where the user goes when they click this banner.</p>
              </div>
            </div>
          ))}

          {/* Upload New Banner */}
          <label className="border-2 border-dashed border-ink-deep/20 rounded-xl p-12 text-center hover:bg-neutral-light transition-colors cursor-pointer block relative">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-3">add_photo_alternate</span>
            <h4 className="font-headline-md text-ink-deep mb-1">Upload New Banner</h4>
            <p className="font-body-md text-on-surface-variant text-sm">
              {isUploading ? 'Uploading...' : 'Click to browse (Recommended size: 1920x820)'}
            </p>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileUpload} 
              disabled={isUploading} 
              className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed w-full h-full" 
            />
          </label>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-deep/10 flex justify-end">
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-ink-deep text-surface-cream px-8 py-3 rounded font-label-bold hover:bg-ink-deep/90 transition-colors disabled:opacity-50"
          >
            {isSaving ? 'Saving...' : 'Save Banners'}
          </button>
        </div>
      </div>
    </div>
  )
}
