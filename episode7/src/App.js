import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { HOME } from "./pages/home";
import { MENU } from "./pages/menu";
import { CONTACT } from "./pages/contact";
import { Navbar } from "./navbar";

/*
This module will cover:  React Router DOM - simple example
*/
function App() {


  return (
    <div className="App">
      <header className="App-header">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HOME />}/>
                    <Route path="/MENU" element={<MENU />}/>
                    <Route path="/CONTACT" element={<CONTACT />}/>
                    <Route path="*" element={<h1>Page not found</h1>}/> 
                </Routes>
            </Router>
      </header>
    </div>
  );
}

export default App;
