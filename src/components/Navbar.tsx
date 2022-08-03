import BigNav from './BigNav';
import SmallNav from './SmallNav';
import { useEffect, useState } from 'react';

function Navbar(): JSX.Element {
  const [isNavBig, setIsNavBig] = useState<boolean>(window.innerWidth >= 800);
  const [menu, setMenu] = useState<boolean>(false);

  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);

  useEffect(() => {
    const resizeHandler = () => setIsNavBig(window.innerWidth >= 800);
    window.addEventListener<'resize'>('resize', resizeHandler);
    return () => window.removeEventListener<'resize'>('resize', resizeHandler);
  }, []);

  if (!isNavBig)
    return <SmallNav closeMenu={closeMenu} openMenu={openMenu} menu={menu} />;
  return <BigNav closeMenu={closeMenu} />;
}

export default Navbar;
