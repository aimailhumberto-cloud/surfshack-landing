import { useState, useEffect } from 'react'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-ocean-950">
      {/* Navigation - Glassmorphism style */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ocean-900/80 backdrop-blur-xl shadow-2xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
          <a href="#" className="font-serif font-bold text-2xl text-white tracking-tight hover:text-sand-200 transition-colors">
            Surf Shack
          </a>
          <div className="hidden md:flex gap-10 items-center">
            <a href="#experiencia" className="text-white/70 hover:text-sand-200 transition-colors text-sm tracking-wide uppercase">Experiencia</a>
            <a href="#membresia" className="text-white/70 hover:text-sand-200 transition-colors text-sm tracking-wide uppercase">Membresía</a>
            <a href="#ubicacion" className="text-white/70 hover:text-sand-200 transition-colors text-sm tracking-wide uppercase">Ubicación</a>
            <a href="#membresia" className="bg-sand-200 hover:bg-sand-100 text-ocean-900 font-semibold px-6 py-2.5 text-sm tracking-wide uppercase transition-all">
              Reservar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Fullscreen con overlay elegante */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="./images/hero-1.jpeg" 
            alt="Surf Shack Chame"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-900/60 to-ocean-950/90" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <p className="text-sand-200 font-medium tracking-[0.3em] text-sm mb-6 uppercase">Club de Playa Privado</p>
          
          <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight">
            <span className="text-white block">Tu Escape</span>
            <span className="text-sand-200 block mt-2">en Chame</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
            Piscina, restaurante y el mejor ambiente frente al mar panameño.
          </p>

          <a href="#membresia" className="inline-block bg-sand-200 hover:bg-white text-ocean-900 font-semibold px-12 py-4 text-sm tracking-widest uppercase transition-all hover:tracking-[0.2em]">
            Descubrir
          </a>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </div>
      </section>

      {/* Gallery - Masonry style */}
      <section className="py-24 px-6 bg-ocean-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="col-span-2 row-span-2">
              <img src="./images/hero-1.jpeg" alt="Vista principal" className="w-full h-full object-cover hover:opacity-90 transition duration-500" />
            </div>
            <img src="./images/pool-1.jpg" alt="Piscina" className="w-full h-48 md:h-auto object-cover hover:opacity-90 transition duration-500" />
            <img src="./images/pool-2.jpg" alt="Instalaciones" className="w-full h-48 md:h-auto object-cover hover:opacity-90 transition duration-500" />
            <img src="./images/beach-1.jpg" alt="Playa" className="w-full h-48 md:h-auto object-cover hover:opacity-90 transition duration-500" />
            <img src="./images/beach-2.jpg" alt="Vista playa" className="w-full h-48 md:h-auto object-cover hover:opacity-90 transition duration-500" />
            <div className="col-span-2">
              <img src="./images/hero-2.jpeg" alt="Ambiente" className="w-full h-48 object-cover hover:opacity-90 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-32 px-6 bg-ocean-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sand-300 font-medium tracking-[0.3em] text-sm mb-4 uppercase">La Experiencia</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Todo lo que necesitas
            </h2>
            <div className="w-16 h-px bg-sand-300/50 mx-auto" />
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Piscina */}
            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="./images/pool-1.jpg" alt="Piscina infinity" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl text-white mb-2">Piscina Infinity</h3>
                <p className="text-white/70 text-sm">Vista directa al océano Pacifico</p>
              </div>
            </div>

            {/* Playa */}
            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="./images/beach-1.jpg" alt="Playa privada" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl text-white mb-2">Playa Caracol</h3>
                <p className="text-white/70 text-sm">Acceso exclusivo a costa virgen</p>
              </div>
            </div>

            {/* Restaurante */}
            <div className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="./images/beach-3.webp" alt="Restaurante" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-2xl text-white mb-2">Restaurante y Bar</h3>
                <p className="text-white/70 text-sm">Cocina fresca y cócteles tropicales</p>
              </div>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: 'Parqueo', subtitle: 'Sin costo' },
              { title: 'Wi-Fi', subtitle: 'Alta velocidad' },
              { title: 'Showers', subtitle: 'Vestidores' },
              { title: 'Zona Surf', subtitle: 'Para principiantes' },
            ].map((item, i) => (
              <div key={i} className="py-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-1">{item.title}</h4>
                <p className="text-white/50 text-sm">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membresia" className="py-32 px-6 bg-ocean-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sand-300 font-medium tracking-[0.3em] text-sm mb-4 uppercase">Membresía</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Únete a la comunidad
            </h2>
            <div className="w-16 h-px bg-sand-300/50 mx-auto mb-8" />
            <p className="text-white/60 max-w-lg mx-auto">
              Acceso exclusivo a nuestras instalaciones frente al mar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pasadía */}
            <div className="border border-white/20 p-10 hover:border-white/40 transition-colors">
              <p className="text-sand-300 text-sm tracking-[0.2em] uppercase mb-4">Pasadía</p>
              <h3 className="font-serif text-3xl text-white mb-4">Día Completo</h3>
              <p className="text-white/50 mb-10">Ideal para visitantes ocasionales.</p>
              
              <ul className="space-y-4 mb-12">
                {['Acceso a piscina', 'Uso de instalaciones', 'Showers y vestidores', 'Parqueo incluido'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/70">
                    <svg className="w-4 h-4 text-sand-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full border border-white/30 hover:border-white text-white font-medium py-4 tracking-wide uppercase text-sm transition-colors">
                Consultar Disponibilidad
              </button>
            </div>

            {/* Membresía */}
            <div className="bg-sand-200/10 border-2 border-sand-300/50 p-10 relative">
              <div className="absolute top-0 right-0 bg-sand-200 text-ocean-900 text-xs font-bold px-4 py-2 tracking-wider">
                POPULAR
              </div>
              <p className="text-sand-300 text-sm tracking-[0.2em] uppercase mb-4">Membresía</p>
              <h3 className="font-serif text-3xl text-white mb-4">Miembro VIP</h3>
              <p className="text-white/50 mb-10">Tu escape de fin de semana, todo el año.</p>
              
              <ul className="space-y-4 mb-12">
                {['Todo lo de pasadía', 'Acceso prioritario', '15% en restaurante', 'Descuento en hotel Playa Caracol', 'Eventos exclusivos'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/70">
                    <svg className="w-4 h-4 text-sand-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-sand-200 hover:bg-white text-ocean-900 font-bold py-4 tracking-wide uppercase text-sm transition-colors">
                Solicitar Membresía
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="py-32 px-6 bg-ocean-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sand-300 font-medium tracking-[0.3em] text-sm mb-4 uppercase">Ubicación</p>
              <h2 className="font-serif font-light text-4xl md:text-5xl text-white mb-6">
                Playa Caracol
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                A solo una hora de Ciudad de Panamá. El escape perfecto los fines de semana.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-sand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-white/80">Chame, Panamá Oeste</span>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-sand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white/80">1 hora desde la ciudad</span>
                </div>
              </div>

              <a href="https://maps.google.com" target="_blank" rel="noopener" className="inline-flex items-center gap-3 text-sand-200 hover:text-white transition-colors text-sm tracking-wide">
                <span>Cómo llegar</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="relative">
              <img src="./images/beach-4.webp" alt="Playa Caracol" className="w-full aspect-square object-cover" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.6!2d-79.8334!3d8.5336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fab5b7d19a9c3e7%3A0x6d4f7e8a9b0c1d2e!2sPlaya%20Caracol%2C%20Coronado%2C%20Panama!5e0!3m2!1ses!2s!4v1704067200000"
                width="100%"
                height="300"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                className="absolute bottom-4 right-4 w-48 h-32 border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-ocean-950 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sand-300 font-medium tracking-[0.3em] text-sm mb-4 uppercase">Contacto</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-white mb-8">
            Reserva tu visita
          </h2>
          
          <a href="https://instagram.com/surfshackchame" target="_blank" rel="noopener" className="inline-flex items-center gap-4 border border-white/30 hover:border-sand-300 hover:bg-sand-300/10 px-8 py-5 transition-all group">
            <svg className="w-5 h-5 text-white group-hover:text-sand-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.354.2-6.782 2.618-6.982 6.982-.058 1.281-.072 1.689-.072 4.948 0 3.259.014 3.668.072 4.948.2 4.354 2.617 6.782 6.982 6.982 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.982-6.982.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.782-6.982-6.982-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-white group-hover:text-sand-200 transition-colors tracking-wide">@surfshackchame</span>
          </a>

          <p className="mt-12 text-white/40 text-sm">
            Surf Shack Chame - Playa Caracol, Panamá
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-ocean-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-white">Surf Shack</p>
          <p className="text-white/30 text-xs tracking-wide">
            2026 Club de Playa - Chame, Panamá
          </p>
        </div>
      </footer>
    </div>
  )
}