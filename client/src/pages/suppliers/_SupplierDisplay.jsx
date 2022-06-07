import ActiveBadge from '../../components/shared/ActiveBadge';
import { LinkButton } from '../../components/shared/Buttons';
import './Suppliers.css';

function SupplierDisplay({ id, isActive, name, contacts, isCustomer, isSupplier }) {
   return (
      <div className="SupplierDisplay">
         <div className="SupplierDisplay-info">
            <div className="SupplierDisplay-body">
               <div className="SupplierDisplay-desc">
                  <div className="SupplierDisplay-active-badge">
                     <ActiveBadge isActive={isActive} />
                  </div>

                  {!name ? <div className="animated-bg title">&nbsp;</div> : <h2 className="SupplierDisplay-title">{name}</h2>}
                  <p className="SupplierDisplay-text">
                     <i className="bx bxs-tag-alt"></i>&ensp;
                     {isSupplier && isCustomer ? 'Customer & Supplier' : isSupplier ? 'Supplier' : isCustomer ? 'Customer' : null}
                  </p>
               </div>
               <div className="SupplierDisplay-buttons">
                  <LinkButton link={`/suppliers/${id}/edit`}>
                     <i className="bx bxs-edit"></i>&ensp;Edit
                  </LinkButton>
                  <LinkButton link="#" type="outline">
                     New transaction +
                  </LinkButton>
               </div>
            </div>
            <ul className="SupplierDisplay-list">
               {contacts &&
                  contacts.map((c, i) => (
                     <div key={i}>
                        <li className="SupplierDisplay-list-item">
                           <i className="bx bx-building-house"></i>&ensp;{c.street}, {c.state}, {c.country}
                        </li>
                        <li className="SupplierDisplay-list-item">
                           <i className="bx bx-mail-send"></i>&ensp;{c.emails.join(', ')}
                        </li>
                        <li className="SupplierDisplay-list-item">
                           <i className="bx bx-phone"></i>&ensp;{c.phones.join(', ')}
                        </li>
                     </div>
                  ))}
            </ul>
         </div>
      </div>
   );
}

export default SupplierDisplay;
