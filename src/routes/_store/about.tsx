import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/about')({
  component: About,
})

function About() {
  return (
    <main className="bg-surface-cream text-ink-deep pb-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/slide1.png')" }}></div>
          <div className="absolute inset-0 bg-ink-deep/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
          <span className="font-label-bold text-sm md:text-base text-accent-gold uppercase tracking-widest block mb-4">Our Story</span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-surface-cream mb-6 leading-tight">More Than Medical Apparel.</h1>
          <p className="font-light text-lg md:text-2xl text-surface-cream/90 max-w-2xl mx-auto leading-relaxed">
            Some professions ask you to give everything. What you wear should never ask you to compromise who you are in return.
          </p>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          <p className="font-light text-xl md:text-3xl leading-relaxed text-ink-deep/80">
            FlairVigo was created for women who refuse to choose between professionalism and modesty. Women who believe excellence is reflected not only in the work they do, but in the way they carry themselves.
          </p>
          <div className="w-24 h-px bg-accent-gold mx-auto"></div>
          <p className="font-light text-xl md:text-2xl leading-relaxed text-ink-deep/80">
            Because we believe modesty doesn’t belong outside the hospital doors. It belongs inside operating theatres, clinics, wards, laboratories, classrooms, and every place where lives are changed.
          </p>
        </div>
      </section>

      {/* Designed With Purpose */}
      <section className="py-20 md:py-32 px-6 bg-white border-y border-ink-deep/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-ink-deep">Designed With Purpose</h2>
            <p className="text-xl text-ink-deep/70">Every FlairVigo piece begins with one question:</p>
            <blockquote className="text-2xl md:text-4xl font-serif italic text-accent-gold border-l-4 border-accent-gold pl-6 md:pl-8 py-2">
              "How can we make her day easier?"
            </blockquote>
            <p className="text-lg md:text-xl text-ink-deep/70">That question shapes every decision we make.</p>
            <ul className="space-y-4 text-lg md:text-xl text-ink-deep/80 pt-4">
              <li className="flex items-start gap-4">
                <span className="text-accent-gold mt-1.5 text-sm">✦</span> 
                From breathable premium fabrics…
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent-gold mt-1.5 text-sm">✦</span> 
                to thoughtfully placed pockets…
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent-gold mt-1.5 text-sm">✦</span> 
                to silhouettes that move comfortably through long shifts…
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent-gold mt-1.5 text-sm">✦</span> 
                to coverage that allows confidence without compromise.
              </li>
            </ul>
            <div className="pt-6">
              <p className="text-xl md:text-2xl text-ink-deep font-medium mb-3">Nothing is accidental.</p>
              <p className="text-lg md:text-xl text-ink-deep/70 leading-relaxed">Because the smallest design decisions often make the biggest difference after twelve hours on your feet.</p>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative z-10 group">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Medical apparel detail" src="/images/slide2.png" />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-2/3 aspect-square bg-surface-cream border border-ink-deep/10 -z-10"></div>
          </div>
        </div>
      </section>

      {/* More Than Uniforms */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative mt-8 md:mt-0">
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 group">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Medical professional" src="/images/slide3.png" />
            </div>
            <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-2/3 aspect-square bg-surface-cream border border-ink-deep/10 -z-10"></div>
          </div>
          <div className="order-1 md:order-2 space-y-6 md:space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-ink-deep mb-8">More Than Uniforms</h2>
            <p className="text-xl text-ink-deep/70">To us, scrubs are never just uniforms.</p>
            
            <div className="space-y-4 pl-4 border-l-2 border-ink-deep/10">
              <p className="text-lg md:text-xl text-ink-deep/80">They become part of someone’s first day as a medical student.</p>
              <p className="text-lg md:text-xl text-ink-deep/80">Their first patient.</p>
              <p className="text-lg md:text-xl text-ink-deep/80">Their overnight calls.</p>
              <p className="text-lg md:text-xl text-ink-deep/80">Their graduation.</p>
              <p className="text-lg md:text-xl text-ink-deep/80">Their moments of triumph.</p>
              <p className="text-lg md:text-xl text-ink-deep/80">Their moments of exhaustion.</p>
            </div>
            
            <div className="pt-6 space-y-4">
              <p className="text-2xl md:text-3xl font-serif text-ink-deep italic">They quietly witness some of the most meaningful days of a woman’s life.</p>
              <p className="text-xl md:text-2xl text-accent-gold font-medium tracking-wide">We never forget that.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 md:py-32 px-6 bg-ink-deep text-surface-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-sm border border-white/10 hover:border-accent-gold/50 transition-colors">
              <p className="text-xl md:text-2xl font-light">Modesty is timeless.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-sm border border-white/10 hover:border-accent-gold/50 transition-colors">
              <p className="text-xl md:text-2xl font-light">Elegance belongs in every profession.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-sm border border-white/10 hover:border-accent-gold/50 transition-colors">
              <p className="text-xl md:text-2xl font-light">Functionality should never sacrifice beauty.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-sm border border-white/10 hover:border-accent-gold/50 transition-colors">
              <p className="text-xl md:text-2xl font-light">Quality is an act of respect.</p>
            </div>
            <div className="md:col-span-2 bg-accent-gold/10 backdrop-blur-sm p-10 md:p-12 rounded-sm border border-accent-gold/20 text-center">
              <p className="text-2xl md:text-3xl font-serif italic text-accent-gold">"The women who care for others deserve to feel cared for too."</p>
            </div>
          </div>
          <p className="text-xl text-surface-cream/70 uppercase tracking-widest font-label-bold">These beliefs guide every collection we create.</p>
        </div>
      </section>

      {/* This Is Only The Beginning */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center space-y-10">
        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold mx-auto mb-6">
          <span className="material-symbols-outlined">favorite</span>
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-ink-deep">This Is Only The Beginning</h2>
        <p className="text-xl md:text-2xl text-ink-deep/70 leading-relaxed font-light">
          FlairVigo isn’t simply about clothing. It’s about building a community of women who lead with competence, serve with compassion, and remain true to their values wherever their careers take them.
        </p>
        <p className="text-xl md:text-2xl text-ink-deep/70 leading-relaxed font-light">
          Whether you’re stepping into your first anatomy class, beginning residency, or years into your profession, we hope every piece reminds you of something simple:
        </p>
        <div className="py-12 my-12 border-y border-ink-deep/10">
          <p className="font-serif text-3xl md:text-5xl text-ink-deep leading-relaxed md:leading-relaxed">
            You never have to compromise your values to pursue your purpose.
          </p>
        </div>
        <div className="pt-8">
          <p className="text-2xl md:text-3xl text-ink-deep font-medium mb-4 uppercase tracking-widest text-sm md:text-base">Welcome to FlairVigo.</p>
          <p className="font-serif text-4xl md:text-5xl text-accent-gold italic">Modesty in Every Stitch.</p>
        </div>
      </section>
    </main>
  )
}
