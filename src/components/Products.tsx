import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="produtos" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div ref={ref} className="container-section relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: inView ? 0 : 30, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading">Nossos <span className="glow-text">Produtos</span></h2>
          <p className="section-subheading">
            Conheça as soluções proprietárias que desenvolvemos para transformar negócios através da tecnologia.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Selo de "Em Desenvolvimento" */}
          <motion.div 
            className="absolute -top-6 right-8 md:right-12 z-20 bg-secondary text-white px-4 py-2 rounded-full shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: inView ? 0 : -20, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span className="text-xs md:text-sm font-medium">Em Desenvolvimento</span>
          </motion.div>
          
          <div className="bg-gradient-to-br from-dark/80 to-primary/90 rounded-2xl overflow-hidden border border-gray-700/30 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
              {/* Conteúdo lado esquerdo */}
              <motion.div
                className="flex flex-col justify-center mb-0 md:mb-0"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-[#4a7bfc] to-[#3364e8] h-10 w-10 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Bibliotech</h3>
                </div>
                
                <h4 className="text-xl font-semibold mb-4 md:mb-6 text-secondary">Sistema de Gestão de Bibliotecas Escolares</h4>
                
                <div className="text-gray-300 space-y-3 md:space-y-4">
                  <p>
                    O Bibliotech é um sistema moderno para gerenciamento de bibliotecas escolares que vai além do simples controle de acervo e empréstimos.
                  </p>
                  <p>
                    Com foco em métricas e desempenho, ajudamos escolas a investirem nos livros certos e motivamos os estudantes através de metas de leitura, criando um sentimento de participação e engajamento.
                  </p>
                  
                  <div className="pt-1 md:pt-2">
                    <h5 className="text-lg font-semibold mb-2 md:mb-3 text-white">Principais funcionalidades:</h5>
                    <ul className="space-y-1 md:space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Dashboard com métricas de leitura e desempenho</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Acompanhamento de metas por turma e aluno</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Estatísticas de empréstimos e categorias mais populares</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Acessível via web e dispositivos móveis</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-8">
                  <motion.a 
                    href="https://bibliotech.tech" 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-primary inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Conhecer o Bibliotech
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
              
              {/* Imagens lado direito em telas médias e grandes, mensagem em telas pequenas */}
              <motion.div
                className="relative h-[140px] md:h-[520px] overflow-visible mt-2 md:mt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* Efeito de luz/glowing - visível apenas em telas médias e grandes */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl opacity-20 z-0 hidden md:block"></div>
                
                {/* Container relativo para posicionamento absoluto */}
                <div className="absolute inset-0 hidden md:block">
                  <div className="relative h-full w-full flex items-center justify-center">
                    {/* Notebook - visível apenas em telas médias e grandes, sem animação */}
                    <motion.div
                      className="absolute top-1/4 md:left-10 lg:left-0 transform -translate-y-1/3 -translate-x-10 z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: inView ? 1 : 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <img 
                        src="/images/bibliotech/notebook com site(sem fundo).png" 
                        alt="Bibliotech Dashboard" 
                        className="h-auto w-full max-w-[320px] md:max-w-[380px] lg:max-w-md object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/800x500/0a2540/00c3ff?text=Bibliotech+Desktop";
                        }}
                      />
                    </motion.div>
                    
                    {/* Celular - visível apenas em telas médias e grandes, sem animação */}
                    <motion.div
                      className="absolute top-1/2 md:right-10 lg:right-10 transform -translate-y-1/3 translate-x-0 z-20 max-w-[120px] md:max-w-[150px] lg:max-w-[170px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: inView ? 1 : 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    >
                      <img 
                        src="/images/bibliotech/celular com site (sem fundo).png" 
                        alt="Bibliotech Mobile" 
                        className="h-auto w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/400x800/0a2540/00c3ff?text=Bibliotech+Mobile";
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
                
                {/* Mensagem para telas pequenas */}
                <div className="md:hidden flex items-center justify-center h-full">
                  <div className="text-center p-4 border border-secondary/30 rounded-lg bg-dark/50 w-full max-w-xs mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-300 text-sm">Visualize em um dispositivo maior para ver a interface do sistema</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Rodapé com tecnologias */}
            <div className="py-4 px-6 md:px-10 bg-dark/50 border-t border-gray-700/30">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-gray-400 text-sm">
                  <span>Tecnologias utilizadas:</span>
                  <span className="ml-3 text-secondary">React</span> • 
                  <span className="mx-1 text-secondary">Firebase</span>
                </div>
                <div className="text-gray-400 text-sm flex items-center">
                  <span className="mr-2">Status:</span>
                  <span className="inline-flex items-center">
                    <span className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    <span>Em desenvolvimento ativo</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products; 