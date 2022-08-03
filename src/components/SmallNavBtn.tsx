import { linkClickHandler } from '../data';

interface SmallNavBtnProps {
  text: string;
  setter: () => void;
}

function SmallNavBtn({ setter, text }: SmallNavBtnProps): JSX.Element {
  return (
    <button
      className="navSmall__btn"
      onClick={(e) => linkClickHandler(e, text.toLowerCase(), setter)}
    >
      {text}();
    </button>
  );
}

export default SmallNavBtn;
