import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai'
import PennyWise from "./PennyWise.jpeg";
function Footer(){
    return(
        <div>
        <div style = {{display: "flex"}}>
        <div style={{textAlign:"left"}}>
            <h1 style = {{fontSize: "30px",marginLeft: "100px"}}>Contact Us </h1>
             <div style = {{display : "flex"}} >
                <BsFillTelephoneFill style = {{paddingRight: "10px",fontSize: "20px",marginLeft: "100px"}} /> 
                <h3 style = {{marginTop: "-2px"}}>+91 1234567890</h3>
                </div>
                 <div style = {{ display : "flex"}} >
                <AiOutlineMail style = {{paddingRight: "10px",fontSize: "30px",marginLeft: "100px"}} />
                 <h3 style = {{marginTop: "2px"}}>abc@gmail.com</h3>
            </div>
            <br />
            <div style = {{cursor: "pointer"}} >
            <BsInstagram style = {{paddingRight: "30px",fontSize: "20px",marginLeft:"100px",color:"blue"}} />
            <GrFacebook style = {{paddingRight: "30px",fontSize: "20px",color:"blue"}} />
            <FaTwitter style = {{paddingRight: "30px",fontSize: "20px",color:"blue"}} />
            <BsLinkedin style = {{paddingRight: "30px",fontSize: "20px",color:"blue"}} />
            </div>
            <br />
        </div>
        <div className = "left">
        <h1 className = "quick">Quick Links</h1>
        <br />
        <ul className = "link">
            <li className = "top">About us</li>
            <li>Invite Us for Workshop</li>
            <li>Bridging Gaps Program</li>
            <li>Volunteer With Us</li>
            <li>Collaborate with Us</li>
            <li>Connect With Us</li>
        </ul>
        </div>
        <div className = "letter" >
            <h1 className = "news">Subscribe to our Newsletter</h1>
            <input type = "text" placeholder="Name" className = "letter1" style = {{height:"30px"}} /><br />
            <br />
            <br />
            <input type = "text" placeholder = "Email" className = "letter2" style = {{height:"30px"}} /><br />
            <br />
            <br />
            <input  type = "button" value = "Subscribe" className = "letter3"  /><br />
        </div>
        </div>
        <br />
        <br />
        <h4 style = {{marginLeft:"0px",backgroundColor:"lightblue",padding:"10px",marginBottom: "0px"}}>Copyright © 2022 PennyWise Foundation</h4>
        </div>
    )
}

export default Footer;