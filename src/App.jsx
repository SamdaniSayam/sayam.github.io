import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        
        {/* Simple Footer/Contact Section integrated directly for now */}
        <section id="contact" style={{ textAlign: 'center', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', padding: '4rem 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Get In <span className="text-gradient">Touch</span></h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Whether you have a question, a project proposition, or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:golamsamdani301416@gmail.com" style={{ background: 'var(--gradient-primary)', padding: '1rem 2.5rem', borderRadius: '30px', fontWeight: 600, color: 'white', display: 'inline-block', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)', marginBottom: '3rem' }}>
              Say Hello
            </a>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              <a href="https://github.com/SamdaniSayam" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>GitHub</a>
              <a href="https://linkedin.com/in/samdanisayam" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>LinkedIn</a>
              <a href="https://pypi.org/project/triples-sigfast/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>PyPI</a>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '2rem' }}>
              © {new Date().getFullYear()} Golam Samdani Sayam. All Rights Reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
