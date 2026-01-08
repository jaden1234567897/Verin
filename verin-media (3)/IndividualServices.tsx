import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { RevealOnScroll } from './components/RevealOnScroll';
import { Check } from 'lucide-react';

interface IndividualServicesProps {
  onNavigate: (page: string) => void;
}

const IndividualServices: React.FC<IndividualServicesProps> = ({ onNavigate }) => {
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
      title: "Starter Visibility",
      description: "Best for: Individuals starting their media presence.",
      features: [
        "Personal storytelling development",
        "Basic on-camera coaching",
        "2 short-form reels",
        "Content direction & scripting",
        "Publishing guidance"
      ],
      note: "Ideal for professionals, talents, and creators."
    },
    {
      id: 2,
      title: "Media-Ready",
      description: "Best for: Individuals who want to look professional and confident on camera.",
      features: [
        "Full personal branding & storytelling (for social media platforms)",
        "On-camera mastery session",
        "4 premium reels",
        "Professional photoshoot (1 look)",
        "Visibility strategy roadmap"
      ],
      note: "Most popular package for serious career growth.",
      isHighlight: true
    },
    {
      id: 3,
      title: "Signature Presence",
      description: "Best for: A full transformation into a media-ready personality.",
      features: [
        "Full makeover (styling, grooming & image direction)",
        "Portfolio Day (professional photos + identity video)",
        "Podcast appearance or interview feature",
        "4 professionally produced reels",
        "Advanced on-camera coaching",
        "Personal visibility & positioning strategy"
      ],
      note: "For individuals ready to be seen seriously."
    },
    {
      id: 4,
      title: "Events Edition",
      description: "Format: Event-Based Content Creation (Advanced Content Level)",
      features: [
        "Filming 4 reels during events across the UAE",
        "Professional cameraman",
        "Full production & editing"
      ],
      note: "Perfect for speakers, public figures, and active professionals."
    },
    {
      id: 5,
      title: "Podcast Show",
      description: "Format: Personal Podcast Series (Exclusive Program)",
      features: [
        "An exclusive podcast program with full creative control",
        "4 fully produced and edited podcast episodes",
        "Publishing on Verin Media’s YouTube platform",
        "Key highlights converted into reels",
        "Cross-platform promotion across Verin Media channels"
      ],
      note: "Ideal for individuals building long-term authority and media presence."
    }
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen selection:bg-[#E98C79] selection:text-white overflow-hidden font-sans text-[#121212]">
      <Navbar onNavigate={onNavigate} currentPage="individual-services" />
      
      {/* Header */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-20 px-6">
         <div 
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#E6D2B5] to-transparent rounded-full opacity-60 blur-3xl -z-10"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>

        <div className="max-w-5xl mx-auto text-center space-y-6">
          <RevealOnScroll delay={200}>
             <h1 className="font-serif text-5xl md:text-7xl text-[#121212]">
                Services for Individuals
             </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
             <p className="font-sans text-xl text-[#121212]/60 max-w-2xl mx-auto leading-relaxed">
               Elevate your personal brand with our suite of premium services designed to craft your narrative and amplify your presence.
             </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {services.map((service, index) => (
               <RevealOnScroll key={service.id} delay={index * 100} className="h-full">
                 <div 
                   className={`h-full p-8 rounded-[2rem] border transition-all duration-500 group relative overflow-hidden flex flex-col bg-white
                     ${service.isHighlight 
                        ? 'border-verin-coral/50 shadow-xl' 
                        : 'border-transparent hover:border-verin-mocha/10 hover:shadow-lg'
                     }`}
                 >
                   <div className="flex items-baseline justify-between mb-4">
                     <span className="font-serif text-5xl font-bold leading-none text-verin-mocha/10">
                       {service.id.toString().padStart(2, '0')}
                     </span>
                   </div>

                   <h3 className="font-serif text-2xl md:text-3xl transition-colors pr-12 mb-2 text-[#121212] group-hover:text-verin-mocha">
                     {service.title}
                   </h3>
                   
                   <p className="mb-6 font-light leading-relaxed text-sm italic text-[#121212]/50">
                     {service.description}
                   </p>
                   
                   {service.features && (
                     <ul className="space-y-3 mt-auto pt-6 border-t border-verin-mocha/5">
                       {service.features.map((feature, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-sm text-[#121212]/80">
                           <Check size={16} className="text-verin-coral mt-0.5 shrink-0" />
                           <span className="font-light">{feature}</span>
                         </li>
                       ))}
                     </ul>
                   )}

                   {service.note && (
                       <div className="mt-4 pt-4">
                           <p className="text-xs font-medium text-verin-mocha/70">
                               👉 {service.note}
                           </p>
                       </div>
                   )}
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
              Select the services that match your goals and let's start building your legacy.
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

      <Footer />
    </div>
  );
};

export default IndividualServices;