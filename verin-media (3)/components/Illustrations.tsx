import React from 'react';

// Abstract, minimal, organic shapes inspired by high-end flat illustration style
// Using the brand palette: Mocha, Coral, Champagne, Black

interface IllustrationProps {
  style?: React.CSSProperties;
  className?: string;
}

export const HeroIllustration: React.FC<IllustrationProps> = ({ style, className }) => {
  return (
    <svg viewBox="0 0 600 500" className={`w-full h-full drop-shadow-2xl ${className}`} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="noise-hero" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </defs>
      
      {/* Background - Soft Hills / Wavy path */}
      <path d="M0 350 C 150 320, 300 480, 600 400 V 500 H 0 Z" fill="#EDE4D8" />
      <path d="M0 420 C 200 400, 400 490, 600 440 V 500 H 0 Z" fill="#F4EFEA" />
      
      {/* Figure 1 (Left - Background/Shadow) */}
      <g transform="translate(60, 240)" opacity="0.5">
        <path d="M20 120 L 20 180 M 20 120 L 40 180" stroke="#6A4E42" strokeWidth="6" strokeLinecap="round" />
        <path d="M10 50 Q 5 120 20 120 Q 35 120 30 50" fill="#6A4E42" />
        <circle cx="20" cy="35" r="14" fill="#6A4E42" />
      </g>

      {/* Figure 2 (Middle - Background/Shadow) */}
      <g transform="translate(180, 210)" opacity="0.7">
        <path d="M25 120 L 15 190 M 25 120 L 45 180" stroke="#6A4E42" strokeWidth="6" strokeLinecap="round" />
        <rect x="10" y="50" width="30" height="70" rx="8" fill="#6A4E42" />
        <circle cx="25" cy="35" r="15" fill="#6A4E42" />
      </g>

      {/* Podium/Step Block */}
      <g transform="translate(380, 380)">
         <path d="M0 0 L 120 0 L 120 60 L 0 60 Z" fill="#6A4E42" />
         <path d="M0 0 L 20 -20 L 140 -20 L 120 0 Z" fill="#8B6B5D" opacity="0.8" />
      </g>

      {/* Figure 3 (Right - Leader/Glowing/Stepping Up) */}
      <g transform="translate(400, 130)" className="animate-float">
        {/* Sun/Glow Rays - Pulsing Animation */}
        <g className="animate-pulse-slow origin-center">
           <line x1="35" y1="-15" x2="35" y2="-45" stroke="#E98C79" strokeWidth="2" />
           <line x1="65" y1="-5" x2="85" y2="-25" stroke="#E98C79" strokeWidth="2" />
           <line x1="5" y1="-5" x2="-15" y2="-25" stroke="#E98C79" strokeWidth="2" />
           <line x1="80" y1="35" x2="110" y2="35" stroke="#E98C79" strokeWidth="2" />
           <line x1="-10" y1="35" x2="-40" y2="35" stroke="#E98C79" strokeWidth="2" />
        </g>
        
        {/* Back Leg */}
        <path d="M35 140 L 15 250" stroke="#0A0A0A" strokeWidth="10" strokeLinecap="round" />
        
        {/* Front Leg (Stepping up onto block) */}
        <path d="M35 140 L 65 190 L 65 250" stroke="#0A0A0A" strokeWidth="10" strokeLinecap="round" fill="none" />
        
        {/* Torso */}
        <path d="M20 50 C 15 90, 15 140, 35 140 C 55 140, 55 90, 50 50" fill="#E98C79" />
        
        {/* Arms */}
        <path d="M35 55 L 65 100" stroke="#E98C79" strokeWidth="8" strokeLinecap="round" />
        <path d="M35 55 L 5 100" stroke="#E98C79" strokeWidth="8" strokeLinecap="round" opacity="0.9" />

        {/* Head & Hair */}
        <path d="M10 20 Q 35 50 60 20 Q 70 60 50 80 L 20 80 Q 0 60 10 20" fill="#0A0A0A" />
        <circle cx="35" cy="35" r="18" fill="#F4EFEA" />
      </g>

      {/* Texture Overlay */}
      <rect width="100%" height="100%" filter="url(#noise-hero)" opacity="0.08" />
    </svg>
  );
};

export const IndividualIllustration: React.FC<IllustrationProps> = ({ style, className }) => {
  return (
    <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="noise-ind" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </defs>
      {/* Abstract steps/rising */}
      <rect x="50" y="300" width="80" height="100" fill="#6A4E42" opacity="0.2" />
      <rect x="130" y="250" width="80" height="150" fill="#6A4E42" opacity="0.4" />
      <rect x="210" y="200" width="80" height="200" fill="#6A4E42" opacity="0.6" />
      <rect x="290" y="150" width="80" height="250" fill="#6A4E42" opacity="0.8" />
      
      {/* Glowing 'Individual' orb */}
      <circle cx="330" cy="100" r="40" fill="#E98C79" className="animate-float" />
      
      {/* Connecting lines */}
      <line x1="50" y1="300" x2="330" y2="100" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      <rect width="100%" height="100%" filter="url(#noise-ind)" opacity="0.1" />
    </svg>
  );
};

export const CompanyIllustration: React.FC<IllustrationProps> = ({ style, className }) => {
  return (
    <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="noise-co" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </defs>
       {/* Abstract Workspace Structure */}
       <path d="M50 350 L200 150 L350 350 Z" fill="#EDE4D8" />
       
       {/* Floating Elements (Team) */}
       <circle cx="150" cy="250" r="30" fill="#6A4E42" />
       <circle cx="250" cy="250" r="30" fill="#6A4E42" />
       <circle cx="200" cy="180" r="30" fill="#E98C79" />
       
       {/* Orbit/Amplification rings */}
       <ellipse cx="200" cy="240" rx="140" ry="60" stroke="#0A0A0A" strokeWidth="1" fill="none" opacity="0.2" transform="rotate(-10 200 240)" />
       <ellipse cx="200" cy="240" rx="160" ry="80" stroke="#0A0A0A" strokeWidth="1" fill="none" opacity="0.1" transform="rotate(-10 200 240)" />
       <rect width="100%" height="100%" filter="url(#noise-co)" opacity="0.1" />
    </svg>
  );
};