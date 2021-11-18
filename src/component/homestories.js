import "./../Styles/home.css"
function Homestory(props){
    console.log(props)
    return(
        <> 
        <h1 className="latestHead">Latest Stories</h1>
        <hr className="hrMargin"></hr>

        <div className="story">
                {props.storyinfo.map((item)=>(
                    <>  
                    <div className="storyInfo">
                        <h3>{item.title}</h3>
                        <p className="description">{item.descripCTion}</p>
        
                        <span className="postThumbnail">{item.category}</span>
                        <span className="date">
                            <code>   </code>/<code>   </code>{item.DaTe}
                        </span>
                    </div>
                    <hr className="hrSeparation"></hr>
                    </>    
                ))}
            </div>
            <hr className="hrMargin"></hr>
        </>
    )
}
export default Homestory;