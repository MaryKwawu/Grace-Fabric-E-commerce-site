// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
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

import UserContextProvider from "./context/UserContext";
import { Box, Flex } from "@chakra-ui/react";
import { Admin } from "./pages/Admin";
import CartContextProvider from "./context/CartContext";
import { Cart } from "./pages/Cart";
function App() {
  return (
    <UserContextProvider
      value={
        window.localStorage.getItem("loggedInUser") &&
        JSON.parse(window.localStorage.getItem("loggedInUser"))
      }
    >
      <CartContextProvider
        value={
          window.localStorage.getItem("cart") &&
          JSON.parse(window.localStorage.getItem("cart"))
        }
      >
        <React.StrictMode>
          <Header />

          <Flex justify="center">
            <Box maxW="75rem">
              <Switch>
                <Route path="/admin" component={Admin} />
                <Route exact path="/collections" component={Collections} />
                <Route exact path="/the-brand" component={TheBrand} />
                <Route exact path="/fashion-style" component={FashionStyle} />
                <Route exact path="/images" component={Images} />
                <Route exact path="/plain" component={Plain} />
                <Route exact path="/lace" component={Lace} />
                <Route exact path="/african-wax" component={AfricanWax} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={Register} />{" "}
                <Route exact path="/cart" component={Cart} />{" "}
                {/* <Route component={NotFound} /> */}{" "}
                <Route path="/" component={FabricWall} />
              </Switch>
            </Box>
          </Flex>

          <Footer />
        </React.StrictMode>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
