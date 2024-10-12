import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="RIZVIZ Logo" className="logo-image" />{" "}
          </Link>
        </div>
        <div className="navbar-icons">
          <div className="icon">
            <CiSearch />
          </div>
          <Link to="/login" className="icon">
            <CiUser />
          </Link>
          <Link to="/cart" className="icon">
            <FiShoppingBag />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
