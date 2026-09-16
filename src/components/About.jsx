import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ position: 'relative', width: 'clamp(200px, 60vw, 300px)', height: 'clamp(200px, 60vw, 300px)', margin: '0 auto' }}>
              <div style={{ position: 'absolute', inset: -5, background: 'var(--gradient-primary)', borderRadius: '50%', filter: 'blur(20px)', opacity: 0.5, animation: 'pulse 4s infinite alternate' }} />
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', position: 'relative', zIndex: 1, border: '4px solid var(--border-color)', background: 'var(--bg-card)' }}>
                <img 
                  src={profileImg} 
                  alt="Golam Samdani Sayam" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} 
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              I am a Software Engineer and Agency Founder with a B.Sc. in Physics. I specialize in bridging the gap between scalable web development and high-performance computing (HPC). My passion lies in optimizing complex mathematical models into production-ready, C-speed software systems.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              As the founder of <strong style={{ color: 'var(--accent-blue)' }}>TripleS Studio</strong>, I deliver full-stack e-commerce platforms and web applications, handling everything from UI/UX and databases to cloud deployment. Beyond web development, I have deep expertise in System Architecture, Machine Learning, and Monte Carlo Algorithms.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              When I'm not architecting distributed systems or training Neural Networks on NASA data, you can find me solving Data Structures and Algorithms problems (<strong style={{ color: 'var(--text-primary)' }}>100+ LeetCode solved</strong>), inventing automotive engine concepts (ZERCHONE), or playing competitive chess.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
