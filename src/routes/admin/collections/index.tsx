import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../../lib/api'
import { supabase } from '../../../lib/supabase'

export const Route = createFileRoute('/admin/collections/')({
  component: AdminCollections,
})

function AdminCollections() {
  const queryClient = useQueryClient()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  
  // Form State
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  const { data: collections, isLoading } = useQuery({
    queryKey: ['admin', 'collections'],
    queryFn: async () => {
      const res = await api.get('/collections')
      return res.data?.data || res.data
    }
  })

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      if (editingId) {
        await api.put(`/collections/${editingId}`, data)
      } else {
        await api.post('/collections', data)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'collections'] })
      queryClient.invalidateQueries({ queryKey: ['categories'] }) // if mega menu uses it
      setIsModalOpen(false)
      resetForm()
    },
    onError: (err: any) => {
      alert(err.response?.data?.message || 'Error saving collection')
    }
  })

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/collections/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'collections'] })
    }
  })

  const resetForm = () => {
    setEditingId(null)
    setName('')
    setSlug('')
    setDescription('')
    setImage('')
  }

  const handleEdit = (collection: any) => {
    setEditingId(collection.id)
    setName(collection.name)
    setSlug(collection.slug)
    setDescription(collection.description || '')
    setImage(collection.image || '')
    setIsModalOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this collection?')) {
      deleteMutation.mutate(id)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    saveMutation.mutate({ name, slug, description, image })
  }

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
      const fileName = `collection-${Math.random()}.${fileExt}`
      const filePath = `collections/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage.from('images').getPublicUrl(filePath)
      setImage(data.publicUrl)
    } catch (error: any) {
      alert(`Error uploading image: ${error.message}`)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <main className="flex-1 p-margin-mobile md:p-margin-desktop bg-surface-cream text-ink-deep font-body-md overflow-y-auto">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h2 className="font-headline-lg text-headline-lg font-semibold text-ink-deep mb-2">Collections</h2>
          <p className="text-on-surface-variant font-body-md">Manage your product collections.</p>
        </div>
        <button 
          onClick={() => { resetForm(); setIsModalOpen(true); }}
          className="bg-ink-deep text-surface-cream px-6 py-3 rounded font-label-bold flex items-center gap-2 hover:bg-ink-deep/90 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          New Collection
        </button>
      </header>

      {isLoading ? (
        <div className="py-12 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ink-deep"></div></div>
      ) : (
        <div className="bg-surface-container-lowest border border-ink-deep/10 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-ink-deep/10 bg-neutral-light/50">
                <th className="py-4 px-6 font-label-bold text-ink-deep">Collection</th>
                <th className="py-4 px-6 font-label-bold text-ink-deep">Slug</th>
                <th className="py-4 px-6 font-label-bold text-ink-deep text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-deep/5">
              {collections?.map((collection: any) => (
                <tr key={collection.id} className="hover:bg-neutral-light/30 transition-colors group">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      {collection.image ? (
                        <div className="w-12 h-12 rounded overflow-hidden bg-brand-lightGray shrink-0">
                           <img src={collection.image} alt={collection.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded bg-neutral-light border border-ink-deep/10 shrink-0 flex items-center justify-center text-ink-deep/30">
                           <span className="material-symbols-outlined">image</span>
                        </div>
                      )}
                      <span className="font-label-bold text-ink-deep">{collection.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-on-surface-variant">{collection.slug}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleEdit(collection)} className="text-ink-deep hover:text-accent-gold transition-colors" title="Edit">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button onClick={() => handleDelete(collection.id)} className="text-error hover:text-red-700 transition-colors" title="Delete">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {(!collections || collections.length === 0) && (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-on-surface-variant">No collections found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-surface-cream rounded-xl shadow-2xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-on-surface-variant hover:text-ink-deep">
              <span className="material-symbols-outlined">close</span>
            </button>
            <h3 className="font-headline-md text-xl text-ink-deep mb-6">{editingId ? 'Edit Collection' : 'New Collection'}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-label-bold text-ink-deep mb-1 text-sm">Name</label>
                <input required value={name} onChange={e => {
                  setName(e.target.value)
                  if (!editingId) setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''))
                }} className="w-full bg-transparent border border-ink-deep/20 rounded py-2 px-3 focus:ring-1 focus:ring-accent-gold" type="text" />
              </div>
              
              <div>
                <label className="block font-label-bold text-ink-deep mb-1 text-sm">Slug</label>
                <input required value={slug} onChange={e => setSlug(e.target.value)} className="w-full bg-transparent border border-ink-deep/20 rounded py-2 px-3 focus:ring-1 focus:ring-accent-gold" type="text" />
              </div>

              <div>
                <label className="block font-label-bold text-ink-deep mb-1 text-sm">Description (Optional)</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full bg-transparent border border-ink-deep/20 rounded py-2 px-3 focus:ring-1 focus:ring-accent-gold" rows={3}></textarea>
              </div>

              <div>
                <label className="block font-label-bold text-ink-deep mb-2 text-sm">Collection Image</label>
                {image ? (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-ink-deep/10 mb-2 group">
                    <img src={image} className="w-full h-full object-cover" />
                    <button type="button" onClick={() => setImage('')} className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold">
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-ink-deep/20 rounded-xl p-8 text-center hover:bg-neutral-light transition-colors cursor-pointer block relative">
                    <span className="material-symbols-outlined text-3xl text-on-surface-variant mb-2">add_photo_alternate</span>
                    <p className="font-body-md text-ink-deep text-sm font-medium">
                      {isUploading ? 'Uploading...' : 'Click to upload'}
                    </p>
                    <input type="file" accept="image/*" onChange={handleFileUpload} disabled={isUploading} className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed w-full h-full" />
                  </label>
                )}
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2 rounded border border-ink-deep/20 text-ink-deep font-label-bold hover:bg-neutral-light">Cancel</button>
                <button type="submit" disabled={saveMutation.isPending} className="px-6 py-2 rounded bg-ink-deep text-surface-cream font-label-bold hover:bg-ink-deep/90 disabled:opacity-50">
                  {saveMutation.isPending ? 'Saving...' : 'Save Collection'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
