import React from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import frame from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";
const Form = ({ heading, desc1, desc2, formType, setIsLoggedIn, setImage }) => {
  return (
    <div className="flex justify-evenly  h-[full] mt-10 w-[11/12] w-max-[1160px]">
      <div>
        <div className=" w-[450px]">
          <div>
            <h1 className="text-white font-[550px] text-[30px]">{heading}</h1>
          </div>
          <div className="mt-2">
            <p className="text-gray-50 text-sm">{desc1}</p>
            <p className=" italic text-cyan-400 text-sm">{desc2}</p>
          </div>
          {/* Defining the form here */}
          {formType === "LogIn" ? (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <SignUpForm setIsLoggedIn={setIsLoggedIn} />
          )}
          <div className="mt-5 flex h-[1px] w-full justify-evenly gap-2">
            <div className="w-full bg-gray-800"></div>
            <p className="text-xs text-gray-800 text-start">OR</p>
            <div className=" w-full bg-gray-800"></div>
          </div>
          <button className=" mt-10 flex items-center justify-center px-5 py-1 rounded-md w-[450px] border gap-1 border-gray-800">
            <FcGoogle />
            <p className="text-gray-50  text-sm">Sign in with Google</p>
          </button>
        </div>
      </div>
      <div>
        <div className="relative mt-5 w-full w-max-[480px]">
          <img
            src={frame}
            alt="frame"
            loading="lazy"
            height={300}
            width={400}
          />
          <img
            src={setImage}
            alt="signup"
            loading="lazy"
            height={300}
            width={400}
            className="absolute  right-2 bottom-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
