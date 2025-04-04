import React, { useEffect, useState } from 'react'
import './loginstyle.css'
import { useNavigate } from 'react-router-dom'

// ################################# firebase
import { app } from '../../firebase'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



const auth = getAuth(app)
// ################################# firebase


import { toast } from 'react-toastify';

const Login = () => {


  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = () => {
    console.log(email, password)
    if (email == "" || password == "") {
      toast.success("fild is empty")
    }
    else {
      signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log(value)
        toast.success("Login Sucessful")
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        toast.error("User not Found")
      }
      )
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //setUser(currentUser);
      if (currentUser) {
        console.log("User Name:", currentUser.displayName);
      }
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);


  return (
    <>

      <div className="login_form m-auto mt-5">
        <form onSubmit={(e) => e.preventDefault()}>
          <p className='fs-3 fw-bold text-black'>Log In</p>

          <div className="input_box">
            <label className='fs-6' htmlFor="email">Email</label>
            <input className='form-control' type="email" id="email" placeholder="Enter email address" autoFocus required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input_box">
            <div className="password_title">
              <label className='fs-6' htmlFor="password">Password</label>
              <a className='fw-bold text-success' href="#">Forgot Password?</a>
            </div>

            <input className='form-control' type="password" id="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button className='login_btn mt-3 fs-6' type="submit" onClick={login}>Log In</button>

          <p className="separator">
            <span className='fs-6' style={{backgroundColor:"gray"}}>or</span>
          </p>


          <div className="login_option">
            <div className="option">
              <a href="#">
                <img src="/login/google.png" alt="Google" />
                <span>Google</span>
              </a>
            </div>

            <div className="option">
              <a href="#">
                <img src='/login/apple.png' alt="Apple" />
                <span>Apple</span>
              </a>
            </div>
          </div>

          <p className="login">Don't have an account? <a className='fs-6 fw-bold text-white' onClick={() => navigate("/signup")}>Sign up</a></p>
        </form>
      </div>
    </>
  )
}

export default Login
