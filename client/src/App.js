// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import FabricWall from "./pages/FabricWall";
import Collections from "./pages/Collections";
import TheBrand from "./pages/TheBrand";
import FashionStyle from "./pages/FashionStyle";
import AfricanWax from "./pages/AfricanWax";
import Images from "./pages/Images";
import Plain from "./pages/Plain";
import Lace from "./pages/Lace";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import Register from "./pages/Register";
export const User = React.createContext("");
function App() {
  return (
    <User.Provider value={window.localStorage.getItem("loggedInUser")}>
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/home">
              <FabricWall />
            </Route>
            <Route path="/collections" component={Collections} />
            <Route path="/thebrand" component={TheBrand} />
            <Route exact path="/" component={FabricWall} />
            {/* <Route path="/thebrand/:userId" component={TheBrandDetail} /> */}
            <Route path="/fashionstyle" component={FashionStyle} />
            <Route path="/images" component={Images} />
            <Route path="/plain" component={Plain} />
            <Route path="/lace" component={Lace} />
            <Route path="/africanwax" component={AfricanWax} />
            {/* <Route component={NotFound} /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={Register} />
            {/* <Route path="/cart" component={Cart} /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </React.StrictMode>
    </User.Provider>
  );
}

export default App;
