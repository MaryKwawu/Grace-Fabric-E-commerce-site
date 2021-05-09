import * as React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { FaCartArrowDown } from "react-icons/fa";
import { VscAccount, VscChevronDown } from "react-icons/vsc";
import { Link, useHistory } from "react-router-dom";

import "./Header.css";
import {
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  HStack,
  Text,
  Button,
  Box,
  Badge,
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import { getCart } from "../services";
const Header = () => {
  const [user, setUser] = React.useContext(UserContext);
  const [cart, setCart] = React.useContext(CartContext);

  const router = useHistory();

  const numOfItemsInCart = React.useMemo(() => {
    if (cart) {
      return cart.itemsBought.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    }
  }, [cart]);

  function UserMenu() {
    return user ? (
      <Menu closeOnBlur={true}>
        {({ isOpen }) => (
          <>
            <MenuButton p="0.2rem" className={isOpen && "navlink-active"}>
              <HStack>
                <VscAccount fontSize="1.5rem" /> <Text>{user.firstName}</Text>{" "}
                <VscChevronDown />
              </HStack>
            </MenuButton>
            <MenuList color="#111827">
              <MenuItem>Profile</MenuItem>
              <MenuItem
                onClick={() => {
                  setUser(null);
                  window.localStorage.setItem("loggedInUser", null);
                  router.push("/");
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    ) : (
      <Link to="/login">
        <Button size="sm" colorScheme="blackAlpha">
          Login
        </Button>
      </Link>
    );
  }

  React.useEffect(() => {
    getCart(user._id).then(({ data: { cart } }) => {
      setCart(cart);
      window.localStorage.setItem("cart", JSON.stringify(cart));
    });
  }, []);

  return (
    <Box zIndex="sticky">
      <nav id="nav-bar">
        <HStack spacing="1rem" h="100%">
          <div className="mr-12 logo">GRACE FABRICS</div>

          <HStack fontSize="0.9rem" spacing="1.3rem" color="white" h="100%">
            <NavLink
              exact
              to="/"
              activeClassName="navlink-active"
              className="navlink"
            >
              fabric wall
            </NavLink>

            <NavLink
              to="/collections"
              activeClassName="navlink-active"
              className="navlink"
            >
              collections
            </NavLink>

            <NavLink
              to="/fashion-style"
              activeClassName="navlink-active"
              className="navlink"
            >
              fashion styles
            </NavLink>

            <NavLink
              to="/the-brand"
              activeClassName="navlink-active"
              className="navlink"
            >
              the brand
            </NavLink>
          </HStack>

          <HStack h="100%">
            <Box color="white">
              <UserMenu />
            </Box>
            <Box pos="relative">
              <NavLink to="/cart" className="navlink">
                <FaCartArrowDown size={30} />
                <Box pos="absolute" zIndex={100} bottom="17px" right={0}>
                  {cart && (
                    <Badge borderRadius="10px">{numOfItemsInCart}</Badge>
                  )}
                </Box>
              </NavLink>
            </Box>
          </HStack>
        </HStack>
      </nav>
    </Box>
  );
};
export default Header;
