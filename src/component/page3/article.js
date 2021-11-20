import React from "react";
import "./article.css";
import profile from "./../../images/profilepic.png";
import article1 from "./../../images/articlepic1.png"
import article2 from "./../../images/articlepic2.png"
import Footer from "./footer";
import CardDet from "./footer.json";

class Article extends React.Component{
    state={
        CardDet:CardDet
    }
    render(){
        return(
            <>
                <div>
                    <div className="Article">
                        <h2>5 ways to animate a React app.</h2>
                        <div className="topBar">
                            <div className="topLeft">
                                <img className="profileImage" src={profile} alt="Profile"></img>
                                
                            </div>
                            <div className="topCenter">
                                <h6>Dmitry Nazhenko</h6>
                                <p className="profileInfo"> Jan 28, 2019 - 10 min read</p>

                            </div>
                            <div className="topRight">
                                <i class="topIcon fab fa-facebook-square"></i>
                                <i class="topIcon fab fa-twitter"></i>
                                <i class="topIcon fab fa-instagram"></i>
                                <i class="topIcon fab fa-youtube"></i>

                            </div>
                        </div>       
                        <img className="articleImg1" src={article1} alt="article"></img>
                        <p className="articleInfo">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.
                        </p>

                        <img className="articleImg1" src={article2} alt="article"></img>
                        <div className="tag">
                            <button className="Tagbtn">React</button>
                            <button className="Tagbtn">Javascript</button>
                            <button className="Tagbtn">Animation</button>
                        </div>
                        <i class="articleImg2 fas fa-sign-language"></i><span class="articlePart2">9.3k claps</span>
                        <hr></hr>
                        <div className="topBar">
                            <div className="topLeft">
                                <img className="profileImage1" src={profile} alt="Profile"></img>
                                
                            </div>
                            <div className="topCenter">
                                <p className="profileInfo"> WRITTEN BY</p>
                                <h6>Dmitry Nazhenko</h6>
                                <p className="profileInfo"> Jan 28, 2019 - 10 min read</p>

                            </div>
                        </div>
                        <hr></hr>
                    </div>

                    <Footer cardInfo={this.state.CardDet}/>
                </div>
                

            </>
        )
    }
}

export default Article;