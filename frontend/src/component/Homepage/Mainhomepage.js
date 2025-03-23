import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from 'react-router-dom';


import Bollysub from "../page2/page2sub1/Sidebarfirst.js";
import Homeimage from "./Singlead";
import Homestory from "./Story.js";
import Loader from "../Loader/Loading";
import baseUrl from "../../utils/baseUrl.js";
import Mainimage from "./Collageimgone";
import Latest from "./Latestnews";
import Posts from "../page2/page2sub2/Postscomponent.js";

import authHeader from "../../utils/Authheader.js";
import profile from "../../images/profile_icon.svg";
import Getuser from "../../utils/Getuser.js";
import "./../../component/page2/page2sub2/subpoststyle.css";
import "./../../Styles/mainhomestyle.css";
import "./../../Styles/homepageimg.css";

function Home() {
    // console.log("props",this.props)
    const [mainheadings, setMainheadings] = useState([]);

    const [latestdata, setLatestdata] = useState([]);
    const [latestart, setLatestart] = useState([]);
    const [homestory, setHomestory] = useState([]);

    const [homeimagedata, setHomeimagedata] = useState([]);
    const [topmainpost, setTopmainpost] = useState([]);
    const [topsubpost, setTopsubpost] = useState([]);

    //loading effect
    const [loading, setLoading] = useState(false);
    const [checkprofile, setCheckProfile] = useState(false)

    //Getting user datails for profile
    const [getUser, setGetUser] = useState(null);

    //Extend profile div
    const [isOpened, setIsOpened] = useState(false);

    // console.log(Getuser(),"getUser")
    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }

    const logoutHandler = () => {
        localStorage.removeItem("blogUser")
        setGetUser(null);
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("blogUser")) ? JSON.parse(localStorage.getItem("blogUser")) : null;
        setLoading(true);
        setCheckProfile(true)
        const getprofileDetails = async () => {
            if (user) {
                try {
                    const res = await axios.get(`${baseUrl}/user/${user._id}`, { headers: authHeader() })
                    setGetUser(res.data);
                    setCheckProfile(false);
                } catch (error) {
                    console.log(error.response.data.message)
                    // alert(error.response.data.message)
                    setGetUser(null);
                    setCheckProfile(false);
                    localStorage.removeItem("blogUser")

                }
            }
            else {
                setGetUser(null);
                setCheckProfile(false)
            }
            // try {
            //     const res = await axios.get(`${baseUrl}/user/${user._id}`, { headers: authHeader() })
            //     setGetUser(res.data);
            //     setCheckProfile(false);
            // } catch (error) {
            //     console.log(error.response.data.message)
            // alert(error.response.data.message)
            //     setGetUser(null);
            //     setCheckProfile(false);
            // localStorage.removeItem("blogUser")

            // }
        };

        getprofileDetails();
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
                var xArray1 = res.data;
                var xArray1Length = xArray1.length;
                var xRandomValue1 = xArray1[Math.floor(Math.random() * xArray1Length)];
                data1.push(xRandomValue1);
            }
            for (let index = 0; index < 3; index++) {
                var xArray2 = res.data;
                var xArray2Length = xArray2.length;
                var xRandomValue2 = xArray2[Math.floor(Math.random() * xArray2Length)];
                data2.push(xRandomValue2);
            }

            setTopmainpost(data1);
            setTopsubpost(data2)
            setLoading(false);
        };
        getalltopposts();

    }, []);

    return (
        <>
            <div className="TopBar">
                {checkprofile ?
                    <>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                            <div className="profileloaderhomepage"></div>
                        </div>
                    </> :
                    <>{(!getUser) ?
                        <>
                            <NavLink className="mainPageButtons" to="/login">Login</NavLink>|
                            <NavLink className="mainPageButtons" to="/register">Register</NavLink>
                        </> :
                        <>
                            <div className='topbarProfile'>
                                <span onClick={toggle} style={{ cursor: "pointer" }}><img className="profilePic" src={getUser.profilepic} alt="" /><span style={{ marginLeft: "3px" }}>{getUser.username}<i class="fa fa-caret-down" style={{ marginLeft: "3px" }}></i></span></span>

                                {/* {userInfo?`${profile}`:`${userInfo.profile}`} */}
                                {isOpened && (
                                    <span className="extendProfile">
                                        <NavLink to={`/profile/${getUser._id}`} style={{ textDecoration: "none", color: "black", border: "none" }}><button className="viewprofile">View Profile</button></NavLink>
                                        <button className="logout" onClick={logoutHandler}>LOGOUT</button>
                                    </span>
                                )}
                            </div>
                        </>}
                    </>
                }
            </div>

            {/* <Getuser /> */}
            <div className="grid-container">
                {loading ? (
                    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                        <h2 style={{ textAlign: "center" }}>Loading...</h2>
                        <Loader />
                    </div>
                ) : (
                    <>
                        {mainheadings.map((item) => (
                            <Mainimage key={item.id2} mainheadings={item} />
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
                                <Posts conTaint={topsubpost} topmainpost={topmainpost} />
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

        </>
    );
}
export default Home;
