import React from "react";
import axios from "axios";

const DeletePlayerButton = ({ playerId, onPlayerDeleted }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/players/${playerId}`);
      // Call the refresh function after successful deletion
      if (onPlayerDeleted) {
        onPlayerDeleted();
      }
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeletePlayerButton;
