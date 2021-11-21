import "./../Styles/homeimg.css";


import palmtree from "./../images/moon4.png";
import moon1 from "./../images/moon.png";

import moon2 from "./../images/space1.png";

import React from "react";

class Mainimg extends React.Component{
    render(){
        return(
            <>
                <div className="MainImg">
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
                        <img  src={moon1} alt="Imageshow" />
                            <div className="textContaint2">
                                <h4>The Sound cloud</h4>
                                <h4>You loved is doomed</h4>
                                <span  className="postThumbnail1">Travel</span>
                                <span className="date1"><code>   </code>/<code>   </code>August 21 2007</span>
                            </div>
                        </div>
                        <div className="img3">
                        <img src={moon1} alt="Imageshow" />

                            <div className="textContaint3">
                                <h4>The Sound cloud</h4>
                                <h4>You loved is doomed</h4>
                                <span  className="postThumbnail1">Travel</span>
                                <span className="date1"><code>   </code>/<code>   </code>August 21 2007</span>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
export default Mainimg;