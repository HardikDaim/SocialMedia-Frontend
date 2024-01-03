import React from "react";
import Home from "./screens/home";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import Login from "./screens/login";
import Signup from "./screens/signup";
import About from "./screens/about";
import Services from "./screens/services";
import Contact from "./screens/contact";
import Profile from "./screens/profile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/home"
            element={isAuth ? <Home /> : <Navigate to="/" />}
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            path="/profile/:userId"
            element={isAuth ? <Profile /> : <Navigate to="/" />}
          />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
