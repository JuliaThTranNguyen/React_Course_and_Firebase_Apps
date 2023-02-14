import {useState} from "react";
import {useToggle} from "./useToggle"
import './App.css';
/*
  This module will cover/recaps advanced, extra infos on Custom Hooks
*/
function App() {
  const [isVisible, setIsVisible] = useState(false);//pls always remember to put this function at the highest level - for accessibility
  const [state1, toggle1] = useToggle();
  const [state2, toggle2] = useToggle();

  return (
    <div>
        <div className="App1">
          <p>Normal way to use the Hook</p>
          <button onClick={() => setIsVisible((previous) => !previous)}>
                {isVisible ? "Hide" : "Show"}
          </button>

          {isVisible && <h1>Hidden text</h1>}
          <p>Pls rolls down for more examples <span>&#8595;</span> </p>
        </div>

        <div className="App2">
          <p>New way to use the Hook - Modified for this module</p>
            <button onClick={toggle1}>
                  {state1 ? "Hide" : "Show"}
            </button>

            {state1 && <h1>Hidden text</h1>}
            <p>Reusable components <span>&#8595;</span> </p>
        </div>
        <div className="App3">
          <p>This new method is reusable</p>
            <button onClick={toggle2}>
                  {state2 ? "Hide" : "Show"}
            </button>

            {state2 && <h1>Hidden text</h1>}
        </div>
    </div>
    
  );
}

export default App;


//Hook is extremerely good for reducing datas & logics