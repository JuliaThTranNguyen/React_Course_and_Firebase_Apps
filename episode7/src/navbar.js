import {Link} from "react-router-dom";
export const Navbar = () => {
    return(
        <div>
                {/* ADDING A NAVBAR */}
                <Link to="/">HOME</Link>
                <Link to="/MENU">MENU</Link>
                <Link to="/CONTACT">CONTACT</Link>
        </div>
    );
};