import React from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import frame from "../assets/frame.png";
const Form = ({ heading, desc1, desc2, formType, setIsLoggedIn, setImage }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>{heading}</h1>
          </div>
          <div>
            <p>{desc1}</p>
          </div>
          <div>
            <p>{desc2}</p>
          </div>
          {/* Defining the form here */}
          <div>
            {formType === "LogIn" ? (
              <LoginForm setIsLoggedIn={setIsLoggedIn} />
            ) : (
              <SignUpForm setIsLoggedIn={setIsLoggedIn} />
            )}
          </div>
          <div>
            <div></div>
            <p>OR</p>
            <div></div>
          </div>
          <button>
            <p>Sign in with Google</p>
          </button>
        </div>
      </div>
      <div>
        <div>
          <img
            src={frame}
            alt="frame"
            loading="lazy"
            height={404}
            width={558}
          />
          <img
            src={setImage}
            alt="signup"
            loading="lazy"
            height={404}
            width={558}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
