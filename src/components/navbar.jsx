import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../state/index";
import Search from "./search";

import Tooltip from "@mui/material/Tooltip";

export default function Navbar({ picturePath }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.token !== null);

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
  };

  return (
    <>
      <div className="sticky top-0 z-40  shadow-md bg-white dark:bg-gray-800 w-full border border-gray-300 dark:border-gray-700">
        <div className="mx-auto max-w-full px-0 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <NavLink
              to="/home"
              className="flex items-center gap-x-2 cursor-pointer "
            >
              <img
                src="/connectify.png"
                // height="200px"
                // width="200px"
                className="h-24 w-28 md:h-24 md:w-52 pr-2"
                alt="Connectify"
              />
            </NavLink>
            <div style={{ width: '70%' }}>
              <Search />
            </div>

            <div className="flex items-center ml-4 md:ml-6">
              {isLoggedIn ? (
                <div className="flex items-center gap-x-2">
                  <Tooltip title="Chat">
                    <img
                      className="cursor-pointer"
                      type="svg"
                      height="30px"
                      width="30px"
                      src="/Message.svg"
                      alt="Chat"
                    />
                  </Tooltip>
                  <Tooltip title="Settings">
                    <svg
                      viewBox="0 0 24 24"
                      height="40px"
                      width="40px"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.75195 12.0128C9.75175 11.0587 10.4087 10.2372 11.3211 10.0509C12.2335 9.86458 13.1472 10.3652 13.5034 11.2467C13.8595 12.1282 13.559 13.1449 12.7856 13.6752C12.0121 14.2054 10.9812 14.1014 10.3233 13.4268C9.95757 13.0518 9.75206 12.5432 9.75195 12.0128Z"
                          stroke="#2563eb"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.3077 5.46781C10.2943 4.94809 10.557 4.46185 10.9937 4.19793C11.4305 3.93402 11.9725 3.93402 12.4092 4.19793C12.8459 4.46185 13.1086 4.94809 13.0952 5.46781V6.18481C14.1532 6.45066 15.1177 7.01454 15.8798 7.81281L16.4346 7.47881C16.7552 7.28632 17.1379 7.23446 17.4962 7.33495C17.8545 7.43544 18.1583 7.6798 18.3388 8.01281C18.7238 8.70718 18.4973 9.58984 17.8288 9.99981L17.3121 10.3108C17.6296 11.4207 17.6296 12.6009 17.3121 13.7108L17.8288 14.0218C18.4996 14.4319 18.7264 15.3175 18.3388 16.0128C18.1579 16.3455 17.8541 16.5894 17.4958 16.6895C17.1375 16.7896 16.7549 16.7375 16.4346 16.5448L15.8798 16.2108C15.1177 17.01 14.1528 17.5746 13.0942 17.8408V18.5578C13.1076 19.0775 12.845 19.5638 12.4082 19.8277C11.9715 20.0916 11.4295 20.0916 10.9927 19.8277C10.556 19.5638 10.2933 19.0775 10.3067 18.5578V17.8408C9.24871 17.575 8.28422 17.0111 7.52212 16.2128L6.96735 16.5468C6.64684 16.739 6.26438 16.7907 5.90629 16.6902C5.5482 16.5897 5.24464 16.3455 5.06415 16.0128C4.67911 15.3184 4.90563 14.4358 5.57407 14.0258L6.09082 13.7148C5.77329 12.6049 5.77329 11.4247 6.09082 10.3148L5.57407 10.0038C4.90333 9.59369 4.67651 8.70808 5.06415 8.01281C5.24498 7.68014 5.54885 7.43621 5.90715 7.3361C6.26546 7.236 6.64797 7.28816 6.96832 7.48081L7.5231 7.81481C8.28484 7.01545 9.24936 6.4505 10.3077 6.18381V5.46781Z"
                          stroke="#2563eb"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </Tooltip>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-x-2">
                  <NavLink
                    to="/"
                    type="button"
                    className="rounded-lg inline-block px-3 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold dark:text-white dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/signup"
                    type="button"
                    className="flex items-center justify-center rounded-full py-1 px-3 text-sm font-semibold bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500"
                  >
                    SignUp
                  </NavLink>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
    // <div>
    //   <div className="container-fluid">
    //     <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 border-bottom shadow-md">
    //       <div className="col-md-3 mb-2 mb-md-0">
    //         <Link to="/home" className="d-inline-flex link-body-emphasis text-decoration-none">
    //           <img src="/logo-removebg-preview.png" alt="Logo" width={40} height={40}></img>
    //           <span className="fs-4 text-indigo-600 font-semibold">Connectify</span>
    //         </Link>
    //       </div>

    //       <div>
    //         <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    //           <li><Link to="/home" className="nav-link text-indigo-600 hover:text-indigo-500 font-semibold px-2">
    //             <Tooltip title="Home">
    //               <CottageTwoToneIcon style={{ fontSize: "3rem" }} />
    //             </Tooltip>
    //           </Link></li>
    //           <li><Link to="/about" className="nav-link text-indigo-600 hover:text-indigo-500 font-semibold px-2">
    //             <Tooltip title="About Us">
    //               <InfoTwoToneIcon style={{ fontSize: "3rem" }} />
    //             </Tooltip>
    //           </Link></li>
    //           <li><Link to="/services" className="nav-link text-indigo-600 hover:text-indigo-500 font-semibold px-2">
    //             <Tooltip title="Our Services">
    //               <MedicalInformationTwoToneIcon style={{ fontSize: "3rem" }} />
    //             </Tooltip>
    //           </Link></li>
    //           <li><Link to="/contact" className="nav-link text-indigo-600 hover:text-indigo-500 font-semibold px-2">
    //             <Tooltip title="Contact us">
    //               <ContactMailTwoToneIcon style={{ fontSize: "3rem" }} />
    //             </Tooltip>
    //           </Link></li>
    //           {isLoggedIn &&
    //             <li><Link to="/profile" className="nav-link text-indigo-600 hover:text-indigo-500 font-semibold px-2">
    //               <Tooltip title="My Profile">
    //                 <Person4TwoToneIcon style={{ fontSize: "3.1rem" }} />
    //               </Tooltip>
    //             </Link></li>
    //           }
    //         </ul>
    //       </div>

    //       <div className="col-md-3 text-end">
    //         {isLoggedIn ?
    //           <div>
    //             <Link to="/create-blog" type="button" className="position-relative justify-center border-indigo-600 border-1 rounded-md px-3 mx-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    //               + New <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
    //             </Link>
    //             <Link to="/" type="button" className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleLogout}>
    //               Logout
    //             </Link>
    //           </div> :
    //           <div>
    //             <Link to="/" type="button" className="justify-center border-indigo-600 border-1 rounded-md px-3 mx-3 py-1.5 text-sm font-semibold leading-6 text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    //               Login
    //             </Link>
    //             <Link to="/signup" type="button" className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    //               Register
    //             </Link>
    //           </div>
    //         }
    //       </div>
    //     </header>
    //   </div>
    // </div>
  );
}
