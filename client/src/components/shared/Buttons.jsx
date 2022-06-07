import { Link } from 'react-router-dom';
import './Buttons.css';

export function Button({ children, type, className, isDisabled, onPress }) {
   return (
      <button type={type} className={`Button Button-${className}`} onClick={onPress} disabled={isDisabled}>
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
   type: 'button',
   isDisabled: false
};

LinkButton.defaultProps = {
   type: 'main'
};
