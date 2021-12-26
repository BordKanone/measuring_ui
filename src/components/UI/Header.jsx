import React from "react";
import classes from "./Header.module.css"

export default function Header({ sender, messageDate, area }){
    return(
        <div className={classes.header_info}>
            <div>
                <p>Отправитель :</p>
                <p>
                    {sender.name}
                </p>
                <p>
                    {sender.code}
                </p>
            </div>
            <div>
                <p>Дата получения :</p>
                <p>
                    {messageDate.datetime}
                </p>
                <p>
                    {messageDate.day}
                </p>
            </div>
            <div>
                <p>Область : </p>
                <p>
                    {area.name}
                </p>
                <p>
                    {area.inn}
                </p>
            </div>
        </div>
    )
}