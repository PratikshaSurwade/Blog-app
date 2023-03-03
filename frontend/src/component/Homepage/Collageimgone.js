import React from "react";
import "./../../Styles/homepageimg.css";

import { NavLink } from "react-router-dom";

function Mainimage(props) {
    
    return (
        <>
            <div class="item">
                <img className="img1233" src={props.mainheadings.photo1} alt="Imageshow" />
                <div className="textBox">
                    <NavLink className="MainImgHeader" to={`/article/${props.mainheadings._id}`}>
                        <h5>{props.mainheadings.title}</h5>
                    </NavLink>
                    <span className="postThumbnail">{props.mainheadings.categories[0].charAt(0).toUpperCase()+props.mainheadings.categories[0].slice(1)}
                    <code>   </code>/<code>   </code>{props.mainheadings.date}</span>
                </div>
            </div>
        </>
    )

}

export default Mainimage