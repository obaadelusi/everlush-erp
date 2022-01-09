import './Badge.css';

const ActiveBadge = ({ isActive }) => {
  const badgeClass = isActive ? 'badge-primary' : 'badge-secondary';
  const text = isActive ? 'Active' : 'Deactivated';

  return <span className={`badge ${badgeClass}`}>{text}</span>;
};

ActiveBadge.defaultProps = {
  isActive: true
};

export default ActiveBadge;
