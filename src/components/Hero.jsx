import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center', zIndex: 10 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}
        >
          Software Engineer & Computational Physicist
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}
        >
          Hi, I'm <span className="text-gradient">Golam Samdani Sayam</span>.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}
        >
          Bridging the gap between scalable web development and high-performance computing. I build robust, C-speed systems and stunning web architectures.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
          <a href="#projects" style={{ background: 'var(--gradient-primary)', padding: '1rem 2rem', borderRadius: '30px', fontWeight: 600, color: 'white', display: 'inline-block', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)' }}>
            View My Work
          </a>
          <a href="#contact" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', padding: '1rem 2rem', borderRadius: '30px', fontWeight: 600, color: 'white', display: 'inline-block', transition: 'all 0.3s ease' }}>
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Decorative blurred background orb */}
      <div style={{ position: 'absolute', top: '20%', left: '30%', width: '400px', height: '400px', background: 'var(--accent-purple)', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '30%', width: '400px', height: '400px', background: 'var(--accent-blue)', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%', zIndex: 0 }} />
    </section>
  );
};

export default Hero;
