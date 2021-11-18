
import React from "react";

import "./../Styles/home.css"


class Home extends React.Component{
    

    render(){
        return(
            <>
            <div className="homePage">
                <div className="grid-container">
                    
                        <div className="homeItem">
                        <img src="https://www.hdwallpaper.nu/wp-content/uploads/2016/08/Jasper_National_Park_wallpaper_8.jpg" alt="Imageshow"/>
                            <div className="textContaint">
                                <h1 style={{color:"white"}}>Title of Vertical Gallery</h1>
                                <span  className="postThumbnail" style={{color:"white"}}>Travel</span>
                                <span className="date"><code>   </code>/<code>   </code>August 21 2007</span>
                            </div>
                        </div>


                    </div>
                </div>

            </>
        )
    }
}
export default Home;





// import axioms from 'axios';
// import { daTa } from "./../categories/home1";
// class Home extends Component{
//     state={
//         postList:[],
//     }
//     componentDidMount(){
//         axioms.get("https://jsonplaceholder.typicode.com/comments")
//         .then((response)=>{
//             console.log(response.data);
//             this.setState({
//                 postList: response.data,
//             })

//         })
//         .catch((error)=>
//             console.log(error))
//             console.log("fetching data")
//     }
//     render(){
//         return(
//             <>
//                 <h1>App</h1>
//                 {this.state.postList.map(
//                     (item)=>(
//                         <div key={item.postId}>
//                             <h3>{item.name}</h3>
//                             <h4>{item.id}</h4>
//                             <p>{item.email}</p>
//                             <h6>{item.body}</h6>

//                         </div>
//                     )
//                 )}
//             </>
//         )
//     }
// }
