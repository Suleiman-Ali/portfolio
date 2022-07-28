import { Spin as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Navbar(): JSX.Element {
  const [isNavBig, setIsNavBig] = useState<boolean>(window.innerWidth >= 800);
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    const resizeHandler = () => setIsNavBig(window.innerWidth >= 800);
    window.addEventListener<'resize'>('resize', resizeHandler);
    return () => window.removeEventListener<'resize'>('resize', resizeHandler);
  }, []);

  if (!isNavBig)
    return (
      <nav className="navSmall">
        <div className="navSmall__box">
          <a href="/">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 218 218"
              className="logo"
            >
              <circle className="logo__circle" cx="109" cy="109" r="106.5" />
              <text className="logo__text" transform="translate(78.3 151.12)">
                S
              </text>
            </svg>
          </a>
          <Hamburger
            rounded
            duration={0.25}
            color="#fd2155"
            onToggle={() => setMenu((menu) => !menu)}
          />
        </div>

        <motion.div
          className="navSmall__menu"
          animate={{ left: menu ? 0 : -2000 }}
          transition={{ duration: 0.5 }}
        >
          <button className="navSmall__btn">Skills/</button>
          <button className="navSmall__btn">Projects/</button>
          <button className="navSmall__btn">About/</button>
          <button className="navSmall__btn">Contact/</button>
          <a
            className="navSmall__btn navSmall__btnResume"
            href="https://drive.google.com/file/d/1WByJyXCos2ii_hkyJsAj85_ikz1EIk2S/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </motion.div>
      </nav>
    );

  return (
    <nav className="nav">
      <a href="/">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 218 218"
          className="logo"
        >
          <circle className="logo__circle" cx="109" cy="109" r="106.5" />
          <text className="logo__text" transform="translate(78.3 151.12)">
            S
          </text>
        </svg>
      </a>

      <div className="nav__buttons">
        <button className="nav__btn">Skills/</button>
        <button className="nav__btn">Projects/</button>
        <button className="nav__btn">About/</button>
        <button className="nav__btn">Contact/</button>
        <a
          className="nav__btn nav__btnResume"
          href="https://drive.google.com/file/d/1WByJyXCos2ii_hkyJsAj85_ikz1EIk2S/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
