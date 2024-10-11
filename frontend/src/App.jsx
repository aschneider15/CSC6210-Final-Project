import React, { useState, useEffect } from 'react';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayerForm';
import axios from 'axios';
import "./App.css"

const App = () => {
  const [players, setPlayers] = useState([]);

  // Function to fetch players from the API
  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/players');
      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  // Fetch players when the component mounts
  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div>
      <PlayerForm onPlayerAdded={fetchPlayers} />
      <PlayerList 
        players={players} 
        onPlayerDeleted={fetchPlayers} 
        onPlayerUpdated={fetchPlayers} 
      />
    </div>
  );
};

export default App;
