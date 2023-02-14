import {Link} from "react-router-dom";
export const Navbar = () => {
    return(
        <div >
                {/* ADDING A NAVBAR */}
                <Link className="Links" to="/">HOME</Link> 
                <Link className="Links" to="/PROFILE">PROFILE</Link>
                <Link className="Links" to="/CONTACT">CONTACT</Link>
        </div>
    );
};