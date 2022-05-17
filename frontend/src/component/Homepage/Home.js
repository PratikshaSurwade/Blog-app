import axios from "axios";
import Latest from "./latest";
import Posts from "../page2/page2sub2/posts";
import React, { useEffect, useState } from 'react';
import Bollysub from "../page2/page2sub1/bollysub1.js";
import "./../../Styles/home.css"
import Homeimage from "./homeimage";
import Homestory from "./homestories";
import "./../../component/page2/page2sub2/subpost.css";
import Mainimg from "./mainimg";
import { NavLink } from "react-router-dom";
import Loader from '../Loader/Loader';

function Home() {
    const [latestdata, setLatestdata] = useState([]);
    const [latestart, setLatestart] = useState([]);
    const [topposts, setTopposts] = useState([]);
    const [homestory, setHomestory] = useState([]);

    //loading effect
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        const getlatestdata = async () => {
            const res = await axios.get("https://blog-my-mern-app.herokuapp.com/thelatest");
            setLatestdata(res.data);
            setLoading(false);
        };
        getlatestdata();

        const getlatestart = async () => {
            const res = await axios.get("https://blog-my-mern-app.herokuapp.com/latestart");
            setLatestart(res.data);
            setLoading(false);
        };
        getlatestart();

        const gettopposts = async () => {
            const res = await axios.get("https://blog-my-mern-app.herokuapp.com/topposts");
            setTopposts(res.data);
            setLoading(false);
        };
        gettopposts();

        const gethomestory = async () => {
            const res = await axios.get("https://blog-my-mern-app.herokuapp.com/thelatest");
            setHomestory(res.data);
            setLoading(false);
        };
        gethomestory();
    }, []);


    return (
        <>

            <Mainimg />
            <h1 className="latestHead">The Latest</h1>
            <div className="cardContainer">
                {loading ? (
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <h2 style={{ textAlign: "center" }}>Loading...</h2>
                        <Loader />
                    </div>
                ) : (
                    <>
                        {latestdata.map((item) => (
                            <Latest key={item.id2} latestdata={item} />
                        ))}
                    </>)}
            </div>
            <h1 className="latestHead">Latest Articles</h1>
            <div className="articlePage">
                <div className="articles">
                    {loading ? (
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <h2 style={{ textAlign: "center" }}>Loading...</h2>
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {latestart.map((item) => (
                                <NavLink className="articles" to="/bollywood">

                                    <Bollysub key={item.id2} bollyNews={item} />

                                </NavLink>

                            ))}
                        </>
                    )}
                    {/* <i className="arrow fas fa-arrow-down"><blockquote>      </blockquote></i><span className="loadmore"> Load More</span> */}
                    <Homeimage />
                </div>
                <div className="sidebarContainer">
                    <div className="homeAdvertise">Advertisement</div>
                    <h1 className="posthead">Top Posts</h1>
                    <div className="sidebar">
                        <NavLink className="sidebar" to="/bollywood">
                            {loading ? (
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                                    <Loader />
                                </div>
                            ) : (
                                <>
                                    <Posts conTaint={topposts} />
                                </>
                            )}
                        </NavLink>
                    </div>
                </div>
            </div>
            <h1 className="latestHead1">Latest Stories</h1>
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                    <Loader />
                </div>
            ) : (
                <>
                    {homestory.map((item) => (
                        <Homestory key={item.id} storyinfo={item} />
                    ))}
                </>
            )}
            {/* <span className="viewmore"> View More</span><span><i className="arrow2 fas fa-arrow-right"></i></span> */}

        </>
    )

}
export default Home