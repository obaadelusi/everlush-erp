import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import PageTitle from '../../components/PageTitle';
import './AllCustomers.css';

function AllCustomers() {
  // const [skip, setSkip] = useState(0);
  const [allCustomers, setAllCustomers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [showCustomers, setShowCustomers] = useState('active');
  const skip = 0;
  const limit = 0;

  // https://everlush-erp.herokuapp.com

  useEffect(() => {
    const getCustomers = async () => {
      fetch(`https://everlush-erp.herokuapp.com/customers?skip=${skip}&limit=${limit}`)
        .then((res) => res.json())
        .then((data) => {
          setAllCustomers(data);
          setCustomers(data.filter((c) => c.isActive === true));
        })
        .catch((err) => console.log(err));
    };
    getCustomers();
  }, []);

  const handleChange = (e) => {
    setShowCustomers(e.currentTarget.value);
    if (e.currentTarget.value === 'deactivated') {
      setCustomers(allCustomers.filter((p) => p.isActive === false));
    } else {
      setCustomers(allCustomers.filter((p) => p.isActive === true));
    }
  };

  // const handleClick = (e) => {
  //   if (e.currentTarget.id === 'nextBtn') {
  //     setSkip((prev) => (prev += limit));
  //   } else {
  //     setSkip((prev) => (prev -= limit));
  //   }
  // };

  document.title = 'Customers - Everlush';

  return (
    <div className="AllCustomers">
      <div className="AllCustomers-header">
        <PageTitle title="Customers" info={customers.length} />
        <Link to="/customers/new" className="Button Button-primary">
          Create new +
        </Link>
      </div>

      <div className="AllCustomers-layout">
        <aside className="AllCustomers-sidebar">
          <div className="AllCustomers-radios">
            <div className="AllCustomers-input-group">
              <input type="radio" name="showActive" id="active" onChange={handleChange} value="active" checked={showCustomers === 'active'} />
              <label htmlFor="active">Active</label>
            </div>
            <div className="AllCustomers-input-group">
              <input type="radio" name="showActive" id="deactivated" onChange={handleChange} value="deactivated" checked={showCustomers === 'deactivated'} />
              <label htmlFor="deactivated">Deactivated</label>
            </div>
          </div>
          <ul className="AllCustomers-list">
            {customers.map((c, i) => (
              <NavLink key={i} to={`/customers/${c._id}`} className={({ isActive }) => (isActive ? 'AllCustomers-list-item-active' : undefined)}>
                <li className="AllCustomers-list-item">
                  <h4>{c.name}</h4>
                  <p>
                    {c.contacts[0].state}, {c.contacts[0].country}
                  </p>
                  <small>{c.isActive ? 'Active🟢' : 'Inactive🟡'}</small>
                </li>
              </NavLink>
            ))}
            <div className="AllCustomers-list-end"> ---------- End of list ---------- </div>
          </ul>
        </aside>
        <Outlet />
      </div>
    </div>
  );
}

export default AllCustomers;
