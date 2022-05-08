import React from "react";
import "./subpost.css";
import subpostimage from "./../../../images/blogimg4.png"

class Subpost extends React.Component{
    render(){
        return(
            <>
                <div className="subpost">                   
                    <div className="imagepart"><img src={this.props.postDetails.photo1} alt="Imageshow"/></div>
                    <div className="contentpart1">
                            <>
                                <h5 className="postHeading">{this.props.postDetails.title}</h5>
                                <span className="postThumbnail">{this.props.postDetails.categories}</span>
                                <span className="date">
                                    <code>   </code>/
                                    <code>   </code>{this.props.postDetails.date}
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