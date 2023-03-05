import {useState} from  "react";
import {login, logout} from "../Store";
import {useDispatch, useSelector} from "react-redux";

export const Login = () => {
    const [newUsername, setnewUserName] = useState("");

    const Dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);

    return (
        <div>
            <h1>
                This is the Login page
            </h1>
            <br/>
            <p>Display username: {username}</p>
            <span>            
                <input 
                    type="text" name="username"
                    onChange={(e) => {
                        setnewUserName(e.target.value);
                    }}
                />
                <button onClick={() => Dispatch(login({username: newUsername}))}>Login</button>
            </span>
            <button>Log out</button>
        </div>
    )
}