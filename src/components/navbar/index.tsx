import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li>
                    <NavLink to="/videos">Videos</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Search</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;