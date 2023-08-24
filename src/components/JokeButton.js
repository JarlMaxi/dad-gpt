const { useState } = require("react");
import React from "react";
import axios from "axios";

function JokeButton() {
  const [joke, setJoke] = useState("");
  const [showButton, setShowButton] = useState(true);

  const fetchJoke = async () => {
    try {
        const response = await axios.get('http://localhost:5000/get-joke');
        setJoke(response.data.joke);
        setShowButton(false);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
};

return (
    <div>
      {showButton ? (
        <button onClick={fetchJoke}>Get a Dad Joke!</button>
      ) : (
        <h3>{joke}</h3>
      )}
    </div>
  );
}
