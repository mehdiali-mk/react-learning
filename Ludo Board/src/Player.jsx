import "./Player.css"
import Title from "./Title"
import Button from "./Button"
import { useState } from "react";


export default function Player({titleText, borderColor}) {
    const [counterObject, setCounterObject] =  useState({blue: 0, red: 0, green: 0, yellow: 0});

    function updateButton(color) {
        setCounterObject((previousCounter) => {
            return { ...previousCounter, [color]: previousCounter[color] + 1}
        })
        console.log(counterObject);
    }

    return (
        <div className="player">
            <Title titleText={titleText} fontSize={25} increment={counterObject[borderColor]}/>
            <Button borderColor={borderColor} update={() => updateButton(borderColor)} />
        </div>
    )
}