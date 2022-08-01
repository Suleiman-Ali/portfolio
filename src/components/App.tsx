import Navbar from './Navbar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import SideLinks from './SideLinks';
import FooterLinks from './FooterLinks';

function App() {
  return (
    <div className="app" id="app">
      <SideLinks />
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <FooterLinks />
    </div>
  );
}

export default App;
