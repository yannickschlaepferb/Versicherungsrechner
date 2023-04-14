import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [vw, setVW] = useState(1)
  return (
    <div className="App">

      <h1>Schadensrechner/Home  About Me</h1> 
      <div className="ClientAngaben">

      <label for="Versicherungswert">Bitte geben Sie Ihren Versicherungswert an:</label>
      <input type="number" id="Versicherungswert" name="Versicherungswert" min="1" max="100000000" value={vw} onChange={(e) => setVW(e.target.value)}/>

      <label for="Versicherungswert">Bitte geben Sie Ihre Versicherungssumme an:</label>
      <input type="number" id="Versicherungssumme" name="Versicherungssumme" min="1" max="100000000"/>

      <label for="Versicherungswert">Bitte geben Sie den angerichteten Schaden an:</label>
      <input type="number" id="Schaden" name="Schaden" min="1" max="100000000"/>

      </div>
      <div className="Ergebnis">

      <label for="zuBezahlenderSchaden">Zu bezahlender Schaden:</label>
      <p>
        {vw}
      </p>

      <label id="Tipp" >Sie sollten sich mehr/weniger versichern</label>

      <button></button>

      </div>
    </div>
  );
}

export default App;
