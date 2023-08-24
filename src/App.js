import logo from './logo.svg';
import './App.css';
import { header } from './header.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Dad jokes, when you get help getting it up (in your your head).
        </h2>
      </header>
    </div>
  );
}

export default App;
