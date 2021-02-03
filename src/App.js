import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Don't need to do git push -u origin main, only need to do git push for new changes.
        </p>
      </header>
    </div>
  );
}

export default App;
