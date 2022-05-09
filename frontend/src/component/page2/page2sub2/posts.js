import React from "react";
import "./posts.css"
import Subpost from "./subpost.js";
import Mainpost from "./Toppost.js"



class Posts extends React.Component{
    render(){  
        return(
            <>
            <div className="postContainer">
                <Mainpost />
                {this.props.conTaint.map((item)=>(
                    <Subpost key={item.id} postDetails={item} />
                ))}
                </div>    
            </>
        )
    }
}
export default Posts;