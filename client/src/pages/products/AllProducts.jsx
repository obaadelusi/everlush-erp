import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import ProductCard from '../../components/ProductCard';
import addCommas from '../../assets/utils/addCommas';

import './AllProducts.css';

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState('active');

  const fetchProducts = async () => {
    fetch('/products')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data.filter((p) => p.isActive === true));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    document.title = 'All Products - Everlush';
    fetchProducts();
  }, []);

  let options = [
    { label: 'Aqualush', value: 'aql' },
    { label: 'Oba', value: 'oba' },
    { label: 'kemisola', value: 'kem' },
    { label: 'oyaisola', value: 'oya' },
    { label: 'sosisola', value: 'sos' },
    { label: 'kadisola', value: 'kad' },
    { label: 'ayoisola', value: 'ayo' }
  ];

  const handleChange = async (e) => {
    setShowProducts(e.currentTarget.value);
    if (e.currentTarget.value === 'deactivated') {
      setProducts(allProducts.filter((p) => p.isActive === false));
    } else {
      setProducts(allProducts.filter((p) => p.isActive === true));
    }
  };

  return (
    <div className="Products">
      <div className="Products-header">
        <PageTitle title="Products" info={products.length} />
        <Link to="/products/new" className="Button Button-main">
          + Create new
        </Link>
      </div>
      <div className="Products-radios">
        <div className="Products-input-group">
          <input type="radio" name="showActive" id="active" onChange={handleChange} value="active" checked={showProducts === 'active'} />
          <label htmlFor="active">Active</label>
        </div>
        <div className="Products-input-group">
          <input type="radio" name="showActive" id="deactivated" onChange={handleChange} value="deactivated" checked={showProducts === 'deactivated'} />
          <label htmlFor="deactivated">Deactivated</label>
        </div>
      </div>
      <div className="Products-cards">
        {products.map((p) => (
          <ProductCard key={p._id} id={p._id} img={p.image} name={p.name} sPrice={addCommas(p.sellingPrice)} stock={p.inventory} lowStock={p.lowStock} category={p.category} isActive={p.isActive} />
        ))}
      </div>
    </div>
  );
};

export default Products;
