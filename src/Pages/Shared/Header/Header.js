import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useAuth from "../../../hooks/useAuth";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar className="navbar" variant="dark" fixed="top" collapseOnSelect expand="lg">
      
        <Container className="navbar-container">
          <NavLink className="logo my-3 d-flex align-items-center justify-content-center" style={{width:"260px"}} to="/">
            
              <img
                src="https://i.imgur.com/MVQWGqW.png"
                alt="logo"
                className="logo-img"
              ></img>
              <span className="logo-text ms-2">HOLIDAYZ</span>
            
          </NavLink>
          <Navbar.Toggle style={{color: "white"}} aria-controls="navbarScroll" />
          <NavbarCollapse className="navbar-items ms-auto align-items-center">
            <NavLink className="nav-item ms-sm-5" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item ms-sm-5" to="/programs">
              Tours
            </NavLink>
            <NavLink className="nav-item ms-sm-5" to="/services">
              Services
            </NavLink>
            <NavLink className="nav-item ms-sm-5" to="/trainers">
              Trainers
            </NavLink>
            {
              user.email ?
              <div className="login-info d-flex align-items-center ms-sm-5">
                {<span className="text-white fw-bold" style={{fontSize: "19px", marginTop: "-5px"}}>Hello { user.displayName }</span>}
                <Button className="login ms-sm-5" onClick={logOut} style={{width: "180px"}}>Log Out<FontAwesomeIcon className="ms-2" icon={faUser} /></Button>
              </div>
              :
              <NavLink className="ms-sm-5 abc" to="/signin">
                <Button className="login">Log In<FontAwesomeIcon className="ms-2" icon={faUser} /></Button>
              </NavLink>
            }
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
