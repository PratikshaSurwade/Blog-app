
import React from "react";
import blogimg2 from "./../images/blogimg1.png";
import "./../Styles/heading.css";

import { NavLink } from "react-router-dom";

class Latest extends React.Component{
  state={
    
    title:"Joshua Tree Overnight Adventure",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse suscipit excepturi ut officiis doloribus inventore dolores assumenda reiciendis repudiandae dolore nemo quidem sit vitae soluta, aliquam deleniti nesciunt delectus. "
  }
  jsOn=[
    {
      "title":"Joshua Tree Overnight Adventure",
      "decription":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse suscipit excepturi ut officiis doloribus inventore dolores assumenda reiciendis repudiandae dolore nemo quidem sit vitae soluta, aliquam deleniti nesciunt delectus."
    }
  ]
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    return(
        <>
            <h1 className="latestHead">The Latest</h1>
            <NavLink className="cardContainer" to="/bollywood">

            <div className="cardContainer">
                <div className="card">
                    <img className="imaGe" src={blogimg2} alt="Imageshow"/>
                    <div className="cardInfo">
                      <h5>{this.state.title}</h5>
                      <p style={{color:"#d3d3d3"}}>{this.state.description}</p>
                      <span  className="postThumbnail">Travel</span>
                <span className="date"><code>   </code>/<code>   </code>August 21 2007</span>
                    </div>
                </div>
                <div className="card">
                    <img className="imaGe" src={blogimg2 } alt="Imageshow"/>
                    <div className="cardInfo">
                      <h5 >{this.state.title}</h5>
                      <p style={{color:"#d3d3d3"}}>{this.state.description}</p>
                      <span  className="postThumbnail">Travel</span>
                <span className="date"><code>   </code>/<code>   </code>August 21 2007</span>
                    </div>
                </div>
                <div className="card">
                    <img className="imaGe" src={blogimg2} alt="Imageshow"/>
                    <div className="cardInfo">
                      <h5>{this.state.title}</h5>
                      <p style={{color:"#d3d3d3"}}>{this.state.description}</p>
                      <span  className="postThumbnail">Travel</span>
                <span className="date"><code>   </code>/<code>   </code>August 21 2007</span>
                    </div>
                </div>
            </div>
            </NavLink>

        </>
    )
  }
}
export default Latest;

