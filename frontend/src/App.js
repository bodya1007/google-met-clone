import logo from './logo.svg';
import './App.css';
import InformationalPart from './footer/InformationalPart'
import ActionPart from './footer/ActionPart';
import SettingPart from './footer/SettingPart';

function App() {
  return (
    <div className="App">
      <main className="App-main">
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
        </a>
      </main>
      <footer className='App-footer'>
        <InformationalPart/>
        <ActionPart/>
        <SettingPart/>
      </footer>
    </div>
  );
}

export default App;
