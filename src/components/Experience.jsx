import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Activity } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Lead Simulation & Analysis Developer',
      company: 'Nuclear Physics Research Lab (PUST)',
      date: 'Mar. 2026 - Present',
      icon: <Activity className="text-accent-purple" size={24} />,
      points: [
        'Architected an end-to-end simulation pipeline in C++ (Geant4), modeling 10^7 neutron interactions with polymer composites.',
        'Engineered custom detector classes to serialize millions of particle hits into high-fidelity ROOT datasets.',
        'Resolved critical physics anomalies by debugging Monte Carlo boundary conditions, ensuring 100% mathematical validity.',
        'Automated batch processing via Python, reducing manual sweep time from 1 week to a single overnight command.'
      ]
    },
    {
      title: 'Founder & Full-Stack Developer',
      company: 'TripleS Studio',
      date: 'Dec. 2024 - Present',
      icon: <Briefcase className="text-accent-blue" size={24} />,
      points: [
        'Co-founded a full-stack development agency delivering scalable web apps utilizing Next.js, Django, and PostgreSQL.',
        'Engineered and deployed SigFast Pro, a robust SaaS client dashboard with secure payment integrations.',
        'Managed end-to-end SDLC, translating complex requirements into highly available AWS/Vercel architectures.'
      ]
    }
  ];

  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Professional <span className="text-gradient">Experience</span>
        </motion.h2>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{ position: 'relative', paddingLeft: '3rem', marginBottom: index === experiences.length - 1 ? 0 : '3rem' }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div style={{ position: 'absolute', left: '11px', top: '40px', bottom: '-40px', width: '2px', background: 'var(--border-color)' }} />
              )}
              
              {/* Icon */}
              <div style={{ position: 'absolute', left: 0, top: 0, width: '24px', height: '24px', background: 'var(--bg-card)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', padding: '8px', zIndex: 2 }}>
                {exp.icon}
              </div>

              <div className="card" style={{ padding: '1.5rem', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{exp.title}</h3>
                    <p style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{exp.company}</p>
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: '20px' }}>
                    {exp.date}
                  </span>
                </div>
                
                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.5rem' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-purple)' }}>▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
