import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="bg-white sticky-bottom-0 z-50 dark:bg-gray-800 border-2 border-gray-50 dark:border-gray-700">
        <div className="mx-auto mx-w-full px-4 sm:px-6 lg:px-8">
          <div className="py-16 flex flex-col items-center">
            <img
              src="/connectify.png"
              height="200px"
              width="200px"
              alt="Connectify"
           
            />
            <nav className="my-10 text-sm" aria-label="quick-links">
              <div className="flex justify-center gap-x-6 mb-6">
                <div
                  className="dark:text-white cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/hardik-daim-ab0b07251/"
                    )
                  }
                >
                  About Creator
                </div>
                <div
                  className="dark:text-white cursor-pointer"
                  onClick={() => window.open("https://hardikdaim.netlify.app")}
                >
                  Creator's Website
                </div>
                <div
                  className="dark:text-white cursor-pointer"
                  onClick={() => window.open("https://github.com/HardikDaim")}
                >
                  GitHub Profile
                </div>
              </div>
              <div className="flex justify-center dark:text-white select-none">
                <span>
                  Copyright © {new Date().getFullYear()} Made by{" "}
                  <b>Hardik Daim</b>
                </span>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </>
    // <div style={bgColor}>
    //   <div className="container-fluid">
    //     <hr ></hr>
    //     <footer className="py-5">
    //       <Link
    //         to="/"
    //         className="d-inline-flex link-body-emphasis text-decoration-none"
    //       >
    //         <img src="/logo-removebg-preview.png" alt="Logo" width={180} height={180}></img>
    //         <span class="text-indigo-600 font-semibold " style={{ fontSize: "100px "}}>Connectify</span>
    //       </Link>
    //       <div className="row">
    //         <div className="col-6 col-md-2 mb-3">
    //           <h5 className="mb-2 font-semibold">Section</h5>
    //           <ul className="nav flex-column">
    //             <li className="nav-item mb-2">
    //               <a href="/" className="nav-link p-0 text-body-secondary">
    //                 Home
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="/about" className="nav-link p-0 text-body-secondary">
    //                 About
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="/services" className="nav-link p-0 text-body-secondary">
    //                 Services
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="/contact" className="nav-link p-0 text-body-secondary">
    //                 Contact
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="https://hardikdaim.netlify.app" className="nav-link p-0 text-body-secondary">
    //                 My Website
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="col-6 col-md-2 mb-3">
    //           <h5 className="mb-2 font-semibold">Section</h5>
    //           <ul className="nav flex-column">
    //             <li className="nav-item mb-2">
    //               <a href="/" className="nav-link p-0 text-body-secondary">
    //                 Home
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="/about" className="nav-link p-0 text-body-secondary">
    //                 About
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="/services" className="nav-link p-0 text-body-secondary">
    //                 Services
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="/contact" className="nav-link p-0 text-body-secondary">
    //                 Contact
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="https://hardikdaim.netlify.app" className="nav-link p-0 text-body-secondary">
    //                 My Website
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="col-6 col-md-2 mb-3">
    //           <h5 className="mb-2 font-semibold">Section</h5>
    //           <ul className="nav flex-column">
    //             <li className="nav-item mb-2">
    //               <a href="/" className="nav-link p-0 text-body-secondary">
    //                 Home
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="/about" className="nav-link p-0 text-body-secondary">
    //                 About
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="/services" className="nav-link p-0 text-body-secondary">
    //                 Services
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="/contact" className="nav-link p-0 text-body-secondary">
    //                 Contact
    //               </a>
    //             </li>
    //             <li className="nav-item mb-2">
    //               <a href="https://hardikdaim.netlify.app" className="nav-link p-0 text-body-secondary">
    //                 My Website
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className="col-md-5 offset-md-1 mb-3">
    //           <form>
    //             <h5>Subscribe to our newsletter</h5>
    //             <p>Monthly digest of what's new and exciting from us.</p>
    //             <div className="d-flex flex-column flex-sm-row w-100 gap-2">
    //               <label htmlFor="newsletter1" className="visually-hidden">
    //                 Email address
    //               </label>
    //               <input
    //                 id="newsletter1"
    //                 type="text"
    //                 className="form-control"
    //                 placeholder="Email address"
    //               />
    //               <button
    //                 className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //                 type="button"
    //               >
    //                 Subscribe
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //       <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
    //         <p>© {currentYear} कृषि-मित्र, Inc. All rights reserved.</p>
    //         <ul className="list-unstyled d-flex">
    //           <li className="ms-3">
    //             <a className="link-body-emphasis" href="#">
    //               <svg className="bi" width={24} height={24}>
    //                 <use xlinkHref="#twitter" />
    //               </svg>
    //             </a>
    //           </li>
    //           <li className="ms-3">
    //             <a className="link-body-emphasis" href="#">
    //               <svg className="bi" width={24} height={24}>
    //                 <use xlinkHref="#instagram" />
    //               </svg>
    //             </a>
    //           </li>
    //           <li className="ms-3">
    //             <a className="link-body-emphasis" href="#">
    //               <svg className="bi" width={24} height={24}>
    //                 <use xlinkHref="#facebook" />
    //               </svg>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </footer>
    //   </div>
    // </div>
  );
}
