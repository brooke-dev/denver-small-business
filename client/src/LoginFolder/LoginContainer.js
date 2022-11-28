import React, {useState} from 'react'
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const LoginContainer = ({fetchBusinessPosts, setUser}) => {
    const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-container">
         {showLogin ? (
            <div>
                {/* <video id="background-video" src={VideoName} autoPlay loop muted /> */}
                <div className="loginBlur">
                    <Login setUser={setUser} fetchBusinessPosts={fetchBusinessPosts}/>
                    <p>Don't have an account?</p>
                    <Link to='/signup'>
                        <button onClick={() => setShowLogin(false)}>Sign Up!</button>
                    </Link>
                </div>
            </div>
        ) : (
            <div>
                {/* <video id="background-video" src={VideoBackground} autoPlay loop muted /> */}
                <div className="loginBlur">
                    <Signup setUser={setUser} fetchBusinessPosts={fetchBusinessPosts}/>
                    <p>Have an account?</p>
                    <Link to='/login'>
                        <button onClick={() => setShowLogin(true)}>Login!</button>
                    </Link>
                </div>
            </div>
        )}
    </div>
  )
}

export default LoginContainer