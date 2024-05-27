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
    <form onSubmit={submitHandler} >
      <div className=" text-gray-300 mt-4 text-sm">
        <label htmlFor="email">
          Email Address <sup className="text-pink-300">*</sup>{" "}
        </label> <br />
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
      <div className=" text-gray-300 mt-4 text-sm relative">
        <label htmlFor="password">
          Password <sup className="text-pink-300">*</sup>
        </label> <br />
        <input
          required
          name="password"
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          onChange={changeHandler}
          value={formData.password}
          className="w-full  border rounded px-2 py-1 border-gray-800 bg-gray-800 mt-1"
        />
        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-8 cursor-pointer">
          {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
        </span>
        <span className="text-cyan-400 text-[10px] flex justify-end">Forget Password</span>
      </div>
      <div className="bg-yellow-400 mt-4 flex justify-center px-5 py-1 rounded-md w-[450px] border gap-1 border-gray-800">
        <button className="text-sm font-bold ">Sign In</button>
      </div>
    </form>
  );
};

export default LoginForm;
