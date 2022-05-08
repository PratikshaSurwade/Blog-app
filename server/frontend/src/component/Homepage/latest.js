
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
          

          <div className="card">
            <img className="imaGe" src={props.latestdata.photo1} alt="Imageshow" />
            <div className="cardInfo">
            <NavLink className="cardLink" to={`/article/${props.latestdata._id}`}>
              <h5>{props.latestdata.title}</h5>
              </NavLink>

              <p style={{ color: "#d3d3d3" }} className="postDescription">{props.latestdata.decription}</p>
              <span className="postThumbnail">{props.latestdata.categories}</span>
              <span className="date"><code>   </code>/<code>   </code>{props.latestdata.date}</span>
            </div>
          </div>

      </>
    )
  
}
export default Latest;

