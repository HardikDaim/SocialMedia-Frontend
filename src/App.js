import React, { useEffect, useState } from "react";
import Home from "./screens/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TransitionRoutes from "./TransitionRoutes";
import Login from "./screens/login";
import Signup from "./screens/signup";
import About from "./screens/about";
import Services from "./screens/services";
import Contact from "./screens/contact";
import Profile from "./screens/profile";
import NotFound from "./screens/notFound";
import { useSelector } from "react-redux";
import NewPost from "./components/newPost";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Search from "./components/search";

function App() {
  const isLoggedIn = useSelector((state) => state.token !== null);
  const [locationKey, setLocationKey] = useState(null);
  

  useEffect(() => {
    setLocationKey(Date.now());
  }, [window.location.pathname]);

  return (
    <Router>
      <ToastContainer />
      <TransitionRoutes key={locationKey}>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/profile/:userId"
            element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/newPost" element={<NewPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TransitionRoutes>
    </Router>
  );
}

export default App;
