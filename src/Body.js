import React from 'react';
import Finance from "./Finance.jpg";
function Body(){
    return(
    <div>
        <div className = "container">
        <img className = "finance" src = {Finance} alt = " " />
        <div className = "centered">
            <h1>All about Finances</h1>
            <input type = "button" value = "Know more" className='click'/>
        </div>
        </div>
        <h2 className = "goal">Our Goal</h2>
        <hr className = "goalLine"/>
        <p className = "para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
    </div>
    )
}

export default Body;