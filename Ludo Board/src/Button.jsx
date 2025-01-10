import { useState } from "react";
import "./Button.css"

export default function Button({borderColor, update}) {
    const styles={borderColor: borderColor};

    return (
        <div className="button" style={styles} onClick={update} >1+</div>
    )   
}