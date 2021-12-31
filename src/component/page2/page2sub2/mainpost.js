import mainpostimage from "./../../../images/blogimg5.png"
import  "./subpost.scss";


function Mainpost(props){
    return(
        <> 
            <div className="mainPost">
                <div className="mainpostImg"><img src={mainpostimage} alt="Imageshow"/></div>
                <h5 className="postHeading">Catch waves with an adventure guide</h5>
                <span  className="postThumbnail">Travel</span>
                <span className="date"><code>   </code>/<code>   </code>August 21 2007</span>
                <hr></hr>
            </div>
        </>
    )
}
export default Mainpost;