import { useState, useEffect } from 'react';

import PageTitle from '../../components/PageTitle';
import './AllCustomers.css';

function AllCustomers() {
  const [skip, setSkip] = useState(0);
  const [customers, setCustomers] = useState([]);
  const limit = 8;

  useEffect(() => {
    const getCustomers = async () => {
      fetch(`/customers?skip=${skip}&limit=${limit}`)
        .then((res) => res.json())
        .then((data) => setCustomers(data))
        .catch((err) => console.log(err));
    };
    getCustomers();
  }, [skip]);

  const handleClick = (e) => {
    if (e.currentTarget.id === 'nextBtn') {
      setSkip((prev) => (prev += limit));
    } else {
      setSkip((prev) => (prev -= limit));
    }
  };

  document.title = 'All Customers - Everlush';

  return (
    <div className="AllCustomers">
      <PageTitle title="Customers" info={customers.length} />

      <div className="AllCustomers-table">
        <table className="Table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Supplier?</th>
              <th scope="col">Status</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>
                  {c.contacts[0].state}, {c.contacts[0].country}
                </td>
                <td>{c.isSupplier ? 'Yes' : 'No'}</td>
                <td>{c.isActive ? 'Active 🟢' : 'Inactive 🟡'}</td>
                <td>
                  <a href={`/stakeholders/${c._id}`}>View more</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="AllCustomers-nav">
          <div className="Allcustomers-nav-buttons">
            <button id="prevBtn" className="prev-btn" onClick={handleClick} disabled={skip === 0}>
              <i className="bx bx-chevron-left"></i>
            </button>
            <button id="nextBtn" className="next-btn" onClick={handleClick} disabled={skip > customers.length}>
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
          <small className="AllCustomers-nav-text">
            {skip + (customers.length && 1)} to {customers.length + skip}
          </small>
        </div>
      </div>
    </div>
  );
}

export default AllCustomers;
