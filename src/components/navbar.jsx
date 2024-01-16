import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../state/index";
import CottageTwoToneIcon from "@mui/icons-material/CottageTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import MedicalInformationTwoToneIcon from "@mui/icons-material/MedicalInformationTwoTone";
import ContactMailTwoToneIcon from "@mui/icons-material/ContactMailTwoTone";
import Person4TwoToneIcon from "@mui/icons-material/Person4TwoTone";
import Tooltip from "@mui/material/Tooltip";
import UserImage from "./UserImage";

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
      <header className="py-10 shadow-md bg-white dark:bg-gray-800 w-full border border-gray-300 dark:border-gray-700 ">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <nav className="relative flex justify-between">
            <NavLink
              to="/home"
              className="flex items-center md:gap-x-12 mr-7 cursor-pointer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 109 40"
                className="h-10 w-auto"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
                  fill="#2563EB"
                ></path>

                <path
                  d="M55.528 26.57V15.842H52V13.97h9.108v1.872h-3.636V26.57h-1.944Z"
                  fill="#0F172A"
                ></path>
                <path
                  d="M83.084 26.57v-12.6h5.346c.744 0 1.416.18 2.016.54a3.773 3.773 0 0 1 1.44 1.44c.36.612.54 1.302.54 2.07 0 .78-.18 1.482-.54 2.106a4 4 0 0 1-1.44 1.494c-.6.36-1.272.54-2.016.54h-2.646v4.41h-2.7Zm2.664-6.84h2.376c.288 0 .546-.072.774-.216.228-.156.408-.36.54-.612a1.71 1.71 0 0 0 .216-.864c0-.324-.072-.606-.216-.846a1.394 1.394 0 0 0-.54-.576 1.419 1.419 0 0 0-.774-.216h-2.376v3.33ZM106.227 26.57V13.25h2.556v13.32h-2.556Z"
                  fill="#2563EB"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M95.906 26.102c.636.432 1.35.648 2.142.648.444 0 .864-.066 1.26-.198a4.25 4.25 0 0 0 1.062-.558 3.78 3.78 0 0 0 .702-.668v1.244h2.574v-9.522h-2.538v1.248a3.562 3.562 0 0 0-.648-.672 3.13 3.13 0 0 0-1.026-.558 3.615 3.615 0 0 0-1.278-.216c-.828 0-1.566.216-2.214.648-.648.42-1.164 1.002-1.548 1.746-.372.732-.558 1.578-.558 2.538 0 .96.186 1.812.558 2.556.372.744.876 1.332 1.512 1.764Zm4.104-1.908c-.36.228-.78.342-1.26.342-.468 0-.882-.114-1.242-.342a2.387 2.387 0 0 1-.828-.954c-.204-.42-.306-.906-.306-1.458 0-.54.102-1.014.306-1.422.204-.408.48-.726.828-.954.36-.24.774-.36 1.242-.36.48 0 .9.12 1.26.36.36.228.636.546.828.954.204.408.306.882.306 1.422 0 .552-.102 1.038-.306 1.458a2.218 2.218 0 0 1-.828.954Z"
                  fill="#2563EB"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="m76.322 23.197 2.595 3.373h2.268l-3.662-4.787 3.338-4.663h-2.196l-2.162 3.334-2.554-3.334h-2.34l3.652 4.71-3.634 4.74h2.196l2.5-3.373ZM62.738 26.102a3.78 3.78 0 0 0 2.142.648c.456 0 .888-.072 1.296-.216.42-.144.798-.336 1.134-.576a3.418 3.418 0 0 0 .864-.835v1.447h1.872v-9.45h-1.872v1.45a3.118 3.118 0 0 0-.72-.82 3.2 3.2 0 0 0-1.062-.612 4.033 4.033 0 0 0-1.35-.216c-.828 0-1.578.21-2.25.63-.66.42-1.188 1.002-1.584 1.746-.384.732-.576 1.572-.576 2.52 0 .936.192 1.776.576 2.52.384.744.894 1.332 1.53 1.764Zm4.122-1.476c-.432.276-.93.414-1.494.414a2.682 2.682 0 0 1-1.476-.414 2.987 2.987 0 0 1-1.008-1.134c-.24-.492-.36-1.05-.36-1.674 0-.612.12-1.158.36-1.638.252-.48.588-.858 1.008-1.134a2.682 2.682 0 0 1 1.476-.414c.564 0 1.062.138 1.494.414.432.276.768.654 1.008 1.134.252.48.378 1.026.378 1.638 0 .624-.126 1.182-.378 1.674-.24.48-.576.858-1.008 1.134Z"
                  fill="#0F172A"
                ></path>
              </svg>
            </NavLink>

            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for people, reels....."
                required
              />
            </div>

            <div className="flex items-center ml-7">
              {isLoggedIn ? (
                <div className="flex flex-col md:flex-row items-center gap-x-5 md:gap-x-5">
                  <Tooltip title="Chat">
                    <img
                      onClick={handleLogout}
                      className="cursor-pointer"
                      type="svg"
                      height="50px"
                      width="50px"
                      src="/Message.svg"
                    />
                  </Tooltip>
                  <Tooltip title="Add Post">
                    <img
                      className="cursor-pointer"
                      type="svg"
                      height="50px"
                      width="50px"
                      src="/Add.svg"
                    />
                  </Tooltip>
                </div>
              ) : (
                <div className="hidden md:flex gap-x-5 md:gap-x-5">
                  <NavLink
                    to="/"
                    type="button"
                    className="rounded-lg inline-block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-semibold"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/signup"
                    type="button"
                    className="flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500"
                  >
                    SignUp
                  </NavLink>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
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
