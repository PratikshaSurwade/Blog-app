
import React from "react";
import {useState,useParams} from 'react';
import blogimg2 from "./../../images/blogimg1.png";
import "./../../Styles/homestyle.css";
// import latestdata from "./latestdata";
import { NavLink } from "react-router-dom";

function Latest(props){

    return (
      <>
          {/* <NavLink className="cardLink" to={{pathname:`/article/${this.props.latestdata.id}`,state:{stateParam:true}}}> */}
          <NavLink className="cardLink" to={{pathname:`/article/${props.latestdata.id}`}} state={{...props}}>

          <div className="card">
            <img className="imaGe" src={blogimg2} alt="Imageshow" />
            <div className="cardInfo">
              <h5>{props.latestdata.title}</h5>
              <p style={{ color: "#d3d3d3" }}>{props.latestdata.decription}</p>
              <span className="postThumbnail">Travel</span>
              <span className="date"><code>   </code>/<code>   </code>August 21 2007</span>
            </div>
          </div>
        </NavLink>

      </>
    )
  
}
export default Latest;

