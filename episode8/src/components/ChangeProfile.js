import { useState } from "react";
import { useContext } from "react";
import { AppContect } from "../App";
//import the "useContect" Hook to use datas exported from CreateContext function from App.js

export const ChangeProfile = () => {
    const {setUsername} = useContext(AppContect);
    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            <input onChange={(event)=>{
                setNewUsername(event.target.value);
            }}/>
            <button onClick={() => {
                setUsername(newUsername)
            }}>Change Username</button>
        </div>
    );
};


//Due to the use of useContext and createContext Hooks -- There is no need to use "props" in this scenerio
// Otherwise, you can do it traditionally by using 
// props and set a function to take in new name everytimes the input changes
//example: const [newUsername, setNewUsername] = useState("");