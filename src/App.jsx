// src/App.jsx
import { useEffect, useState } from 'react';
import Particles from 'react-particles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SpaceScene from './components/SpaceScene';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const sections = [
    { Component: About, id: 'about' },
    { Component: Experience, id: 'experience' },
    { Component: Projects, id: 'projects' },
    // { Component: Education, id: 'education' },
    { Component: Skills, id: 'skills' },
  ];

  const particlesInit = async (engine) => {
    await loadStarsPreset(engine);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={{
                preset: 'stars',
                background: { color: { value: '#0a0a23' } },
                particles: {
                  number: { value: 120 },
                  move: { speed: 0.5 },
                },
              }}
              className="absolute top-0 left-0 w-full h-full z-0"
            />
            <SpaceScene />
            <Header />
            {sections.map(({ Component, id }) => (
              <Section key={id} id={id}>
                <Component />
              </Section>
            ))}
            <Section id="contact-us">
              <ContactUs />
            </Section>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Contact Us
      </motion.h2>
      <motion.p 
        className="section-subtle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Get in touch with me for opportunities or collaborations
      </motion.p>
      <motion.div 
        className="card"
        style={{ maxWidth: '500px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 80, scale: 0.9, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut", type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -8, scale: 1.03, rotateX: 3 }}
      >
        <motion.input 
          type="text" 
          placeholder="What is your name" 
          className="contact-input" 
          style={{ width: '90%', marginBottom: '12px', padding: '14px', borderRadius: '10px', border: '1px solid var(--muted)', background: 'var(--bg-soft)', color: 'var(--text)', fontSize: '16px' }}
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
          viewport={{ once: true, amount: 0.2 }}
          whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
        />
        <motion.input 
          type="text" 
          placeholder="Contact number" 
          className="contact-input" 
          style={{ width: '90%', marginBottom: '12px', padding: '14px', borderRadius: '10px', border: '1px solid var(--muted)', background: 'var(--bg-soft)', color: 'var(--text)', fontSize: '16px' }}
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
          viewport={{ once: true, amount: 0.2 }}
          whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
        />
        <motion.input 
          type="email" 
          placeholder="Email" 
          className="contact-input" 
          style={{ width: '90%', marginBottom: '12px', padding: '14px', borderRadius: '10px', border: '1px solid var(--muted)', background: 'var(--bg-soft)', color: 'var(--text)', fontSize: '16px' }}
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
          viewport={{ once: true, amount: 0.2 }}
          whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
        />
        <motion.textarea 
          placeholder="What is your message" 
          className="contact-input" 
          style={{ width: '90%', marginBottom: '18px', padding: '14px', borderRadius: '10px', border: '1px solid var(--muted)', background: 'var(--bg-soft)', color: 'var(--text)', height: '120px', resize: 'vertical', fontSize: '16px' }}
          initial={{ opacity: 0, x: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
          viewport={{ once: true, amount: 0.2 }}
          whileFocus={{ scale: 1.02, borderColor: 'var(--primary)' }}
        />
        <motion.button 
          className="btn" 
          style={{ width: '90%', padding: '16px', fontSize: '18px', fontWeight: '600', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 150 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.08, y: -3, rotateY: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.div>
    </div>
  );
};

const Section = ({ children, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className="section"
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.section>
  );
};

export default App;