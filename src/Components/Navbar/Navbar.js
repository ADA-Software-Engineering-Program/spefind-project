import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../images/Spefind-logo.png";
import Logo2 from "../../images/spelogo-white.png";
import { BsArrowRight } from "react-icons/bs";
import "./Navbar.css";
import Logout from "../Logout/Logout";

const Header = ({ backgroundColor }) => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  //check if user is logged in or not
  const isAuthenticated = !!sessionStorage.getItem("token");

  return (
    <>
      <Navbar
        expand="md"
        className="navbar-main d-none d-md-flex"
        style={{
          backgroundColor: backgroundColor ? backgroundColor : "transparent",
        }}
      >
        <Container>
          <div className="d-flex align-items-center" style={{ width: "100%" }}>
            <Navbar.Brand href="/">
              <img src={Logo} alt="logo" className="headerLogo" />
            </Navbar.Brand>
            <Navbar.Toggle
              className="nav-toggle"
              aria-controls="basic-navbar-nav"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-gap">
              <Nav.Link
                href="/"
                className={splitLocation[1] === "" ? "active" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="./about"
                className={splitLocation[1] === "about" ? "active" : ""}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="./explore"
                className={splitLocation[1] === "explore" ? "active" : ""}
              >
                Explore
              </Nav.Link>
              <Nav.Link
                href="./blog"
                className={splitLocation[1] === "blog" ? "active" : ""}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="./contact"
                className={splitLocation[1] === "contact" ? "active" : ""}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="./login"
                className={splitLocation[1] === "login" ? "active" : ""}
                id="logBtn"
              >
                {isAuthenticated ? <Logout /> : "Log In"}
                <BsArrowRight className="arrow" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar
        expand="md"
        className="navbar-main-1 d-md-none d-flex"
        variant="dark"
      >
        <Container>
          <div className="d-flex align-items-center w-100">
            <Navbar.Brand href="/">
              <img src={Logo2} alt="logo" className="headerLogo" />
            </Navbar.Brand>
            <Navbar.Toggle
              className="nav-toggle"
              aria-controls="basic-navbar-nav"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-gap">
              <Nav.Link
                href="/"
                className={splitLocation[1] === "" ? "active" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="./about"
                className={splitLocation[1] === "about" ? "active" : ""}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="./explore"
                className={splitLocation[1] === "explore" ? "active" : ""}
              >
                Explore
              </Nav.Link>
              <Nav.Link
                href="./blog"
                className={splitLocation[1] === "blog" ? "active" : ""}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="./contact"
                className={splitLocation[1] === "contact" ? "active" : ""}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="./login"
                className={splitLocation[1] === "login" ? "active" : ""}
                id="logBtn"
              >
                Log In
                <BsArrowRight className="arrow" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
