import React from "react";
import "./article.css";
import { NavLink } from "react-router-dom";

import imaGe from "./../../images/blogimg1.png";
import profile from "./../../images/profilepic.png";
class Footer extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);

    }
    render() {
        return (
            <>
                <div className="footer">
                    <h5>More From The Siren</h5>
                    <hr></hr>
                    <div className="contaiNer">
                        {this.props.cardInfo1.map((item) => (
                            <>
                                <div className="cards">
                                    <p className="profileInfo"> {item.about}</p>
                                    <img className="cardImg" src={item.photo1} alt="imaGEPlay"></img>
                                    <NavLink className="bollywood" to={`/article/${item._id}`}>

                                        <h5>{item.title}</h5>
                                    </NavLink>
                                    <div className="topBar">
                                        <div className="topLeft">
                                            <img className="profileImage2" src={item.authorphoto} alt="Profile"></img>

                                        </div>
                                        <div className="topCenter1">
                                            <h6>{item.username}</h6>
                                            <p className="profileInfo">{item.date} - {item.read}</p>

                                        </div>
                                    </div>
                                </div>

                            </>
                        ))}
                    </div>
                    <div className="container2">
                        {this.props.cardInfo2.map((item) => (
                            <>
                                <div className="subcards">
                                    <div className="subpartInfo">
                                        <NavLink className="bollywood" to={`/article/${item._id}`}>

                                            <h5>{item.title}</h5>
                                        </NavLink>                                    <p className="profileInfo">{item.categories}</p>
                                    </div>
                                    <div className="subpartImg">
                                        <img className="cardImg1" src={item.photo1} alt="imaGEPlay"></img>
                                    </div>

                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}
export default Footer;