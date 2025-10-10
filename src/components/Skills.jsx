// src/components/Skills.jsx
import { motion } from 'framer-motion';

const skills = [
  { name: 'Android', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Kotlin', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'SQLite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
  { name: 'Android Studio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Postman', src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
];

const Skills = () => {
  return (
    <div>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Key Skills
      </motion.h2>
      <motion.p 
        className="section-subtle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: false, amount: 0.1 }}
      >
        Tools and technologies I work with
      </motion.p>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            className="center"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.05, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{ 
              scale: 1.2, 
              y: -10,
              rotate: 5,
              boxShadow: "0 20px 40px rgba(122,162,255,0.3)",
              backgroundColor: "rgba(122,162,255,0.1)"
            }}
            style={{ 
              padding: '20px',
              borderRadius: '15px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
          >
            <motion.img
              src={skill.src}
              alt={skill.name}
              style={{ 
                width: '100px', 
                height: '100px', 
                objectFit: 'contain',
                filter: 'brightness(1)'
              }}
              whileHover={{
                filter: 'brightness(1.2) drop-shadow(0 8px 16px rgba(122,162,255,0.4))',
                scale: 1.1
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0,0,0,0.8)',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '500',
                opacity: 0,
                pointerEvents: 'none',
                whiteSpace: 'nowrap'
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {skill.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;