
import Latest from "./latest";
import Posts from "./page2/page2sub2/posts";
import React from "react";
import postContain from "./../latestart.json"
import postConTain from "./../component/page2/bollywood.json";
import HomeStory from "./../component/page2/bollywood.json"
import Bollysub from "./page2/page2sub1/bollysub1";
import "./../Styles/home.css"
import Homeimage from "./homeimage";
import Homestory from "./homestories";

class Homepage extends React.Component{
    state={
        bollyNews:postContain,
        conTaint:postConTain,
        homeStory:HomeStory
    }
    render(){
    return(
        <>
            
            <Latest />
            <h1 className="latestHead">Latest Articles</h1>
            <div className="articlePage">
                <div className="articles">
                    <Bollysub bollyNews={this.state.bollyNews} />
                    <Homeimage />
                </div>
                <div  className="sidebar">
                    <div className="advertise">Advertisement</div>
                    <Posts conTaint={this.state.conTaint} />
              </div>
            </div>
            <Homestory storyinfo={this.state.homeStory}/>   
        </>
    )
}
}
export default Homepage;