// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="socials">
            <a 
              href="mailto:poojadantani3110@gmail.com" 
              aria-label="Email"
              style={{ transition: 'all 0.3s ease' }}
            >
              ✉️
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
              style={{ transition: 'all 0.3s ease' }}
            >
              🧑‍💻
            </a>
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              style={{ transition: 'all 0.3s ease' }}
            >
              in
            </a>
          </div>
          <p className="muted" style={{ transition: 'all 0.3s ease' }}>
            &copy; 2025 Pooja Dantani. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;