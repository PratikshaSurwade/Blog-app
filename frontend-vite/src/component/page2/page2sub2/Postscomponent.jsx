import React from "react";
import "./postsstyle.css"
import Subpost from "./Subpost.jsx";
import Mainpost from "./Toppost.jsx"


function Posts(props) {
    return (
        <>
            <div className="postContainer">

                {props.topmainpost.map((item) => (
                    <Mainpost key={item.id} postDetails={item} />
                ))}

                {props.conTaint.map((item) => (
                    <Subpost key={item.id} postDetails={item} />
                ))}
            </div>
        </>
    )
}

export default Posts