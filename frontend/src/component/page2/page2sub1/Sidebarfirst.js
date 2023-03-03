import React from "react";
import { NavLink } from "react-router-dom";

import "./bollysub1style.css";


function Bollysub(props){
    return(
            <>     
            
                <div className="bollyPart">  
                <>
                    <div className="subpost" >
                        <div className="imagepart1" ><img src={props.bollyNews.photo1} alt="Imageshow"/></div>

                        <div className="contentpart">    
                            <NavLink className="bollywood" to={`/article/${props.bollyNews._id}`}>
                                <h4 className="postHeading">{props.bollyNews.title}</h4>
                            </NavLink>
                            <p className="postDescrip2">{props.bollyNews.decription}</p>
                            <span className="postThumbnail">{props.bollyNews.categories[0].charAt(0).toUpperCase()+props.bollyNews.categories[0].slice(1)}</span>
                            <span className="date" >
                                <code>   </code>/<code>   </code>{props.bollyNews.date}
                            </span>
                        </div>
                    </div>

                    <hr></hr>
                </>
                </div>
            </>
    )
}

export default Bollysub;