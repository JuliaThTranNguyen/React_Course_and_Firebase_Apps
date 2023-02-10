import { useState } from 'react';
import './App.css';
import { Task3, Tasks2 } from './Tasks';

/*
  This example following the episode4
  Requirements:
      create a bar - taking user inputs
      allow user to add7delete7oralter that input at a specific id
      create a specific input file to store the input component
*/

function App() {
  // 1st , 2nd and 3rd lists
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const [newinput, setNewInput] = useState("");
  const [newList, setNewList] = useState([]);

  const [thirdInput, setthirdInput] = useState("");
  const [thirdList, setthirdList] = useState([]);

  // input on change - handle services 
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleChange2 = (event) => {
    setNewInput(event.target.value);
  };

  const handleChange3 = (event) => {
    setthirdInput(event.target.value);
  };

  //Add events
  const AddEvent1 = () => {
      setList([...list,input]);
  };

  const AddEvent2 = () => {
    //Add and delete by id
    const task = {
      id: newList.length === 0 ? 1 : newList[newList.length -1].id + 1,
      taskname: newinput,
    };
    setNewList([...newList,task]);
  };

  const AddEvent3 = () => {
    //Add and delete by id
    const task = {
      id: thirdList.length === 0 ? 1 : thirdList[thirdList.length -1].id + 1,
      taskThirdname: thirdInput,
      completed: false,
    };
    setthirdList([...thirdList,task]);
  };

  //delete by id - events
  const delete2 = (id) =>{
      setNewList(newList.filter((task) => task.id !== id));
  };

  const delete3 = (id) =>{
    setthirdList(thirdList.filter((task) => task.id !== id));
  };


  // completed Task allow user to mark the task to green when the status === true
  const completedTask3 = (id) => {

      setthirdList(
        thirdList.map ((task) => {
          if (task.id === id) {
            return {...task, completed:  !task.completed };
          } else {
            return task;
          }
      })
      )
  };

  //printing with HTML 
  return (
    <div className="App">
      <header className="App-header">
          <h1>This bar will only allow to take input</h1>
          <span>  <input onChange={handleChange} />
                  <button onClick={AddEvent1}>Add</button>
          </span>
          <div >
            {
              list.map((task) => {
                return <p>{task}</p>
              })
            }
          </div>
      </header>

      <div className="App-body">
        <h1>This 2nd bar will allow to take and delete inputs</h1>
        <span>
            <input onChange={handleChange2}></input>
            <button onClick={AddEvent2}>Add</button>
        </span>
        <div >
          {newList.map((task) => {
            return <Tasks2 
                        taskname={task.taskname}
                        id={task.id}
                        delete2={delete2}
                    />
          })}
        </div>
      </div>

      <footer className="App-footer">
      <h1>This 3rd bar will allow to take and delete inputs</h1>
        <span>
            <input onChange={handleChange3}></input>
            <button onClick={AddEvent3}>Add</button>
        </span>
        <div >
          {thirdList.map((task ,index) => {
            return <Task3 
                        key={`task3-${index}`}
                        taskThirdname={task.taskThirdname}
                        id={task.id}
                        completed={task.completed}
                        delete3={delete3}
                        completedTask3={completedTask3}
                   />
          })}
        </div>
      </footer>
    </div>
    
  );
}

export default App;
