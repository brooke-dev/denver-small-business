import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom'
// Components
import LoginContainer from './LoginFolder/LoginContainer.js'
import NavBar from './NavBarFolder/NavBar'
import About from './NavBarFolder/About'
import Home from './NavBarFolder/Home'
import UserProfile from './NavBarFolder/UserProfile'
import ReviewBusiness from './ReviewsFolder/ReviewBusiness'


function App() {
  const [businessPosts, setBusinessPosts] = useState([])
  const [errors, setErrors] = useState ([])
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")

 
  // Auto-login if user_id is in session: fetches businessPosts
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => {
          setUser(userData)
          setSearch("")
          fetchBusinessPosts();
          console.log(userData)
        });
      }
    });

  }, [setUser]);
  
  // Fetch request for business posts allowing for a user to fetch once when logged in!
  const fetchBusinessPosts = () => {
    fetch (`/business_posts`)
    .then(res => {
      if (res.ok){
        res.json().then(data => {
          setBusinessPosts(data)
        })
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  // Login/signup logic below: 
  if (!user) return <LoginContainer fetchBusinessPosts={fetchBusinessPosts} setUser={setUser} />
  
  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>

        <Route exact path="/">
          <Home 
            user={user}
            businessPosts={businessPosts}
            userId={user.id}
            errors={errors}
            setBusinessPosts={setBusinessPosts}
            setUser={setUser}
            search={search}
            setSearch={setSearch}
          />
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/reviews">
          <ReviewBusiness 
          user={user}
          setUser={setUser}
          />
        </Route>

        <Route exact path="/userProfile">
          <UserProfile
            user={user}
            setUser={setUser}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
