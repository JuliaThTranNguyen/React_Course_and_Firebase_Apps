import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {Login} from "./pages/Login";
import {Provider} from "react-redux";
import { Store } from "./Store";


/* This module will cover the concept about Redux Toolkits. 

There are 2 packages that need to be installed in this module:
@reduxjs/toolkit && react-redux && react-router-dom
Install with : npm install @reduxjs/toolkit react-redux react-router-dom
*/

function App() {


  return (
    <div className="App">
        <Provider store={Store}>
            <Router>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/contact">Contact</Link>

                <Routes>
                      <Route  path="/" element={<Home />}/>
                      <Route  path="/login" element={<Login />}/>
                      <Route  path="/contact" element={<Contact />}/>
                </Routes>
            </Router>
        </Provider>
      </div>
  );
}

export default App;
