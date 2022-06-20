import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import Cards from './Cards';
import Footer from './Footer'
import Team from './Team';
import {Route,Router,Routes} from "react-router-dom";
function Home(){
    return(
          <div>
            <Navbar />
            <Body />
            <Cards />
            <Team />
            <Footer />
        </div>
        
    )
}

export default Home;