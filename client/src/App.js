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
// import ReviewBusinessEdit from './ReviewsFolder/ReviewBusinessEdit'

function App() {
  const [businessPosts, setBusinessPosts] = useState([])
  const [errors, setErrors] = useState ([])
  const [user, setUser] = useState(null)

  // Refactor these states: (use just user state since all data is being held there)
  // const [updateUserProfile, setUpdateUserProfile]=([])
  // const [updateReviews, setUpdateReviews] = useState([])
  // const [updateAfterDelete, setUpdateAfterDelete] = useState(false)
  // const [updateBusinessPost, setUpdateBusinessPost] = useState([])

  


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

  }, [setUser]);
  // Refactor states
  
  // Fetch request for business posts allowing for a user to fetch once when logged in!
  const fetchBusinessPosts = () => {
    fetch (`/business_posts`)
    .then(res => {
      if (res.ok){
        res.json().then(data => {
          setBusinessPosts(data)
          // console.log(data)
        })
      } else {
        res.json().then(data => setErrors(data.error))
      }
    })
  }

  // console.log(businessPosts)
  // console.log(user)

  // Login/signup logic below: 
  if (!user) return <LoginContainer fetchBusinessPosts={fetchBusinessPosts} setUser={setUser} />
  
  // console.log(user.id)
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
          />
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/reviews">
          <ReviewBusiness 
          // reviews={user.reviews}
          user={user}
          setUser={setUser}
          // setUpdateReviews={setUpdateReviews}
          // setUpdateAfterDelete={setUpdateAfterDelete}
          />
        </Route>
{/* 
        <Route exact path="/reviews/:id">
          <ReviewBusinessEdit reviews={user.reviews}
          setUpdateReviews={setUpdateReviews}/>
        </Route> */}

        <Route exact path="/userProfile">
          <UserProfile
            user={user}
            setUser={setUser}
            // setUpdateUserProfile={setUpdateUserProfile}
            // updateUserProfile={updateUserProfile}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
