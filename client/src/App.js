import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom'

// Components
import LoginContainer from './LoginFolder/LoginContainer.js'
import NavBar from './NavBarFolder/NavBar'
import About from './NavBarFolder/About'
import Home from './NavBarFolder/Home'
import UserProfile from './NavBarFolder/UserProfile'

function App() {
  const [businessPosts, setBusinessPosts] = useState([])
  const [errors, setErrors] = useState ([])
  const [user, setUser] = useState(null)

  // Auto-login if user_id is in session: fetches businessPosts
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData)
          fetchBusinessPosts();
        });
      }
    });

  }, []);

  // Fetch request for business posts allowing for a user to fetch once when logged in!
  const fetchBusinessPosts = () => {
    fetch (`/business_posts`)
    .then(res => {
      if (res.ok){
        res.json().then(setBusinessPosts)
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  // console.log(businessPosts)

  // console.log(user)

  // Login/signup logic below: 
  if (!user) return <LoginContainer fetchBusinessPosts={fetchBusinessPosts} setUser={setUser} />

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>
        <Route exact path="/">
          <Home 
            // user={user}
            businessPosts={businessPosts}
            user_id={user.id}
            errors={errors}
          />
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/userProfile">
          <UserProfile
            user={user}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
