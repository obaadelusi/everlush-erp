import { Link } from 'react-router-dom';
import favicon from '../../assets/images/favicon.png';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar-content">
        <div className="Sidebar-header">
          <div className="Sidebar-logo">
            <img src={favicon} alt="everlush logo" />
          </div>
          <h2 className="Sidebar-title">Everlush</h2>
        </div>
        <ul className="Sidebar-links">
          <Link to="/">
            <li className="Sidebar-link">
              <i className="bx bxs-dashboard"></i> Dashboard
            </li>
          </Link>
          <Link to="/analytics">
            <li className="Sidebar-link">
              <i className="bx bx-stats"></i> Analytics
            </li>
          </Link>
        </ul>

        <h3 className="Sidebar-heading">Manage Inventory</h3>
        <ul className="Sidebar-links">
          <Link to="/products">
            <li className="Sidebar-link">
              <i className="bx bxs-package"></i> Products
            </li>
          </Link>
          <Link to="/sales">
            <li className="Sidebar-link">
              <i className="bx bx-money"></i> Sales
            </li>
          </Link>
          <Link to="/purchases">
            <li className="Sidebar-link">
              <i className="bx bxs-cart-download"></i> Purchases
            </li>
          </Link>
        </ul>

        <h3 className="Sidebar-heading">Manage People</h3>
        <ul className="Sidebar-links">
          <Link to="/customers">
            <li className="Sidebar-link">
              <i className="bx bxs-user"></i> Customers
            </li>
          </Link>
          <Link to="/suppliers">
            <li className="Sidebar-link">
              <i className="bx bxs-user"></i> Suppliers
            </li>
          </Link>
          <Link to="/users">
            <li className="Sidebar-link">
              <i className="bx bxs-user-detail"></i> Users & Staff
            </li>
          </Link>
        </ul>

        <ul className="Sidebar-links">
          <Link to="/settings">
            <li className="Sidebar-link">
              <i className="bx bxs-dashboard"></i> Settings
            </li>
          </Link>
        </ul>

        <small className="Sidebar-copy">Built by @obaadelusi</small>
      </div>
    </div>
  );
};

export default Sidebar;
