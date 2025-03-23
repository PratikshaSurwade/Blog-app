import React, { useEffect, useState } from 'react';

import { NavLink } from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import authHeader from '../../utils/Authheader';

import "./bollywood.css";
import "./page2sub1/bollysub1style.css"

//Json importing
import Bollysub from "./page2sub1/Sidebarfirst.js";
import Posts from "./page2sub2/Postscomponent.js";
import Loader from '../Loader/Loading';
import baseUrl from '../../utils/baseUrl.js';

function Categorypage() {
    const location = useLocation();
    const path = location.pathname.split("/")[1];

    const [conTaint, setconTaint] = useState([]);
    const [mainItem, setmainItem] = useState([]);

    //loading effect
    const [loading, setLoading] = useState(false);
    //pagination
    const [postcount, setPostcount] = useState(8);
    const [expanded, setExpanded] = useState(false);

    //
    const [topmainpost, setTopmainpost] = useState([]);
    const [topsubpost, setTopsubpost] = useState([]);

    const loadmorePosts = (e) => {
        if (postcount === 4) {
            setPostcount(mainItem.length);
            setExpanded(true);
        }
        else {
            setPostcount(4);
            setExpanded(false);
        }
    };

    //loading effect
    const [checkprofile, setCheckProfile] = useState(false)

    //Getting user datails for profile
    const [getUser, setGetUser] = useState(null);

    //Extend profile div
    const [isOpened, setIsOpened] = useState(false);
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
        const getPost = async () => {

            const res = await axios.get(`${baseUrl}/api/` + path);
            setmainItem(res.data);
            setLoading(false);
            setPostcount(4)
        };
        getPost();


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

    }, [path]);



    return (
        <>

            <div className="TopBar">
                {/* {console.log("get",!getUser)} */}
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
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                    <Loader />
                </div>
            ) : (
                <>
                    <div className="home">
                        <div className="bollywood">

                            <h1 className="bollyhead">{path.charAt(0).toUpperCase() + path.slice(1)}</h1>
                            {mainItem.slice(0, postcount).map((item) => (
                                <Bollysub key={item.id2} bollyNews={item} />
                            ))}
                            <span className="loadmore" onClick={loadmorePosts} style={{ display: "flex", alignItems: "center" }}>

                                {expanded ? (
                                    <>Show Less<i className="arrow fas fa-arrow-up"></i>
                                    </>
                                ) :
                                    (<>Show More<i className="arrow fas fa-arrow-down"></i>
                                    </>
                                    )}

                            </span>
                        </div>
                        <div className="posts">
                            <h1 className="posthead">Top Posts</h1>
                            <div className="posts">

                                <>
                                    <Posts conTaint={topsubpost} topmainpost={topmainpost} />
                                </>
                            </div>
                            <div className="advertise">Advertisement</div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default Categorypage;