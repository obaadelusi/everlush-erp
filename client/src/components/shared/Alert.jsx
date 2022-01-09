import PropTypes from 'prop-types';

function Alert({ children, type }) {
  const alertStyles = {
    backgroundColor: type === 'danger' ? 'var(--clr-danger-100)' : 'var(--clr-success-100)',
    color: type === 'danger' ? 'var(--bg-danger)' : 'var(--bg-success)'
  };

  return (
    <div className="alert" style={alertStyles} onClick={(e) => (e.currentTarget.style.display = 'none')}>
      <i className="bx bx-info-circle"></i> &ensp; {children}
      <i className="bx bx-x"></i>
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.string
};

export default Alert;
