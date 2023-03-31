import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <label for="homeLabel">Home:</label>
        <input type="text" name="home" id="home" />

        <label for="guestLabel">Guest:</label>
        <input type="text" name="guest" id="guest"/>
      </header>
    </div>
  );
}

export default App;
