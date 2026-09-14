import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'triples-sigfast',
      tech: 'Python • Numba JIT • uproot • PyPI',
      description: 'An open-source data analysis engine published on PyPI. Processes 800MB (100M rows) of simulation datasets in ~1.2s. Achieved 2000x execution speedups over standard Python by implementing O(N) prefix-sums and compiling hot-path kernels via Numba LLVM backend.',
      github: 'https://github.com/SamdaniSayam',
      live: 'https://pypi.org/project/triples-sigfast/',
      highlight: true
    },
    {
      title: 'Pakhi',
      tech: 'React • Node.js • Modern Architecture',
      description: 'An innovative web application emphasizing scalable architecture and real-time interactions. Designed to provide seamless user experiences through optimized state management and highly responsive UI components. (Placeholder description to be updated).',
      github: '#',
      live: '#',
      highlight: true
    },
    {
      title: 'Distributed URL Shortener',
      tech: 'Python • FastAPI • Redis • Docker',
      description: 'High-throughput URL shortening service utilizing a Cache-Aside pattern. Integrated Redis in-memory caching to drastically reduce latency and containerized the API via Docker Compose.',
      github: 'https://github.com/SamdaniSayam',
      live: '#'
    },
    {
      title: 'NASA Exoplanet Detector',
      tech: 'Python • TensorFlow • CNN • SciPy',
      description: 'Developed a 1D Convolutional Neural Network to detect exoplanets in noisy Kepler time-series data, achieving 99.3% test accuracy using an FFT-based signal processing pipeline.',
      github: 'https://github.com/SamdaniSayam/Deep-Learning-Exoplanet-Detection',
      live: '#'
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
