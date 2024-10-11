import React from 'react';

const PlayerDetails = ({ player }) => {
  return (
    <div>
      <h3>Player Details</h3>
      <p><strong>Name:</strong> {player.name}</p>
      <p><strong>Number:</strong> {player.number}</p>
      <p><strong>Position:</strong> {player.position}</p>
    </div>
  );
};

export default PlayerDetails;