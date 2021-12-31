import React from "react";
import "./posts.scss"
import Subpost from "./Subpost.js";
import Mainpost from "./Toppost.js"



class Posts extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    
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