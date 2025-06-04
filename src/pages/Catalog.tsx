import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Catalog = () => {
  return (
    <div className="min-h-screen bg-primary overflow-hidden" role="application">
      <SEO 
        title="Catálogo de Templates | Proton Software"
        description="Explore nossa coleção de templates modernos e profissionais. Encontre a solução perfeita para o seu projeto."
      />
      
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 bg-repeat z-0" aria-hidden="true"></div>
      
      <div className="relative z-10">
        <Header />
        <main className="container-section pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="section-heading">
              Nossos <span className="glow-text">Templates</span>
            </h1>
            <p className="section-subheading">
              Explore nossa coleção de templates modernos e profissionais para encontrar a solução perfeita para o seu projeto.
            </p>
          </motion.div>
          
          {/* Aqui será adicionado o conteúdo do catálogo posteriormente */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Templates serão adicionados aqui */}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Catalog; 