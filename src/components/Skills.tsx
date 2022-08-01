import { motion } from 'framer-motion';
import { skills } from '../data/index';

function Skills(): JSX.Element {
  return (
    <div className="skills" id="skills">
      <motion.h2
        className="skills__heading"
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
      >
        {'<Skills />'}
      </motion.h2>
      <div className="skills__box">
        {skills.map((skill, index) => (
          <motion.p
            className="skills__skill"
            key={skill}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

export default Skills;
