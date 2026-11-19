import React from 'react';

/**
 * Official MVP Syndicate Brand Identity
 * Represents the nine Ravana-inspired heads:
 * 4 on left, 1 central supreme head, 4 on right.
 * Metallic gold appearance, crimson accent ribbon, and bold MVP wordmark.
 */

export function BrandMark({ compact = false, showTagline = true, className = "" }) {
  return (
    <div className={`brand-lockup ${compact ? 'compact' : ''} ${className}`} aria-label="MVP Syndicate">
      <div className="brand-emblem-wrap">
        <img 
          src="/brand/mvp-emblem-hd.png" 
          alt="MVP Syndicate Nine-Headed Crown Emblem" 
          className="brand-emblem-img"
          loading="eager"
        />
        <div className="emblem-halo" />
      </div>
      <div className="brand-text-block">
        <span className="brand-title">
          MVP<span className="brand-syndicate">SYNDICATE</span>
        </span>
        {showTagline && !compact && (
          <span className="brand-sub">ENGINEER THE EXTRAORDINARY</span>
        )}
      </div>
    </div>
  );
}

export function BrandHeroEmblem({ className = "" }) {
  return (
    <div className={`hero-emblem-container ${className}`}>
      <div className="hero-emblem-backdrop">
        <div className="emblem-pulse-ring ring-1" />
        <div className="emblem-pulse-ring ring-2" />
        <div className="emblem-light-beam" />
      </div>
      <div className="hero-emblem-frame">
        <img 
          src="/brand/mvp-emblem-hd.png" 
          alt="MVP Syndicate Supreme Nine-Headed King Emblem — Build, Engineer, Disrupt" 
          className="hero-emblem-image"
          loading="eager"
        />
        <div className="hero-emblem-overlay-glow" />
      </div>
      <div className="hero-emblem-captions">
        <span className="nine-dimensions-badge">
          <i className="gold-star">✦</i> NINE DIMENSIONS OF INTELLECT · ONE VISION <i className="gold-star">✦</i>
        </span>
      </div>
    </div>
  );
}

export function BrandSymbolVector({ size = 48, className = "" }) {
  return (
    <svg 
      className={`brand-symbol-svg ${className}`} 
      width={size} 
      height={(size * 66) / 100} 
      viewBox="0 0 100 66" 
      role="img" 
      aria-label="Nine-point royal emblem"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#F4EFE5" offset="0%" />
          <stop stopColor="#E4C47A" offset="30%" />
          <stop stopColor="#C8A45D" offset="70%" />
          <stop stopColor="#75501D" offset="100%" />
        </linearGradient>
        <linearGradient id="crimsonGradient" x1="0" x2="1" y1="0" y2="0">
          <stop stopColor="#8E1723" offset="0%" />
          <stop stopColor="#B51F2B" offset="50%" />
          <stop stopColor="#8E1723" offset="100%" />
        </linearGradient>
      </defs>
      
      {/* 9-Point Crown Contour: 4 left points, 1 central summit, 4 right points */}
      <path 
        d="M8 47 L13 22 L22 37 L29 12 L37 35 L50 5 L63 35 L71 12 L78 37 L87 22 L92 47Z" 
        fill="none" 
        stroke="url(#goldGradient)" 
        strokeWidth="2.2" 
        strokeLinejoin="round"
      />
      
      {/* Lower Arched Architrave */}
      <path d="M14 49 Q50 59 86 49" fill="none" stroke="#C8A45D" strokeWidth="1.8" />
      
      {/* Crimson Ribbon Wave */}
      <path d="M4 52 Q28 42 50 50 T96 48" fill="none" stroke="url(#crimsonGradient)" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      
      {/* 9 Radiating Dimensional Spheres (4 left, 1 supreme center, 4 right) */}
      {Array.from({ length: 9 }, (_, i) => (
        <g key={i} transform={`translate(${10 + i * 10}, ${i === 4 ? 22 : (i === 3 || i === 5 ? 29 : 35)})`}>
          <circle r={i === 4 ? 4.2 : 2.8} fill="url(#goldGradient)" />
          <path d="M-3 -1 Q0 -5 3 -1" fill="none" stroke="#F4EFE5" strokeWidth="1" />
        </g>
      ))}
      
      {/* Trishul Summit Motif atop central point */}
      <path d="M50 2 L50 -1 M46 6 L50 1 L54 6" stroke="#F4EFE5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
