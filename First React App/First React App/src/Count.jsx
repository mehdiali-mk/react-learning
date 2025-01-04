import { useState } from "react"
import "./Count.css"

export default function Count() {
    
    let [count, setCount] = useState(0);
    let [isLiked, setIsLiked] = useState(false);


    function increaseCount() {
        setCount(count + 1);
    }

    function toggleLiked() {
        setIsLiked(!isLiked)
        if (isLiked == false) {
            increaseCount();
        }
    }
    
    const redColorStyle = {color: "red"};

    return (
        <div className="counter">
            <div className="count">Count = {count}</div>
            <div className="like-button" onClick={toggleLiked}>
                {isLiked == false ? <i class="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart" style={redColorStyle}></i> }
            </div>
        </div>

    )
}