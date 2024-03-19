import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerSupport = () => {
  const [tickets, setTickets] = useState([]);
  const [id, setId] = useState(0);
  const [issue, setIssue] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/tickets`)
      .then(res => setTickets(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/tickets`, {
      "id": id,
      "issue": issue
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  const handleDelete = (ticketId) => {
    axios.delete(`http://localhost:3001/tickets/${ticketId}`)
      .then(res => {
        console.log(res);
        setTickets(tickets.filter(ticket => ticket.id !== ticketId));
      })
      .catch(err => console.log(err));
  }

  const [popup, setPopup] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState(0);
  const [selectedIssue, setSelectedIssue] = useState('');

  const openPopup = (ticket) => {
    setPopup(true);
    setSelectedTicketId(ticket.id);
    setSelectedIssue(ticket.issue);
  }

  const handleUpdate = () => {
    axios.put(`http://localhost:3001/tickets/${selectedTicketId}`, {
      "id": selectedTicketId,
      "issue": selectedIssue
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
      
  }

  return (
    <div>
      <div className="container">
        <div className="customer-support">
          <form onSubmit={handleSubmit}>
            <h1>Add Support Ticket</h1>
            <label>Id:</label>
            <input type='number' value={id} onChange={(e) => setId(e.target.value)} /><br />
            <label>Issue:</label>
            <input type='text' value={issue} onChange={(e) => setIssue(e.target.value)} /><br />
            <button type='submit'>Add Ticket</button><br />
          </form>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Issue</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map(ticket => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.issue}</td>
                  <td>
                    <button onClick={() => openPopup(ticket)}>Update</button>
                    <button onClick={() => handleDelete(ticket.id)}>Delete</button>
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
                <input type='number' value={selectedTicketId} onChange={(e) => setSelectedTicketId(e.target.value)} /><br />
                <label>Issue:</label>
                <input type='text' value={selectedIssue} onChange={(e) => setSelectedIssue(e.target.value)} /><br />
                <button type='submit'>Update Ticket</button><br />
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomerSupport;
