import Colors from './Colors';
import BigNavBtn from './BigNavBtn';
import { ReactComponent as Logo } from '../images/Logo.svg';
import { motion } from 'framer-motion';
import { linkClickHandler, MY_RESUME_LINK } from '../data';

interface BigNavProps {
  closeMenu: () => void;
  colorChangeHandler: (color: string) => void;
  selectedColor: string;
}

function BigNav({
  closeMenu,
  colorChangeHandler,
  selectedColor,
}: BigNavProps): JSX.Element {
  return (
    <nav className="nav">
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
        onClick={(e) => linkClickHandler(e, 'app', closeMenu)}
      >
        <Logo className="logo" />
      </motion.button>

      <Colors
        colorChangeHandler={colorChangeHandler}
        selectedColor={selectedColor}
      />

      <div className="nav__buttons">
        <BigNavBtn text="Skills" delay={0.65} setter={closeMenu} />
        <BigNavBtn text="Projects" delay={0.55} setter={closeMenu} />
        <BigNavBtn text="About" delay={0.45} setter={closeMenu} />
        <BigNavBtn text="Contact" delay={0.35} setter={closeMenu} />
        <motion.a
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          viewport={{ once: true }}
          className="nav__btn nav__btnResume"
          href={MY_RESUME_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </motion.a>
      </div>
    </nav>
  );
}

export default BigNav;
