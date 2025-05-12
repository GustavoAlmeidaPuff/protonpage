import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface DifferentialItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const DifferentialItem = ({ title, description, icon, index }: DifferentialItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <motion.div
      ref={ref}
      className="flex gap-6"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex-shrink-0">
        <div className="bg-gradient-to-br from-secondary to-accent rounded-full w-14 h-14 flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const Differentials = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const differentials = [
    {
      title: "Metodologia Ágil",
      description: "Utilizamos Scrum e Kanban para garantir entregas rápidas, contínuas e com alta qualidade, mantendo total transparência.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      )
    },
    {
      title: "Tecnologias de Ponta",
      description: "Trabalhamos com as tecnologias mais modernas e eficientes do mercado para garantir soluções robustas e duradouras.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Suporte Contínuo",
      description: "Oferecemos suporte técnico especializado e manutenção preventiva para garantir que sua solução opere sempre em condições ideais.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Soluções Escaláveis",
      description: "Desenvolvemos sistemas que crescem junto com o seu negócio, permitindo expansão e adaptação às suas necessidades futuras.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
        </svg>
      )
    },
    {
      title: "Além dos Construtores de Sites",
      description: "Diferente dos construtores de sites genéricos, oferecemos soluções totalmente personalizáveis, com maior flexibilidade para adaptações futuras, suporte humanizado, design exclusivo e estratégias de marketing digital integradas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];
  
  return (
    <section id="diferenciais" className="py-20 relative overflow-hidden bg-gradient-to-b from-dark to-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 z-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Animated grid lines */}
          <div className="grid-pattern absolute inset-0 opacity-20"
               style={{
                 backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                 backgroundSize: '40px 40px'
               }}
          />
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/20 filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/20 filter blur-3xl"></div>
        </div>
      </div>
      
      <div ref={sectionRef} className="container-section relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Por Que <span className="glow-text">Escolher-nos</span></h2>
          <p className="section-subheading">
            Nossos diferenciais estratégicos que garantem o sucesso do seu projeto e a satisfação contínua da sua empresa.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {differentials.slice(0, 4).map((differential, index) => (
            <DifferentialItem
              key={index}
              title={differential.title}
              description={differential.description}
              icon={differential.icon}
              index={index}
            />
          ))}
        </div>
        
        {/* Destacando o diferencial "Além dos Construtores de Sites" */}
        <motion.div
          className="mt-16 mb-8 relative mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Efeito de luz sutil */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-secondary/10 to-transparent rounded-xl blur-xl"></div>
          <div className="absolute -inset-1 -z-10 bg-gradient-to-b from-transparent via-accent/10 to-transparent rounded-xl blur-md"></div>
          
          <div className="card p-8 border border-secondary/30 backdrop-blur-sm featured-card">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <div className="bg-gradient-to-br from-secondary to-accent rounded-full w-20 h-20 flex items-center justify-center text-white shadow-glow">
                  <div className="w-10 h-10">
                    {differentials[4].icon}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 glow-text">{differentials[4].title}</h3>
                <p className="text-gray-300 max-w-2xl">{differentials[4].description}</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-20 p-8 md:p-12 card border border-secondary/20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 glow-text">Pronto para transformar sua ideia em realidade?</h3>
              <p className="text-gray-300 text-lg">
                Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar todo o seu potencial digital!
              </p>
            </div>
            <div className="lg:w-1/3 text-center lg:text-right">
              <motion.a 
                href="#contato"
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale com um especialista
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials; 