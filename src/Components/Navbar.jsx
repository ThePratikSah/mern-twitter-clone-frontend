import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserStore from "../Store";

function Navbar() {
  const { userData, setUserData } = useContext(UserStore);

  const signOut = () => {
    setUserData({
      ...userData,
      auth: false,
    });
    localStorage.removeItem("token");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Tweety
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {userData.auth ? (
              <>
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
                <Link onClick={signOut} className="nav-link" to="/">
                  Sign Out
                </Link>
              </>
            ) : (
              <Link className="nav-link" to="/login">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
