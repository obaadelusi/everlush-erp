import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';

import AllProducts from './pages/products/AllProducts';
import NewProduct from './pages/products/NewProduct';
import EditProduct from './pages/products/EditProduct';
import ProductPage from './pages/products/ProductPage';

import AllCustomers from './pages/customers/AllCustomers';
import Suppliers from './pages/Suppliers';
import Purchases from './pages/Purchases';
import Sales from './pages/Sales';
import Users from './pages/Users';

import ErrorPage from './pages/ErrorPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/new" element={<NewProduct />} />
          <Route path="products/:productId" element={<ProductPage />}>
            <Route path="edit" element={<EditProduct />} />
          </Route>
          <Route path="sales" element={<Sales />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="customers" element={<AllCustomers />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
