import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import './Layout.css';

const Layout = () => {
   return (
      <BrowserRouter>
         <div className="Layout">
            <Sidebar />
            <section className="Layout-main">
               <Header />
               <Router />
            </section>
         </div>
      </BrowserRouter>
   );
};

export default Layout;
