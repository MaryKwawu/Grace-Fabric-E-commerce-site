import { useContext, useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
//  import { UserContext } from "../context/UserContext";
//  import { NavLink } from "react-router-dom";

import {
  useRouteMatch,
  Link,
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import AfricanWax from "./AfricanWax";
import "./FabricWall.css";
import Lace from "./Lace";
import Plain from "./Plain";

const FabricWall = () => {
  const { path, url } = useRouteMatch();
  const [toggleMenu, setToggleMenu] = useState(true);
  let isFullMenu = true;
  // //   const [user, setUser] = useContext(UserContext);
  // //   const [review, setReview] = useContext(UserContext);

  console.log(url);
  const handleClick = () => {
    setToggleMenu((prevValue) => !prevValue);
  };

  return (
    <>
      <section className="min-h-screen my-2 flex">
        <aside className="w-2/12 min-h-full flex flex-col overflow-y-hidden bg-pink-200">
          <div className="py-8 px-4 text-center">
            <span className="menu-icon" onClick={handleClick}>
              <FaToggleOff size={40} className={toggleMenu ? "off" : ""} />
              <FaToggleOn size={40} className={!toggleMenu ? "off" : ""} />
            </span>
          </div>

          <ul
            className={
              (toggleMenu ? "full-menu" : "min-menu" + " " + "off") +
              " flex " +
              " flex-col " +
              " fabric-menu "
            }
          >
            <li>
              <Link to="/african-wax-print">African wax Print</Link>
            </li>
            <li>
              <Link exact to="/">
                Plain Fabric
              </Link>
            </li>
            <li>
              <Link to="/african-lace">Lace</Link>
            </li>
          </ul>
        </aside>
        <Switch>
          <main className="w-10/12 min-h-full">
            <Route exact path="/" component={Plain}>
              {/* <Plain /> */}
            </Route>
            <Route path="/african-lace" component={Lace}>
              {/* <Lace /> */}
            </Route>
            <Route path="/african-wax-print" component={AfricanWax}>
              {/* <AfricanWax /> */}
            </Route>
          </main>
        </Switch>
      </section>
    </>
  );
};

export default FabricWall;
