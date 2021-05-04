import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import reprtWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FabricWall from "./pages/FabricWall";
import Collections from "./pages/Collections";
import TheBrand from "./pages/TheBrand";
import FashionStyle from "./pages/FashionStyle";
import Images from "./pages/Images";
import Plain from "./pages/Plain";
import Lace from "./pages/Lace";
import AfricanWax from "./pages/AfricanWax";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
// import Cart from "./pages/Cart";s

// import FashionStyle from "/.";
// const history = createBrowserHistory();

ReactDOM.render(
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
        {/* <Route path="/cart" component={Cart} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
