import React from "react";
import "./posts.css"
import Subpost from "./subpost";
import Mainpost from "./mainpost.js"



class Posts extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    
    render(){
       
        return(
            <>
                <div className="posts">
                    <div>
                        <h1 className="posthead">Top Posts</h1>
                        <Mainpost />
                        {this.props.conTaint.map((item)=>(
                            <Subpost key={item.id} postDetails={item} />
                        ))}
                        
                        
                   
                    </div>
                </div>
                
            </>
        )
    }
}
export default Posts;