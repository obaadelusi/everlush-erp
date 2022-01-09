function Button({ children, className, link }) {
  return (
    <>
      <a href={link} className={`Button Button-${className}`}>
        {children}
      </a>
    </>
  );
}

Button.defaultProps = {
  className: 'main'
};

export default Button;
