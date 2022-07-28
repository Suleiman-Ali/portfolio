import { useEffect, useState } from 'react';

function Opening(): JSX.Element {
  const [x, setX] = useState<boolean>(false);
  const [y, setY] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setX(true);
    }, 1500);
    setTimeout(() => {
      setY(true);
    }, 2000);
  }, []);

  return (
    <div className={`opening ${y ? 'opening-fade-out' : ''} `}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 218 218"
        className={`svg ${x ? 'svg-fade-out' : ''}`}
      >
        <circle
          className="svg__circle"
          cx="109"
          cy="109"
          r="106.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          className="svg__text"
          transform="translate(78.3 151.12)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          S
        </text>
      </svg>
    </div>
  );
}

export default Opening;
