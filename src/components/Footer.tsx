import { motion } from 'framer-motion';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        <div className="absolute -bottom-10 left-0 w-full h-32 bg-gradient-to-t from-secondary/5 to-transparent"></div>
      </div>
      
      <div className="container-section relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/images/proton-logo.svg" 
                alt="Proton Software" 
                className="h-10"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/40x40/00c3ff/ffffff?text=P";
                }}
              />
              <h2 className="text-2xl font-bold text-white">
                Proton<span className="glow-text">Software</span>
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Transformando ideias em soluções digitais inovadoras para impulsionar o sucesso do seu negócio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-300 hover:text-secondary transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-secondary transition-colors">Sobre nós</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-secondary transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="text-gray-300 hover:text-secondary transition-colors">Diferenciais</a></li>
              <li><a href="#depoimentos" className="text-gray-300 hover:text-secondary transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Soluções</h3>
            <ul className="space-y-3">
              <li><a href="#servicos" className="text-gray-300 hover:text-secondary transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-secondary transition-colors">Aplicativos Móveis</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-secondary transition-colors">Sistemas Empresariais</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-secondary transition-colors">Inteligência Artificial</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-secondary transition-colors">UX/UI Design</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-secondary transition-colors">Consultoria Tecnológica</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Av. Paulista, 1000 - Bela Vista</li>
              <li>São Paulo - SP, 01310-100</li>
              <li className="pt-2">+55 (11) 99999-9999</li>
              <li className="text-secondary">contato@protonsoftware.com.br</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Proton Software. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Termos de Uso</a>
          </div>
          <motion.button
            onClick={scrollToTop}
            className="bg-secondary/10 hover:bg-secondary/20 p-3 rounded-full text-secondary transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Voltar ao topo"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 