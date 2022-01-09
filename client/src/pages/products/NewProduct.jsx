import { useState } from 'react';
import { Link } from 'react-router-dom';

import './ProductForm.css';

function NewProduct() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [inventory, setInventory] = useState('');
  const [lowStock, setLowStock] = useState('');

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'description':
        setDesc(value);
        break;
      case 'image':
        setImage(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'sellingPrice':
        value === '' ? setSellingPrice('') : setSellingPrice(Math.abs(value));
        break;
      case 'inventory':
        value === '' ? setInventory('') : setInventory(Math.abs(value));
        break;
      case 'lowStock':
        value === '' ? setLowStock('') : setLowStock(Math.abs(value));
        break;
      default:
        alert(`Input with id="${id}" is not valid.`);
    }
  };

  return (
    <div className="ProductForm">
      <div>
        <Link to="https://everlush-erp.herokuapp.com/products" className="Form-close">
          <i className="bx bx-x"></i> &nbsp;&nbsp; Exit
        </Link>
      </div>
      <div className="Form-header">
        <h2>Create New Product</h2>
      </div>
      <form action="/products" method="POST" className="Form ProductForm-form">
        <div className="Form-input-group">
          <label htmlFor="name">Product name</label>
          <input type="text" id="name" name="product[name]" autoFocus value={name} onChange={handleChange} required />
        </div>
        <div className="Form-input-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" id="description" name="product[description]" value={desc} onChange={handleChange} required></textarea>
        </div>
        <div className="Form-input-group">
          <label htmlFor="image">Image</label>
          <input type="text" id="image" name="product[image]" value={image} onChange={handleChange} required />
        </div>
        <div className="Form-input-group">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" name="product[category]" value={category} onChange={handleChange} required />
        </div>
        <div className="Form-input-group">
          <label htmlFor="sellingPrice">Selling Price</label>
          <div className="label-group">
            <span>₦</span>
            <input id="sellingPrice" type="number" pattern="[0-9]*" inputMode="numeric" placeholder="0.00" name="product[sellingPrice]" min="0" value={sellingPrice} onChange={handleChange} required />
          </div>
        </div>
        <div className="Form-input-group">
          <label htmlFor="inventory">Inventory</label>
          <input type="number" pattern="[0-9]*" inputMode="numeric" id="inventory" name="product[inventory]" min="0" value={inventory} onChange={handleChange} required />
        </div>
        <div className="Form-input-group">
          <label htmlFor="lowStock">Low stock</label>
          <input type="number" pattern="[0-9]*" inputMode="numeric" id="lowStock" name="product[lowStock]" placeholder="At what number is stock low?" min="0" value={lowStock} onChange={handleChange} required />
        </div>

        <div>
          <button className="Button Button-success Button-lg">Update Product</button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
