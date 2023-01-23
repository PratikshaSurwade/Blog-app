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
import baseUrl from '../../utils/baseUrl';

function Categorypage() {
    const location = useLocation();
    // console.log(location.pathname.split("/")[1]);
    const path = location.pathname.split("/")[1];
    console.log(path.toLowerCase());

    const [conTaint, setconTaint] = useState([]);
    const [mainItem, setmainItem] = useState([]);

    //loading effect
    const [loading, setLoading] = useState(false);
    //pagination
    // const [allPets, setAllPets] = useState([]);
    const [postcount, setPostcount]  = useState(8);
    const [ expanded , setExpanded ] = useState(false);

    //
    const [topmainpost, setTopmainpost] = useState([]);
    const [topsubpost, setTopsubpost] = useState([]);
  
    const loadmorePosts = (e) => {
        if(postcount === 4 ){
            setPostcount(mainItem.length);
            setExpanded(true);
        }
        else{ 
            setPostcount(4);
            setExpanded(false);
        }
        // const val = (e.target.innerHTML)
        // console.log(val.innerHTML)
      };

    useEffect(() => {
        setLoading(true)

        const getPost = async () => {

            const res = await axios.get(`${baseUrl}/api/` + path);
            setmainItem(res.data);
            setLoading(false);
            setPostcount(4)
        };
        getPost();

        
        const fetchContaint = async () => {
            const res = await axios.get(`${baseUrl}/article`)
            setconTaint(res.data);
            setLoading(false);
        };
        fetchContaint();

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

    }, [path]);



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

                            <h1 className="bollyhead">{path.charAt(0).toUpperCase() + path.slice(1)}</h1>
                            {mainItem.slice(0,postcount).map((item) => (
                                <Bollysub key={item.id2} bollyNews={item} />
                            ))}
                            <span className="loadmore" onClick={loadmorePosts} style={{display:"flex",alignItems:"center"}}>
                                
                                {expanded ? ( 
                                    <>Show Less<i className="arrow fas fa-arrow-up"></i>
                                </>
                                 ) :
                                ( <>Show More<i className="arrow fas fa-arrow-down"></i>
                                </>
                                 )}
                                
                            </span>
                        </div>
                        <div className="posts">
                            <h1 className="posthead">Top Posts</h1>
                            <div className="posts">

                            <>
                                    <Posts conTaint={topsubpost} topmainpost={topmainpost}/>
                                </>
                            </div>
                            <div className="advertise">Advertisement</div>
                        </div>
                    </div>
                </>
            )}
            <h5 className="copyrightfooter">Blog Website Developed by © Pratiksha Surwade</h5>
        </>
    )
}
export default Categorypage;