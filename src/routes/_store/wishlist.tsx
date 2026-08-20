import { createFileRoute, redirect, Link } from '@tanstack/react-router'
import { useAuthStore } from '../../store/auth'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../../lib/api'


export const Route = createFileRoute('/_store/wishlist')({
  beforeLoad: () => {
    const { user } = useAuthStore.getState()
    if (!user) {
      throw redirect({
        to: '/sign-in',
      })
    }
  },
  component: Wishlist,
})

function Wishlist() {
  const queryClient = useQueryClient()
  
  const { data: wishlistResponse, isLoading } = useQuery({
    queryKey: ['wishlist'],
    queryFn: async () => {
      const res = await api.get('/wishlist')
      return res.data
    }
  })
  
  const removeItem = useMutation({
    mutationFn: async (variantId: string) => {
      await api.delete(`/wishlist/${variantId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] })
    }
  })

  const items = wishlistResponse?.data || wishlistResponse || []

  return (
    
<main className="min-h-screen pb-section-gap-lg pt-12 md:pt-24">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-primary/10 pb-6 reveal-up">
<div>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-ink-deep mb-2">My Wishlist</h1>
<p className="font-body-lg text-body-lg text-ink-deep/70">{items.length} items saved</p>
</div>
<div className="mt-6 md:mt-0">
<button className="flex items-center space-x-2 text-ink-deep/70 hover:text-ink-deep transition-colors">
<span className="font-label-bold text-label-bold uppercase">Share List</span>
<span className="material-symbols-outlined text-sm">ios_share</span>
</button>
</div>
</div>

{isLoading ? (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16 animate-pulse">
    {[1, 2, 3].map(i => (
      <div key={i} className="aspect-[3/4] bg-neutral-light/50 rounded-DEFAULT"></div>
    ))}
  </div>
) : items.length === 0 ? (
  <div className="text-center py-16">
    <h2 className="font-headline-md text-2xl font-bold mb-4">Your Wishlist is empty</h2>
    <p className="mb-8 text-ink-deep/70">Start adding your favorite products to your wishlist.</p>
    <Link to="/women" className="bg-ink-deep text-surface-cream px-8 py-4 uppercase font-label-bold">Shop Now</Link>
  </div>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-16">
    {items.map((item: any) => {
      const product = item.product || item;
      const primaryImage = product.images?.find((img: any) => img.isMain)?.url || product.images?.[0]?.url || 'https://via.placeholder.com/400x500?text=No+Image';
      
      return (
        <div key={item.id} className="product-card group relative bg-neutral-light/30 rounded-DEFAULT reveal-up">
          <button 
            onClick={() => removeItem.mutate(item.variantId || item.id)}
            disabled={removeItem.isPending}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-surface-cream/80 backdrop-blur-sm rounded-full text-ink-deep hover:bg-white hover:text-red-500 transition-colors shadow-sm disabled:opacity-50"
          >
            <span className="material-symbols-outlined fill text-[20px]">delete</span>
          </button>
          
          <Link to={`/product/${product.slug || product.id}` as any}>
            <div className="aspect-[3/4] relative overflow-hidden bg-neutral-light rounded-t-DEFAULT">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" alt={product.name} src={primaryImage} />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <button className="w-full bg-ink-deep text-surface-cream font-label-bold text-label-bold py-4 uppercase tracking-widest hover:bg-ink-deep/90 transition-colors">
                    Add to Bag
                </button>
              </div>
            </div>
          </Link>
          
          <div className="pt-6 pb-2 px-2 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <Link to={`/product/${product.slug || product.id}` as any}>
                  <h3 className="font-headline-md text-body-lg font-semibold text-ink-deep line-clamp-1">{product.name}</h3>
                </Link>
                <span className="font-headline-md text-body-lg font-semibold text-ink-deep ml-4">₦{product.basePrice?.toLocaleString()}</span>
              </div>
              <p className="font-body-md text-body-md text-ink-deep/60">{product.description || 'Premium Scrub'}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="font-label-sm text-[12px] text-accent-gold border-b border-accent-gold cursor-pointer">View Options</span>
            </div>
          </div>
        </div>
      );
    })}
  </div>
)}
</div>
</main>

  )
}
