import {useState} from "react";

export const useToggle = (initialValueforState = false) => {
    //accessing hooks from App.js
    const [state, setState] = useState(initialValueforState);

    const ToggleFunction = () => {
        setState((previous) => !previous)
    };

    return [state, ToggleFunction]
    //we dont return things as an HTML here
    //Only return state and its function
};