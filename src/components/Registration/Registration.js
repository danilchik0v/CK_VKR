import React, { Component } from "react";
import petr from "./petr.jpg";

export default function Registration(props) {

    let opener = props.opener;

    return (
        <div className="zapic">
            <img src={petr} style={{ width: "50%" }} />
            <div>
                <h1 className="gan gan-rem2" id="enroll" ref={props.innerRef}>Как записаться?</h1>
                <h3 className="сonnection">Заполните следующие поля для связи:</h3>
                <div className="form__group">
                    <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
                    <label htmlFor="name" className="form__label">Имя</label>
                </div>
                <br />
                <div className="form__group">
                    <input type="input" className="form__field" placeholder="Phone" name="phone" id='phone' required />
                    <label htmlFor="phone" className="form__label">Номер телефона</label>
                </div>
                <br /> <br />
                <button className="button" onClick={opener}>Отправить</button>
            </div>
        </div>
    );
}