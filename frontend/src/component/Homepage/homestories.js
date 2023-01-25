import "./../../Styles/mainhomestyle.css";
import "./../../Styles/homestyle.css";
import { NavLink } from "react-router-dom";

function Homestory(props){
    return(
        <> 
            <div className="storyInfo">
            <NavLink className="cardLink" to={`/article/${props.storyinfo._id}`}>

                <h3>{props.storyinfo.title}</h3>
                </NavLink>

                <p className="description">{props.storyinfo.decription}</p>
                <span className="postThumbnail">{props.storyinfo.categories[0].charAt(0).toUpperCase() + props.storyinfo.categories[0].slice(1)}</span>
                <span className="date">
                    <code>   </code>/<code>   </code>{props.storyinfo.date}
                </span>
            </div>
         
            {/* <hr className="hrMargin"></hr> */}
        </>
    )
}
export default Homestory;