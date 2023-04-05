import './App.css';
import InformationalPart from './footer/InformationalPart'
import ActionPart from './footer/ActionPart';
import SettingPart from './footer/SettingPart';
import ContentPart from './content/ContentPart';

function App() {
  return (
    <div className="App">
      <ContentPart/>
      <footer className='App-footer'>
        <InformationalPart/>
        <ActionPart/>
        <SettingPart/>
      </footer>
    </div>
  );
}

export default App;
