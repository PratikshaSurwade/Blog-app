
import React from "react";
import "./../../Styles/homeimg.css";
import { NavLink } from "react-router-dom";

function Homeimage(props) {
  return (
    <> 
		<div className="MainImg1">
			<img className="img1" src={props.homeimagedata.photo1} alt="Imageshow" />
			<div className="textContaint1">
				<NavLink className="MainImgLink" to={`/article/${props.homeimagedata._id}`}>
					<h1>{props.homeimagedata.title}</h1>
				</NavLink>
				<span  className="postThumbnail1">{props.homeimagedata.categories}</span>
				<span className="date1"><code>   </code>/<code>   </code>{props.homeimagedata.date} </span>
			</div>
		</div>
	</>
  )
}

export default Homeimage

// class Homeimage extends React.Component{
//     state=[
//         {
//             "_id": "6274f5f500f9966c8b96519c",
//             "title": "Doctor Strange 2 review: Perfect blend of horror-adventure in a visual spectacle",
//             "decription": "Doctor Strange in the Multiverse of Madness movie review: Director Sam Raimi brings horror to the Marvel Cinematic Universe in a stunning fashion. The Benedict Cumberbatch and Elizabeth Olsen-starrer is a must watch",
//             "authorphoto": "data:image/png;base64,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",
//             "photo1": "https://images.hindustantimes.com/img/2022/05/06/550x309/Dr_Strange_1651809698197_1651809716043.jpg",
//             "photo2": "https://images.hindustantimes.com/img/2022/05/06/550x309/Dr_Strange_1651809698197_1651809716043.jpg",
//             "username": "Hindustan Times",
//             "categories": [
//             "Hollywood"
//             ],
//             "claps": "43k",
//             "date": "May 6, 2022",
//             "time": "3 min read",
//             "tag1": "Hollywood",
//             "tag2": "Marvel",
//             "tag3": "Tom Cruise",
//             "createdAt": "2022-05-06T10:18:29.814Z",
//             "updatedAt": "2022-05-06T10:18:29.814Z",
//             "__v": 0
//         }
//     ]
    
//     render(){
//         console.log(this.state)
//         return(
//             <> 
//                 <div className="MainImg1">
//                     <img className="img1" src={this.state[0].photo1} alt="Imageshow" />
//                     <div className="textContaint1">
//                     <NavLink className="MainImgLink" to={`/article/${this.state[0]._id}`}>
//                         <h1>{this.state[0].title}</h1>
//                         </NavLink>
//                         <span  className="postThumbnail1">{this.state[0].categories}</span>
//                         <span className="date1"><code>   </code>/<code>   </code>{this.state[0].date} </span>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
// export default Homeimage;


// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import homeimage from "./homeimage";
// import Homestory from "./homestories";
// import "./../../component/page2/page2sub2/subpost.css";
// import Mainimg from "./mainimg";
// import { NavLink } from "react-router-dom";
// import Loader from '../Loader/Loader';
// import baseUrl from "../../utils/baseUrl";

// function Homeimage() {
//     const [data, setData ] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         setLoading(true)

//         const getlatestdata = async () => {
//             const res = await axios.get(`${baseUrl}/api/main`);
//             console.log(res)
//             setData(res.data);
//             setLoading(false);
//         };
//         getlatestdata();
//     },[]);
//   return (
//     <>
//     {loading ? (
//         <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
//             <h2 style={{ textAlign: "center" }}>Loading...</h2>
//             <Loader />
//         </div>
//     ) : (
//         <>
//         {/* {console.log(data[0].photo1)} */}
//                 <div className="MainImg1">
//                     {/* <img className="img1" src={data[0].photo1} alt="Imageshow" /> */}
//                     <div className="textContaint1">
//                     <NavLink className="MainImgLink" to={`/article/${data[0]._id}`}>
//                         <h1>{data[0].title}</h1>
//                         </NavLink>
//                         <span  className="postThumbnail1">{data[0].categories}</span>
//                         <span className="date1"><code>   </code>/<code>   </code>{data[0].date} </span>
//                     </div>
//                 </div>
                
//         </>
//     )
//     }
//     </>
//   )
// }

// export default Homeimage