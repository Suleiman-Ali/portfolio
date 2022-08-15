import { m, domAnimation, LazyMotion } from 'framer-motion';
import { builtWhileInViewAnimation, linkClickHandler } from '../data';

interface BigNavBtnProps {
  text: string;
  delay: number;
  setter: () => void;
}

function BigNavBtn({ delay, setter, text }: BigNavBtnProps): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <m.button
        className="nav__btn"
        {...builtWhileInViewAnimation('y', -25, delay)}
        onClick={(e) => linkClickHandler(e, text.toLowerCase(), setter)}
      >
        {text}();
      </m.button>
    </LazyMotion>
  );
}

export default BigNavBtn;
