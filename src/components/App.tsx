import Navbar from './Navbar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import FooterLinks from './FooterLinks';
import Arrow from './Arrow';
import { useState } from 'react';
import { colors } from '../data';

function App() {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const colorChangeHandler = (color: string) => setSelectedColor(color);

  return (
    <div className="app" id="app">
      <Navbar
        colorChangeHandler={colorChangeHandler}
        selectedColor={selectedColor}
      />
      <Intro />
      <Skills />
      <Projects />
      <About />
      <Contact currentColor={selectedColor} />
      <FooterLinks />
      <Arrow />
    </div>
  );
}

export default App;
