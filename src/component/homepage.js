
import Latest from "./latest";
import Posts from "./page2/page2sub2/posts";
import React from "react";
import postContain from "./../latestart.json"
import postConTain from "./../component/page2/bollywood.json";
import HomeStory from "./../component/page2/bollywood.json";
import Bollysub from "./page2/page2sub1/bollysub1";
import "./../Styles/home.css"
import Homeimage from "./homeimage";
import Homestory from "./homestories";
import "./../component/page2/page2sub2/subpost.css";
import Mainimg from "./mainimg";

class Homepage extends React.Component{
    state={
        bollyNews:postContain,
        conTaint:postConTain,
        homeStory:HomeStory
    }
    render(){
    return(
        <>
            <Mainimg />
            <Latest />
            <h1 className="latestHead">Latest Articles</h1>
            <div className="articlePage">
                <div className="articles">
                    <Bollysub bollyNews={this.state.bollyNews} />
                    <Homeimage />
                </div>
                <div  className="sidebarContainer">
                <div className="homeAdvertise">Advertisement</div>
                    <h1 className="posthead">Top Posts</h1>
                    <div className="sidebar">
                    
                    <Posts conTaint={this.state.conTaint} />
                    </div>
              </div>
            </div>
            <Homestory storyinfo={this.state.homeStory}/>   
        </>
    )
}
}
export default Homepage;