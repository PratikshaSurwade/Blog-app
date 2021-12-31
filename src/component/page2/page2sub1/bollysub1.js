import React from "react";
import image from "./../../../images/blogimg4.png";

import "./bollysub1.scss";


function Bollysub(props){
    console.log(props.bollyNews.title);
        return(
            <>     
            
                <div className="bollyPart">  
                
                            
                                <>
                                    <div className="subpost" >
                                    
                                        <div className="imagepart1" ><img src={image} alt="Imageshow"/></div>
                                        <div className="contentpart">    
                                            <h4 className="postHeading">{props.bollyNews.title}</h4>
                                            <p className="postDescrip">{props.bollyNews.descripCTion}</p>
                                            <span className="postThumbnail">{props.bollyNews.thumbnaiL}</span>
                                            <span className="date" >
                                                <code>   </code>/<code>   </code>{props.bollyNews.Date}
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