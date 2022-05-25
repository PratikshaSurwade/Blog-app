import React, { useEffect, useState } from 'react';

import { NavLink } from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';

import "./bollywood.css";
import "./page2sub1/bollysub1.css"

//Json importing
import Bollysub from "./page2sub1/bollysub1.js";
import Posts from "./page2sub2/posts";
import Loader from '../Loader/Loader';


function Categorypage() {
    const location = useLocation();
    // console.log(location.pathname.split("/")[1]);
    const path = location.pathname.split("/")[1];
    console.log(path.toLowerCase());

    const [conTaint, setconTaint] = useState([]);
    const [bollyNews, setbollyNews] = useState([]);
    const [mainItem, setmainItem] = useState([]);

    //loading effect
    const [loading, setLoading] = useState(false);
    //pagination
    // const [allPets, setAllPets] = useState([]);
    const [postcount, setPostcount] = useState(4);
  
    const loadmorePosts = (e) => {
        setPostcount(mainItem.length);
        // const val = (e.target.innerHTML)
        // console.log(val.innerHTML)
      };

    useEffect(() => {
        setLoading(true)

        const getPost = async () => {
            // const res = await axios.get("https://blog-my-mern-app.herokuapp.com/article?cat=" + path);
            const res = await axios.get("https://blog-my-mern-app.herokuapp.com/" + path);
            // console.log(res)
            setmainItem(res.data);
            setLoading(false);
            setPostcount(4)
        };
        getPost();
    }, [path]);

    useEffect(() => {
        setLoading(true)

        const fetchContaint = async () => {
            const res = await axios.get("https://blog-my-mern-app.herokuapp.com/topposts")
            setconTaint(res.data);
            setLoading(false);

        };
        fetchContaint();
    }, []);


    return (
        <>
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                    <Loader />
                </div>
            ) : (
                <>
                    <div className="home">
                        <div className="bollywood">
                            {/* <h1 className="bollyhead">{path}</h1>str.charAt(0).toUpperCase() + str.slice(1); */}
                            <h1 className="bollyhead">{path.charAt(0).toUpperCase() + path.slice(1)}</h1>
                            {mainItem.slice(0,postcount).map((item) => (
                                <Bollysub key={item.id2} bollyNews={item} />
                            ))}
                            <span className="loadmore" onClick={loadmorePosts} style={{display:"flex",alignItems:"center"}}>Load More<blockquote>      </blockquote><i className="arrow fas fa-arrow-down"></i></span>
                        </div>
                        <div className="posts">
                            <h1 className="posthead">Top Posts</h1>
                            <NavLink className="posts" to="/article">

                                <Posts conTaint={conTaint} />

                            </NavLink>
                            <div className="advertise">Advertisement</div>
                        </div>
                    </div>
                </>
            )}
        </>
    )

}
export default Categorypage;