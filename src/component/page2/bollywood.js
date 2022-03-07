import React from "react";
import { NavLink } from "react-router-dom";

import "./bollywood.css"

//Json importing
import Bollysub from "./page2sub1/bollysub1.js";
import Posts from "./page2sub2/posts";
import postContain from "./bollywood.json"
import bollyNews from "./page2.json";


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
                            <NavLink className="bollywood" to="/article">
                                <Bollysub key={item.id2} bollyNews={item}/>
                            </NavLink>
                            ))}
                        <i className="arrow fas fa-arrow-down"><blockquote>      </blockquote></i><span className="loadmore"> Load More</span> 
                    </div>
                    <div className="posts">
                        <h1 className="posthead">Top Posts</h1>
                        <NavLink className="posts" to="/article">

                            <Posts conTaint={this.state.conTaint}/>
                        
                        </NavLink>
                        <div className="advertise">Advertisement</div>
                    </div>
                </div>
                
            </>
        )
    }
}
export default Bollywood;