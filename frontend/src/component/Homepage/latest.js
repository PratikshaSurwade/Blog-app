import React from "react";
import "./../../Styles/homestyle.css";
import { NavLink } from "react-router-dom";

function Latest(props) {

  return (
    <>
      <div className="card">
        <img className="imaGe" src={props.latestdata.photo1} alt="Imageshow" />
        <div className="cardInfo">
          <NavLink className="cardLink" to={`/article/${props.latestdata._id}`}>
            <h5>{props.latestdata.title}</h5>
          </NavLink>

          <p style={{ color: "#d3d3d3" }} className="postDescription">{props.latestdata.decription}</p>
          <span className="postThumbnail">{props.latestdata.categories[0].charAt(0).toUpperCase()+props.latestdata.categories[0].slice(1)}</span>
          <span className="date"><code>   </code>/<code>   </code>{props.latestdata.date}</span>
        </div>
      </div>
    </>
  )
}
export default Latest;