import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Alert from '../../components/shared/Alert';
import { Button } from '../../components/shared/Buttons';
import './Suppliers.css';

const EditSupplier = () => {
   const { sId } = useParams();
   const [disableBtn, setDisableBtn] = useState(true);
   const [supplier, setSupplier] = useState({});
   const [message, setMessage] = useState('');

   // https://everlush-erp.herokuapp.com

   useEffect(() => {
      const getSupplier = async () => {
         fetch(`https://everlush.netlify.app/stakeholders/${sId}/edit`)
            .then((res) => res.json())
            .then((data) => setSupplier(data))
            .catch((err) => console.error(err));
      };
      getSupplier();
   }, [sId]);

   let phoneNum, email, street, state, country;
   supplier.contacts &&
      supplier.contacts.forEach((c) => {
         phoneNum = c.phones.join(', ');
         email = c.emails.join(', ');
         street = c.street;
         state = c.state;
         country = c.country;
      });

   const handleChange = () => {
      setMessage('Click Update after changing value');
      setDisableBtn(false);
   };

   document.title = 'Edit Supplier - Everlush';

   return (
      <div className="EditSupplier">
         <div>
            <Link to={`/suppliers/${sId}`} className="Form-close">
               <i className="bx bx-x"></i> &ensp; Exit
            </Link>
         </div>
         <div className="Form-header">
            <h2>Edit Supplier</h2>
         </div>
         {message && <Alert type="danger">{message}</Alert>}

         <form action={`https://everlush.netlify.app/stakeholders/${sId}?isSupplier=true&_method=PUT`} method="POST" className="Form EditSupplier-form">
            {supplier.isActive ? (
               <div className="Form-check-group">
                  <label htmlFor="activeSwitch">
                     <input type="checkbox" name="stakeholder[isActive]" id="activeSwitch" value="false" className="check-danger" onChange={handleChange} />
                     Deactivate '{supplier.name}'
                  </label>
               </div>
            ) : (
               <div className="Form-check-group">
                  <label htmlFor="deactivateSwitch">
                     <input type="checkbox" name="stakeholder[isActive]" id="deactivateSwitch" value="true" className="check-success" onChange={handleChange} />
                     Activate '{supplier.name}'
                  </label>
               </div>
            )}
            <div className="Form-input-group">
               <label htmlFor="name">Supplier name</label>
               <input type="text" id="name" name="stakeholder[name]" defaultValue={supplier.name} onChange={handleChange} required />
            </div>
            <div className="Form-input-group">
               <label htmlFor="phones">Phone numbers</label>
               <div className="label-group">
                  <span>
                     <i className="bx bxs-phone"></i>
                  </span>
                  <input type="text" pattern="[0-9 ,]*" inputMode="numeric" id="phones" name="stakeholder[contacts][phones][0]" defaultValue={phoneNum} onChange={handleChange} required />
               </div>
            </div>
            <div className="Form-input-group">
               <label htmlFor="email">Email</label>
               <div className="label-group">
                  <span>@</span>
                  <input type="text" pattern="^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?,)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$" placeholder="ex. 08012345678, 07012345678" id="email" name="stakeholder[contacts][emails][0]" defaultValue={email} onChange={handleChange} required />
               </div>
            </div>
            <div className="Form-input-group">
               <label htmlFor="streetAddress">Street address</label>
               <input type="text" id="streetAddress" name="stakeholder[contacts][street]" defaultValue={street} onChange={handleChange} required />
            </div>
            <div className="Form-input-group">
               <label htmlFor="state">State</label>
               <input type="text" id="state" name="stakeholder[contacts][state]" defaultValue={state} onChange={handleChange} required />
            </div>
            <div className="Form-input-group">
               <label htmlFor="country">Country</label>
               <input type="text" id="country" name="stakeholder[contacts][country]" defaultValue={country} onChange={handleChange} required />
            </div>
            <div>
               <Button type="submit" className="primary Button-lg" isDisabled={disableBtn}>
                  Update Customer
               </Button>
            </div>
         </form>
      </div>
   );
};

export default EditSupplier;
