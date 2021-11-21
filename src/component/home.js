
import React from "react";

import "./../Styles/homepageimg.css";
import tajmahal from "./../images/tajmahal.png";
import amerpalace from "./../images/amerpalace.png";

class Home extends React.Component{
    

    render(){
        return(
            <>
            <div className="homePage">
                <div className="grid-container">
                    <div className="grid-item1">
                        <img src={tajmahal} alt="Imageshow" />
                        <div className="textContaint">
                            <h1>Title of Vertical Gallery</h1>
                            <span  className="postThumbnail">Travel</span>
                            <span className="date"><code>   </code>/<code>   </code>August 21 2007</span>
                        </div>
                    </div>
                    <div className="gridItem">
                        <div className="gridItem2">
                            <img src={amerpalace} alt="Imageshow"/>
                            <div className="textContaint">
                                <h1>Title of Vertical Gallery</h1>
                                <span  className="postThumbnail">Travel</span>
                                <span className="date"><code>   </code>/<code>   </code>August 21 2007</span>
                            </div>
                        </div>
                        <div className="gridItem3">
                            <img src={amerpalace} alt="Imageshow"/>
                            <div className="textContaint">
                                <h1>Title of Vertical Gallery</h1>
                                <span  className="postThumbnail">Travel</span>
                                <span className="date"><code>   </code>/<code>   </code>August 21 2007</span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Home;

