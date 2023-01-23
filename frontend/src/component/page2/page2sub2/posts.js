import React from "react";
import "./posts.css"
import Subpost from "./subpost.js";
import Mainpost from "./Toppost.js"


function Posts(props) {
    console.log("props from home",props)
    return(
        <>
        <div className="postContainer">
            {/* <Mainpost /> */}
            
            {props.topmainpost.map((item)=>(
                <Mainpost key={item.id} postDetails={item} />
            ))}
           
            {props.conTaint.map((item)=>(
                <Subpost key={item.id} postDetails={item} />
            ))}
            </div>    
        </>
    )
}

export default Posts