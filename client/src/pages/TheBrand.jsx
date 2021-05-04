import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import "./TheBrand.css";
const TheBrand = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      <div className="TheBrand">
        <div className="Brand-content ">
          <p className="content">We have all fabrics for all occassions</p>
          {/* <button onClick={() => setUser("Contact")}>Change User</button> */}
          {/* <button>
              <NavLink className="changeuser" to="/profile">
                Changeuser
              </NavLink>
            </button> */}
        </div>
        <div className=" h-2rem">
          <h1>bbbbbbbbbbbbb</h1>
          <div className="brand">
            <img
              src="/brand/hd.jpg"
              alt="brand"
              className="p-6 h-96 rounded-full overflow-hidden "
            />
            <img
              src="/brand/ha.jpg"
              alt="brand"
              className="p-6 h-96 rounded-full overflow-hidden"
            />
            <img
              src="/brand/hh.jpg"
              alt="brand"
              className="p-6  h-96 rounded-full overflow-hidden"
            />
          </div>
          <h1>bbbbbbbbbbbbb</h1>
          <div className="brand">
            <img
              src="/brand/hi.jpg"
              alt="brand"
              className="p-6 h-96 rounded-full overflow-hidden"
            />
            <img
              src="/brand/hk.jpg"
              alt="brand"
              className="p-6 h-96 rounded-full overflow-hidden"
            />
            <img
              src="/brand/hq.jpg"
              alt="brand"
              className="p-6 h-96 rounded-full overflow-hidden"
            />
          </div>

          <h1>hhhhhbbbbbbbbbbbbbbbb</h1>
          <div className="brand">
            <img
              src="/brand/hs.jpg"
              alt="brand"
              className="p-6 h-96 rounded-full overflow-hidden"
            />
            <img
              src="/brand/hw.jpg"
              alt="brand"
              className="p-6 h-96 rounded-full overflow-hidden"
            />
            <img
              src="/brand/hy.jpg"
              alt="brand"
              className="p-6 h-96 rounded-full overflow-hidden"
            />
          </div>
        </div>
      </div>
      <h1>The Brand</h1>
    </>
  );
};

export default TheBrand;
