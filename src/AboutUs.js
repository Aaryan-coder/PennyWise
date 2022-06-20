import React from 'react';
import Navbar from './Navbar';
import Abouts from './About.jpg';
import About from './About';
import Teams from './Team.jpg';
import Content from './Content';
import Team from './Team';
import Footer from './Footer';
function AboutUs(){
    return(
        <div>
            <Navbar />
            <div className = "container3">
            <img src = {Abouts} alt = " " className='finance2'/>
              <div className = "centered2">
            <h1>One stop sloution for all your financial problem</h1>
        </div>
            </div>
            <h2 className='goal' style = {{textAlign:"center"}}>Our Story</h2>
            <hr className = "storyLine"/>
            <img src = {Teams} alt = " " className = "teamImg"/>
            <p style = {{fontSize:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu nulla, venenatis non tellus cursus, interdum condimentum libero. Vestibulum pharetra risus a venenatis condimentum. Morbi dignissim vulputate justo. Aenean eget egestas urna. Nunc eu ante posuere, vulputate justo vitae, ullamcorper magna. Pellentesque vitae justo quis nunc tempus dignissim a non diam. Pellentesque nisi quam, congue in ullamcorper sit amet, pulvinar id urna.

Nullam et quam convallis sapien auctor tempor vitae a urna. Maecenas sed convallis lacus. Donec porttitor fringilla sem, tincidunt condimentum risus. Aliquam quis turpis semper mauris malesuada congue. Suspendisse potenti. Donec at neque semper, efficitur nulla ac, tristique neque. Proin sed nunc tempor, rutrum ex sit amet, dapibus ante. Sed maximus finibus sapien in dapibus.</p>
       <br />
       <Content />
       <br />
       <About />
       <br/>
       <br />
       <br />
       <Footer />
        </div>
    )
}

export default AboutUs;