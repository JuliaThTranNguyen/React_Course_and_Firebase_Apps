import Axios from "axios";
import React,{useState, useEffect} from "react";
import './App.css';
/*
    Recaps : API - fetching datas
*/

function App() {
const [Print, setPrint] = useState("");

  const Fetch1 = () => {
      //this is the normail fetching api with out axios
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) =>{
        console.log(data); // This will print all the data
  });

  };

  const Fetch2 = () => {
    //Remember to install axios before use
    //installation : $ npm i axios --save
    //fetching with axios
      Axios.get("https://catfact.ninja/fact").then((res) => {
        console.log(res.data.fact); // radomly print out the data
      });

  };

  //printing on screen with useEffect -- not really recommended for advanced code style
  const Fetch3 = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setPrint(res.data.fact); // radomly print out the data
    });
  };
  useEffect(() => {
      Fetch3();
  },[]);

  //new example of fetching api - predict Age
  //create a function to fetch data when ever we're clicking the button
  const [name, setName] = useState("");
  const [age, setage] = useState(null); //Or: const [age, setage] = useState({}});

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setage(res.data);
    })
  };

  return (
    <div className="App">
      <header className='App-header'>
          <h1>Fetching without axios</h1>
          <button onClick={Fetch1}>Fetch me</button>

          <br/>

          <h1>Fetching with axios</h1>
          <button onClick={Fetch2}>Fetch me again</button>

          <br/>

          <h1>Fetching with axios and useEffect</h1>
          <button onClick={Fetch3}>Fetch me again</button>
          <p>{Print}</p>
      </header>
      
      {/* example: Predict Age */}
      <div style={{backgroundColor: "lightblue"}}>
            <input placeholder="ex. Hien..."
                onChange={(event) => {
                  setName(event.target.value);
                }}
            />
            <button onClick={fetchData}>Predict Age</button>
            {/* The "?" used here to define/print out the object when ever the string is not null ; this allow us to not break the code*/}
            {/* If you define the useState as ({}) -- meaning not null; then the "?" can be remove*/}
            <h1>Name: {age?.name}</h1> 
            <h1>Predict Age: {age?.age}</h1>
            <h1>Count: {age?.count}</h1>
      </div>
    </div>
  );
}

export default App;
