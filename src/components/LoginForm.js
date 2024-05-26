import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const LoginForm = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function changeHandler(event) {
    setFormData((prevFromData) => ({
      ...prevFromData,
      [event.target.name]: event.target.value,
    }));
  }
  console.log(formData);
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">
          Email Address <sup>*</sup>{" "}
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          onChange={changeHandler}
          value={formData.email}
        />
      </div>
      <div>
        <label htmlFor="password">
          Password <sup>*</sup>
        </label>
        <input
          required
          name="password"
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          onChange={changeHandler}
          value={formData.password}
        />
        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
        </span>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
