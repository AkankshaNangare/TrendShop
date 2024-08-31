import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#343a40", color: "white" }}>
        <div className="container">
          <footer className="py-4">
            <div className="row">
              <div className="col-md-4 mb-3">
                <h5>About Us</h5>
                <p>
                  TREND_SHOP is your go-to store for the latest trends in fashion, accessories, and more. We are dedicated to providing you with the best products and customer service.
                </p>
              </div>

              <div className="col-md-3 mb-3">
                <h5>Quick Links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <NavLink to="/Trend-Shop" className="nav-link p-0 text-white">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/products" className="nav-link p-0 text-white">
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/contact" className="nav-link p-0 text-white">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item mb-2">
                    <NavLink to="/about" className="nav-link p-0 text-white">
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 mb-3">
                <h5>Subscribe to our Newsletter</h5>
                <p>Get the latest updates and offers directly in your inbox.</p>
                <form>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      aria-label="Email address"
                      aria-describedby="button-subscribe"
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="button-subscribe"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <hr style={{ borderColor: "#6c757d" }} />

            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">© 2024 TREND_SHOP. All rights reserved.</p>
              <div className="d-flex">
                <a
                  href="#"
                  className="text-white me-3"
                  aria-label="Facebook"
                >
                  <FaFacebook size="1.5em" />
                </a>
                <a
                  href="#"
                  className="text-white me-3"
                  aria-label="Twitter"
                >
                  <FaTwitter size="1.5em" />
                </a>
                <a
                  href="#"
                  className="text-white me-3"
                  aria-label="Instagram"
                >
                  <FaInstagram size="1.5em" />
                </a>
                <a
                  href="#"
                  className="text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size="1.5em" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
