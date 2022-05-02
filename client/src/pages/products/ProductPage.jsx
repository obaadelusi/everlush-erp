import ProductDisplay from '../../components/ProductDisplay';
import Table from '../../components/shared/Table';
import addCommas from '../../assets/utils/addCommas';

import './ProductPage.css';
import '../../components/shared/Table.css';

import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

const ProductPage = () => {
   const { pId } = useParams();
   const [product, setProduct] = useState({});
   const [transactions, setTransactions] = useState([]);

   // https://everlush-erp.herokuapp.com

   useEffect(() => {
      const getProduct = async () => {
         fetch(`https://everlush-erp.herokuapp.com/products/${pId}`)
            .then((res) => res.json())
            .then((data) => {
               setTransactions(data.transactions);
               setProduct(data.product);
            })
            .catch((err) => console.error(err));
      };
      getProduct();
      window.scrollTo(0, 0);
   }, [pId]);

   const itemList = [];
   let quantity;
   let price;
   let prevStock;
   let stockLeft;

   transactions.forEach((t, i) => {
      t.items.forEach((item) => {
         if (item.product._id === product._id) {
            quantity = item.quantity;
            price = item.sellingPrice || item.purchasePrice;
            prevStock = item.prevStock;
            stockLeft = item.stockLeft;
         }
      });

      const date = new Date(t.createdAt);
      itemList.push(
         <tr key={i}>
            <td style={{ minWidth: '140px' }}>
               {date.toDateString()} <br />
               {date.toLocaleTimeString('en-US')}
            </td>
            <td className={t.type === 'sale' ? 'Transactions-sale' : 'Transactions-purchase'}>{t.type}</td>
            <td>{t.stakeholder.name}</td>
            <td>{quantity}</td>
            <td>₦{price && addCommas(price)}</td>
            <td>{prevStock}</td>
            <td>{stockLeft}</td>
            <td>
               <a href={`/transactions/${t._id}`}>View</a>
            </td>
         </tr>
      );
   });

   document.title = `${product.name} - Everlush`;

   return (
      <div className="ProductPage">
         <Outlet />

         <ProductDisplay id={product._id} name={product.name} image={product.image} desc={product.description} isActive={product.isActive} category={product.category} stock={product.inventory} lowStock={product.lowStock} sPrice={product.sellingPrice} />

         <Table title="Stock History" dataLength={transactions.length}>
            <thead>
               <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Type</th>
                  <th scope="col">Customer/Supplier</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Previous stock</th>
                  <th scope="col">Stock left</th>
                  <th scope="col">Receipt</th>
               </tr>
            </thead>
            <tbody>{itemList}</tbody>
         </Table>
      </div>
   );
};

export default ProductPage;
