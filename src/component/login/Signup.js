import React from "react";
import PasswordIndicator from "./PasswordIndicator";
import { useState } from 'react';
import './signup.css';
function Signup() {
  const [ password, setPassword ] = useState('');
  const [email,setEmail]=useState('');
  const HandleForm=(e)=>{
     e.preventDefault();
     localStorage.setItem(email,password);
     setPassword('');
     setEmail('');
  }
  return (
    <div className="signup_container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={HandleForm}>
            <h2 className="title">Welcome</h2>
            <p className="heading">Log in to your account to continue</p>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password}  
              onChange={e => setPassword(e.target.value)} />
            </div>
            <a href="#" className="link">Forgot your password?</a>
            <div className="mt-3"> 
              <PasswordIndicator  password={password} />
            </div>            
            <input type="submit" value="Log in" className="btn" />
            <p className="social-text">Don't have an account ?
            <a href="#" className="social-sign">Sign up!</a>
            </p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
