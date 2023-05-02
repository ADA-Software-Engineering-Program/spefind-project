import React from "react";
import { Link } from "react-router-dom";
import footerLogo2 from "../../images/spelogo-white.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <section className="text-center justify-content-center footer">
      <div className="btns p-5">
        <Link to="" className="btn btn-md eventBtn">
          Event Organizer
        </Link>
        <Link to="" className="btn btn-md eventBtn eventBtn1">
          Speaker
        </Link>
      </div>

      <div className="px-3">
        <form action="#" method="POST" className="bg-white footerForm px-3">
          <h5 className="news my-auto">Subscribe to our newsletter</h5>
          <div className="d-flex gap-3">
            <div className="footerInCont">
              <input
                type="text"
                placeholder="Enter your email"
                className="footerInput"
                name="email"
              />
            </div>
            <button type="submit" className="btn footBtn my-auto">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="footerNav">
        <div className="col-12 col-md-4 text-start">
          <h6 className="fw-bold text-white">NAVIGATION</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                Explore
              </a>
            </li>
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                Contact
              </a>
            </li>
            <li>
              <a href={"/"} className="text-decoration-none text-white">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 text-start">
          <h6 className="fw-bold text-white">LEGAL</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                Privacy & Policy
              </a>
            </li>
            <li>
              <a href={"/"} className="text-decoration-none text-white">
                Terms of service
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4 text-start">
          <h6 className="fw-bold text-white">TALK TO US</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                infospefind@gmail.com
              </a>
            </li>
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                +234 7059592726
              </a>
            </li>
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                {" "}
                Linkedin
              </a>
            </li>
            <li className="mb-2">
              <a href={"/"} className="text-decoration-none text-white">
                Twitter{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copySection mt-5">
        <div>
          <img src={footerLogo2} alt="logo" className="footerLogo" />
        </div>
        <div className="mt-3 mt-md-0">
          <p className="text-white copyRight">
            &copy; {new Date().getFullYear()} Spefind. All right reserved.
          </p>
        </div>
        <div className="socialMedia mt-3 mt-md-0">
          <div className="icon">
            <FaFacebookF className="social" />
          </div>
          <div className="icon">
            <FaLinkedinIn className="social" />
          </div>
          <div className="icon">
            <FaTwitter className="social" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
