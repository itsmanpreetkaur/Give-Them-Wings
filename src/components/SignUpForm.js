import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const SignUpForm = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("Student");
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
    <>
      <div className="flex bg-gray-800 w-[130px] rounded-full mt-2 h-[30px] justify-around gap-3 ">
        <button
          className={`${
            accountType === "Student"
           ? "bg-gray-900" : "bg-transparent" }
           rounded-full transition-all text-white text-xs px-2 py-2
    `}
          onClick={() => setAccountType("Student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "Instructor"
           ? "bg-gray-900 " : "bg-transparent "}
           rounded-full transition-all text-white text-xs px-2 py-2
            `}
          onClick={() => setAccountType("Instructor")}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <div className=" text-gray-300 mt-4 text-sm flex gap-2">
            <div>
              <label htmlFor="firstName">
                First Name <sup className="text-pink-300">*</sup>
              </label>
              <input
                required
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                onChange={changeHandler}
                value={formData.firstName}
                className="w-full border rounded px-2 py-1 border-gray-800 bg-gray-800 mt-1"
              />
            </div>
            <div>
              <label htmlFor="lastName">
                Last Name<sup className="text-pink-300">*</sup>
              </label>
              <input
                required
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                onChange={changeHandler}
                value={formData.lastName}
                className="w-full border rounded px-2 py-1 border-gray-800 bg-gray-800 mt-1"
              />
            </div>
          </div>
        </div>
        <div className=" text-gray-300 mt-4 text-sm">
          <label htmlFor="email">
            Email Address<sup className="text-pink-300">*</sup>
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            onChange={changeHandler}
            value={formData.email}
            className="w-full border rounded px-2 py-1 border-gray-800 bg-gray-800 mt-1"
          />
        </div>
        <div>
          <div className="text-gray-300 mt-4 text-sm relative flex gap-2">
            <div>
              {" "}
              <label htmlFor="createPassword">
                Create Password<sup className="text-pink-300">*</sup>
              </label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="createPassword"
                id="createPassword"
                placeholder="Create Password"
                onChange={changeHandler}
                value={formData.createPassword}
                className="w-full border rounded px-2 py-1 border-gray-800 bg-gray-800 mt-1"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[15rem] top-8 cursor-pointer"
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <div>
              <label htmlFor="confirmPassword">
                Confirm Password<sup className="text-pink-300">*</sup>
              </label>
              <input
                required
                type={showPass ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={changeHandler}
                value={formData.confirmPassword}
                className="w-full border rounded px-2 py-1 border-gray-800 bg-gray-800 mt-1"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-2 top-8 cursor-pointer"
              >
                {showPass ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-400 mt-6 flex justify-center px-5 py-2 rounded-md w-[450px] border gap-1 border-gray-800">
          <button className="text-sm font-bold ">Create account</button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
