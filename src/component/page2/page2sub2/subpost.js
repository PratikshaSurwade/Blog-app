import React from "react";
import "./subpost.scss";
import subpostimage from "./../../../images/blogimg4.png"


class Subpost extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <>
                <div className="subpost">
                    
                    <div className="imagepart"><img src={subpostimage} alt="Imageshow"/></div>
                    <div className="contentpart1">
                            <>
                                <h5 className="postHeading">{this.props.postDetails.title}</h5>
                                <span className="postThumbnail">{this.props.postDetails.thumbnaiL}</span>
                                <span className="date">
                                    <code>   </code>/
                                    <code>   </code>{this.props.postDetails.Date}
                                </span>
                                
                            </>
                    </div>
                    
                </div>
                <hr></hr>
        
            </>
        )
    }
}
export default Subpost;