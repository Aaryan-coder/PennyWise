import React from 'react';
import Bitcoin from './Bitcoin.jpg'
import Bitcoin2 from './Bitcoin2.jpg'
import Bitcoin3 from './Bitcoin3.jpg'
function Cards(){
    return(
        <div>
        <div className = "allign2">
            <Card1 />
            <Card2 />
            <Card3 />
        </div>
        </div>
    )
}
function Card1(){
    return(
        <div>
        <div className = "card" >
            <h1>Heading1</h1>
            <img src = {Bitcoin} alt = " " className = "bitcoin"/>
            <p className = "content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <br />
            <button>Click Me</button>
        </div>
        <br />
        </div>
    )
}

function Card2(){
    return(
        <div>
        <div className = "card" >
            <h1>Heading2</h1>
            <img src = {Bitcoin2} alt = " " className = "bitcoin"/>
            <p className = "content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <br />
            <button>Click Me</button>
        </div>
        <br />
        </div>
    )
}

function Card3(){
    return(
        <div>
        <div className = "card" >
            <h1>Heading3</h1>
            <img src = {Bitcoin3} alt = " " className = "bitcoin"/>
            <p className = "content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <br />
            <button>Click Me</button>
        </div>
        <br />
        </div>
    )
}
export default Cards;
