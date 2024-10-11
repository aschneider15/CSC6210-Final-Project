import React, { useState } from "react";
import EditPlayerForm from "./EditPlayerForm";

const EditPlayerButton = ({ player, onPlayerUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <button onClick={handleEditClick}>
        Edit
      </button>
      {isEditing && (
        <EditPlayerForm 
          player={player} 
          onPlayerUpdated={onPlayerUpdated} 
          onClose={handleEditClose}
        />
      )}
    </div>
  );
};

export default EditPlayerButton;
