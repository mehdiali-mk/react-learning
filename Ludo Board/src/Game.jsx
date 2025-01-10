import Player from "./Player";
import "./Game.css"

export default function Game() {

    const titleTextArray = ["Blue", "Red", "Green", "Yellow"]

    return (
        <div className="game">
            <Player titleText={titleTextArray[0]} borderColor={titleTextArray[0].toLocaleLowerCase()}/>
            <Player titleText={titleTextArray[1]} borderColor={titleTextArray[1].toLocaleLowerCase()}/>
            <Player titleText={titleTextArray[2]} borderColor={titleTextArray[2].toLocaleLowerCase()}/>
            <Player titleText={titleTextArray[3]} borderColor={titleTextArray[3].toLocaleLowerCase()}/>
        </div>
    )
}