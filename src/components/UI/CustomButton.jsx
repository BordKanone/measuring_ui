import React from "react";
import classes from './CustomButton.module.css'

export default function CustomButton({children, ...props}) {
    return(
        <button {...props} className={classes.btn} >{children}</button>
    )
}