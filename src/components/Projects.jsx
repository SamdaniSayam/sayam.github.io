import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'triples-sigfast',
      tech: 'Python • Numba JIT • uproot • PyPI',
      description: 'Built and published an open-source Python/Numba analysis engine for Geant4/ROOT simulation data. Processed 100M-row (800MB) datasets in ~1.2s. Achieved up to 13.5x speedup over Pandas with 36 custom Numba-JIT kernels. Unified analysis of 8 Monte Carlo formats through a single dispatcher.',
      github: 'https://github.com/SamdaniSayam',
      live: 'https://pypi.org/project/triples-sigfast/',
      highlight: true
    },
    {
      title: 'Pakhi: Weather Intelligence Platform',
      tech: 'Python • FastAPI • PostgreSQL • Docker',
      description: 'Engineered a high-throughput ML data pipeline processing multi-GB GFS/ERA5 meteorological feeds into forecasting features. Designed a unified BaseModel interface for six interchangeable ML forecasting implementations. Built a FastAPI/PostgreSQL backend with distributed rate limiting.',
      github: 'https://github.com/SamdaniSayam',
      live: '#',
      highlight: true
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {project.highlight && (
                <div style={{ position: 'absolute', top: '15px', right: '-35px', background: 'var(--accent-purple)', color: 'white', padding: '5px 40px', transform: 'rotate(45deg)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                  FEATURED
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>{project.title}</h3>
              <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.05)', padding: '5px 10px', borderRadius: '6px', display: 'inline-block' }}>
                {project.tech}
              </p>
              
              <p style={{ marginBottom: '2rem', flexGrow: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  <Code size={20} /> Code
                </a>
                {project.live !== '#' && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)', transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.currentTarget.style.color = 'var(--accent-blue)'}>
                    <ExternalLink size={20} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
