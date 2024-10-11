import React, { useState } from "react";
import PlayerDetails from "./PlayerDetails";
import DeletePlayerButton from "./DeletePlayerButton";
import EditPlayerButton from "./EditPlayerButton";

const PlayerList = ({ players, onPlayerDeleted, onPlayerUpdated }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div>
      <h2>Green Bay Packers Players</h2>

      <div className="description-container">{selectedPlayer && <PlayerDetails player={selectedPlayer} />}</div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player._id}>
              <td onClick={() => handlePlayerClick(player)}>{player.name}</td>
              <td>#{player.number}</td>
              <td>{player.position}</td>
              <td>
                <EditPlayerButton 
                  player={player} 
                  onPlayerUpdated={onPlayerUpdated} 
                />
                <DeletePlayerButton
                  playerId={player._id}
                  onPlayerDeleted={onPlayerDeleted}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
