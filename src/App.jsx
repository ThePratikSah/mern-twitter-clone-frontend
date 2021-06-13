import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Comp404 from "./Components/404";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import UserStore from "./Store";

function App() {
  const [userData, setUserData] = useState({
    auth: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUserData({
        ...userData,
        auth: false,
      });
    } else {
      // TODO: Check if the date is valid
      setUserData({
        ...userData,
        auth: true,
      });
    }
  }, []);

  return (
    <UserStore.Provider value={{ userData, setUserData }}>
      <Router>
        <Navbar />
        <div className="container my-5">
          <Switch>
            <Route exact path="/login">
              {userData.auth ? <Redirect to="/dashboard" /> : <Login />}
            </Route>
            <Route exact path="/dashboard">
              {userData.auth ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/">
              {userData.auth ? <Redirect to="/dashboard" /> : <Signup />}
            </Route>
            <Route exact path="*">
              <Comp404 />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserStore.Provider>
  );
}

export default App;
