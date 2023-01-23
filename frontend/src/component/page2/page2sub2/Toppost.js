import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";
import mainpostimage from "./../../../images/blogimg5.png";
import "./subpost.css";
import { NavLink } from "react-router-dom";
import Loader from "../../Loader/Loader";

function Mainpost(props) {
    const [mainpost, setMainpost] = useState([]);

    //loading effect
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);


        const getmainPost = async () => {
            const res = await axios.get(`${baseUrl}/api/mainpost`);
            setMainpost(res.data);        
            setLoading(false);
            
        };

        getmainPost();

    }, [])


    const data = [
        {
            "_id": "6274ee9e0669802a0fb19396",
            "title": "Satellite captures stunning image of the first eclipse of the year",
            "decription": "The world witnessed the first eclipse of the year on April 30, when the Sun, Moon, and Earth aligned together, though not perfectly in a straight line. The partial solar eclipse was seen in several parts of the world, which appeared as if someone had taken a bite out of the Sun.An eclipse is a phenomenon when an object comes in between two big objects casting its shadow. In terms of the solar eclipse, this celestial event happens when the moon passes between Earth and the sun.The April 30 event saw the Moon blocking the sunlight coming towards Earth, creating a giant shadow in the process. The celestial event, while visible in the skies over Chile, Argentina, most of Uruguay, western Paraguay, southwestern Bolivia, southeastern Peru, and a small area of southwestern Brazil, was not seen in India.People can now see a glimpse of the event as captured by the Solar Ultraviolet Imager onboard the NOAA's GOES-16 satellite, which caught a glimpse of the Moon's disk as it passed in front of the Sun. This partial solar #eclipse was only visible across the Southern Hemisphere, the agency said in a tweet.",
            "authorphoto": "https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/202105/india_today-1200x768.png?T_nem13aZnO3kckGUdUvsTnM19XsgtT0",
            "photo1": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/Solar_Eclipse_3.jpg?QdROSv6XlLaWLM3JSXj.C8kxLV13YPfC&size=770:433",
            "photo2": "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202205/Solar_Eclipse_2-x1199.jpg?svKQKvsV.skrbQ0Eou0YAkoJVgP_CXeR",
            "username": "India Today Web Desk",
            "categories": [
                "Technology"
            ],
            "claps": "400k",
            "date": "May 6, 2022",
            "time": "3 min read",
            "tag1": "NASA",
            "tag2": "Eclipse",
            "tag3": "Satellite",
            "createdAt": "2022-05-06T09:47:10.405Z",
            "updatedAt": "2022-05-06T09:47:10.405Z",
            "__v": 0
        }

    ]
    return (
        <>
            {console.log("mainpost :", mainpost, loading)}
            {console.log("props from home to main:", props.postDetails, loading)}

            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                    <Loader />
                </div>
            ) : (
                <>
                    <div className="mainPost">
                        {console.log("mainpost :",mainpost,mainpost.title)}
                        <div className="mainpostImg"><img src={props.postDetails.photo1} alt="Imageshow" /></div>
                        <NavLink className="MainImgLink2" to={`/article/{mainpost[0]._id}}`}>

                            <h5 className="postHeading">{props.postDetails.title }</h5>
                        </NavLink>
                        <span className="postThumbnail">{ }</span>
                        <span className="date"><code>   </code>/<code>   </code>{ }</span>
                        <hr></hr>
                    </div></>
            )}
        </>
    )
}
export default Mainpost;