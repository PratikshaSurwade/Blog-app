
import React from "react";
// import blogimg2 from "./../../images/blogimg1.png";
import "./../../Styles/homestyle.css";
import latestdata from "./latestdata1";
// import { NavLink } from "react-router-dom";

class Latest extends React.Component{
  state={
    latestdata : latestdata

  }
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    return(
        <>
          
            {/* <h1 className="latestHead">The Latest</h1>
            <NavLink className="cardLink" to="/bollywood">

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
            </NavLink> */}

        </>
    )
  }
}
export default Latest;

