import "./../../Styles/home.scss";
import "./../../Styles/homestyle.scss"

function Homestory(props){
    console.log(props)
    return(
        <> 
        
                
                    <>  
                    <div className="storyInfo">
                        <h3>{props.storyinfo.title}</h3>
                        <p className="description">{props.storyinfo.descripCTion}</p>
        
                        <span className="postThumbnail">{props.storyinfo.category}</span>
                        <span className="date">
                            <code>   </code>/<code>   </code>{props.storyinfo.DaTe}
                        </span>
                    </div>
                    </>    
            
            
            <hr className="hrMargin"></hr>
        </>
    )
}
export default Homestory;