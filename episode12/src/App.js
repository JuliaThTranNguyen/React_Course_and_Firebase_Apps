import './App.css';
import { Person } from './Person';
/* In this module we wqill learn about TypeScript and Type Safety.
Purpose of this study: to ensure the props that we pass is in the correct types so it wont break the app when it's running.

In able to ensure or aviod this unwanted situation, we can use a built up tool in REACt called "Prop-types"
Install this package with : npm install prop-types
How to use it: 1. NAvigate to the component which use props to export --in this case , it is Person.js 
                2. In Person.js file, simply do import for that installed package*/

function App() {
  return (
    <div className="App">
        <Person
          name="Julia"
          email="example@gmail.com"
          age={23}
          IsMarried={false}
          friends={["Jessica", "Lucas", "Jammie"]}/>
    </div>
  );
}

export default App;
