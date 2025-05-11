import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';
import React from 'react';

interface TestimonialProps {
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
}

const Testimonials = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: TestimonialProps[] = [
    {
      name: "Ricardo Oliveira",
      position: "CEO",
      company: "TechVision Brasil",
      image: "/images/testimonial1.jpg",
      content: "A Proton Software superou todas as nossas expectativas. Eles não apenas desenvolveram um sistema perfeitamente alinhado às nossas necessidades, mas também agregaram valor com ideias inovadoras que melhoraram significativamente nossos processos internos."
    },
    {
      name: "Amanda Ferreira",
      position: "Diretora de Operações",
      company: "Future Finance",
      image: "/images/testimonial2.jpg",
      content: "Trabalhar com a equipe da Proton foi uma experiência incrível. Eles entenderam perfeitamente nosso modelo de negócio e entregaram um aplicativo que revolucionou a maneira como interagimos com nossos clientes. Eficiência e profissionalismo do início ao fim."
    },
    {
      name: "Carlos Mendes",
      position: "CTO",
      company: "InnovateBR",
      image: "/images/testimonial3.jpg",
      content: "Como profissional de tecnologia, sou extremamente exigente com parceiros de desenvolvimento. A Proton não apenas atendeu, mas superou minhas expectativas técnicas. Sua abordagem colaborativa e domínio tecnológico são verdadeiramente impressionantes."
    },
    {
      name: "Juliana Costa",
      position: "Gerente de Marketing",
      company: "EcoSmart Solutions",
      image: "/images/testimonial4.jpg",
      content: "Depois de experiências frustrantes com outras empresas, encontrar a Proton foi um alívio. Eles realmente se importam com os resultados e trabalham incansavelmente para garantir que o produto final seja exatamente o que você precisa. Recomendo sem hesitar."
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-secondary/30 to-accent/10 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-500/10 to-secondary/30 filter blur-3xl"></div>
      </div>
      
      <div ref={sectionRef} className="container-section relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">O Que <span className="glow-text">Dizem</span> Sobre Nós</h2>
          <p className="section-subheading">
            Confira a experiência de quem já transformou seus negócios com nossas soluções.
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-center gap-8">
                          <div className="md:w-1/4 flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-secondary/30">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=0a2540&color=00c3ff`;
                                }}
                              />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                              <p className="text-gray-400 text-sm">{testimonial.position}</p>
                              <p className="text-secondary text-sm">{testimonial.company}</p>
                            </div>
                          </div>
                          <div className="md:w-3/4">
                            <svg className="text-secondary/30 h-10 w-10 mb-4" fill="currentColor" viewBox="0 0 32 32">
                              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p className="text-gray-300 text-lg italic leading-relaxed">
                              {testimonial.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <button 
                  onClick={prevTestimonial}
                  className="bg-dark/80 hover:bg-secondary/20 transition-colors p-3 rounded-full text-white"
                  aria-label="Depoimento anterior"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2">
                <button 
                  onClick={nextTestimonial}
                  className="bg-dark/80 hover:bg-secondary/20 transition-colors p-3 rounded-full text-white"
                  aria-label="Próximo depoimento"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6 pb-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-secondary' : 'bg-gray-600 hover:bg-gray-500'}`}
                  aria-label={`Ir para o depoimento ${index + 1}`}
                ></button>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Clientes que confiam em nós</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Empresa A", "Empresa B", "Empresa C", "Empresa D", "Empresa E"].map((company, index) => (
              <div key={index} className="w-32 h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <div className="text-lg font-semibold text-gray-300">{company}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 