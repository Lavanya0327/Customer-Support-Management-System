import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Customer.css';
const CustomerSupport = () => {
  const [customers, setCustomers] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/customer`)
      .then(res => setCustomers(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/customer`, {
      "id": id,
      "name": name,
      "email": email,
      "phone": phone
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  const handleDelete = (customerId) => {
    axios.delete(`http://localhost:3001/customer/${customerId}`)
      .then(res => {
        console.log(res);
        setCustomers(customers.filter(customer => customer.customerId !== customerId));
      })
      .catch(err => console.log(err));
  }

  const [popup, setPopup] = useState(false);
  const [selectedCustomerId1, setSelectedCustomerId1] = useState(0);
  const [selectedName1, setSelectedName1] = useState('');
  const [selectedEmail1, setSelectedEmail1] = useState('');
  const [selectedPhone1, setSelectedPhone1] = useState('');

  const openPopup = (customer) => {
    setPopup(true);
    setSelectedCustomerId1(customer.id);
    setSelectedName1(customer.name);
    setSelectedEmail1(customer.email);
    setSelectedPhone1(customer.phone);
  }

  const handleUpdate = () => {
    axios.put(`http://localhost:3001/customer/${selectedCustomerId1}`, {
      "id": selectedCustomerId1,
      "name": selectedName1,
      "email": selectedEmail1,
      "phone": selectedPhone1
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div className="container">
        <div className="customer-support">
          <form onSubmit={handleSubmit}>
            <h1>Add Customer</h1>
            <label>Id:</label>
            <input type='number' value={id} onChange={(e) => setId(e.target.value)} /><br />
            <label>Name:</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br />
            <label>Email:</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <label>Phone:</label>
            <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} /><br />
            <button type='submit'>Add Customer</button><br />
          </form>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>
                    <button onClick={() => openPopup(customer)}>Update</button>
                    <button onClick={() => handleDelete(customer.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {popup && (
            <div className="popup">
              <form onSubmit={handleUpdate}>
                <button onClick={() => setPopup(false)}>X</button>
                <label>Id:</label>
                <input type='number' value={selectedCustomerId1} onChange={(e) => setSelectedCustomerId1(e.target.value)} /><br />
                <label>Name:</label>
                <input type='text' value={selectedName1} onChange={(e) => setSelectedName1(e.target.value)} /><br />
                <label>Email:</label>
                <input type='email' value={selectedEmail1} onChange={(e) => setSelectedEmail1(e.target.value)} /><br />
                <label>Phone:</label>
                <input type='text' value={selectedPhone1} onChange={(e) => setSelectedPhone1(e.target.value)} /><br />
                <button type='submit'>Update Customer</button><br />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerSupport;
