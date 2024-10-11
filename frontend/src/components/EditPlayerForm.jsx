import React, { useState } from "react";
import axios from "axios";

const EditPlayerForm = ({ player, onPlayerUpdated, onClose }) => {
  const [name, setName] = useState(player.name);
  const [number, setNumber] = useState(player.number);
  const [position, setPosition] = useState(player.position);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPlayer = { name, number, position };

    try {
      await axios.patch(`http://localhost:3000/api/players/${player._id}`, updatedPlayer);
      
      // Notify the parent about the update and close the form
      if (onPlayerUpdated) {
        onPlayerUpdated();
      }
      onClose();
    } catch (error) {
      console.error("Error updating player:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Edit Player</h3>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditPlayerForm;
