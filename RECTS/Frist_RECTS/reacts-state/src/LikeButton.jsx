import { useState } from "react";

export default function LikeButton(){
    let[isliked,setIsliked]=useState(false);
    
    let toggleLike=()=>{
        setIsliked(!isliked)
        console.log(toggleLike)
    }
    let likedstyle={color:"red"}
    
    /* let clicked=()=>{
        console.log("Clicked")
    } */
    return (<>
        <div>
            <p onClick={toggleLike}>{
                isliked?(<i className="fa-solid fa-heart" style={likedstyle}></i>):<i className="fa-regular fa-heart" ></i>
            }</p>
        </div>
    
        </>
        );
}