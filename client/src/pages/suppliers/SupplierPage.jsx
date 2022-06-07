import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import SupplierDisplay from './_SupplierDisplay';
import Table from '../../components/shared/Table';
import { addCommas } from '../../utils';
import './Suppliers.css';

const SupplierPage = () => {
   const { sId } = useParams();
   const [supplier, setSupplier] = useState({});
   const [transactions, setTransactions] = useState([]);

   // https://everlush-erp.herokuapp.com

   useEffect(() => {
      const getSupplier = async () => {
         fetch(`https://everlush-erp.herokuapp.com/stakeholders/${sId}`)
            .then((res) => res.json())
            .then((data) => {
               setTransactions(data.transactions);
               setSupplier(data.stakeholder);
            })
            .catch((err) => console.error(err));
      };
      getSupplier();
   }, [sId]);

   const itemList = [];

   function insertData() {
      transactions.forEach((t, i) => {
         let total = 0;
         for (const item of t.items) {
            const price = item.purchasePrice || item.sellingPrice;
            const itemTotal = item.quantity * price;
            total += itemTotal;
         }

         const date = new Date(t.createdAt);
         itemList.push(
            <tr key={i}>
               <td style={{ minWidth: '140px' }}>
                  {date.toDateString()} <br />
                  <small>{date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</small>
               </td>
               <td className={t.type === 'sale' ? 'Transactions-sale' : 'Transactions-purchase'}>{t.type}</td>
               <td>{t.items.map((item, i) => `• ${item.product.name}`)}</td>
               <td>₦{addCommas(total)}</td>
               <td>
                  <a href={`/transactions/${t._id}`}>View</a>
               </td>
            </tr>
         );
      });
      return;
   }

   insertData();

   return (
      <div className="SupplierPage">
         <SupplierDisplay id={supplier._id} isActive={supplier.isActive} name={supplier.name} contacts={supplier.contacts} isCustomer={supplier.isCustomer} isSupplier={supplier.isSupplier} />
         <Outlet />
         <div className="SupplierPage-table">
            <Table title="Transactions" dataLength={transactions.length}>
               <thead>
                  <tr>
                     <th scope="col">Date</th>
                     <th scope="col">Type</th>
                     <th scope="col">Products</th>
                     <th scope="col">Total</th>
                     <th scope="col">Receipt</th>
                  </tr>
               </thead>
               <tbody>{itemList}</tbody>
            </Table>
         </div>
      </div>
   );
};

export default SupplierPage;
