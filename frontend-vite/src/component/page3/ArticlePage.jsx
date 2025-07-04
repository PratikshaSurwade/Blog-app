import React, { Component, useEffect, useState } from 'react';
import "./articlestyle.css";
import Footer from "./Footerside.jsx";
import axios from 'axios';
import Loader from '../Loader/Loading.jsx';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import baseUrl from '../../utils/baseUrl.js';
import authHeader from '../../utils/Authheader.js';

function Articlefun() {

    const location = useLocation()
    const [post, setPost] = useState({});
    const path = location.pathname.split("/")[2];
    let navigate = useNavigate();

    const [infoCard1, setinfoCard1] = useState([]);
    const [infoCard, setinfoCard] = useState([]);

    //loading effect
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);

    //Error
    const [error, setError] = useState(null)


    useEffect(() => {
        setLoading(true)

        const getPost = async () => {
            try {
                const res = await axios.get(`${baseUrl}/article/` + path, { headers: authHeader() });
                setPost(res.data);
                setLoading(false);
            } catch (error) {
                console.log(error.response.data.message)
                alert(error.response.data.message)
                navigate("/login");
            }

        };
        getPost();
        const fetchfooter1 = async () => {
            const res = await axios.get(`${baseUrl}/article`);
            var data1 = [];

            for (let index = 0; index < 3; index++) {
                var xArray = res.data;
                var xArrayLength = xArray.length;
                var xRandomValue = xArray[Math.floor(Math.random() * xArrayLength)];
                data1.push(xRandomValue);
            }
            setinfoCard1(data1);
            setLoading1(false);

        };
        const fetchfooter2 = async () => {
            const res = await axios.get(`${baseUrl}/article`);
            var data2 = [];

            for (let index = 0; index < 5; index++) {
                var xArray = res.data;
                var xArrayLength = xArray.length;
                var xRandomValue = xArray[Math.floor(Math.random() * xArrayLength)];
                data2.push(xRandomValue);
            }
            setinfoCard(data2);
            setLoading1(false);

        };
        fetchfooter1();
        fetchfooter2();
    }, [path]);


    return (
        <>
            {error &&
                <div class="alert alert-danger" style={{ margin: "1.5rem" }}>
                    {error}
                    <strong>Kindly <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</Link> Here</strong>
                </div>
            }
            {loading ? (
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                    <Loader />
                </div>
            ) : (
                <>
                    <div className="page">

                        <i className="articleImg2 fas fa-sign-language"></i><span className="articlePart2">{post.claps} claps</span>
                        <p><i className="articleImg3 fas fa-share-alt"></i><span className="articlePart2">Share this Profile</span></p>
                    </div>
                    <div className="Article">
                        <h2>{post.title}</h2>
                        <div className="topRight1">
                            <i className="topIcon fab fa-facebook-square"></i>
                            <i className="topIcon fab fa-twitter"></i>
                            <i className="topIcon fab fa-instagram"></i>
                            <i className="topIcon fab fa-youtube"></i>

                        </div>
                        <div className="topBar">
                            <div className="topLeft">
                                <img className="profileImage" src={post.authorphoto} alt="Profile"></img>

                            </div>
                            <div className="topCenter">
                                <h6>{post.username}</h6>
                                <p className="profileInfo">{post.date}</p>

                            </div>
                            <div className="topRight">
                                <i className="topIcon fab fa-facebook-square"></i>
                                <i className="topIcon fab fa-twitter"></i>
                                <i className="topIcon fab fa-instagram"></i>
                                <i className="topIcon fab fa-youtube"></i>

                            </div>
                        </div>
                        <img className="articleImg1" src={post.photo1} alt="article"></img>
                        <p className="articleInfo">{post.decription}</p>

                        <img className="articleImg1" src={post.photo2} alt="article"></img>
                        <div className="tag">
                            <button className="Tagbtn">{post.tag1}</button>
                            <button className="Tagbtn">{post.tag2}</button>
                            <button className="Tagbtn">{post.tag3}</button>
                        </div>
                        <i className="articleImg2 fas fa-sign-language"></i><span className="articlePart2">{post.claps} claps</span>
                        <hr></hr>
                        <div className="topBar">
                            <div className="topLeft">
                                <img className="profileImage1" src={post.authorphoto} alt="Profile"></img>

                            </div>
                            <div className="topCenter">
                                <p className="profileInfo"> WRITTEN BY</p>
                                <h6>{post.username}</h6>
                                <p className="profileInfo">{post.date} - {post.time}</p>

                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    {loading1 ? (
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <h2 style={{ textAlign: "center" }}>Loading...</h2>
                            <Loader />
                        </div>
                    ) : (
                        <Footer cardInfo1={infoCard1} cardInfo2={infoCard} />
                    )}

                </>
            )}

        </>
    )

}

export default Articlefun;