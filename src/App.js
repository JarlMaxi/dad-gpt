import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React from "react";
import Title from "./components/Title";
import JokeButton from "./components/JokeButton";
import Footer from "./components/Footer";
import FadedImage from "./components/FadedImage";
import backgroundImage from './assets/dad.png';

function App() {
  return (
    <div className="App">
        <Title />
        <FadedImage src={backgroundImage} alt='test' />
      <div>
        <JokeButton />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;