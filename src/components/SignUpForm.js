import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const SignUpForm = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });
  function changeHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Account created");
    navigate("/dashboard");
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <button>Student</button>
          <button>Instructor</button>
        </div>
        <div>
          <div>
            <label htmlFor="firstName">
              First Name <sup>*</sup>
            </label>
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">
              Last Name<sup>*</sup>
            </label>
            <input
              required
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">
            Email Address<sup>*</sup>
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
          <div>
            <label htmlFor="createPassword">
              Create Password<sup>*</sup>
            </label>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="createPassword"
              id="createPassword"
              placeholder="Create Password"
              onChange={changeHandler}
              value={formData.createPassword}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </div>
          <div>
            <label htmlFor="confirmPassword">
              Confirm Password<sup>*</sup>
            </label>
            <input
              required
              type={showPass ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
            />
            <span onClick={() => setShowPass(!showPass)}>
              {showPass ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </div>
        </div>
        <div>
          <button>
            <p>Create Account</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
