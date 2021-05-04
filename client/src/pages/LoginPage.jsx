import { useContext, useState } from "react";
// import { UserContext } from "../context/UserContext";
// import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Login.css";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [toggleAuth, setToggleAuth] = useState(true);

  // const [_, setAuth] = useContext(AuthContext);
  // const [user, setUser] = useContext(UserContext);
  const history = useHistory();

  // const handleChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (username === "Mary" && password === "password") {
  //     setAuth(true);
  //     history.push("/signin");
  //   } else {
  //     history.push("/");
  //   }

  //   const data = fetchQuery({
  //     uri: "https://localhost:4000/auth/login",
  //     method: "POST",
  //     body: details,
  //   });
  //   localStorage.setItem("token", data.token);
  //   history.push("/");
  // };

  return (
    <div className="login-page">
      <div className="login-content">
        <h1>Login Page</h1>

        <form>
          {toggleAuth && (
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <br />
              <input
                className="input-field"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="input-field"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <br />

            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button type="submit">{toggleAuth ? "Signup" : "Login"}</button>
        </form>
        <p>
          Have an account?
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setToggleAuth(false)}
          >
            Login
          </span>{" "}
          or
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setToggleAuth(true)}
          >
            Signup
          </span>
        </p>
      </div>
      <div className="login-image">
        {/* <img src="eventorg.jpg" alt="Login Page" /> */}
      </div>
    </div>
  );
};
export default LoginPage;
