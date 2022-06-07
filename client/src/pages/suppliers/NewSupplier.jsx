import { Link } from 'react-router-dom';
import { useState } from 'react';

import '../../components/shared/Form.css';
import './Suppliers.css';

const NewSupplier = () => {
   const [name, setName] = useState('');
   const [phones, setPhones] = useState('');
   const [email, setEmail] = useState('');
   const [streetAddress, setStreetAddress] = useState('');
   const [state, setState] = useState('');
   const [country, setCountry] = useState('');

   const handleChange = (e) => {
      const id = e.target.id;
      const value = e.target.value;

      switch (id) {
         case 'name':
            setName(value);
            break;
         case 'phones':
            setPhones(value);
            break;
         case 'email':
            setEmail(value);
            break;
         case 'streetAddress':
            setStreetAddress(value);
            break;
         case 'state':
            setState(value);
            break;
         case 'country':
            setCountry(value);
            break;
         default:
            alert(`Input with id="${id}" is not valid.`);
      }
   };

   document.title = 'Add New Supplier - Everlush';

   return (
      <div className="NewSupplier">
         <div>
            <Link to="/suppliers" className="Form-close">
               <i className="bx bx-x"></i> &ensp; Exit
            </Link>
         </div>
         <div className="Form-header">
            <h2>New Supplier</h2>
         </div>
         <form action="https://everlush.netlify.app/suppliers" method="POST" className="Form NewSupplier-form">
            <div className="Form-input-group">
               <label htmlFor="name">Supplier name</label>
               <input type="text" id="name" name="supplier[name]" value={name} onChange={handleChange} autoFocus required />
            </div>
            <div className="Form-check-group">
               <label htmlFor="supplier">
                  <input className="check-success" type="checkbox" id="supplier" name="supplier[isCustomer]" value="true" />
                  Is this supplier also a customer?
               </label>
            </div>
            <div className="Form-input-group">
               <label htmlFor="phones">Phone number</label>
               <div className="label-group">
                  <span>
                     <i className="bx bxs-phone"></i>
                  </span>
                  <input id="phones" type="text" pattern="[0-9 ,]*" inputMode="numeric" placeholder="ex. 08012345678, 07012345678" name="supplier[contacts][phones][0]" value={phones} onChange={handleChange} required />
               </div>
            </div>
            <div className="Form-input-group">
               <label htmlFor="email">Email</label>
               <div className="label-group">
                  <span>@</span>
                  <input type="text" pattern="^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$" id="email" name="supplier[contacts][emails][0]" value={email} onChange={handleChange} />
               </div>
            </div>
            <div className="Form-input-group">
               <label htmlFor="officeAddress">Street address</label>
               <input type="text" id="streetAddress" name="supplier[contacts][street]" value={streetAddress} onChange={handleChange} required />
            </div>
            <div className="Form-input-group">
               <label htmlFor="state">State</label>
               <input type="text" id="state" name="supplier[contacts][state]" value={state} onChange={handleChange} required />
            </div>
            <div className="Form-input-group">
               <label htmlFor="country">Country</label>
               <input type="text" id="country" name="supplier[contacts][country]" value={country} onChange={handleChange} required />
            </div>

            <div>
               <button className="Button Button-success Button-lg">Create Supplier</button>
            </div>
         </form>
      </div>
   );
};

export default NewSupplier;
