import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import Spinner from '../../components/shared/Spinner';
import './Suppliers.css';

function AllSuppliers() {
   // const [skip, setSkip] = useState(0);
   const [allSuppliers, setAllSuppliers] = useState([]);
   const [suppliers, setSuppliers] = useState([]);
   const [showSuppliers, setShowSuppliers] = useState('active');
   const [showSpinner, setShowSpinner] = useState(false);
   const [timer, setTimer] = useState();
   const skip = 0;
   const limit = 11;

   // https://everlush-erp.herokuapp.com

   useEffect(() => {
      const getSuppliers = async () => {
         fetch(`https://everlush.netlify.app/suppliers?skip=${skip}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
               setAllSuppliers(data);
               setSuppliers(data.filter((c) => c.isActive === true));
            })
            .catch((err) => console.log(err));
      };
      getSuppliers();
   }, []);

   const handleChange = (e) => {
      setShowSuppliers(e.currentTarget.value);
      if (e.currentTarget.value === 'deactivated') {
         setSuppliers(allSuppliers.filter((p) => p.isActive === false));
      } else {
         setSuppliers(allSuppliers.filter((p) => p.isActive === true));
      }
   };

   // const handleClick = (e) => {
   //   if (e.currentTarget.id === 'nextBtn') {
   //     setSkip((prev) => (prev += limit));
   //   } else {
   //     setSkip((prev) => (prev -= limit));
   //   }
   // };

   //------------------> Live search function
   function displayResults(value) {
      if (value.length > 1) {
         fetch(`https://everlush.netlify.app/suppliers?q=${value}`)
            .then((res) => res.json())
            .then((data) => setSuppliers(data))
            .then(() => setShowSpinner(false))
            .catch((e) => console.log('JS Error:', e));
      }
      setSuppliers(allSuppliers);
   }

   const searchSuppliers = (e) => {
      let value = e.currentTarget.value.trim();
      value ? setShowSpinner(true) : setShowSpinner(false);

      window.clearTimeout(timer);
      setTimer(
         setTimeout(() => {
            displayResults(value);
         }, 1500)
      );
   };

   document.title = 'Suppliers - Everlush';

   return (
      <div className="AllSuppliers">
         <div className="AllSuppliers-header">
            <PageTitle info={suppliers.length}>Suppliers</PageTitle>
            <Link to="/suppliers/new" className="Button Button-primary">
               New &ensp;<i className="bx bx-user-plus"></i>
            </Link>
         </div>

         <div className="AllSuppliers-layout">
            <aside className="AllSuppliers-sidebar">
               <div className="AllSuppliers-searchbar">
                  <div className="Form-input-group">
                     <input type="text" placeholder="🔍 Search" onChange={searchSuppliers} />
                     <Spinner isActive={showSpinner} />
                  </div>
               </div>
               <div className="AllSuppliers-radios">
                  <div className="AllSuppliers-input-group">
                     <input type="radio" name="showActive" id="active" onChange={handleChange} value="active" checked={showSuppliers === 'active'} />
                     <label htmlFor="active">Active</label>
                  </div>
                  <div className="AllSuppliers-input-group">
                     <input type="radio" name="showActive" id="deactivated" onChange={handleChange} value="deactivated" checked={showSuppliers === 'deactivated'} />
                     <label htmlFor="deactivated">Deactivated</label>
                  </div>
               </div>
               <ul className="AllSuppliers-list">
                  {suppliers.map((c, i) => (
                     <NavLink key={i} to={`/suppliers/${c._id}`} className={({ isActive }) => (isActive ? 'AllSuppliers-list-item-active' : undefined)}>
                        <li className="AllSuppliers-list-item">
                           <h4>{c.name}</h4>
                           <p>
                              {c.contacts[0].state}, {c.contacts[0].country}
                           </p>
                           <small>{c.isActive ? 'Active🟢' : 'Inactive🟡'}</small>
                        </li>
                     </NavLink>
                  ))}
                  <div className="AllSuppliers-list-end"> ----------- End of list ---------- </div>
               </ul>
            </aside>
            <Outlet />
         </div>
      </div>
   );
}

export default AllSuppliers;
