import { useContext } from "react";
import { AppContect } from "../../App";
//import the "useContect" Hook to use datas exported from CreateContext function from App.js


export const CONTACT = () => {
    const {username} = useContext(AppContect);

    return <h1> This is {username} , welcome to the CONTACT page</h1>
};

//Note:
//Due to the use of useContext and createContext Hooks -- There is no need to use "props" in this scenerio
