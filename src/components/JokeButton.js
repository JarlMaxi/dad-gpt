import React from "react";
import axios from "axios";
import "./JokeButton.css";

const { useState } = require("react");
const backendUrl = process.env.REACT_APP_BACKEND_URL;

function JokeButton() {
  const [joke, setJoke] = useState("");
  const [showButton, setShowButton] = useState(true);

  const fetchJoke = async () => {
    try {
      const response = await axios.get(`https://icanhazdadjoke.com/`,{
      headers: {
        'Accept': 'text/plain',
        'User-Agent': 'Max'
      },
      });
      setJoke(response.data);
      setShowButton(false);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <div className="joke">
      {showButton ? (
        <button className="btn btn-secondary" onClick={fetchJoke}>
          Get a Dad Joke!
        </button>
      ) : (
        <h3>{joke}</h3>
      )}
    </div>
  );
}

export default JokeButton;
