import PageTitle from './PageTitle';
import StockBadge from './shared/StockBadge';
import ActiveBadge from './shared/ActiveBadge';
import { LinkButton } from './shared/Buttons';
import addCommas from '../assets/utils/addCommas';

import './ProductDisplay.css';

const ProductDisplay = ({ id, name, image, desc, isActive, category, stock, lowStock, sPrice }) => {
  return (
    <div className="ProductDisplay">
      <PageTitle title={name} />

      <div className="ProductDisplay-layout">
        <div className="ProductDisplay-image">
          <img src={image} alt={name} className={!isActive ? 'greyscale' : undefined} />
        </div>

        <div className="ProductDisplay-info">
          <div className="ProductDisplay-body">
            <div className="ProductDisplay-desc">
              <div className="ProductDisplay-active-badge">
                <ActiveBadge isActive={isActive} />
              </div>
              <h2 className="ProductDisplay-title">Description</h2>
              <p>{desc}</p>
              <div className="ProductDisplay-buttons">
                <LinkButton link={`/products/${id}/edit`}>
                  <i className="bx bxs-edit"></i> &nbsp;
                  {isActive ? 'Edit' : 'Activate'}
                </LinkButton>
                <LinkButton link="/transactions/new?type=stockAdjustment" type="outline">
                  Adjust stock +
                </LinkButton>
              </div>
            </div>
          </div>
          <ul className="ProductDisplay-list">
            <li className="ProductDisplay-list-item">
              <StockBadge stock={stock} lowStock={lowStock} /> &nbsp; Stock: {stock}
            </li>
            <li className="ProductDisplay-list-item">Selling price: ₦{addCommas(sPrice)}</li>
            <li className="ProductDisplay-list-item ProductDisplay-featured">
              <i className="bx bxs-tag-alt"></i> {category}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

ProductDisplay.defaultProps = {
  name: 'Product name',
  image: 'https://picsum.photos/500',
  desc: 'Lorem ipsum dolor!',
  isActive: false,
  category: 'Drinks',
  stock: 0,
  lowStock: 50,
  sPrice: 8500
};

export default ProductDisplay;
