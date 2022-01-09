import { Link } from 'react-router-dom';

import StockBadge from './shared/StockBadge';
import './ProductCard.css';

const ProductCard = ({ id, img, name, sPrice, stock, lowStock, category, isActive }) => {
  return (
    <div className="ProductCard">
      <div className="ProductCard-image">
        <img src={img} alt={name} className={!isActive ? 'greyscale' : null} />
      </div>
      <Link to={`${id}`}>
        <div className="ProductCard-body">
          <h3 className="ProductCard-title">{name}</h3>
          <ul className="ProductCard-info">
            <li>Selling price: ₦{sPrice}</li>
            <li>
              <StockBadge stock={stock} lowStock={lowStock} /> Stock: {stock}
            </li>
          </ul>
        </div>
      </Link>
      <small className="ProductCard-footer">
        <i className="bx bxs-tag-alt"></i> {category}
      </small>
    </div>
  );
};

export default ProductCard;
