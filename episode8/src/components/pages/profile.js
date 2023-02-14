import { ChangeProfile } from "../ChangeProfile";
import { useContext } from "react";
import { AppContect } from "../../App";
//import the "useContect" Hook to use datas exported from CreateContext function from App.js

export const PROFILE = () => {
    const {username} = useContext(AppContect);
    return (
        <div>
            {" "}
            Profile page: user is:  {username}
            <ChangeProfile />
        </div>
    );

};


//Due to the use of useContext and createContext Hooks -- There is no need to use "props" in this scenerio