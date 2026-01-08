import React from 'react';
import { Instagram, Mail, Youtube, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10 px-6 border-t border-verin-mocha/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 space-y-6">
          <div className="flex flex-col items-start">
            <span className="font-serif text-3xl font-bold tracking-[0.15em] text-verin-black leading-none">VERIN</span>
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.35em] text-verin-black/80 mt-1 pl-1">Media</span>
          </div>
          <div className="flex items-center space-x-2 text-verin-mocha pt-2">
             <MapPin size={18} />
             <span>Dubai | Madrid</span>
          </div>
          <p className="text-verin-black/60 max-w-sm">
            Crafting premium digital narratives for the world's most ambitious individuals and brands.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-sans font-bold uppercase tracking-widest text-xs text-verin-black">Explore</h4>
          <ul className="space-y-2 text-verin-black/70">
            <li><a href="#" className="hover:text-verin-coral transition-colors inline-block hover:translate-x-1 duration-200">Home</a></li>
            <li><a href="#individuals" className="hover:text-verin-coral transition-colors inline-block hover:translate-x-1 duration-200">Individuals</a></li>
            <li><a href="#companies" className="hover:text-verin-coral transition-colors inline-block hover:translate-x-1 duration-200">Companies</a></li>
            <li><a href="#services" className="hover:text-verin-coral transition-colors inline-block hover:translate-x-1 duration-200">Services</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-sans font-bold uppercase tracking-widest text-xs text-verin-black">Connect</h4>
          <ul className="space-y-2 text-verin-black/70">
            <li>
              <a href="mailto:Verinmedia@gmail.com" className="flex items-center gap-2 hover:text-verin-coral transition-colors">
                <Mail size={16} /> Contact Us
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/verin.media/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-verin-coral transition-colors">
                <Instagram size={16} /> @verin.media
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@VerinMedia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-verin-coral transition-colors">
                <Youtube size={16} /> @VerinMedia
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-verin-black/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-verin-black/40">
        <p>&copy; {new Date().getFullYear()} Verin Media. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
           <a href="#" className="hover:text-verin-black">Privacy Policy</a>
           <a href="#" className="hover:text-verin-black">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};