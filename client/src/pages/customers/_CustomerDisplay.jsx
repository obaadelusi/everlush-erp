import ActiveBadge from '../../components/shared/ActiveBadge';
import { LinkButton } from '../../components/shared/Buttons';
import './Customers.css';

function CustomerDisplay({ id, isActive, name, contacts, isCustomer, isSupplier }) {
   return (
      <div className="CustomerDisplay">
         <div className="CustomerDisplay-info">
            <div className="CustomerDisplay-body">
               <div className="CustomerDisplay-desc">
                  <div className="CustomerDisplay-active-badge">
                     <ActiveBadge isActive={isActive} />
                  </div>

                  {!name ? <div className="animated-bg title">&nbsp;</div> : <h2 className="CustomerDisplay-title">{name}</h2>}
                  <p className="CustomerDisplay-text">
                     <i className="bx bxs-tag-alt"></i>&ensp;
                     {isSupplier && isCustomer ? 'Customer & Supplier' : isSupplier ? 'Supplier' : isCustomer ? 'Customer' : null}
                  </p>
               </div>
               <div className="CustomerDisplay-buttons">
                  <LinkButton link={`/customers/${id}/edit`}>
                     <i className="bx bxs-edit"></i>&ensp;{isActive ? 'Edit' : 'Activate'}
                  </LinkButton>
                  <LinkButton link="#" type="outline">
                     New transaction +
                  </LinkButton>
               </div>
            </div>
            <ul className="CustomerDisplay-list">
               {contacts &&
                  contacts.map((c, i) => (
                     <div key={i}>
                        <li className="CustomerDisplay-list-item">
                           <i className="bx bx-building-house"></i>&ensp;{c.street}, {c.state}, {c.country}
                        </li>
                        <li className="CustomerDisplay-list-item">
                           <i className="bx bx-mail-send"></i>&ensp;{c.emails.join(', ')}
                        </li>
                        <li className="CustomerDisplay-list-item">
                           <i className="bx bx-phone"></i>&ensp;{c.phones.join(', ')}
                        </li>
                     </div>
                  ))}
            </ul>
         </div>
      </div>
   );
}

export default CustomerDisplay;
