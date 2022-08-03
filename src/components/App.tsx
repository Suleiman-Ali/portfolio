import Navbar from './Navbar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import SideLinks from './SideLinks';
import FooterLinks from './FooterLinks';
import Arrow from './Arrow';
import Colors from './Colors';
import { useState } from 'react';
import { colors } from '../data';

function App() {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const colorChangeHandler = (color: string) => setSelectedColor(color);

  return (
    <div className="app" id="app">
      <SideLinks />
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <About />
      <Contact currentColor={selectedColor} />
      <FooterLinks />
      <Arrow />
      <Colors
        colorChangeHandler={colorChangeHandler}
        selectedColor={selectedColor}
      />
    </div>
  );
}

export default App;
