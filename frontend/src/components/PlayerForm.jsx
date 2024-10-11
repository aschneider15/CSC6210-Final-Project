import React, { useState } from 'react';
import axios from 'axios';

const PlayerForm = ({ onPlayerAdded }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const playerData = { name, number, position };

    try {
      // Send a POST request to add a new player
      await axios.post('http://localhost:3000/api/players', playerData);
      
      // Clear the form fields
      setName('');
      setNumber('');
      setPosition('');

      // Notify parent that a new player was added
      if (onPlayerAdded) {
        onPlayerAdded();
      }
    } catch (error) {
      console.error("Error creating player:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Player</h3>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Number:</label>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} required />
      </div>
      <div>
        <label>Position:</label>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
      </div>
      <button type="submit">Add Player</button>
    </form>
  );
};

export default PlayerForm;
