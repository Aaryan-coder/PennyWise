import React from 'react';
import Text from './Text.jpg';
const member = [
    {
        img: "http://cdn.onlinewebfonts.com/svg/img_141364.svg",
        name: "Aaryan"
    },
    
    {
        img: "http://cdn.onlinewebfonts.com/svg/img_141364.svg",
        name: "Nimish"
    },
    {
        img: "http://cdn.onlinewebfonts.com/svg/img_141364.svg",
        name: "HariSai"
    }

]

function About(){
    return(
        <div className = "container4" >
            <h2 className='goal' style = {{position:"absolute",marginLeft:"500px"}}>The pillars of our company</h2> 
            <hr style = {{textAlign: "center",marginTop:"90px",position: "absolute",marginLeft: "620px",width:"250px"}} className='storyLine'/>
        
        <img className = "team" src = {Text} alt = " "   />
        <div className = "centerteam">
            <div style = {{marginTop: "1300px"}}>
        <div className = "aboutallign">
           { member.map((x)=>{
    return(
        <Names  name = {x.name} img = {x.img} />
    )
})}
        </div>
        </div>
        </div>
        </div>
    )
}

function Names(props){
return(
    <div style = {{padding:"50px",marginLeft:"-30px"}}>
    <img style = {{marginTop:"30px"}} className = "name"  src = {props.img} alt = " " height = "100px" />
    <h1>{props.name}</h1>
    </div>

)
}



export default About;