import React from 'react'
import Brooke_about from '../imagesFolder/Brooke_about.jpg'
import './about.css'


const About = () => {
    return (
      <div className="about-container">
      <div className='about'>
      <h1>About</h1>
      <p>
        Welcome to the Busy Bee! A community built for the person who loves to shop sustainably, and locally. Small businesses struggle by the day to promote themselves on all of the various social media platforms! This application is meant to reduce the needs of both the business and the consumer. A consumer is able to search and sort through the list of small businesses, so that they can review, and favorite their local business. This application uses seeded data from real small businesses in the Denver/Boulder area. They are loved by many!
      </p>
      
      <h2>Application Coding Details</h2>
      <p>
          This application was built with React v18, MDB Bootstrap, and Ruby on Rails for the back end database. AWS (Amazon Web Services) is used as an outside storage for image uploads as well. 
      </p>
  
      <h2>About the Creator</h2>
      <p>
       Brooke Ross has completed her 15 week, extremely rigorous online program. While attending Flatiron School, she attended classes online, Monday through Friday from 9am-5pm starting August 29th 2022. She graduated December 9th, with a certificate in full stack Software Engineering and over 500 hours of documented credit hours. Through this program and its many challenges she has been learning to code with Ruby on Rails (backend), and React and JavaScript (frontend). 
      </p>
      <h3>Connect with Brooke below</h3>
          
      <div className="about-photos">
        <div className="about-information"> 
            <img src= {Brooke_about} alt="Brooke"/>
            <a href="https://www.linkedin.com/in/brooke-ross-se/" target="_blank" >Brooke <i className="fa-brands fa-linkedin" /></a> 
            <p>Brooke loves to shop at the Boulder Farmer Market during the summer! Her newest passion is small house plants, and she has many recommendations for where to find them in the Denver-Boulder area! </p>
        </div>          
      </div>
    </div>
  </div>
    )
  }
  
  export default About