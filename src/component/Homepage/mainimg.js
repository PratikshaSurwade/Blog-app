import "./../../Styles/homeimg.scss";

import moon1 from "./../../images/moon.png";

import moon2 from "./../../images/space1.png";

import React from "react";

import { NavLink } from "react-router-dom";


class Mainimg extends React.Component{
    render(){
        return(
            <>
                <NavLink className="MainImgLink" to="/bollywood">

                <div className="MainImg" id="homeimgclick">
                    <div className="longImg">
                        
                            <img className="img1" src={moon2} alt="Imageshow" />
                                <div className="textContaint1">
                                    <h1>Title of Vertical Gallery</h1>
                                    <span  className="postThumbnail1">Travel</span>
                                    <span className="date1"><code>   </code>/<code>   </code>August 21 2007</span>
                                </div>
                            
                    
                    </div>
                    <div className="smallImg">
                        <div className="img2">
                        <img className="Img2" src={moon1} alt="Imageshow" />
                            <div className="textContaint2">
                                <h4>The Sound cloud</h4>
                                <h4>You loved is doomed</h4>
                                <span  className="postThumbnail1">Travel</span>
                                <span className="date1"><code>   </code>/<code>   </code>August 21 2007</span>
                            </div>
                        </div>
                        <div className="img3">
                        <img className="Img3" src={moon1} alt="Imageshow" />

                            <div className="textContaint3">
                                <h4>The Sound cloud</h4>
                                <h4>You loved is doomed</h4>
                                <span  className="postThumbnail1">Travel</span>
                                <span className="date1"><code>   </code>/<code>   </code>August 21 2007</span>
                            </div>
                        </div>
                    </div>

                </div>
                </NavLink>
            </>
        )
    }
}
export default Mainimg;