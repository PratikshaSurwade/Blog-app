import axios from "axios";
import Latest from "./Latest.js";
import Posts from "../page2/page2sub2/posts";
import React, { useEffect, useState } from "react";
import Bollysub from "../page2/page2sub1/bollysub1.js";
import "./../../Styles/home.css";
import "./../../Styles/homeimg.css";
import Homeimage from "./Homeimage";
import Homestory from "./Homestories";
import "./../../component/page2/page2sub2/subpost.css";
import Mainimg from "./mainimg";
import Loader from "../Loader/Loader";
import baseUrl from "../../utils/baseUrl";
import Mainimggg from "./mainimg2";
import "./../../Styles/homepageimg.css";

function Home() {
    const [mainheadings, setMainheadings] = useState([]);

    const [latestdata, setLatestdata] = useState([]);
    const [latestart, setLatestart] = useState([]);
    const [homestory, setHomestory] = useState([]);

    const [homeimagedata, setHomeimagedata] = useState([]);
    const [topmainpost, setTopmainpost] = useState([]);
    const [topsubpost, setTopsubpost] = useState([]);

    //loading effect
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getmainimaga = async () => {
            const res = await axios.get(`${baseUrl}/api/main`);
            setMainheadings(res.data);

            setLoading(false);
        };
        getmainimaga();

        const getlatestdata = async () => {
            const res = await axios.get(`${baseUrl}/api/thelatest`);
            setLatestdata(res.data);
            setLoading(false);
        };
        getlatestdata();

        const getlatestart = async () => {
            const res = await axios.get(`${baseUrl}/api/latestarticle`);
            setLatestart(res.data);
            setLoading(false);
        };
        getlatestart();

        const gethomestory = async () => {
            const res = await axios.get(`${baseUrl}/api/homestory`);
            setHomestory(res.data);
            setLoading(false);
        };
        gethomestory();

        const gethomeimagedata = async () => {
            const res = await axios.get(`${baseUrl}/api/homeimg`);
            setHomeimagedata(res.data);
            setLoading(false);
        };
        gethomeimagedata();

        const getalltopposts = async () => {
            const res = await axios.get(`${baseUrl}/article`);

            var data1 = [];
            var data2 = [];

            for (let index = 0; index < 1; index++) {
                var xArray = res.data;
                var xArrayLength = xArray.length;
                var xRandomValue = xArray[Math.floor(Math.random() * xArrayLength)];
                data1.push(xRandomValue);
            }
            for (let index = 0; index < 3; index++) {
                var xArray = res.data;
                var xArrayLength = xArray.length;
                var xRandomValue = xArray[Math.floor(Math.random() * xArrayLength)];
                data2.push(xRandomValue);
            }
            
            setTopmainpost(data1);
            setTopsubpost(data2)
            setLoading(false);
        };
        getalltopposts();
    }, []);

    return (
        <>
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                    <Loader />
                </div>
            ) : (
                <>
                    <Mainimg data />
                </>
            )}
            <div class="grid-container">
                {loading ? (
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                        <h2 style={{ textAlign: "center" }}>Loading...</h2>
                        <Loader />
                    </div>
                ) : (
                    <>
                        {mainheadings.map((item) => (
                            <Mainimggg key={item.id2} mainheadings={item} />
                        ))}
                    </>
                )}
            </div>

            <h1 className="latestHead">The Latest</h1>
            <div className="cardContainer">
                {loading ? (
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                        <h2 style={{ textAlign: "center" }}>Loading...</h2>
                        <Loader />
                    </div>
                ) : (
                    <>
                        {latestdata.map((item) => (
                            <Latest key={item.id2} latestdata={item} />
                        ))}
                    </>
                )}
            </div>
            <h1 className="latestHead">Latest Articles</h1>
            <div className="articlePage">
                <div className="articles">
                    {loading ? (
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                            <h2 style={{ textAlign: "center" }}>Loading...</h2>
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {latestart.map((item) => (
                                <div className="articles">
                                    <Bollysub key={item.id2} bollyNews={item} />
                                </div>
                            ))}
                        </>
                    )}
                    {/* <i className="arrow fas fa-arrow-down"><blockquote>      </blockquote></i><span className="loadmore"> Load More</span> */}
                    {loading ? (
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                            <h2 style={{ textAlign: "center" }}>Loading...</h2>
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {homeimagedata.map((item) => (
                                <Homeimage key={item.id2} homeimagedata={item} />
                            ))}
                        </>
                    )}
                </div>
                <div className="sidebarContainer">
                    <div className="homeAdvertise">Advertisement</div>
                    <h1 className="posthead">Top Posts</h1>
                        <div className="sidebar">
                            {loading ? (
                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                                    <Loader />
                                </div>
                            ) : (
                                <>
                                    <Posts conTaint={topsubpost} topmainpost={topmainpost}/>
                                </>
                            )}
                    </div>
                </div>
            </div>
            <h1 className="latestHead1">Latest Stories</h1>
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
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

            <h5 className="copyrightfooter">
                Blog Website Developed by © Pratiksha Surwade
            </h5>
        </>
    );
}
export default Home;
