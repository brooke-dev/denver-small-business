import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ setUser, fetchBusinessPosts }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
  
    //submit login form
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true)
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ username: username, password: password }),
        body: JSON.stringify({ username: username, password: password}),
      }).then((res) => {
        setIsLoading(false)
        if (res.ok) {
            res.json().then((userData) => {
            setUser(userData)
            fetchBusinessPosts();
            history.push('/business_posts')
          })
        }else{
          res.json().then((err) => setErrors(err.errors))
        }
      });
    }

    const formErrorMsg = errors.map((err) => (
      <li key={err}>{err}</li>
    ))
  
  return (
    <div className='login-page'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
      </form>

    <ul>{formErrorMsg}</ul>
    </div>
   )
}

export default Login