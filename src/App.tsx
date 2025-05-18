import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SEO from './components/SEO'

function App() {
  return (
    <div className="min-h-screen bg-primary overflow-hidden" role="application">
      <SEO />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 bg-repeat z-0" aria-hidden="true"></div>
      <div className="relative z-10">
        <Header />
        <main id="main-content" role="main">
          <section id="hero" aria-label="Seção principal">
            <Hero />
          </section>
          <section id="about" aria-label="Sobre nós">
            <About />
          </section>
          <section id="services" aria-label="Nossos serviços">
            <Services />
          </section>
          <section id="products" aria-label="Nossos produtos">
            <Products />
          </section>
          <section id="differentials" aria-label="Nossos diferenciais">
            <Differentials />
          </section>
          {/* Seção de depoimentos temporariamente removida
          <section id="testimonials" aria-label="Depoimentos de clientes">
            <Testimonials />
          </section>
          */}
          <section id="contact" aria-label="Entre em contato">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
