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
import baseUrl from "../../utils/baseUrl";

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
            const res = await axios.get(`${baseUrl}/thelatest`);
            setLatestdata(res.data);
            setLoading(false);
        };
        getlatestdata();

        const getlatestart = async () => {
            const res = await axios.get(`${baseUrl}/latestart`);
            setLatestart(res.data);
            setLoading(false);
        };
        getlatestart();

        const gettopposts = async () => {
            const res = await axios.get(`${baseUrl}/topposts`);
            setTopposts(res.data);
            setLoading(false);
        };
        gettopposts();

        const gethomestory = async () => {
            const res = await axios.get(`${baseUrl}/thelatest`);
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
                                <div className="articles" >

                                    <Bollysub key={item.id2} bollyNews={item} />

                                </div>
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
                        <div className="sidebar">
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
                        </div>
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
                    <div className="storyshow">

                        {homestory.map((item) => (
                            <Homestory key={item.id} storyinfo={item} />
                        ))}
                    </div>

                </>
            )}
            {/* <span className="viewmore"> View More</span><span><i className="arrow2 fas fa-arrow-right"></i></span> */}
            
            <div>
                <h6>iShop an E-commerce website developed by © Pratiksha Surwade</h6>
            </div>

        </>
    )

}
export default Home
