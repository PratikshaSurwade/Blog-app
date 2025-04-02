import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import authHeader from '../../utils/Authheader';
import baseUrl from '../../utils/baseUrl';
import "./profilestyle.css";

const Profile = () => {

    const location = useLocation()
    const path = location.pathname.split("/")[2];
    console.log(path);
    //loading effect
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(false);

    //Getting user datails for profile
    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);

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

                        </div>
                    </>
                }
                <hr></hr>
                {console.log(post, "post", post.length)}
                {(post.length === 0)
                    ?
                    <><h3>You Dont have any Posts - Click Below to </h3>
                        <NavLink to={`/addpost`} style={{ textDecoration: "none", color: "black", border: "none" }}>
                            <span style={{ display: "flex", alignItems: "center" }}>Add New Post -
                                <i style={{ color: "blue", marginRight: "2px" }} className="fas fa-edit d-block" ></i>
                            </span>
                        </NavLink></>
                    :

                    <table cellpadding="4px" align="center" style={{ marginTop: "2rem", width: "100%" }} >
                        <thead >
                            <td ><strong>{user.username} Your posts</strong><hr></hr></td>
                            <td>
                                <NavLink to={`/addpost`} style={{ textDecoration: "none", color: "black", border: "none" }}>
                                    <span style={{ display: "flex", alignItems: "center" }}>Add New Post -
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
                                            <tr className='post-card'>
                                                <td><NavLink className="MainImgLink2" to={`/article/${item._id}`}>{item.title}</NavLink></td>
                                                <td>
                                                    <span className="extendProfile">
                                                        <NavLink to={`/editpost/${item._id}`} style={{ textDecoration: "none", color: "black", border: "none" }}><button class="edit-button" title='Edit Post'>
                                                        <i style={{ color: "green", marginRight: "2px" }} className="fas fa-pencil-alt d-block" ></i></button></NavLink>
                                                        <button className="logout delete-button" title='Delete Post' onClick={() => deletePost(item._id)}><i style={{ color: "red", cursor: "pointer" }} className="fas fa-trash-alt d-block"></i>
                                                        </button>
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


                <section class="posts-section">
                    <h2 class="posts-heading">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user user-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Your Posts
                    </h2>
                    {loading1 ? (
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} >
                            <div className="profileloader"></div>
                        </div>
                    ) : (
                        <>
                            {post.map((item) =>
                                <>
                                    <div class="post-card">
                                        <div class="post-header">
                                            <div class="post-user-image-container">
                                                <img src={item.photo1} alt="https://source.unsplash.com/150x150/?peep" class="post-user-image"></img>
                                            </div>
                                            <div>
                                                <NavLink className="MainImgLink2" to={`/article/${item._id}`}><h3 class="post-title">{item.title}</h3></NavLink>
                                                <p class="post-meta">by {item.username} • {item.date}</p>
                                            </div>
                                        </div>
                                        <div class="post-actions">
                                            <button class="edit-button" title='Edit Post'>
                                                <i style={{ color: "green", marginRight: "2px" }} className="fas fa-pencil-alt d-block" ></i>                                            </button>
                                            <button class="delete-button" title='Delete Post'>
                                                <i style={{ color: "red", cursor: "pointer" }} className="fas fa-trash-alt d-block"></i>                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                    {
                        <div class="no-posts-message">
                            No posts yet. Create your first post above!
                        </div>
                    }
                </section>
            </div>
        </>
    )
}

export default Profile