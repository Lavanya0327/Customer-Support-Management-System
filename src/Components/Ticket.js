import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerSupport = () => {
  const [tickets, setTickets] = useState([]);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/tickets`)
      .then(res => setTickets(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/tickets`, {
      "subject": subject,
      "description": description
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
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');

  const openPopup = (ticket) => {
    setPopup(true);
    setSelectedTicketId(ticket.id);
    setSelectedSubject(ticket.subject);
    setSelectedDescription(ticket.description);
  }

  const handleUpdate = () => {
    axios.put(`http://localhost:3001/tickets/${selectedTicketId}`, {
      "subject": selectedSubject,
      "description": selectedDescription
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div className="container">
        <div className="customer-support">
          <form onSubmit={handleSubmit}>
            <h1>Add Ticket</h1>
            <label>Subject:</label>
            <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)} /><br />
            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} /><br />
            <button type='submit'>Add Ticket</button><br />
          </form>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map(ticket => (
                <tr key={ticket.id}>
                  <td>{ticket.subject}</td>
                  <td>{ticket.description}</td>
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
                <label>Subject:</label>
                <input type='text' value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} /><br />
                <label>Description:</label>
                <textarea value={selectedDescription} onChange={(e) => setSelectedDescription(e.target.value)} /><br />
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
