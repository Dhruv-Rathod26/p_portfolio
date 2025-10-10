// src/components/Header.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'education', 'skills', 'contact-us'];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        { rootMargin: '-30% 0px -30% 0px', threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav">
          <motion.div
            className="brand moon-glow"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Portfolio
          </motion.div>
          <ul className="nav-links">
            {['about', 'experience', 'projects', 'education', 'skills', 'contact-us'].map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <a
                  href={`#${item}`}
                  className={`nav-link ${active === item ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item === 'contact-us' ? 'Contact Us' : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;