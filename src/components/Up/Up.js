import React, { Component } from "react";
import up from "./up.svg";

export default function Up() {
    return (
        <div className="btn-up" onClick={()=>window.scrollTo({ top: "0", behavior: "smooth" })} id="up">
            <img src={up} style={{ width: "48px", height: "48px", objectFit: "contain" }} />
        </div>

    );
}