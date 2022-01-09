import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import { ProductsProvider } from './context/ProductsContext';
import './Layout.css';

const Layout = () => {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <div className="Layout">
          <Sidebar />
          <div className="Layout-page">
            <Header />
            <Router />
          </div>
        </div>
      </BrowserRouter>
    </ProductsProvider>
  );
};

export default Layout;
