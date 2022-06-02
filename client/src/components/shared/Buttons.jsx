import { Link } from 'react-router-dom';
import './Buttons.css';

export function Button({ children, className, type, onPress }) {
   return (
      <button type={type} className={`Button Button-${className}`} onClick={onPress}>
         {children}
      </button>
   );
}

export function LinkButton({ children, link, type }) {
   return (
      <Link to={link}>
         <span className={`Button Button-${type}`}>{children}</span>
      </Link>
   );
}

Button.defaultProps = {
   className: 'main',
   type: 'button'
};

LinkButton.defaultProps = {
   type: 'main'
};
