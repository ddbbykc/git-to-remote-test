import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>I DID IT!</h2>
        <p>
          It took me 1 whole day pretty much, but I still did it. Following is a list of all I accomplished today:
        </p>
        <ul>
          <li>Reset Macbook Pro 2013</li>
          <li>Installed iTerm2</li>
          <li>Installed XCode</li>
          <li>Installed Command Line Tools for XCode</li>
          <li>Checked for zsh version</li>
          <li>Installed Oh-My-Zsh</li>
          <li>Made ZSH my default shell</li>
          <li>Dolled up my iTerm2 terminal</li>
          <li>Installed Homebrew</li>
          <li>Installed Git</li>
          <li>Installed VSCode</li>
          <li>Added VSCode Plugins</li>
          <li>Connected my GitHub Remote to Git</li>
          <p>And even more, but this list is getting too long. Anyway, I'm happy that I'm back, it feels right!</p>
        </ul>
      </header>
    </div>
  );
}

export default App;
