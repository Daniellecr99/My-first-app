import React, {Component} from "react";
import Header from "../Components/Header";



class profile extends Component {
    render () {
        return(
<div>
<Header/>
<h1 style={{color:"blue", fontSize: "40 px"}}> This is my profile</h1>

<ul>
    <li style={{color:"orange", fontSize: "80 px", textAlign: "center"}}>Oranges</li>
    <li style={{color:"purple", fontSize: "60 px", textAlign: "center"}}>Grapes</li>
    <li style={{color:"red", fontSize: "40 px", textAlign: "center"}}>Apples</li>
    <li style={{color:"green", fontSize: "20 px", textAlign: "center"}}>Kiwi</li>
</ul>
</div>


)}
}


export default profile; 