import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl.js";
import mainpostimage from "./../../../images/blogimg5.png";
import "./subpoststyle.css";
import { NavLink } from "react-router-dom";
import Loader from "../../Loader/Loading";

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

    return (
        <>

            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                    <Loader />
                </div>
            ) : (
                <>
                    <div className="mainPost">
                        <div className="mainpostImg"><img src={props.postDetails.photo1} alt="Imageshow" /></div>
                        <NavLink className="MainImgLink2" to={`/article/${props.postDetails._id}`}>

                            <h5 className="postHeading">{props.postDetails.title}</h5>
                        </NavLink>
                        <span className="postThumbnail">{props.postDetails.categories[0].charAt(0).toUpperCase() + props.postDetails.categories[0].slice(1)}</span>
                        <span className="date"><code>   </code>/<code>   </code>{props.postDetails.date}</span>
                        <hr></hr>
                    </div></>
            )}
        </>
    )
}
export default Mainpost;