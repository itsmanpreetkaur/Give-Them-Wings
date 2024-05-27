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
    <div className="flex justify-evenly py-3 gap-3">
      <div>
        <Link to="/" className="text-white">Give them wings</Link>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">Contact</Link>
          </li>
        </ul>
      </div>
      {
        <div className="flex gap-4 ">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="text-white  border border-gray-950 bg-gray-900 px-2 rounded">Login</button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup">
              <button className="text-white  border px-2 rounded  border-gray-950 bg-gray-900">Signup</button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <button onClick={changeHandler} className="text-white border px-2 rounded  border-gray-950 bg-gray-900">Logout</button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="text-white border px-2 rounded  border-gray-950 bg-gray-900">Dashboard</button>
            </Link>
          )}
        </div>
      }
    </div>
  );
};

export default NavBar;
