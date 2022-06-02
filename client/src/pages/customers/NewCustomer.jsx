import { Link } from 'react-router-dom';
import { useState } from 'react';

import '../../components/shared/Form.css';
import './Customers.css';

const NewCustomer = () => {
   const [name, setName] = useState('');
   const [phones, setPhones] = useState('');
   const [email, setEmail] = useState('');
   const [officeAddress, setOfficeAddress] = useState('');
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
         case 'officeAddress':
            setOfficeAddress(value);
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

   return (
      <div className="NewCustomer">
         <div>
            <Link to="/customers" className="Form-close">
               <i className="bx bx-x"></i> &ensp; Exit
            </Link>
         </div>
         <div className="Form-header">
            <h2>New Customer</h2>
         </div>
         <form action="https://everlush-erp.herokuapp.com/customers" method="POST" className="Form NewCustomer-form">
            <div class="Form-check-group">
               <label htmlFor="customer">
                  <input className="check-success" type="checkbox" id="customer" name="customer[isSupplier]" value="true" />
                  Is this customer also a supplier?
               </label>
            </div>
            <div className="Form-input-group">
               <label htmlFor="name">Customer name</label>
               <input type="text" id="name" name="customer[name]" value={name} onChange={handleChange} autoFocus required />
            </div>
            <div className="Form-input-group">
               <label htmlFor="phones">Phone number</label>
               <div className="label-group">
                  <span>
                     <i class="bx bxs-phone"></i>
                  </span>
                  <input id="phones" type="number" pattern="[0-9]*" inputMode="numeric" placeholder="ex. 08012345678" name="customer[contacts][phones][0]" value={phones} onChange={handleChange} required />
               </div>
            </div>
            <div className="Form-input-group">
               <label htmlFor="email">Email</label>
               <div className="label-group">
                  <span>@</span>
                  <input type="email" id="email" name="customer[contacts][emails][0]" value={email} onChange={handleChange}></input>
               </div>
            </div>
            <div className="Form-input-group">
               <label htmlFor="officeAddress">Street Address</label>
               <input type="text" id="officeAddress" name="customer[contacts][street]" value={officeAddress} onChange={handleChange} required />
            </div>
            <div className="Form-input-group">
               <label htmlFor="state">State</label>
               <input type="text" id="state" name="customer[contacts][state]" value={state} onChange={handleChange} required />
            </div>
            <div className="Form-input-group">
               <label htmlFor="country">Country</label>
               <input type="text" id="country" name="customer[contacts][country]" value={country} onChange={handleChange} required />
            </div>

            <div>
               <button className="Button Button-primary Button-lg">Create Customer</button>
            </div>
         </form>
      </div>
   );
};

export default NewCustomer;
