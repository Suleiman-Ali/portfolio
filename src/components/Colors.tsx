import { motion } from 'framer-motion';
import { colors } from '../data';

function Colors({
  colorChangeHandler,
  selectedColor,
}: {
  selectedColor: string;
  colorChangeHandler: (color: string) => void;
}): JSX.Element {
  const onChange = (color: string) => {
    colorChangeHandler(color);
    document.documentElement.style.setProperty('--color', color);
    document
      .getElementById('favicon')
      ?.setAttribute(
        'href',
        `./favicons_png/logo_${color.replace('#', '')}.png`
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
