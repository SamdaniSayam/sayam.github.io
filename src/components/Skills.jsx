import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend & Systems',
      skills: ['Python', 'C++', 'FastAPI', 'Django', 'PostgreSQL', 'Redis', 'System Design']
    },
    {
      title: 'Scientific Computing',
      skills: ['Numba (LLVM JIT)', 'CERN ROOT', 'Geant4', 'uproot', 'Pandas', 'NumPy', 'Monte Carlo']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      title: 'DevOps & Tooling',
      skills: ['Docker', 'GitHub Actions', 'pytest', 'Git', 'Linux/Ubuntu', 'Vercel']
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Technical <span className="text-gradient">Skills</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--accent-blue)', textAlign: 'center' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
                    onMouseOver={e => e.currentTarget.style.borderColor = 'var(--accent-purple)'}
                    onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
