import React, { Component } from "react";
import avatar from "./АВА.jpg";
export default function Biography() {
    return (
        <div className="wrap">
            <h1 className="gan" id="biography">Биография</h1>
            <table>
                <tbody>
                    <tr>
                        <td><img src={avatar} style={{ height: "308px", borderRadius: "244.5px", width: "308px", objectFit: "cover", marginTop: "50px", marginLeft: "10%" }} /></td>
                        <td><p className="bio">Четыре года назад я начинал с фотографий обычных прохожих в своем городе. Сегодня я представляю свою фото-студию "LFS Photography"</p></td>
                    </tr>
                    <tr>
                        <td><p className="hu">Лев<br />г. Ярославль, Москва</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}