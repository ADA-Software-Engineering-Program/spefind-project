import React from "react"
import "./Navbar.css"
import { useLocation } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import LogoBlack from "../../images/spefind-logo-orange.png"
import LogoWhite from "../../images/spefind-logo-white.png"
import { BsArrowRight } from "react-icons/bs"
import Logout from "../Logout/Logout"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = ({ backgroundColor }) => {
  const location = useLocation()

  const { pathname } = location

  const splitLocation = pathname.split("/")
  const dashboardUrl = location.pathname === "/dashboard"
  const loginUrl = location.pathname === "/login"

  // check if user is logged in or not
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  return (
    <>
      <Navbar
        expand='lg'
        className='navbar-main d-none d-lg-flex'
        style={{
          backgroundColor: backgroundColor ? backgroundColor : "transparent"
        }}
      >
        <Container>
          <div className='d-flex align-items-center w-100'>
            <Navbar.Brand as={Link} to='/' className='headerLogo'>
              <img src={LogoBlack} alt='logo' className='w-100' />
            </Navbar.Brand>
            <Navbar.Toggle className='nav-toggle' aria-controls='basic-navbar-nav' />
          </div>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='nav-gap'>
              <Nav.Link as={Link} to='/about' className={splitLocation[1] === "about" ? "active" : ""}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/explore' className={splitLocation[1] === "explore" ? "active" : ""}>
                Communicators
              </Nav.Link>
              <Nav.Link as={Link} to='/' className={splitLocation[1] === "organizers" ? "active" : ""}>
                Organizers
              </Nav.Link>
              <Nav.Link as={Link} to='/' className={splitLocation[1] === "works" ? "active" : ""}>
                How it works
              </Nav.Link>
              {isAuthenticated && dashboardUrl && (
                <Logout classes='logout'>
                  <BsArrowRight className='arrow' />
                </Logout>
              )}
              {isAuthenticated && !dashboardUrl && (
                <Nav.Link as={Link} to='/dashboard' className={splitLocation[1] === "dashboard" ? "active" : ""}>
                  Dashboard
                  <BsArrowRight className='arrow' />
                </Nav.Link>
              )}
              {!isAuthenticated && !loginUrl && (
                <Nav.Link as={Link} to='/login' className={splitLocation[1] === "login" ? "active" : ""} id='logBtn'>
                  Login
                  <BsArrowRight className='arrow' />
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar expand='lg' className='navbar-main-1 d-lg-none d-flex py-4' variant='dark'>
        <Container>
          <div className='d-flex align-items-center w-100'>
            <Navbar.Brand as={Link} to='/'>
              <img src={LogoWhite} alt='logo' className='headerLogo' />
            </Navbar.Brand>
            <Navbar.Toggle className='nav-toggle' aria-controls='basic-navbar-nav' />
          </div>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='nav-gap'>
              <Nav.Link as={Link} to='/about' className={splitLocation[1] === "about" ? "active" : ""}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to='/explore' className={splitLocation[1] === "explore" ? "active" : ""}>
                Communicators
              </Nav.Link>
              <Nav.Link as={Link} to='/' className={splitLocation[1] === "organizers" ? "active" : ""}>
                Organizers
              </Nav.Link>
              <Nav.Link as={Link} to='/' className={splitLocation[1] === "works" ? "active" : ""}>
                How it works
              </Nav.Link>
              {/* {isAuthenticated ? (
                <Nav.Link as={Link} to='/dashboard' className={splitLocation[1] === "dashboard" ? "active" : ""}>
                  Dashboard
                  <BsArrowRight className='arrow' />
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to='/login' className={splitLocation[1] === "login" ? "active" : ""} id='logBtn'>
                  Login
                  <BsArrowRight className='arrow' />
                </Nav.Link>
              )} */}
              {isAuthenticated && dashboardUrl && (
                <Logout classes='logout'>
                  <BsArrowRight className='arrow' />
                </Logout>
              )}
              {isAuthenticated && !dashboardUrl && (
                <Nav.Link as={Link} to='/dashboard' className={splitLocation[1] === "dashboard" ? "active" : ""}>
                  Dashboard
                  <BsArrowRight className='arrow' />
                </Nav.Link>
              )}
              {!isAuthenticated && !loginUrl && (
                <Nav.Link as={Link} to='/login' className={splitLocation[1] === "login" ? "active" : ""} id='logBtn'>
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

Header.propTypes = {
  backgroundColor: PropTypes.string
}

export default Header
