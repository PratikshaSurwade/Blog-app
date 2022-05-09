import React, { Component, useEffect ,useState } from 'react';

import { NavLink } from "react-router-dom";
import axios from "axios";
import { useLocation } from 'react-router-dom';

import "./bollywood.css"

//Json importing
import Bollysub from "./page2sub1/bollysub1.js";
import Posts from "./page2sub2/posts";
// import postContain from "./bollydata1";
// import bollyNews from "./bollydata2";


function Categorypage (){
    const location = useLocation();
    console.log(location.pathname.split("/")[1]);
    const path = location.pathname.split("/")[1];

    const[conTaint , setconTaint] = useState([]);
    const[bollyNews , setbollyNews] = useState([]);
    const[technology , settechnology] = useState([]);
    const [ mainItem , setmainItem] = useState([]);

    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("https://blog-my-mern-app.herokuapp.com//" + path);
          console.log(res)
          setmainItem(res.data);
        //   setTitle(res.data.title);
        //   setDesc(res.data.desc);
        };
        getPost();
      }, [path]);


    useEffect(() => {
        const fetchContaint = async () => {
          const res = await axios.get("https://blog-my-mern-app.herokuapp.com//topposts")
          setconTaint(res.data);
        };
          fetchContaint();
    },[]);
        
    
        return(
            <>
                <div className="home">
                    <div className="bollywood">
                        {/* <h1 className="bollyhead">{path}</h1>str.charAt(0).toUpperCase() + str.slice(1); */}
                        <h1 className="bollyhead">{path.charAt(0).toUpperCase() + path.slice(1)}</h1>
                        {console.log(bollyNews)}
                        {mainItem.map((item)=>(
                                <Bollysub key={item.id2} bollyNews={item}/>
                            ))}
                        <i className="arrow fas fa-arrow-down"><blockquote>      </blockquote></i><span className="loadmore"> Load More</span> 
                    </div>
                    <div className="posts">
                        <h1 className="posthead">Top Posts</h1>
                        <NavLink className="posts" to="/article">

                            <Posts conTaint={conTaint}/>
                        
                        </NavLink>
                        <div className="advertise">Advertisement</div>
                    </div>
                </div>
                
            </>
        )
    
}
export default Categorypage;