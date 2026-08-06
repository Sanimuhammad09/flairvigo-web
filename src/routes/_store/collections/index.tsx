import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/collections/')({
  component: CollectionsPage,
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

function CollectionsPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 font-body-md text-ink-deep">
      <div className="text-center mb-16">
        <h1 className="font-headline-lg text-4xl font-bold mb-6 tracking-widest uppercase">Our Collections</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Explore our premium selection of medical apparel designed for professionals who demand excellence in both form and function.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {collections.map((collection) => (
          <Link 
            key={collection.slug}
            to={`/collections/${collection.slug}`}
            className="group block relative overflow-hidden bg-neutral-light rounded-lg shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[4/5] md:aspect-square overflow-hidden relative">
              <img 
                src={collection.image} 
                alt={collection.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <h2 className="font-headline-md text-3xl mb-3">{collection.name}</h2>
                <p className="font-body-md text-white/80 mb-6 max-w-md line-clamp-2">{collection.description}</p>
                <div className="inline-flex items-center gap-2 font-label-bold tracking-widest uppercase text-sm border-b border-white pb-1 group-hover:text-accent-gold group-hover:border-accent-gold transition-colors">
                  Shop Collection <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
