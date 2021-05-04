import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import "./Header.css";
const Header = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <nav id="nav-bar">
      <div className="logo">GRACE FABRICS</div>
      <ul className="navlinks">
        <li className="nav">
          <NavLink exact to="/" className="fabric-wall">
            FABRIC WALL
          </NavLink>
        </li>
        <li className="nav">
          <NavLink to="/collections" className="navlink">
            COLLECTIONS
          </NavLink>
        </li>
        <li className="nav">
          <NavLink to="/thebrand" className="navlink">
            THE BRAND
          </NavLink>
        </li>
        <li className="nav">
          <NavLink to="/fashionstyle" className="navlink">
            FASHION STYLES
          </NavLink>
        </li>
        <li className="nav">
          <NavLink to="/login" className="navlink">
            <FaUserAlt />
          </NavLink>
        </li>
        <li className="nav">
          <NavLink to="/cart" className="navlink">
            <FaCartArrowDown size={30} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
