import React, { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <>
        {window.location.pathname !== "/" && <Navbar />}
        <div className="Auth-form-container" >
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Register
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="button mt-3">
                <button type="submit" className="btn btn-outline-success  btn-lg">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <Link to="#">password?</Link>
              </p>
            </div>
          </form>
        </div>
      </>
    )
  }

  return (
    <>
      {window.location.pathname !== "/" && <Navbar />}
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Rajesh Alachandra"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className=" button mt-3">
              <button type="submit" className="btn btn-outline-success btn-lg">
                Register
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <Link to="#">password?</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}