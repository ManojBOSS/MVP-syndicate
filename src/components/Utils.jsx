import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { COMPANY } from '../data/company';

/**
 * Automatically scrolls to top on route change
 */
export function NavigateTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/**
 * Top horizontal scroll progress bar with metallic gold glow
 */
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div 
        className="scroll-progress-fill" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
}

/**
 * Back to top floating button
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button 
      onClick={scrollToTop} 
      className="back-to-top-btn" 
      aria-label="Back to top"
      title="Scroll to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}

/**
 * Floating WhatsApp quick action button
 */
export function WhatsAppFloatingButton() {
  return (
    <a 
      href={COMPANY.contact.whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-floating-action"
      aria-label="Chat on WhatsApp with Manoj, Founder of MVP Syndicate"
      title="Chat with Manoj on WhatsApp"
    >
      <span className="whatsapp-pulse" />
      <MessageCircle size={20} className="whatsapp-icon" />
      <span className="whatsapp-label">Direct with Founder</span>
    </a>
  );
}

/**
 * Ambient gold custom cursor for desktop (automatically disabled on touch devices)
 */
export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch capability
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    let animationFrameId;
    const animateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18
      }));
      animationFrameId = requestAnimationFrame(animateTrailing);
    };

    animationFrameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (isTouch) return null;

  return (
    <>
      <div 
        className={`custom-cursor-dot ${hovered ? 'hovered' : ''}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
        aria-hidden="true"
      />
      <div 
        className={`custom-cursor-follower ${hovered ? 'hovered' : ''}`}
        style={{ transform: `translate3d(${trailing.x}px, ${trailing.y}px, 0)` }}
        aria-hidden="true"
      />
    </>
  );
}
