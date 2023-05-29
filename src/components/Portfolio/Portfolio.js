import React, { Component } from "react";
import Anna from "./Anna.jpg";
import iam from "./i am.jpg";
import anastasia from "./anastasia.jpg";
import alex from "./alex.jpg";
import anastLight from "./anast light.jpg";
import anya from "./anya.jpg";
import Georg from "./Georg.jpg";
import anyaHand from "./anya hand.jpg";
import holm from "./holm.jpg";
import maria from "./Maria.jpg";

export default function Portfolio() {
    return (
        <div className="gallery-wrap">
        <img src={Anna} style={{width: "50%"}}/>
        <div className="me-wrap">
            <h1 className="gan gan-remastered" id="portfolio">Портфолио</h1>
            <img src={iam} style={{width: "100%"}}/>
        </div>
        <img src={anastasia} style={{width: "100%"}}/>
        <img src={alex} style={{width: "calc(100%/3)"}}/>
        <img src={anastLight} style={{width: "calc(100%/3)"}}/>
        <img src={anya} style={{width: "calc(100%/3)" }}/>
        
        <div className="gosha">
<img src={Georg} style={{width: "100%"}}/>
<img src={anyaHand} style={{width: "100%"}}/>
        </div>
        <img src={maria} style={{width: "70%"}}/>
        <img src={holm} style={{width: "100%"}}/>
        

    </div>
    );
}