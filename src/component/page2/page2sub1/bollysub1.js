import React from "react";
import image from "./../../../images/blogimg4.png"

import "./bollysub1.css"


function Bollysub(props){
    console.log(props);
        return(
            <>     
            <div className="bollywood">
                <div>  
                            {props.bollyNews.map((item)=>(
                                <>
                                    <div className="subpost">
                                    
                                        <div className="imagepart1"><img src={image} alt="Imageshow"/></div>
                                        <div className="contentpart">    
                                            <h4 className="postHeading">{item.title}</h4>
                                            <p className="postDescrip">{item.descripCTion}</p>
                                            <span className="postThumbnail">{item.thumbnaiL}</span>
                                            <span className="date">
                                                <code>   </code>/<code>   </code>{item.Date}
                                            </span>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </>
                            ))}
                    <i className="arrow fas fa-arrow-down"><blockquote>      </blockquote></i><span className="date"> Load More</span>             
                </div>
            </div>
            </>
        )
    }

export default Bollysub;