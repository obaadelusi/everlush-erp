import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import '../../components/shared/Form.css';
import './ProductForm.css';

import Alert from '../../components/shared/Alert';

function EditProduct() {
  let productId = useParams().productId;
  const [product, setProduct] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      fetch(`/products/${productId}/edit`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error(err));
    };
    getProduct();
  }, []);

  const handleChange = () => {
    setMessage('Click Update after changing value');
  };

  document.title = 'Edit Product - Everlush';

  return (
    <div className="ProductForm">
      <div>
        <Link to={`/products/${productId}`} className="Form-close">
          <i className="bx bx-x"></i> &ensp; Exit
        </Link>
      </div>
      <div className="Form-header">
        <h2>Edit Product</h2>
      </div>
      {message && <Alert type="danger">{message}</Alert>}
      <form action={`/products/${productId}?_method=PUT`} method="POST" className="Form ProductForm-form">
        {product.isActive ? (
          <div className="Form-check-group">
            <label htmlFor="activeSwitch">
              <input type="checkbox" name="product[isActive]" id="activeSwitch" value="false" className="check-danger" onChange={handleChange} />
              Deactivate '{product.name}'
            </label>
          </div>
        ) : (
          <div className="Form-check-group">
            <label htmlFor="deactivateSwitch">
              <input type="checkbox" name="product[isActive]" id="deactivateSwitch" value="true" className="check-success" onChange={handleChange} />
              Activate '{product.name}'
            </label>
          </div>
        )}
        <div className="Form-input-group">
          <label htmlFor="name">Product name</label>
          <input type="text" id="name" name="product[name]" defaultValue={product.name} onChange={handleChange} required />
        </div>
        <div className="Form-input-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" name="product[description]" defaultValue={product.description} onChange={handleChange} required></textarea>
        </div>
        <div className="Form-input-group">
          <label htmlFor="image">Image</label>
          <input type="text" id="image" name="product[image]" defaultValue={product.image} onChange={handleChange} required />
        </div>
        <div className="Form-input-group">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="product[category]" defaultValue={product.category} onChange={handleChange} required />
        </div>
        <div className="Form-input-group">
          <label htmlFor="sellingPrice">Selling Price</label>
          <div className="label-group">
            <span>₦</span>
            <input id="sellingPrice" type="number" pattern="[0-9]*" inputMode="numeric" placeholder="0.00" name="product[sellingPrice]" defaultValue={product.sellingPrice} onChange={handleChange} required />
          </div>
        </div>
        <div className="Form-input-group">
          <label htmlFor="inventory">Inventory</label>
          <input type="text" id="inventory" defaultValue={product.inventory} required disabled />
        </div>
        <div className="Form-input-group">
          <label htmlFor="lowStock">Low stock</label>
          <input type="number" pattern="[0-9]*" inputMode="numeric" id="lowStock" name="product[lowStock]" defaultValue={product.lowStock} placeholder="At what number is stock low?" min="0" onChange={handleChange} required />
        </div>
        <div>
          <button className="Button Button-primary Button-lg">Update Product</button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
