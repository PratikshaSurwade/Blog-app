import React from "react";
import "./article.css";
import profile from "./../../images/profilepic.png";
import article1 from "./../../images/articlepic1.png"
import article2 from "./../../images/articlepic2.png"
import Footer from "./footer";
// import CardDet1 from "./footerdata1";
// import cardDet2 from "./footerdata2";

import axios from 'axios';

class Article extends React.Component{
    constructor(props){
        super(props);
        this.state={
            infoCard1:[],
            infoCard:[]
        };
        this.infoCard1 = this.infoCard1.bind(this);
        this.infoCard = this.infoCard.bind(this);
    }
    
	componentDidMount() {
		// this.setState(() => {
			this.infoCard1();
            this.infoCard();
		// });
	   
    }
    infoCard1() {
		axios.get("https://blog-app-be.herokuapp.com/footer1")
			.then(response => {
				this.setState({
					
					infoCard1: response.data
				});
			})
			.catch(err => console.error(err));
            console.log("Fetching dataa footer 1");
	}
    infoCard() {
		axios.get("https://blog-app-be.herokuapp.com/footer2")
			.then(response => {
				this.setState({
					
					infoCard: response.data
				});
			})
			.catch(err => console.error(err));
            console.log("Fetching dataa footer 2");
	}
    
    render(){
        return(
            <>
                <div className="page">

                <i className="articleImg2 fas fa-sign-language"></i><span className="articlePart2">9.3k </span>
                <p><i className="articleImg3 fas fa-share-alt"></i><span className="articlePart2">Share this Profile</span></p>
                </div>
                    <div className="Article">
                        <h2>5 ways to animate a React app.</h2>
                        <div className="topRight1">
                                <i className="topIcon fab fa-facebook-square"></i>
                                <i className="topIcon fab fa-twitter"></i>
                                <i className="topIcon fab fa-instagram"></i>
                                <i className="topIcon fab fa-youtube"></i>

                            </div>
                        <div className="topBar">
                            <div className="topLeft">
                                <img className="profileImage" src={profile} alt="Profile"></img>
                                
                            </div>
                            <div className="topCenter">
                                <h6>Dmitry Nazhenko</h6>
                                <p className="profileInfo"> Jan 28, 2019 - 10 min read</p>

                            </div>
                            <div className="topRight">
                                <i className="topIcon fab fa-facebook-square"></i>
                                <i className="topIcon fab fa-twitter"></i>
                                <i className="topIcon fab fa-instagram"></i>
                                <i className="topIcon fab fa-youtube"></i>

                            </div>
                        </div>       
                        <img className="articleImg1" src={article1} alt="article"></img>
                        <p className="articleInfo">
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
                        <i className="articleImg2 fas fa-sign-language"></i><span className="articlePart2">9.3k claps</span>
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

                    <Footer  cardInfo1={this.state.infoCard1} cardInfo2={this.state.infoCard} />
                
                

            </>
        )
    }
}

export default Article;