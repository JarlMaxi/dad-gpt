import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from "react";
import Title from "./components/Title";
import JokeButton from './components/JokeButton';
import Footer from './components/Footer';

 
function App() {
  return (
    <div className="text-bg-primary p-3">
      <Title />
      <JokeButton />
      <Footer />
    </div>
  )
}

export default App;