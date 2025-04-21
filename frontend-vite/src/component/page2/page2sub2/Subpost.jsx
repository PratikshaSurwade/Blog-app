import React from "react";
import "./subpoststyle.css";
import { NavLink } from "react-router-dom";

class Subpost extends React.Component {
    render() {
        return (
            <>
                <div className="subpost">
                    <div className="imagepart"><img src={this.props.postDetails.photo1} alt="Imageshow" /></div>
                    <div className="contentpart1">
                        <>
                            <NavLink className="MainImgLink2" to={`/article/${this.props.postDetails._id}`}>

                                <h5 className="postHeading">{this.props.postDetails.title}</h5>
                            </NavLink>
                            <span className="postThumbnail">{this.props.postDetails.categories[0].charAt(0).toUpperCase() + this.props.postDetails.categories[0].slice(1)}</span>
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