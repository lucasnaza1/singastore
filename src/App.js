import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Singastore!
        </p>
        <a
          className="App-link"
          href="https://universe.leagueoflegends.com/en_PL/champion/singed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Singas Lore
        </a>
      </header>
    </div>
  );
}

export default App;
