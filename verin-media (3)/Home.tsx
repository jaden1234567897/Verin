import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { RevealOnScroll } from './components/RevealOnScroll';
import { CheckCircle, Award, TrendingUp, Globe, ArrowRight, Play } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const individualPhotos = [
    "https://i.postimg.cc/fRQYQzS1/DSC07874.jpg",
    "https://i.postimg.cc/662VGqxy/DSC07348.jpg",
    "https://i.postimg.cc/HLkXWstW/DSC08034.jpg",
    "https://i.postimg.cc/d3rTN7JN/This-week-I-gave-a-workshop-on-Digital-Storytelling-at-the-American-University-in-the-Emirates-3.jpg"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inject Fillout script dynamically to ensure it catches the rendered div
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Automatic swiping logic - 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % individualPhotos.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [individualPhotos.length]);

  const toggleVideo = (id: string) => {
    setPlayingVideos(prev => ({ ...prev, [id]: true }));
  };

  const testimonials = [
    { id: 'v1', vimeoId: '1148258886', thumb: 'https://i.postimg.cc/DfNTBCNq/Whats-App-Image-2025-12-20-at-1-01-36-PM.jpg' },
    { id: 'v2', vimeoId: '1148261004', thumb: 'https://i.postimg.cc/q7VSWSc8/video-2.jpg' },
    { id: 'v3', vimeoId: '1148284280', thumb: 'https://i.postimg.cc/TPMFBFjg/video-3.jpg' },
    { id: 'v4', vimeoId: '1139568685', thumb: 'https://i.postimg.cc/MG2NgN0Q/video-4.jpg' },
  ];

  const features = [
    {
      icon: <CheckCircle className="w-10 h-10 text-verin-mocha/80" strokeWidth={1} />,
      text: "Authentic stories, not generic content"
    },
    {
      icon: <Award className="w-10 h-10 text-verin-mocha/80" strokeWidth={1} />,
      text: "Premium production & artistic direction"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-verin-mocha/80" strokeWidth={1} />,
      text: "Exposure through media collaborations"
    },
    {
      icon: <Globe className="w-10 h-10 text-verin-mocha/80" strokeWidth={1} />,
      text: "Global presence: Dubai + Madrid"
    }
  ];

  const comingSoonText = "Coming Soon";

  return (
    <div className="bg-verin-sand min-h-screen selection:bg-verin-coral selection:text-white overflow-hidden">
        <Navbar onNavigate={onNavigate} currentPage="home" />

        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
          <div 
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-verin-champagne to-transparent rounded-full opacity-60 blur-3xl -z-10"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <RevealOnScroll delay={100}>
                <span className="inline-block py-1 px-3 border border-verin-mocha/30 rounded-full text-xs font-sans tracking-[0.2em] uppercase text-verin-mocha mb-2 backdrop-blur-sm">
                  Your story deserves to be seen
                </span>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-verin-black tracking-tight">
                  Be discovered.<br />
                  <span className="text-verin-mocha italic relative">
                    Get featured.
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-verin-coral/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </span><br />
                  Stand out.
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={500}>
                <p className="font-sans text-lg text-verin-black/70 max-w-xl leading-relaxed">
                  Verin Media turns ideas into impact through powerful digital storytelling helping brands and leaders communicate clearly, build credibility, and stand out across platforms.
                </p>
              </RevealOnScroll>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-[600px] flex items-center justify-center">
               <RevealOnScroll direction="right" delay={400} className="w-full h-full">
                  <img src="https://i.postimg.cc/ZKk3tb13/DSC07859.jpg" className="w-full h-full object-cover rounded-[3rem] shadow-2xl" alt="Hero Illustration" />
               </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Be Seen Call to Action */}
        <section className="py-32 px-6 bg-[#F4EFEA] relative overflow-hidden flex items-center justify-center">
          <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
            <RevealOnScroll>
              <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-verin-black tracking-tight">Be Seen</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="font-sans text-xl md:text-2xl text-verin-mocha/80 italic leading-relaxed">
                "Your moment won't wait. Start your journey with Verin Media today."
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <div className="pt-6">
                <a 
                  href="https://wa.me/971558943382" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-verin-black text-white px-14 py-5 rounded-full text-lg font-medium hover:bg-verin-coral transition-all duration-300 shadow-2xl inline-block hover:scale-105 transform active:scale-95"
                >
                  Register Now
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Individuals Section */}
        <section id="individuals" className="py-24 md:py-32 px-6 bg-white rounded-t-[4rem] relative z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative w-full flex items-center justify-center">
               <RevealOnScroll direction="left" className="w-full max-w-[600px]">
                 <div className="relative aspect-[1044/855] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group bg-verin-sand">
                    {individualPhotos.map((src, index) => (
                        <img 
                          key={index}
                          src={src} 
                          alt={`Verin Media for Individuals - ${index + 1}`} 
                          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                        {individualPhotos.map((_, index) => (
                            <div 
                                key={index} 
                                className={`h-1.5 transition-all duration-500 rounded-full ${index === currentPhotoIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                            />
                        ))}
                    </div>
                 </div>
               </RevealOnScroll>
            </div>
            <div className="space-y-8">
              <RevealOnScroll delay={200}>
                <h2 className="font-serif text-4xl md:text-6xl text-verin-black">
                  Verin Media for <span className="text-verin-coral italic">Individuals</span>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <div className="pl-6 border-l-2 border-verin-coral/30">
                  <p className="font-sans text-xl text-verin-mocha/80 leading-relaxed font-light italic">
                    “Your talent, elevated. We help you get seen, featured, and noticed in the moments that matter.”
                  </p>
                </div>
              </RevealOnScroll>
              <p className="text-verin-black/60 leading-relaxed text-lg">Whether you are an artist, entrepreneur, or thought leader, we build a cinematic personal brand that commands attention.</p>
              <button 
                onClick={() => onNavigate('individual-services')}
                className="group inline-flex items-center gap-2 text-verin-black border-b border-verin-black pb-1 hover:text-verin-coral transition-colors"
              >
                More details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section id="companies" className="py-24 px-6 bg-verin-sand">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 space-y-8">
                    <RevealOnScroll>
                        <h2 className="font-serif text-4xl md:text-6xl text-verin-black">Verin Media for <span className="text-verin-mocha italic">Companies</span></h2>
                    </RevealOnScroll>
                    <RevealOnScroll delay={200}>
                        <div className="pl-6 border-l-2 border-verin-coral/30">
                            <p className="font-sans text-xl text-verin-mocha/80 italic">“Your brand, amplified. We turn expertise into powerful visibility that builds trust and growth.”</p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={300}>
                        <p className="text-verin-black/60 text-lg">From founder stories to corporate documentaries, we produce high-end content that resonates with your stakeholders.</p>
                    </RevealOnScroll>
                    <button onClick={() => onNavigate('companies')} className="group inline-flex items-center gap-2 border-b border-verin-black pb-1 hover:text-verin-coral hover:border-verin-coral transition-colors">
                        Explore More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                <div className="relative h-[500px] order-1 md:order-2">
                    <RevealOnScroll direction="right">
                        <div className="h-full w-full rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src="https://i.postimg.cc/8zH8hChb/DSC08063.jpg" alt="Companies" className="w-full h-full object-cover" />
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>

        {/* Services Section (Sequential Glow Ripple) */}
        <section id="services" className="py-24 px-6 bg-[#000000] text-verin-sand rounded-[2rem] mx-4 md:mx-10 shadow-2xl relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <RevealOnScroll>
                        <span className="text-verin-coral tracking-[0.2em] uppercase text-xs font-bold">Exclusive For</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-white mt-2">Verin Media</h2>
                    </RevealOnScroll>
                </div>
                <div className="flex flex-col items-center justify-center py-24">
                    <RevealOnScroll delay={200}>
                        <h3 className="font-serif text-6xl md:text-8xl lg:text-9xl italic tracking-tighter text-center glow-text select-none">
                            {comingSoonText.split('').map((char, i) => (
                              <span key={i} style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                                {char === ' ' ? '\u00A0' : char}
                              </span>
                            ))}
                        </h3>
                        <div className="w-24 h-[1px] bg-verin-coral/30 mt-16 mx-auto animate-pulse"></div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>

        {/* Why Verin Media Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-20">
                <h2 className="font-serif text-4xl md:text-6xl text-verin-black mb-6 tracking-tight">Why Verin Media?</h2>
                <div className="w-24 h-[1px] bg-verin-black/20 mx-auto"></div>
              </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
              {features.map((feature, idx) => (
                <RevealOnScroll key={idx} delay={idx * 100} className="text-center flex flex-col items-center space-y-6">
                  <div className="mb-2">
                    {feature.icon}
                  </div>
                  <p className="font-serif text-lg md:text-xl text-verin-black/80 max-w-[240px] leading-snug">
                    {feature.text}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Collaborations - Colorful logos */}
        <section className="py-24 px-6 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                    <h2 className="text-center font-serif text-3xl md:text-5xl mb-16 text-verin-black">Our Collaborations</h2>
                </RevealOnScroll>
                <div className="flex w-[200%] animate-infinite-scroll">
                    <div className="flex items-center justify-around w-full gap-8">
                        <img src="https://i.ibb.co/mVsM8qZC/alaan-removebg-preview.png" alt="Al Aan TV" className="h-16 md:h-20 transition-all hover:scale-110" />
                        <img src="https://i.ibb.co/fYvHySZx/Whats-App-Image-2025-11-15-at-15-12-07-c0a67b5a-removebg-preview.png" alt="Dubai Press Club" className="h-16 md:h-20 transition-all hover:scale-110" />
                        <img src="https://i.ibb.co/k6BJtZjN/Whats-App-Image-2025-11-15-at-15-13-19-12cf9ed3-removebg-preview.png" alt="AUE" className="h-16 md:h-20 transition-all hover:scale-110" />
                        <img src="https://i.ibb.co/mVsM8qZC/alaan-removebg-preview.png" alt="Al Aan TV" className="h-16 md:h-20 transition-all hover:scale-110" />
                        <img src="https://i.ibb.co/fYvHySZx/Whats-App-Image-2025-11-15-at-15-12-07-c0a67b5a-removebg-preview.png" alt="Dubai Press Club" className="h-16 md:h-20 transition-all hover:scale-110" />
                        <img src="https://i.ibb.co/k6BJtZjN/Whats-App-Image-2025-11-15-at-15-13-19-12cf9ed3-preview.png" alt="AUE" className="h-16 md:h-20 transition-all hover:scale-110" />
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 px-6 bg-verin-sand border-t border-verin-mocha/5">
          <div className="max-w-7xl mx-auto">
             <RevealOnScroll>
               <div className="text-center mb-16">
                 <h2 className="font-serif text-3xl md:text-5xl text-verin-black mb-4">Testimonials</h2>
                 <p className="font-sans text-verin-mocha/60 uppercase tracking-widest text-xs">Voices of Impact</p>
               </div>
             </RevealOnScroll>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {testimonials.map((video, idx) => (
                 <RevealOnScroll key={video.id} delay={idx * 100} direction="up">
                   <div className="relative aspect-[9/16] bg-black rounded-[2.5rem] border-[10px] border-white shadow-xl overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-500">
                      {!playingVideos[video.id] ? (
                        <div onClick={() => toggleVideo(video.id)} className="w-full h-full relative z-10">
                           <img 
                             src={video.thumb} 
                             alt="Testimonial Cover" 
                             className="w-full h-full object-cover transition-opacity duration-300" 
                           />
                           <div className="absolute inset-0 flex items-center justify-center z-20">
                              <div className="w-20 h-20 bg-[#FF0000] rounded-full flex items-center justify-center shadow-2xl border-4 border-white hover:scale-110 transition-transform">
                                 <Play fill="white" className="text-white ml-1.5" size={40} />
                              </div>
                           </div>
                        </div>
                      ) : (
                        <iframe 
                           src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&muted=0`}
                           width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
                           className="w-full h-full"
                        ></iframe>
                      )}
                   </div>
                 </RevealOnScroll>
               ))}
             </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white py-12 px-6 overflow-visible">
          <div className="max-w-7xl mx-auto">
            {/* Removed RevealOnScroll to isolate the Fillout embed script logic */}
            <div 
              style={{ width: '100%', minHeight: '500px' }} 
              data-fillout-id="rUhR5GkDNQus" 
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters 
              data-fillout-dynamic-resize
              className="bg-transparent"
            ></div>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default Home;