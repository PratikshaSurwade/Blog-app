import React, { Component, useEffect ,useState } from 'react';

import "./article.css";
import profile from "./../../images/profilepic.png";
import article1 from "./../../images/articlepic1.png";
import article2 from "./../../images/articlepic2.png";
import Footer from "./footer";
// import {useLocation} from 'react-router-dom'
// import CardDet1 from "./footerdata1";
// import cardDet2 from "./footerdata2";

import axios from 'axios';
import { useLocation } from 'react-router-dom';


function Articlefun (){
        
        const location = useLocation()
        const [post, setPost] = useState({});

        // console.log(location.pathname.split("/")[2]);
        const path = location.pathname.split("/")[2];    
        const[infoCard1 , setinfoCard1] = useState([]);
        const[infoCard , setinfoCard] = useState([]);
    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("https://blog-my-mern-app.herokuapp.com//article/" + path);
          console.log(res)
          setPost(res.data);
        //   setTitle(res.data.title);
        //   setDesc(res.data.desc);
        };
        getPost();
      }, [path]);  
    useEffect(() => {

        const fetchfooter1 = async () => {
          const res = await axios.get("https://blog-my-mern-app.herokuapp.com//footer1")
          setinfoCard1(res.data);
        };
        const fetchfooter2 = async () => {
            const res = await axios.get("https://blog-my-mern-app.herokuapp.com//footer2")
            setinfoCard(res.data);
          };
          fetchfooter1();
          fetchfooter2();
    },[]);

    
        return(
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

                    <Footer  cardInfo1={infoCard1} cardInfo2={infoCard} />
                
                

            </>
        )
    
}

export default Articlefun;