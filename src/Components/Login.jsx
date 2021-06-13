import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserStore from "../Store";

function Login() {
  const { userData, setUserData } = useContext(UserStore);

  const [loading, setLoading] = useState(false);

  const loginHandler = async () => {
    setLoading(true);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status == 200) {
        const data = await response.json();
        const time = new Date().getTime();
        localStorage.setItem("token", data.token);
        localStorage.setItem("time", time);

        const userResponse = await fetch(
          "http://localhost:3000/profile/user-details",
          {
            method: "GET",
            headers: new Headers({
              Authorization: `Bearer ${data.token}`,
            }),
          }
        );

        const userData = await userResponse.json();

        setUserData({
          ...userData,
          auth: true,
          data: userData,
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className="shadow-sm mb-5 bg-body rounded">
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="d-flex justify-content-end">
            <span className="form-text mx-4">
              Forget password? <Link to="/reset-password">Reset here</Link>
            </span>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={loginHandler}
          >
            Login{" "}
            {loading ? (
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              ""
            )}
          </button>
          <span className="form-text mx-4">
            Don't have account? <Link to="/">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
