import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const bgColor = {
    backgroundColor: "#f0f4f8",
}
  return (
    <div style={bgColor}>
      <div className="container-fluid">
        <hr ></hr>
        <footer className="py-5">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img src="/logo-removebg-preview.png" alt="Logo" width={180} height={180}></img>
            <span class="text-indigo-600 font-semibold " style={{ fontSize: "100px "}}>Connectify</span>
          </Link> 
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5 className="mb-2 font-semibold">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/about" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/services" className="nav-link p-0 text-body-secondary">
                    Services
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/contact" className="nav-link p-0 text-body-secondary">
                    Contact
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="https://hardikdaim.netlify.app" className="nav-link p-0 text-body-secondary">
                    My Website
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="mb-2 font-semibold">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/about" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/services" className="nav-link p-0 text-body-secondary">
                    Services
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/contact" className="nav-link p-0 text-body-secondary">
                    Contact
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="https://hardikdaim.netlify.app" className="nav-link p-0 text-body-secondary">
                    My Website
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="mb-2 font-semibold">Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/about" className="nav-link p-0 text-body-secondary">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/services" className="nav-link p-0 text-body-secondary">
                    Services
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/contact" className="nav-link p-0 text-body-secondary">
                    Contact
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="https://hardikdaim.netlify.app" className="nav-link p-0 text-body-secondary">
                    My Website
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button
                    className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
            <p>© {currentYear} कृषि-मित्र, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width={24} height={24}>
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
