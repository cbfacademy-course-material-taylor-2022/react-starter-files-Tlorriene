import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>My first react Page</h2>
      <header className="App-title">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        

        }
        </a>
      </header>
    </div>
  );
}

const h1Style = {
  'fontStyle' : '60px',
  'colour': '#cc4533',
  'textTransform': 'lowercase'

};
<h1 style={h1Style}>Tiffany's react page</h1>
export default App;
