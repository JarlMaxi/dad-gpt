import React from "react";
import axios from "axios";
import "./JokeButton.css";

const { useState } = require("react");

function JokeButton() {
  const [joke, setJoke] = useState("");
  const fetchJoke = async () => {
    try {
      const response = await axios.get(`https://icanhazdadjoke.com/`,{
      headers: {
        'Accept': 'text/plain',
        'User-Agent': 'Max'
      },
      });
      setJoke(response.data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <div className="joke">
        <h5>{joke}</h5>
        <button className="btn btn-secondary" onClick={fetchJoke}>
          Get a Dad Joke!
        </button>
    </div>
  );
}

export default JokeButton;
