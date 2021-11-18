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
                        <Bollysub bollyNews={this.state.bollyNews}/>
                    </div>
                    <div className="posts">
                        
                        <Posts conTaint={this.state.conTaint}/>
                        <div className="advertise">Advertisement</div>
                    </div>
                </div>
                
            </>
        )
    }
}
export default Bollywood;