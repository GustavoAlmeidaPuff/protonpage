import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceItem = ({ title, description, icon, index }: ServiceItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <motion.div
      ref={ref}
      className="card card-hover group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="overflow-hidden mb-6">
        <motion.div 
          className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center
                    group-hover:from-secondary group-hover:to-accent transition-all duration-300"
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <div className="text-secondary group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </motion.div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-secondary transition-colors duration-300">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Criamos sites e aplicações web responsivas, seguras e otimizadas para proporcionar a melhor experiência aos seus usuários.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Aplicativos Móveis",
      description: "Desenvolvemos aplicativos nativos e híbridos para iOS e Android, com foco em performance, usabilidade e design intuitivo.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Sistemas Empresariais",
      description: "Automatize processos e gerencie dados com sistemas personalizados que atendem às necessidades específicas do seu negócio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "UX/UI Design",
      description: "Criamos interfaces modernas e intuitivas que elevam a experiência do usuário e fortalecem a identidade da sua marca.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Consultoria Tecnológica",
      description: "Orientamos sua empresa na escolha e implementação das melhores soluções tecnológicas para seus desafios de negócio.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      title: "Outros Projetos",
      description: "A Proton não se limita em suas capacidades. Apresente seu projeto e necessidades específicas - avaliamos a viabilidade, desenvolvemos as competências necessárias e oferecemos soluções personalizadas para qualquer desafio tecnológico.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    }
  ];
  
  return (
    <section id="servicos" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="var(--tw-color-secondary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--tw-color-primary)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="20" cy="20" r="20" fill="url(#gradient)" />
          <circle cx="80" cy="60" r="30" fill="url(#gradient)" />
          <circle cx="40" cy="80" r="25" fill="url(#gradient)" />
        </svg>
      </div>
      
      <div ref={sectionRef} className="container-section relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">Nossos <span className="glow-text">Serviços</span></h2>
          <p className="section-subheading">
            Oferecemos um conjunto completo de soluções tecnológicas para impulsionar e transformar o seu negócio.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#contato" className="btn-primary inline-flex items-center gap-2">
            Solicitar orçamento
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 