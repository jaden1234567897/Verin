import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { RevealOnScroll } from './components/RevealOnScroll';
import { Check } from 'lucide-react';

interface CompaniesProps {
  onNavigate: (page: string) => void;
}

const Companies: React.FC<CompaniesProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "Brand Foundations",
      description: "For startups and companies building visibility.",
      features: [
        "Brand storytelling strategy",
        "Founder or company interview video",
        "4 short-form branded reels",
        "On-camera coaching for 1 spokesperson",
        "Content direction & messaging"
      ]
    },
    {
      id: 2,
      title: "Brand Authority",
      description: "For companies that want to lead their space.",
      features: [
        "Founder/company story film",
        "Podcast-style interview episode",
        "6–8 premium reels",
        "Team or culture storytelling content",
        "Executive media coaching",
        "Publishing & visibility strategy"
      ]
    },
    {
      id: 3,
      title: "Thought Leadership Program",
      description: "For companies serious about long-term presence.",
      features: [
        "Full storytelling & positioning strategy",
        "YouTube content mastery (long-form + shorts)",
        "Multiple filming days",
        "Podcast series or interview campaign",
        "Leadership media coaching",
        "Strategic visibility planning"
      ]
    }
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen flex flex-col selection:bg-verin-coral selection:text-white font-sans text-[#121212]">
      <Navbar onNavigate={onNavigate} currentPage="companies" />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-20 px-6">
           <div 
              className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-b from-[#E6D2B5] to-transparent rounded-full opacity-60 blur-3xl -z-10"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            ></div>

          <div className="max-w-5xl mx-auto text-center space-y-6">
            <RevealOnScroll delay={200}>
               <h1 className="font-serif text-5xl md:text-7xl text-[#121212]">
                  Services for Companies
               </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
               <p className="font-sans text-xl text-[#121212]/60 max-w-2xl mx-auto leading-relaxed">
                 Build authority, attract talent, and define your market position with our premium corporate storytelling packages.
               </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-32 px-6">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {services.map((service, index) => (
                 <RevealOnScroll key={service.id} delay={index * 100} className="h-full">
                   <div 
                     className="h-full p-8 rounded-[2rem] border border-transparent bg-white hover:border-verin-mocha/10 hover:shadow-lg transition-all duration-500 group relative flex flex-col"
                   >
                     <div className="flex items-center justify-between gap-4 mb-6">
                       <span className="font-serif text-5xl font-bold leading-none text-verin-mocha/10">
                         {service.id.toString().padStart(2, '0')}
                       </span>
                     </div>

                     <h3 className="font-serif text-2xl md:text-3xl transition-colors mb-4 text-[#121212] group-hover:text-verin-mocha">
                       {service.title}
                     </h3>
                     
                     <p className="mb-6 font-light leading-relaxed text-sm italic text-[#121212]/60">
                       {service.description}
                     </p>
                     
                     <div className="mt-auto">
                        {service.features && (
                        <ul className="space-y-3 pt-6 border-t border-verin-mocha/5">
                            {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-[#121212]/80">
                                <Check size={16} className="text-verin-coral mt-0.5 shrink-0" />
                                <span className="font-light">{feature}</span>
                            </li>
                            ))}
                        </ul>
                        )}
                     </div>
                   </div>
                 </RevealOnScroll>
               ))}
             </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-24 px-6 bg-verin-black text-verin-sand relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <RevealOnScroll>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-8">Ready to lead your industry?</h2>
              <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
                Partner with Verin Media to craft a corporate narrative that drives growth and impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                   href="https://wa.me/971558943382"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-verin-coral text-white px-10 py-4 rounded-full font-medium hover:bg-white hover:text-verin-black transition-all duration-300 text-center shadow-lg"
                 >
                   Schedule a Meeting
                 </a>
                 <button 
                   onClick={() => onNavigate('home')}
                   className="px-10 py-4 rounded-full font-medium border border-white/20 hover:border-white text-white transition-all duration-300"
                 >
                   Back to Home
                 </button>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Companies;