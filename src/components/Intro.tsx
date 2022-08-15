import SideLinks from './SideLinks';
import { ReactComponent as Arrow } from '../images/Arrow.svg';
import { m, domAnimation, LazyMotion } from 'framer-motion';
import { linkClickHandler } from '../data';

function Intro(): JSX.Element {
  const animate = (delay: number) => {
    return {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay },
    };
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="intro">
        <m.h1 className="intro__name" {...animate(0.4)}>
          Suleiman Ali
        </m.h1>
        <m.p className="intro__title" {...animate(0.5)}>
          Front End Web Developer
        </m.p>
        <m.p className="intro__text" {...animate(0.6)}>
          I'm a self-taught passionate Front End Web Developer with 2+ years of
          proven experience providing well-implemented web solutions
          incorporating a range of technologies.
        </m.p>
        <SideLinks />
        <m.button
          className="intro__btn"
          {...animate(0.7)}
          onClick={(e) => linkClickHandler(e, 'contact')}
        >
          Contact Me!
        </m.button>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Arrow className="intro__arrow" />
        </m.div>
      </div>
    </LazyMotion>
  );
}

export default Intro;
