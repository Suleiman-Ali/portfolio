import { motion } from 'framer-motion';
import { builtWhileInViewAnimation, skills } from '../data/index';

function Skills(): JSX.Element {
  return (
    <div className="skills" id="skills">
      <motion.h2
        className="skills__heading"
        {...builtWhileInViewAnimation('x', -25, 0.25)}
      >
        {'<Skills />'}
      </motion.h2>
      <div className="skills__box">
        {skills.map((skill, index) => (
          <motion.p
            className="skills__skill"
            key={skill}
            {...builtWhileInViewAnimation('x', -25, index * 0.1)}
          >
            {skill}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

export default Skills;
