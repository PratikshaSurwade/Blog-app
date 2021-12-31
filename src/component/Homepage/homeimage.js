import "./../../Styles/homeimg.scss";
import { NavLink } from "react-router-dom";
import moon2 from "./../../images/blogimg4.png";
function Homeimage(){
    return(
        <> 
        <NavLink className="homeImage" to="/bollywood">

        
            <div className="MainImg1">
                    
                        
                            <img className="img1" src={moon2} alt="Imageshow" />
                                <div className="textContaint1">
                                    <h1>Title of Vertical Gallery</h1>
                                    <span  className="postThumbnail1">Travel</span>
                                    <span className="date1"><code>   </code>/<code>   </code>August 21 2007</span>
                                </div>
                            
                    
                   
            </div>
        </NavLink>
        </>
    )
}
export default Homeimage;