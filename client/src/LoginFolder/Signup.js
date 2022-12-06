import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Signup = ({ setUser, fetchBusinessPosts }) => {
    // All of the state logic that handles the sign up fields and information
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [zipCode, setZipCode] = useState ("")
    // If you want to upload an avatar upon signup add this state:
    // const [avatar, setAvatar] = useState(null)
    // No ability to add a business profile yet. State below is for later use.
   // const [businessOwer, setBusinessOwner] = useState(false)
   
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // If you want to add an avatar you will not stringify: look up documentation
      body: JSON.stringify({ username: username, first_name: firstName, last_name: lastName, email, zip_code:zipCode, password: password}),
    }).then((res) => {
      setIsLoading(false)
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData)
          fetchBusinessPosts()
          history.push('/business_posts')
        });
      } else {
        res.json().then((err) => setErrors(err.errors))
      }
    });
  }

  const formErrorMsg = errors.map((err) => (
    <li key={err}>{err}</li>
  ))

  return (
    <div className='signup-page'>
       {/* <img id="login-img" src={} alt="" /> */}
    <form className='signup-form' onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

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

      <label htmlFor="zipCode">Zip Code</label>
      <input
        type="number"
        // Following two lines enforce an input of only integers. 
        step = "1"
        pattern= "\d+"
        id="zipCode"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />

      {/* <label htmlFor="avatar">Avatar</label>
      <input
        type="file"
        accept="image/*"
        id="image"
        value={avatar}
        onChange={(e) => setAvatar(e.target.files[0])}
      /> */}
{/* 
      No input yet for a business owner, but if adding later :  */}
      {/* <label htmlFor="businessOwner">Business Owner</label>
      <input
        type=""
        id="business_owner"
        value={businessOwner}
        onChange={(e) => setBusinessOwner(e.target.value)}
      /> */}

      <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
    </form>

    <ul>{formErrorMsg}</ul>

    </div>
  )
}

export default Signup