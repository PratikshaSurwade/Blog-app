// export default function getUser() {
//     const user = JSON.parse(localStorage.getItem("blogUser"));
  
//     if (user && user.accessToken) {
//       return user;
//     //   return { token: user.accessToken };
//     } else {
//       return {};
//     }
// }

// import axios from "axios";
// import authHeader from './Authheader';
// import baseUrl from './baseUrl';

// const setUser = async () => {
//   try {
//         const user = JSON.parse(localStorage.getItem("blogUser")) ? JSON.parse(localStorage.getItem("blogUser")) : null;
//         if(user){
//           const res = await axios.get(`${baseUrl}/user/${user._id}`, { headers: authHeader() })
//           console.log(res.data)
//           return res.data;
//         }
//   } catch (error) {
//     return;
//   }
// };

// export default setUser;


import React, { useState, useEffect } from 'react';
import baseUrl from './baseUrl';
import axios from 'axios';
import authHeader from './Authheader';

import { useLocation, NavLink } from 'react-router-dom';

const Getuser = async () => {

    //Loading
    const [checkprofile, setCheckProfile] = useState(false)

    //Getting user datails for profile
    const [getUser, setGetUser] = useState({});

    //Extend profile div
    const [isOpened, setIsOpened] = useState(false);

    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
      }

    const logoutHandler = () => {
        localStorage.removeItem("blogUser")
        setGetUser(null);
    }
    console.log("props user",getUser)

    useEffect(() => {
        const user = JSON.stringify(localStorage.getItem("blogUser")) ? JSON.stringify(localStorage.getItem("blogUser")) : null;
        console.log(user);
        const getprofileDetails = async () => {
            if (user) {
                try {
                    const { data } = await axios.get(`${baseUrl}/user/${user._id}`, { headers: authHeader() })
                if (data.success === false) {
                    localStorage.removeItem("blogUser")
                    setGetUser(null);
                }
                else {
                    // console.log({...data,accessToken:authHeader().token})
                    console.log(data)
                    setGetUser(data);
                }
                } catch (error) {
                    console.log(error)
                    setGetUser(null);

                }
            }
        };
        // getprofileDetails();
    }, [])
    
  return getUser
}

export default Getuser


{/* <div className="TopBar">
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
                                <span onClick={toggle} style={{cursor:"pointer"}}><img className="profilePic" src={getUser.profilepic} alt="" /><span style={{marginLeft:"3px"}}>{getUser.username}<i class="fa fa-caret-down" style={{marginLeft:"3px"}}></i></span></span>
                                
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
            </div> */}
