
import React from "react";
import blogimg2 from "./../../images/blogimg1.png";
import "./../../Styles/homestyle.css";
// import latestdata from "./latestdata";
import { NavLink } from "react-router-dom";

class Latest extends React.Component{
  // state={
  //   latestdata : latestdata

  // }
  // constructor(props){
  //   super(props);
  //   console.log(props);
  // }
  render(){
    return(
        <>
          
            
            <NavLink className="cardLink" to="/bollywood">

                <div className="card">
                    <img className="imaGe" src={blogimg2} alt="Imageshow"/>
                    <div className="cardInfo">
                      <h5>{this.props.latestdata.title}</h5>
                      <p style={{color:"#d3d3d3"}}>{this.props.latestdata.decription}</p>
                      <span  className="postThumbnail">Travel</span>
                      <span className="date"><code>   </code>/<code>   </code>August 21 2007</span>
                    </div>
                </div>
                
            </NavLink>

        </>
    )
  }
}
export default Latest;

