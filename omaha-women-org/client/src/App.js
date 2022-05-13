import * as React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Events from "./routes/events";
import RegistrationContainer from "./routes/RegistrationContainer";
import AdminDashboard from "./routes/AdminDashboard";
import "./Styles/index.css";
import "./Styles/bootstrap.css";
import LoginPage from "./Components/loginForm";
import Home from "./routes/Home";
import useSessionStorage from "./hooks/useSessionStorage";
import EventRegistrationContainer from "./routes/EventRegister";

export default function App() {
  const [isAuthenticated, toggleAuthenticationFlag] = useSessionStorage("isAuthenticated");
  const [user, setUser] = useSessionStorage("user");
 

  const handleLogout = e => {
    e.preventDefault();
    toggleAuthenticationFlag(false);
    setUser(null);
    window.location = window.location.origin + '/login';
  }

  if (isAuthenticated && user) {
    return (
      <div className="app-container">
        <BrowserRouter>
          <Header user={user} handleLogout={handleLogout}>
            <li className="nav-item" name="home">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item" name="events">
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
            { user.User_Role === "Admin" && <li className="nav-item">
              <Link to="/admin" className="nav-link" name="dashboard">
                Dashboard
              </Link>
            </li> }
          </Header>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="events/registerEvent" element={<EventRegistrationContainer user={user}/>} />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </div>
    );
  }

  return (
    <div className="app-container">
      <BrowserRouter>
        <Header>
          <li className="nav-item" name="home">
            <Link to="/home" defaultChecked className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item" name="events">
            <Link to="/events" className="nav-link">
              Events
            </Link>
          </li>
          <li className="nav-item" name="register">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item" name="login">
            <Link to="/login" className="nav-link">
              Sign In
            </Link>
          </li>
        </Header>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="home" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route
            path="login"
            element={
              <LoginPage
                toggleAuthenticationFlag={toggleAuthenticationFlag}
                setUser={setUser}
              />
            }
          />
          <Route path="register" element={<RegistrationContainer />} />
          <Route path="events/registerEvent" element={<EventRegistrationContainer user={user}/>} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}
