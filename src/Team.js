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

function Team(){
    return(
        <div className = "container2" > 
        <img className = "team" src = {Text} alt = " "   />
        <div className = "centerteam">
          <h2 className='goal' style = {{marginTop:"-200px",marginLeft:"-70px"}}>Our Team</h2>
        <hr style = {{textAlign: "center",marginTop:"-30px", position: "absolute",marginLeft: "-50px"}} className = "goalLine"/>
        <div className = "allign3">
           { member.map((x)=>{
    return(
        <Names  name = {x.name} img = {x.img} />
    )
})}
        </div>
        </div>
        </div>
    
    )
}

function Names(props){
return(
    <div style = {{padding:"50px"}}>
    <img className = "name"  src = {props.img} alt = " " height = "100px"/>
    <h1>{props.name}</h1>
    </div>

)
}



export default Team;