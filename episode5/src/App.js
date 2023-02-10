import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Text } from './Text';

/*
  State and component lifecycle
  useEffect Hook -- mount and unmount of a component
*/

function App() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
      console.log("component mounted");

      return () => {
        console.log("component unmounted");
      };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <button onClick={() => {
            setShowText(!showText);
          }}>Show text</button>

          {showText && < Text />}
      </header>
    </div >

  );
}

export default App;
