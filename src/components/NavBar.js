import React from "react";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast";
const NavBar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  function changeHandler()
  {
    setIsLoggedIn(false);
    toast.success('Logout');
  }
  return (
    <div className="flex justify-between">
      <div>
        <Link to="/">Give them wings</Link>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {
        <div className="flex gap-4">
          {!isLoggedIn && (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <button onClick={changeHandler}>Logout</button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashboard">
              <button>Dashboard</button>
            </Link>
          )}
        </div>
      }
    </div>
  );
};

export default NavBar;
