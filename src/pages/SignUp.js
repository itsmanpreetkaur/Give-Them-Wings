import React from 'react';
import Form from '../components/Form';
import Signup from "../assets/signup.png";
const SignUp = ({setIsLoggedIn}) => {
  return (
    <div>
       <Form
      heading = "Join the millions learning to code with Give Them Wings for free"
      desc1 = "Build skills for today, tomorrow, and beyond."
      desc2 = "Education for future-proof your carrer."
      formType= "signUp"
      setIsLoggedIn = {setIsLoggedIn}
      setImage={Signup}
       />
    </div>
  )
}

export default SignUp
