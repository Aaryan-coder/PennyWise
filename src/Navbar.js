import React from 'react';

import {Link} from "react-router-dom"
import PennyWise from "./PennyWise.jpeg";
function Navbar(){
    return(
        <div className = "body">
            <ul className = "navbar">
                <img className = "right" src = {PennyWise} alt = " "/>
                <Link className = "underline" to = "/about">
                <li>About us</li>
                </Link>
                <Link className = "underline" to = "/getinvolved">
                <li>Get involved</li>
                </Link>
                <Link className = "underline" to = "/coreprogram">
                <li>Core Program</li>
                </Link>
                <Link className = "underline" to = "/resources">
                <li>Resources</li>
                </Link>
            </ul>
        </div>
      
    )

}
export default Navbar;

