import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-section flex justify-between items-center">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/images/logo sem nome (sem fundo).png" 
              alt="Proton Software" 
              className="h-14"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/40x40/00c3ff/ffffff?text=P";
              }}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-white"
          >
            Proton<span className="glow-text">Software</span>
          </motion.h1>
        </div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#inicio" className="text-white hover:text-secondary transition-colors">Início</a>
          <a href="#sobre" className="text-white hover:text-secondary transition-colors">Sobre nós</a>
          <a href="#servicos" className="text-white hover:text-secondary transition-colors">Serviços</a>
          <a href="#diferenciais" className="text-white hover:text-secondary transition-colors">Diferenciais</a>
          <a href="#depoimentos" className="text-white hover:text-secondary transition-colors">Depoimentos</a>
          <a href="#contato" className="btn-primary">Contato</a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12"></path>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-dark/95 backdrop-blur-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-section py-5 flex flex-col gap-4">
            <a href="#inicio" className="text-white py-2 border-b border-gray-800">Início</a>
            <a href="#sobre" className="text-white py-2 border-b border-gray-800">Sobre nós</a>
            <a href="#servicos" className="text-white py-2 border-b border-gray-800">Serviços</a>
            <a href="#diferenciais" className="text-white py-2 border-b border-gray-800">Diferenciais</a>
            <a href="#depoimentos" className="text-white py-2 border-b border-gray-800">Depoimentos</a>
            <a href="#contato" className="btn-primary text-center mt-2">Contato</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header; 