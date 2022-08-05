import { motion } from 'framer-motion';
import { builtWhileInViewAnimation, colors } from '../data';

interface ColorsProps {
  selectedColor: string;
  colorChangeHandler: (color: string) => void;
}

function Colors({
  colorChangeHandler,
  selectedColor,
}: ColorsProps): JSX.Element {
  const onChange = (color: string) => {
    colorChangeHandler(color);
    document.documentElement.style.setProperty('--color', color);
    document
      .getElementById('favicon')
      ?.setAttribute(
        'href',
        `./favicons_svg/logo_${color.replace('#', '')}.svg`
      );
  };

  return (
    <div className="colors">
      {colors.map((color, index) => (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ delay: index * 0.15 }}
          className={`colors__color ${
            selectedColor === color ? 'colors__color--selected' : ''
          }`}
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  );
}

export default Colors;
