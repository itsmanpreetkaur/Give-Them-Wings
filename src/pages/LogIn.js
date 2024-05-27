import React from 'react';
import Form from '../components/Form';
import login from "../assets/login.png";
const LogIn = ({setIsLoggedIn}) => {
  return (
    <div>
      <Form
      heading = "Welcome Back"
      desc1 = "Build skills for today, tomorrow, and beyond."
      desc2 = "Education for future-proof your carrer."
      formType = "LogIn"
      setIsLoggedIn = {setIsLoggedIn}
      setImage={login}
       />
    </div>
  )
}

export default LogIn
