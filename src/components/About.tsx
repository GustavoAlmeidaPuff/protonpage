import React from 'react';

interface ValueItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ValueItem = ({ title, description, icon }: ValueItemProps) => {
  return (
    <div className="card card-hover">
      <div className="bg-gradient-to-br from-secondary to-accent rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-section relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Sobre <span className="glow-text">Nós</span></h2>
          <p className="section-subheading">
            Somos uma equipe de desenvolvimento de software apaixonada por criar soluções inovadoras que impulsionam o sucesso do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueItem
            title="Missão"
            description="Desenvolver soluções tecnológicas inovadoras com foco em sistemas SaaS e software sob demanda, transformando ideias em ferramentas digitais úteis e de impacto positivo para instituições e clientes."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            delay={0}
          />
          
          <ValueItem
            title="Visão"
            description="Consolidar até 2026 uma estrutura organizacional sólida e escalável, operando com profissionalismo e inovação mesmo antes da formalização legal, preparando-nos para atuar consistentemente no mercado."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            }
            delay={0.2}
          />
          
          <ValueItem
            title="Valores"
            description="Inovação com propósito, qualidade técnica, entrega contínua, proximidade com o cliente, colaboração, transparência e crescimento sustentável são os pilares que direcionam nossas ações."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            delay={0.4}
          />
        </div>
        
        <div className="mt-20 bg-dark/60 backdrop-blur-sm border border-gray-700/30 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6 text-white">Nossa história</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  A Proton Software nasceu quando identificamos oportunidades de melhoria em uma solução mal projetada, encontrando um caminho para desenvolver um produto inovador e expansível.
                </p>
                <p>
                  Assim surgiu a Bibliotech, nosso sistema de gerenciamento de biblioteca escolar com foco no desempenho de alunos, livros e turmas. Desenvolvemos métricas que ajudam escolas a investirem nos livros certos e motivam os estudantes através de metas trimestrais, criando um sentimento de participação.
                </p>
                <p>
                  Paralelamente, expandimos para o desenvolvimento de softwares sob demanda, que atualmente representa nosso principal foco de faturamento, enquanto continuamos evoluindo nossos produtos próprios.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary via-dark to-primary h-full min-h-[300px] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-dark/70 flex items-center justify-center relative">
                  {/* Faixa diagonal */}
                  <div 
                    className="absolute w-[150%] h-[70px] bg-gradient-to-r from-secondary/90 via-secondary to-accent/90 rotate-[-20deg] flex items-center justify-center shadow-lg border-y border-white/20"
                    style={{ 
                      backgroundSize: "200% 100%",
                      animation: "gradientAnimation 3s ease-in-out infinite alternate"
                    }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-white text-2xl font-bold drop-shadow-md">Em breve</span>
                      <span className="text-white/90 text-sm mt-1">foto da equipe!</span>
                    </div>
                  </div>
                  
                  {/* Elementos decorativos */}
                  <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-secondary/10"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full bg-accent/10"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-secondary/5"></div>
                  <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-accent/5"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 