import "./../Styles/homeimg.css";
import moon2 from "./../images/blogimg4.png";
function Homeimage(){
    return(
        <> 
        <div className="homeImage">
            <div className="MainImg1">
                    
                        
                            <img className="img1" src={moon2} alt="Imageshow" />
                                <div className="textContaint1">
                                    <h1>Title of Vertical Gallery</h1>
                                    <span  className="postThumbnail1">Travel</span>
                                    <span className="date1"><code>   </code>/<code>   </code>August 21 2007</span>
                                </div>
                            
                    
                   
            </div>
        </div>
        </>
    )
}
export default Homeimage;