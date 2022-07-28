import { useEffect, useState } from 'react';
import Intro from './Intro';
import Links from './Links';
import Navbar from './Navbar';
import Opening from './Opening';

function App() {
  const [isOpening, setIsOpening] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpening(false);
    }, 2500);
  }, []);

  return (
    <div className="app">
      {isOpening && <Opening />}
      <Navbar />
      <Intro />
      <Links />
    </div>
  );
}

export default App;
