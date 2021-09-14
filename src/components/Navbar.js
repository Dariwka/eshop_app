import React from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../scss/navBar.scss";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          E-Shop
        </Link>
        <div className="menu-bar">
          <ul>
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={splitLocation[1] === "products" ? "active" : ""}>
              <Link to="/products">Products</Link>
            </li>
            <li className={splitLocation[1] === "cart" ? "active" : ""}>
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
