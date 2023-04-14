import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [vw, setVW] = useState("");
  const [vs, setVS] = useState("");
  const [schaden, setSchaden] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState({
    text: "",
    color: "red",
    show: false
  })

  function berechnen() {
    if(vs != "" && vw != "" && schaden != "") {
    setResult(() => {
      if (Math.round((vs / vw) * schaden * 100) / 100 >= schaden) {
        return `ihre Versicherung übernimmt ${schaden} CHF`;
      } else {
        return `Ihre Versicherung übernimmt ${
          Math.round((vs / vw) * schaden * 100) / 100
        } CHF`;
      }
    });
    if (vs > vw) {
      setMessage({text: "WARNUNG: Sie sind überversichert!", color: "red", show: true})
    } else if (vs < vw) {
      setMessage({text: "WARNUNG: Sie sind unterversichert!", color: "red", show: true})
    } else {
      setMessage({text: "Sie haben sich gut versichert", color: "green", show: true})
    }
  }
  else {
    alert("Sie müssen alle Felder ausfüllen!")
  }
  }

  function reset() {
    setVW("");
    setVS("");
    setSchaden("");
    setResult("");
    setMessage({...message, show:false})
  }

  return (
    <div className="App">
      <h1>Schadensrechner/Home About Me</h1>
      <div className="ClientAngaben">
        
        <label for="Versicherungssumme">
          Bitte geben Sie Ihre Versicherungssumme an:
        </label>
        <input
          type="number"
          id="Versicherungssumme"
          name="Versicherungssumme"
          min="1"
          max="100000000"
          value={vs}
          onChange={(e) => setVS(e.target.value)}
        />

        <label for="Versicherungswert">
          Bitte geben Sie Ihren Versicherungswert an:
        </label>
        <input
          type="number"
          id="Versicherungswert"
          name="Versicherungswert"
          min="1"
          max="100000000"
          value={vw}
          onChange={(e) => setVW(e.target.value)}
        />

        <label for="Schaden">
          Bitte geben Sie den angerichteten Schaden an:
        </label>
        <input
          type="number"
          id="Schaden"
          name="Schaden"
          min="1"
          max="100000000"
          value={schaden}
          onChange={(e) => setSchaden(e.target.value)}
        />
      </div>
      <div className="Ergebnis">
        <button id="Berechnen" onClick={berechnen}>
          Berechnen
        </button>
        <p>{result}</p>
        
        { message.show ? (
            <p style={{color: message.color}}>
              {message.text}
            </p>
        ): ""}
        <button id="reset" onClick={reset}>
          Reset
        </button>
      </div>
      <p></p>
    </div>
  );
}

export default App;
