import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [formState, setFormState] = useState({
    name: '',
    subject: '',
    message: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Preparar a mensagem para o WhatsApp
    const whatsappNumber = "5551999456935";
    const messageText = `*Nome:* ${formState.name}%0A*Assunto:* ${formState.subject}%0A%0A${formState.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;
    
    // Redirecionar para o WhatsApp
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-dark to-primary"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-secondary/10 to-accent/5 rounded-full filter blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div ref={sectionRef} className="container-section relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Entre em <span className="glow-text">Contato</span></h2>
          <p className="section-subheading">
            Estamos prontos para transformar suas ideias em soluções tecnológicas excepcionais. Fale conosco!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-secondary to-accent rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <FaPhone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Telefone</h4>
                    <p className="text-gray-300">+55 51 99945-6935</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-secondary to-accent rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <FaWhatsapp className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">WhatsApp</h4>
                    <p className="text-gray-300">+55 51 99945-6935</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-secondary to-accent rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">E-mail</h4>
                    <p className="text-gray-300">proton.hello.world@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Horário de Atendimento</h3>
              <div className="space-y-3 text-gray-300">
                <p>Segunda a Sexta: 8h às 12h e 20h às 24h</p>
                <p>Sábado, Domingo e Feriados: Fechado</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card">
              <h3 className="text-2xl font-semibold mb-6 text-white">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nome Completo*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Assunto*</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Orçamento">Solicitar orçamento (totalmente gratuito)</option>
                    <option value="Dúvidas">Dúvidas sobre serviços</option>
                    <option value="Parcerias">Parcerias</option>
                    <option value="Outros">Outros assuntos</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-white resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="text-xl" />
                  Enviar mensagem via WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 