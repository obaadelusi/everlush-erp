import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';

import AllProducts from './pages/products/AllProducts';
import NewProduct from './pages/products/NewProduct';
import EditProduct from './pages/products/EditProduct';
import ProductPage from './pages/products/ProductPage';

import AllCustomers from './pages/customers/AllCustomers';
import NewCustomer from './pages/customers/NewCustomer';
import CustomerPage from './pages/customers/CustomerPage';

import Suppliers from './pages/Suppliers';
import Purchases from './pages/Purchases';
import Sales from './pages/Sales';
import Users from './pages/Users';

import ErrorPage from './pages/ErrorPage';

const Router = () => {
   const indexStyles = { width: '100%', display: 'grid', placeItems: 'center', color: 'var(--grey-400)' };

   return (
      <>
         <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="products/new" element={<NewProduct />} />
            <Route path="products/:pId" element={<ProductPage />}>
               <Route path="edit" element={<EditProduct />} />
            </Route>
            <Route path="customers" element={<AllCustomers />}>
               <Route index element={<div style={indexStyles}>Select a customer</div>} />
               <Route path="new" element={<NewCustomer />} />
               <Route path=":cId" element={<CustomerPage />} />
            </Route>
            <Route path="sales" element={<Sales />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </>
   );
};

export default Router;
