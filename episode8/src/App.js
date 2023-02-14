import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { HOME } from "./components/pages/home";
import { PROFILE } from "./components/pages/profile";
import { CONTACT} from "./components/pages/contact"
import { Navbar } from "./components/Narbav";
import { useState, createContext } from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
/*
This module will cover:  React Router DOM 
                      && State Management, useContext Hook 
                      && React Query -- Fetching Data(API) In react by using React Query

            We will continue to use the example in episode 8
            pls install react-router-dom befure use
            Install tools new Hook with: npm i react-router-dom --save

            learn new Hook: createcontect - use it to create a context function

            install React Query with: npm i @tanstack/react-query
*/
export const AppContect = createContext(); //this is the way to define this new Hook as a function

function App() {
  const [username, setUsername] = useState("Julia");

  //Create a variable called Client to use React Query
  const client = new QueryClient({defaultOptions:{
    defaultOptions:{
      query:{
        refetchOnWindowFocus: false // set it to "false" - to prevent auto fetching/sync datas 
        // or set it to "true" by default- for continuing sync/loading datas from query
      }
    }
  }});

  return (
    <div className="App">
      <header className="App-header">
          <QueryClientProvider client={client}>
              <AppContect.Provider value={{username, setUsername}}> {/*".Provider" means to provide datas for the Router belows*/}
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HOME/>}/>
                        <Route path="/PROFILE" element={<PROFILE/>}/>
                        <Route path="/CONTACT" element={<CONTACT/>}/>
                        <Route path="*" element={<h1>Page not found</h1>}/> 
                    </Routes>
                </Router>
              </AppContect.Provider>
          </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;


//Put the react query to the highest level to make it accessible from everywhere in our App.js