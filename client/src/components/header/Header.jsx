import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header className="Header">
         <select name="location" id="locationSelect" className="Header-select">
            <option value="#">Ikeja Office</option>
            <option value="#">Agege Warehouse</option>
         </select>

         <ul className="Header-links">
            <li>
               <Link to="/sales/new">
                  <i className="bx bxs-layer-plus"></i>&ensp;New transaction
               </Link>
            </li>
            <li>
               <Link to="/customers/new">
                  <i className="bx bxs-plus-square"></i>&ensp;Create new
               </Link>
            </li>
         </ul>
         <div className="Header-icons">
            <i className="bx bxs-message-detail"></i>
            <i className="bx bxs-bell"></i>
         </div>
         <div className="Header-profile">
            <div className="Header-profile_image">
               <img src="https://randomuser.me/api/portraits/women/89.jpg" alt="profile" />
            </div>
            <h3 className="Header-profile_text">Toyin Akinpelu</h3>
         </div>
      </header>
   );
};

export default Header;
