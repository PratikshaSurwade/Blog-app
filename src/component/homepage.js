
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
        bollyNew:postContain,
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
                {this.state.bollyNew.map((item)=>(
                        <Bollysub key={item.id2} bollyNews={item}/>
                ))}
                <i className="arrow fas fa-arrow-down"><blockquote>      </blockquote></i><span className="date"> Load More</span> 
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
            <h1 className="latestHead1">Latest Stories</h1>
        
            <div className="story">
                    {this.state.homeStory.map((item)=>(
                    <Homestory key={item.id} storyinfo={item}/> 
                    ))}  
            </div>
        </>
    )
}
}
export default Homepage;