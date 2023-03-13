import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import authHeader from '../../utils/Authheader';
import baseUrl from '../../utils/baseUrl';

import "./profilestyle.css";



const Profile = () => {

    const location = useLocation()
    const path = location.pathname.split("/")[2];
    console.log(path)

    //loading effect
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);

    //Getting user datails for profile
    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);

    const [count, setCount] = useState(1);

    let navigate = useNavigate();


    const deletePost = async (postId) => {
        console.log(postId)
        try {
            const res = await axios.delete(`${baseUrl}/post/${postId}`, { headers: authHeader() });
            window.location.reload();

        } catch (error) {
            alert(error.res.data.message);
        }

    }

    useEffect(() => {
        setLoading(true);
        setLoading1(true);

        const getprofileDetails = async () => {
            try {
                const res = await axios.get(`${baseUrl}/user/${path}`, { headers: authHeader() })
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                alert(error.response.data.message)
                navigate("/login");
            }
        };

        getprofileDetails();

        const getUserPosts = async () => {
            const { data } = await axios.get(`${baseUrl}/user/${path}/posts`, { headers: authHeader() })
            if (data.success === false) {
                localStorage.removeItem("blogUser");
                navigate("/login")
            }
            else {
                // console.log({...data,accessToken:authHeader().token})
                setPost(data);
                setLoading1(false)
            }
        };

        getUserPosts();

    }, [])

    return (
        <>
            <div className='PageFormate'>
                {/* <h1>User Details</h1> */}
                {(loading) ?
                    <>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                            <div className="profileloader"></div>
                        </div>
                    </> :
                    <>
                        <div style={{ fontSize: "larger" }} className='profile'>
                            <div style={{ margin: "0.5rem 0px 0.5rem " }}>UserName : <strong>{user.username}</strong></div>
                            <div>Profile Photo : <img className="profilePhoto" src={user.profilepic}></img></div>
                            {/* bgcolor="#cccccc" */}
                            {/* <div className='userDeTails'>
                                <table  align="center" cellpadding="4px">
                                    <tbody>
                                        <tr border="1px">
                                            <td  border-bottom="1px solid #ddd" color='#fdfdfd'>User Name</td>
                                            <td border-bottom="1px solid #ddd">{user.username}</td>

                                        </tr>
                                        <tr>
                                            <td  border-bottom="1px solid #ddd">Profile</td>
                                            <td border-bottom="1px solid #ddd"><img className="profilePhoto" src={user.profilepic}></img></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> */}
                            {/* <NavLink to="/profile"><img className="profilePhoto" src={user.profilepic} alt="" /><span style={{ textDecoration: "none" }}>{user.username.split(" ")[0]}</span></NavLink> */}
                            {/* {userInfo?`${profile}`:`${userInfo.profile}`} */}

                            {/* <NavLink to={`/addpost`}>
                                <i
                                    style={{ color: "blue" }}
                                    className="fas fa-edit d-block"
                                ></i>
                            </NavLink> */}

                        </div>
                    </>
                }
                <hr></hr>

                {/* <div style={{ marginTop: "2rem",display:"flex" }} >
                    <h6>{user.username} Your posts</h6>
                    <NavLink to={`/addpost`} style={{ textDecoration: "none", color: "black", border: "none" }}>
                        <span>Add New Post
                            <i
                                style={{ color: "blue" }}
                                className="fas fa-edit d-block"
                            ></i></span>
                    </NavLink>
                </div> */}
{console.log(post,"post",post.length)}
                {(post.length===0)
                ?
                <><h3>You Dont have any Posts - Click Below to </h3>
                <NavLink to={`/addpost`} style={{ textDecoration: "none", color: "black", border: "none" }}>
                                <span style={{ display:"flex" , alignItems:"center"}}>Add New Post -  
                                     <i style={{ color: "blue", marginRight: "2px" }} className="fas fa-edit d-block" ></i>
                                </span>
                            </NavLink></>
                :

                <table  cellpadding="4px" align="center" style={{ marginTop: "2rem", width:"100%" }} >
                    <thead >
                        <td ><strong>{user.username} Your posts</strong><hr></hr></td>
                        <td>
                            <NavLink to={`/addpost`} style={{ textDecoration: "none", color: "black", border: "none" }}>
                                <span style={{ display:"flex" , alignItems:"center"}}>Add New Post -  
                                     <i style={{ color: "blue", marginRight: "2px" }} className="fas fa-edit d-block" ></i>
                                </span>
                            </NavLink>
                            <hr></hr>
                        </td>
                        <td></td>
                    </thead>
                    <thead className="tablehead" bgcolor="#f8f9fa" >
                        <td  >Post Title</td>
                        <td></td>
                    </thead>
                    <tbody border="1px" fontSize="small" >

                        {loading1 ? (
                            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                                <div className="profileloader"></div>
                            </div>
                        ) : (
                            <>
                                {post.map((item) =>
                                    <>
                                        <tr>
                                            <td><NavLink className="MainImgLink2" to={`/article/${item._id}`}>{item.title}</NavLink></td>
                                            {/* <td><NavLink to={`/editpost/${item._id}`}><button>edit</button></NavLink><button onClick={() => deletePost(item._id)}>delete</button></td> */}
                                            <td>
                                                <span className="extendProfile">
                                                    <NavLink to={`/editpost/${item._id}`} style={{ textDecoration: "none", color: "black", border: "none" }}><button className="viewprofile">Edit Post</button></NavLink>
                                                    <button className="logout" onClick={() => deletePost(item._id)}>Delete</button>
                                                </span>
                                            </td>
                                        </tr>
                                    </>
                                )}
                            </>
                        )}

                    </tbody>
                </table>
}
            </div>
            
            
        </>
    )
}

export default Profile