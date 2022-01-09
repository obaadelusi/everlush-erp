import './Badge.css';

const Badge = ({ stock, lowStock }) => {
  const badgeClass =
    stock === 0
      ? 'badge-danger' //
      : stock <= lowStock
      ? 'badge-warning'
      : 'badge-success';

  const badgeText =
    stock === 0
      ? 'Out of stock' //
      : stock <= lowStock
      ? 'Low stock'
      : 'In stock';

  return <span className={`badge ${badgeClass}`}>{badgeText}</span>;
};

Badge.defaultProps = {
  stock: 0
};

export default Badge;
