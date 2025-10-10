// src/components/Projects.jsx
import { motion } from 'framer-motion';

const projects = [
  'Balaji Industries', 'Junction', 'Roadmode', 'Flicksy', 'Notes', 'Dental', 'Sales', 'i-Touch Restaurant'
];

const Projects = () => {
  return (
    <div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Projects
      </motion.h2>
      <motion.p 
        className="section-subtle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Selected work across apps and web
      </motion.p>
      <div className="grid cols-3 grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="card center"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.1, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{project}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;