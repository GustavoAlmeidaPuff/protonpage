import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import React from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
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
                    <p className="text-gray-300">+55 (11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-secondary to-accent rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <FaWhatsapp className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">WhatsApp</h4>
                    <p className="text-gray-300">+55 (11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-secondary to-accent rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">E-mail</h4>
                    <p className="text-gray-300">contato@protonsoftware.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-secondary to-accent rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <FaMapMarkerAlt className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Endereço</h4>
                    <p className="text-gray-300">Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Horário de Atendimento</h3>
              <div className="space-y-3 text-gray-300">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo e Feriados: Fechado</p>
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
              
              {submitted ? (
                <motion.div
                  className="p-6 bg-green-500/20 rounded-lg border border-green-500/30 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-medium text-white mb-2">Mensagem Enviada!</h4>
                  <p className="text-gray-300">Obrigado pelo seu contato. Retornaremos em breve!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
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
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">E-mail*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">Telefone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-white"
                        placeholder="(99) 99999-9999"
                      />
                    </div>
                    <div>
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
                        <option value="orçamento">Solicitar orçamento</option>
                        <option value="dúvidas">Dúvidas sobre serviços</option>
                        <option value="parcerias">Parcerias</option>
                        <option value="outros">Outros assuntos</option>
                      </select>
                    </div>
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
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={submitting}
                    whileTap={{ scale: 0.95 }}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      'Enviar mensagem'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors px-8 py-4 rounded-full text-white font-semibold text-lg"
          >
            <FaWhatsapp className="text-xl" />
            Atendimento via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 