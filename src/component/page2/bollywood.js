import React from "react";
import "./bollywood.css"
import Bollysub from "./page2sub1/bollysub1";
import Posts from "./page2sub2/posts";
import postContain from "./bollywood.json"
import bollyNews from "./../../page2.json"


class Bollywood extends React.Component{
    state={
        conTaint:postContain,
        bollyNews:bollyNews
    }
    render(){
        return(
            <>
                <div className="home">
                    <div className="bollywood">
                        <h1 className="bollyhead">Bollywood</h1>
                        {this.state.bollyNews.map((item)=>(
                        <Bollysub key={item.id2} bollyNews={item}/>
                        ))}
                        <i className="arrow fas fa-arrow-down"><blockquote>      </blockquote></i><span className="date"> Load More</span> 
                    </div>
                    <div className="posts">
                        <h1 className="posthead">Top Posts</h1>
                        <Posts conTaint={this.state.conTaint}/>
                        <div className="advertise">Advertisement</div>
                    </div>
                </div>
                
            </>
        )
    }
}
export default Bollywood;