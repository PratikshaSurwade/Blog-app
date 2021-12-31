import React from "react";
import "./article.scss";
import imaGe from "./../../images/blogimg1.png";
import profile from "./../../images/profilepic.png";
class Footer extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    
    }
    render(){
        return(
            <>
            <div className="footer">
                <h5>More From The Siren</h5>
                <hr></hr>
                <div className="contaiNer">
                {this.props.cardInfo1.map((item)=>(
                    <>
                        <div className="cards">
                            <p className="profileInfo"> {item.about}</p>
                            <img className="cardImg" src={imaGe} alt="imaGEPlay"></img>
                            <h5>{item.TitLe}</h5>
                            <div className="topBar">
                                <div className="topLeft">
                                    <img className="profileImage2" src={profile} alt="Profile"></img>
                                
                                </div>
                                <div className="topCenter1">
                                    <h6>Dmitry Nazhenko</h6>
                                    <p className="profileInfo"> Aug 10 - 4  min read</p>

                                </div>
                            </div>
                        </div>
                        
                    </>
                ))}
                </div>
                    <div className="container2">
                        {this.props.cardInfo2.map((item)=>(
                            <>
                            <div className="subcards">
                                <div className="subpartInfo">
                                    <h5>{item.subTitle}</h5>
                                    <p className="profileInfo">{item.Author}</p>
                                </div>
                                <div className="subpartImg">
                                    <img className="cardImg1" src={imaGe} alt="imaGEPlay"></img>
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