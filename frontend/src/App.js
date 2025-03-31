import React, { useEffect, useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import baseUrl from "./utils/baseUrl.js";
import authHeader from "./utils/Authheader.js";
import Navbar from "./component/NavbarPage.js";
import Home from "./component/Homepage/Mainhomepage.js";
import ScrollToTop from "./Scrolltop.js"
import Articlebyid from "./component/page3/ArticlePage.js";
import Categorypage from "./component/page2/Categoriespage.js";
import Login from "./component/Authpages/login/Login.js";
import Register from "./component/Authpages/register/Register.js";
import Profile from "./component/Profile/Profile.js";
import Editprofile from "./component/Profile/Editprofile.js";
import Footer from "./component/Footer.js";

<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

function App() {

    //loading effect
    const [loading, setLoading] = useState(false);
    const [checkprofile, setCheckProfile] = useState(false)

    //Getting user datails for profile
    const [getUser, setGetUser] = useState(null);

    useEffect(() => {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("blogUser")) ? JSON.parse(localStorage.getItem("blogUser")) : null;
        console.log(user)
        const getprofileDetails = async () => {
            if (user) {
                const { data } = await axios.get(`${baseUrl}/user/${user._id}`, { headers: authHeader() })
                if (data.success === false) {
                    localStorage.removeItem("blogUser");
                    console.log("false")
                }
                else {
                    console.log("true")
                    // console.log({...data,accessToken:authHeader().token})
                    setGetUser(data);
                    console.log(getUser, "inuseee")
                    setLoading(false)
                }
            }
        };
        getprofileDetails();

    }, [])
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home getUser />} exact />
                    <Route path="/article/:id" element={<Articlebyid />} exact />
                    <Route path="/login" element={<Login />} exact />
                    <Route path="/register" element={<Register />} exact />

                    <Route path="/:category" element={<Categorypage />} exact />

                    <Route path="/profile/:id" element={<Profile getUser={getUser} />} exact />
                    <Route path="/addpost" element={<Editprofile />} exact />

                    <Route path="/editpost/:postid" element={<Editprofile getUser={getUser} />} exact />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}
export default App;