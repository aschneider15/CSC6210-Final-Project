import { useState } from "react";
import axios from "axios";

function PlayerTable() {
  const [displayText, setDisplayText] = useState("Placeholder Text");

  const callAPIRandom = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/api/players");
      console.log("API Response:", response.data);
      setDisplayText(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h2>{displayText}</h2>
      <p>Fill out form elements to desired search result, and press "Find."</p>
      <form onSubmit={(event) => callAPIRandom(event)}>
        <table>
          <tr>
            <th>
              <input type="text" name="name" placeholder="Player Name" />
              <input type="number" name="number" placeholder="Player Number" />
            </th>
          </tr>
          <tr>
            <label for="qb">Quarterback</label><input type="checkbox" name="qb"/>
            <label for="rb">Running Back</label><input type="checkbox" name="rb"/>
          </tr>
        </table>
        <input type="submit" name="find" value="Find" />
      </form>
    </>
  );
}

export default PlayerTable;
