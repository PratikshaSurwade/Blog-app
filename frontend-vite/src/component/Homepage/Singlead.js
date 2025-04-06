import React from "react";
import { NavLink } from "react-router-dom";
//CSS Style
import "./../../Styles/homepageimg.css";

function Homeimage(props) {
	return (
		<>
			<div className="MainImg1">
				<img className="img1" src={props.homeimagedata.photo1} alt="Imageshow" />
				<div className="textContaint1">
					<NavLink className="MainTitle" to={`/article/${props.homeimagedata._id}`} target="_top">
						<h1>{props.homeimagedata.title}</h1>
					</NavLink>
					<span className="postThumbnail1">{props.homeimagedata.categories[0].charAt(0).toUpperCase() + props.homeimagedata.categories[0].slice(1)}</span>
					<span className="date1"><code>   </code>/<code>   </code>{props.homeimagedata.date} </span>
				</div>
			</div>
		</>
	)
}

export default Homeimage