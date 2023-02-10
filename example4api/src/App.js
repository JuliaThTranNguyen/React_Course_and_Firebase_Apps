import { useState } from 'react';
import Axios from "axios";
import './App.css';

function App() {
  const [generate, setGenerate] = useState("");

  const fetchExcuse = (excuse) => {
      Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
                .then((res) => {
                  setGenerate(res.data[0].excuse);
                });
  };

  return (
    <div className="App">
      <header className="App-header">
            <h1>Generate An Excuse</h1>
            <button onClick={() => fetchExcuse("party")}>Party</button>
            <button onClick={() => fetchExcuse("family")}>Family</button>
            <button onClick={() => fetchExcuse("office")}>Office</button>

            <p>{generate}</p>
      </header>
    </div>
  );
}

export default App;
