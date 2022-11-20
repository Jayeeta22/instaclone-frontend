import React from "react";
import "../Styles/NavHead.css"
import { Link } from "react-router-dom";

export default function NavHead(){
    return(
        <div className="Nav">
            <p className="logo"><img src={require('../Svg/instagram.png').default} alt=""/>Instaclone</p>
            <div className="Camicon"><Link to = "/uploadview" ><img className="Cam" src={require('../Svg/camera.jpg').default} alt=""/></Link></div>
        </div>
    )
}