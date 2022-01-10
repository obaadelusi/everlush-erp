import { NavLink } from 'react-router-dom';
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
          <NavLink to="/" className={({ isActive }) => (isActive ? 'Sidebar-link-active' : undefined)}>
            <li className="Sidebar-link">
              <i className="bx bxs-dashboard"></i> Dashboard
            </li>
          </NavLink>
          <NavLink to="/analytics" className={({ isActive }) => (isActive ? 'Sidebar-link-active' : undefined)}>
            <li className="Sidebar-link">
              <i className="bx bx-stats"></i> Analytics
            </li>
          </NavLink>
        </ul>

        <h3 className="Sidebar-heading">Manage Inventory</h3>
        <ul className="Sidebar-links">
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'Sidebar-link-active' : undefined)}>
            <li className="Sidebar-link">
              <i className="bx bxs-package"></i> Products
            </li>
          </NavLink>
          <NavLink to="/sales" className={({ isActive }) => (isActive ? 'Sidebar-link-active' : undefined)}>
            <li className="Sidebar-link">
              <i className="bx bx-money"></i> Sales
            </li>
          </NavLink>
          <NavLink to="/purchases" className={({ isActive }) => (isActive ? 'Sidebar-link-active' : undefined)}>
            <li className="Sidebar-link">
              <i className="bx bxs-cart-download"></i> Purchases
            </li>
          </NavLink>
        </ul>

        <h3 className="Sidebar-heading">Manage People</h3>
        <ul className="Sidebar-links">
          <NavLink to="/customers" className={({ isActive }) => (isActive ? 'Sidebar-link-active' : undefined)}>
            <li className="Sidebar-link">
              <i className="bx bxs-user"></i> Customers
            </li>
          </NavLink>
          <NavLink to="/suppliers" className={({ isActive }) => (isActive ? 'Sidebar-link-active' : undefined)}>
            <li className="Sidebar-link">
              <i className="bx bxs-user"></i> Suppliers
            </li>
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => (isActive ? 'Sidebar-link-active' : undefined)}>
            <li className="Sidebar-link">
              <i className="bx bxs-user-detail"></i> Users & Staff
            </li>
          </NavLink>
        </ul>

        <ul className="Sidebar-links">
          <NavLink to="/settings" className={({ isActive }) => (isActive ? 'Sidebar-link-active' : undefined)}>
            <li className="Sidebar-link">
              <i className="bx bxs-dashboard"></i> Settings
            </li>
          </NavLink>
        </ul>

        <small className="Sidebar-copy">Built by @obaadelusi</small>
      </div>
    </div>
  );
};

export default Sidebar;
