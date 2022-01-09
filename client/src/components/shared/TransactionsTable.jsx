import './Table.css';

function TransactionsTable({ transactions }) {
  return (
    <div className="TransactionsTable">
      <div className="Table-header">
        <h2>Stock History</h2>
      </div>
      <table className="Table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Customer/Supplier</th>
            <th scope="col">Qty bought</th>
            <th scope="col">Price</th>
            <th scope="col">Previous stock</th>
            <th scope="col">Stock left</th>
            <th scope="col">Receipt/Invoice</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => {
            <>
              <tr>
                <td>{t.createdAt}</td>
                <td>{t.type}</td>
                <td>{t.stakeholder}</td>
                {t.items.map((item, i) => {
                  <>
                    <td>{item.quantity}</td>
                    <td>{item.sellingPrice}</td>
                    <td>{item.prevStock}</td>
                    <td>{item.stockLeft}</td>
                  </>;
                })}
                <td>
                  <a href={`transactions/${t.id}`}>View</a>
                </td>
              </tr>
            </>;
          })}
        </tbody>
      </table>
      <p>No transactions yet.</p>
    </div>
  );
}

export default TransactionsTable;
