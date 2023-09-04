import React from "react";
import axios from "axios";
import './JokeButton.css'

const { useState } = require("react");


function JokeButton() {
  const [joke, setJoke] = useState("");
  const [showButton, setShowButton] = useState(true);

  const fetchJoke = async () => {
    try {
        const response = await axios.get(`https://dad-joke-494592f7bea7.herokuapp.com/dad-joke`);
        setJoke(response.data.joke);
        setShowButton(false);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
};

return (
    <div className='joke'>
      {showButton ? (
        <button className='btn btn-secondary' onClick={fetchJoke}>Get a Dad Joke!</button>
      ) : (
        <h3>{joke}</h3>
      )}
    </div>
  );
}

export default JokeButton;