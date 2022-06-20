import React from 'react';
import Bitcoin from './Bitcoin.jpg'
import Bitcoin2 from './Bitcoin2.jpg'
import Bitcoin3 from './Bitcoin3.jpg'
import Theme from './Theme.jpg'
function Content(){
    return(
        <div className = "container5">
            <h2 style = {{textAlign: "center",marginTop:"100px",position: "absolute",marginLeft: "650px"}} className='goal'>Core Values</h2>
       <hr style = {{textAlign: "center",marginTop:"150px",position: "absolute",marginLeft: "680px"}} className = "storyLine"/>
       <br />
            <img src = {Theme} className='team2' alt = " " />
            <div className = "allign">
            <Card1 />
            <Card2 />
            <Card3 />
        </div>
        <br />
        <br />
        <br />
        </div>
    )
}
function Card1(){
    return(
        <div>
        <div className = "card" >
            <h1>Economic literacy</h1>
            <img style = {{marginLeft:"7px"}} src = {Bitcoin} alt = " " className = "bitcoin"/>
            <p className = "content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <br />
            <button className = "hover" style = {{padding: "8px", borderRadius: "12px",fontSize: "24px",textAlign: "center",marginLeft: "-20px",cursor: "pointer"}}>Click Me</button>
        </div>
        <br />
        </div>
    )
}

function Card2(){
    return(
        <div>
        <div className = "card" >
            <h1>Asset-building</h1>
            <img style = {{marginLeft:"7px"}} src = {Bitcoin2} alt = " " className = "bitcoin"/>
            <p className = "content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <br />
            <button className = "hover" style = {{  padding: "8px", borderRadius: "12px",fontSize: "24px",textAlign: "center",marginLeft: "-20px",cursor: "pointer"}}>Click Me</button>
        </div>
        <br />
        </div>
    )
}

function Card3(){
    return(
        <div>
        <div className = "card" >
            <h1>Enterpreneurship</h1>
            <img style = {{marginLeft:"7px"}} src = {Bitcoin3} alt = " " className = "bitcoin"/>
            <p className = "content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <br />
            <button className = "hover" style = {{  padding: "8px", borderRadius: "12px",fontSize: "24px",textAlign: "center",marginLeft: "-20px",cursor: "pointer"}}>Click Me</button>
        </div>
        <br />
        </div>
    )
}

function Card4(){
    return(
        <div>
        <div className = "card" >
            <h1>Enterpreneurship</h1>
            <img style = {{marginLeft:"7px"}} src = {Bitcoin3} alt = " " className = "bitcoin"/>
            <p className = "content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <br />
            <button className = "hover" style = {{  padding: "8px", borderRadius: "12px",fontSize: "24px",textAlign: "center",marginLeft: "-20px",cursor: "pointer"}}>Click Me</button>
        </div>
        <br />
        </div>
    )
}
export default Content;
