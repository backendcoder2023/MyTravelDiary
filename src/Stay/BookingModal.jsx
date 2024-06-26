import React, { useState } from 'react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose, title }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details:', { name, email, date, roomType });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Book Your Stay at {title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Date of Stay:</label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Room Type:</label>
            <select 
              value={roomType} 
              onChange={(e) => setRoomType(e.target.value)} 
              required
            >
              <option value="">Select Room Type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <button type="submit">Book Now</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BookingModal;
