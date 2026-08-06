import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../../lib/api'

export const Route = createFileRoute('/_store/collections/$slug')({
  component: CollectionDetailsPage,
})

const collections = [
  {
    name: 'Sidrah Collection',
    slug: 'sidrah-collection',
    description: 'The Sidrah Collection features elegant, modest scrubs designed for supreme comfort and precision.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9njcCrx7iDvf_KH1UsJIvODLmlEvnfazkFX58LRYggap_wnVvCBTwTCsQ7Px4rtYjjH86JKpHiCl-11Qc7TTVwq98x7Xz3pD2BLFCJ1YSrOIvFstTKhoGam69YHLXQlFxWUQIZQSky5-3SGFF2OVpuQuA4v1Z9BZra-aVvNMCDSZHep3vaoVDOTmASTmnlahR3vyhTY7pAN-xCuUARu5EBGLfiJiGyqU9JPVbKRLSE3ZRYeJXkfi-Zw'
  },
  {
    name: 'Layna Collection',
    slug: 'layna-collection',
    description: 'The Layna Collection offers modern, versatile scrubs for everyday excellence.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQqV3D2D37nB2sKjQ1uL8X5l2ZqB0eH6o6_YwA3tF5gE3F9_r7J5tP6O8bL9xT4J2W8K0G9N6H1Z2A3tF5gE3F9_r7J5tP6O8bL9xT4J2W8K0G9N6H1Z2A3tF5gE3F9_r7J5tP6O8bL9xT4J2W8K0G9N6H1Z2A3tF5g'
  }
];

function CollectionDetailsPage() {
  const { slug } = Route.useParams()
  const collection = collections.find(c => c.slug === slug)

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products', 'collection', slug],
    queryFn: async () => {
      const response = await api.get('/products', {
        params: { collection: slug }
      });
      return response.data?.data?.data || response.data?.data || [];
    }
  });

  if (!collection) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold">Collection not found</h1>
        <Link to="/collections" className="text-brand underline mt-4 inline-block">Back to Collections</Link>
      </div>
    )
  }

  return (
    <main className="flex-1 bg-brand-bg">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end justify-center pb-16">
        <div className="absolute inset-0 bg-neutral-900">
          <img 
            alt={collection.name} 
            className="w-full h-full object-cover opacity-80" 
            src={collection.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="font-headline-lg text-5xl md:text-6xl font-bold mb-4 tracking-tight uppercase">{collection.name}</h1>
          <p className="font-body-md text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 py-16 max-w-[1600px] mx-auto min-h-[50vh]">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-ink-deep">Shop {collection.name}</h2>
          <span className="text-on-surface-variant font-label-md">{products.length} Products</span>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col">
                <div className="aspect-[3/4] bg-neutral-light rounded-xl mb-4"></div>
                <div className="h-4 bg-neutral-light rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-neutral-light rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24 bg-neutral-light/50 rounded-xl">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">inventory_2</span>
            <h3 className="font-headline-md text-xl mb-2">No Products Available</h3>
            <p className="text-on-surface-variant">Check back later for new arrivals in this collection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product: any) => (
              <Link key={product.id} to={`/product/${product.slug}` as any} className="group cursor-pointer block flex flex-col">
                <div className="relative aspect-[3/4] bg-neutral-light overflow-hidden mb-4 rounded-xl">
                  {product.images && product.images.length > 0 ? (
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      alt={product.name} 
                      src={product.images.find((img: any) => img.isMain)?.url || product.images[0].url} 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-on-surface-variant bg-neutral-light/50">
                      No Image
                    </div>
                  )}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-ink-deep text-surface-cream font-bold text-sm uppercase tracking-widest py-3 rounded-full shadow-lg hover:bg-ink-deep/90 transition-colors">View Details</button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-label-bold text-lg text-ink-deep mb-1 group-hover:text-accent-gold transition-colors">{product.name}</h3>
                    <p className="text-sm text-on-surface-variant line-clamp-1">{product.description}</p>
                  </div>
                  <span className="font-bold text-ink-deep mt-1 whitespace-nowrap ml-4">₦{product.basePrice.toLocaleString()}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
