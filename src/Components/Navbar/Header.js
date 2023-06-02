import React from "react"
import "./Navbar.css"
import { useLocation } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import LogoWhite from "../../images/spefind-logo-white.png"
import { BsArrowRight } from "react-icons/bs"
import Logout from "../Logout/Logout"

const Header = ({ backgroundColor }) => {
  const location = useLocation()

  const { pathname } = location

  const splitLocation = pathname.split("/")

  // check if user is logged in or not
  const isAuthenticated = !!sessionStorage.getItem("token")

  return (
    <>
      <Navbar expand='lg' className='navbar-main-2 d-flex py-4' variant='dark'>
        <Container>
          <div className='d-flex align-items-center w-100'>
            <Navbar.Brand href='/'>
              <img src={LogoWhite} alt='logo' className='headerLogo' />
            </Navbar.Brand>
            <Navbar.Toggle className='nav-toggle' aria-controls='basic-navbar-nav' />
          </div>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='nav-gap'>
              <Nav.Link href='./about' className={splitLocation[1] === "about" ? "active" : ""}>
                About
              </Nav.Link>
              <Nav.Link href='./explore' className={splitLocation[1] === "explore" ? "active" : ""}>
                Communicators
              </Nav.Link>
              <Nav.Link href='./' className={splitLocation[1] === "organizers" ? "active" : ""}>
                Organizers
              </Nav.Link>
              <Nav.Link href='./' className={splitLocation[1] === "works" ? "active" : ""}>
                How it works
              </Nav.Link>
              {isAuthenticated ? (
                <Logout classes='logout'>
                  <BsArrowRight className='arrow' />
                </Logout>
              ) : (
                <Nav.Link href='./login' className={splitLocation[1] === "login" ? "active" : ""} id='logBtn'>
                  Login
                  <BsArrowRight className='arrow' />
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
