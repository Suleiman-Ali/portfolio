import { m, LazyMotion, domAnimation } from 'framer-motion';
import { builtWhileInViewAnimation, skills } from '../data/index';

function Skills(): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <div className="skills" id="skills">
        <m.h2
          className="skills__heading"
          {...builtWhileInViewAnimation('x', -25, 0.25)}
        >
          {'<Skills />'}
        </m.h2>
        <div className="skills__box">
          {skills.map((skill, index) => (
            <m.p
              className="skills__skill"
              key={skill}
              {...builtWhileInViewAnimation('x', -25, index * 0.1)}
            >
              {skill}
            </m.p>
          ))}
        </div>
      </div>
    </LazyMotion>
  );
}

export default Skills;
