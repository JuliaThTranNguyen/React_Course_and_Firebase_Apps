import {useState} from "react";

export const useCount = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increase = () => {
        setCount((previous) => previous + 1);
    };

    const decrease = () => {
        setCount((previous) => previous - 1);
    };

    const restart = () => {
        setCount(0);//restart will set value to the defined value in here
    };

    return{count, increase, decrease, restart};
};