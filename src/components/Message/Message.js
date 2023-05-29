import React, { Component } from "react";
import './Message.css';
import mail from "./mail-check-line (1).svg";
import { useEffect, useState } from "react";
export default function Message() {

    const [width, setWidth] = useState(0);


    useEffect(
        () => {

            setWidth(100)
            setTimeout(() => {
                setWidth(99)
                setTimeout(() => {
                    setWidth(0)
                }, 400)
            }, 4400)

        },
        []
    )


    return (
        <div className="Container">
            <div className="Message" style={{ width: `${width}%` }}>
                <img src={mail} style={{ opacity: width == 100 ? "1" : "0" }} />
                <span style={{ opacity: width == 100 ? "1" : "0" }}>Спасибо за обращение</span>
            </div>
        </div>
    );
}
