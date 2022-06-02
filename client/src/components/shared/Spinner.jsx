const Spinner = ({ isActive }) => {
   const spinnerClass = isActive ? 'show' : '';

   return (
      <div className={`spinner ${spinnerClass}`}>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
         <div></div>
      </div>
   );
};

Spinner.defaultProps = {
   isActive: false
};

export default Spinner;
