import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen pt-24 pb-16 relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Gradient Background */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-full filter blur-3xl opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-purple-500/10 to-secondary/20 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Animated particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-32 h-32 rounded-full bg-secondary/20 filter blur-xl"
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 - 50 + "%", 
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{ 
              x: [
                Math.random() * 100 - 50 + "%", 
                Math.random() * 100 - 50 + "%", 
                Math.random() * 100 - 50 + "%"
              ],
              y: [
                Math.random() * 100 - 50 + "%", 
                Math.random() * 100 - 50 + "%", 
                Math.random() * 100 - 50 + "%"
              ],
              opacity: [Math.random() * 0.3 + 0.1, Math.random() * 0.3 + 0.1]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: Math.random() * 10 + 20,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-section relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transformando ideias em <span className="glow-text">soluções digitais</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Desenvolvemos software personalizado para impulsionar seu negócio com inovação, qualidade e tecnologia de ponta.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#contato" className="btn-primary flex items-center justify-center gap-2">
                <FaWhatsapp className="text-xl" />
                Fale conosco
              </a>
              <a href="#servicos" className="btn-secondary">
                Nossos serviços
              </a>
            </motion.div>
          </motion.div>
          
          {/* 3D Illustration */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-80 sm:h-96 md:h-[500px] w-full">
              <img 
                src="/images/hero-illustration.svg" 
                alt="Soluções Digitais" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400/111827/00c3ff?text=Proton+Software";
                }}
              />
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-0 right-0 bg-gradient-to-r from-secondary to-accent rounded-full w-16 h-16 flex items-center justify-center text-white"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 left-10 glass-effect rounded-xl p-4 w-40"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-green-400 rounded-full w-3 h-3"></div>
                  <p className="text-xs text-white font-medium">100% Seguro</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/3 left-0 glass-effect rounded-xl p-4 w-40"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-blue-400 rounded-full w-3 h-3"></div>
                  <p className="text-xs text-white font-medium">Tecnologia Avançada</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 