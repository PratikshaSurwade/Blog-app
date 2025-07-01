import React, { useEffect, useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import baseUrl from "./utils/baseUrl.js";
import authHeader from "./utils/Authheader.js";
import Navbar from "./component/NavbarPage.jsx";
import Home from "./component/Homepage/Mainhomepage.jsx";
import ScrollToTop from "./Scrolltop.jsx";
import Articlebyid from "./component/page3/ArticlePage.jsx";
import Categorypage from "./component/page2/Categoriespage.jsx";
import Login from "./component/Authpages/login/Login.jsx";
import Register from "./component/Authpages/register/Register.jsx";
import Profile from "./component/Profile/Profile.jsx";
import Editprofile from "./component/Profile/Editprofile.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  //Getting user datails for profile
  const [getUser, setGetUser] = useState(null);

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("blogUser"))
      ? JSON.parse(localStorage.getItem("blogUser"))
      : null;
    console.log(user);
    const getprofileDetails = async () => {
      if (user) {
        const { data } = await axios.get(`${baseUrl}/user/${user._id}`, {
          headers: authHeader(),
        });
        if (data.success === false) {
          localStorage.removeItem("blogUser");
        } else {
          setGetUser(data);
        }
      }
    };

    getprofileDetails();
  }, []);
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
          {console.log(getUser)}

          <Route path="/:category" element={<Categorypage />} exact />

          <Route
            path="/profile/:id"
            element={<Profile getUser={getUser} />}
            exact
          />
          <Route path="/addpost" element={<Editprofile />} exact />

          <Route
            path="/editpost/:postid"
            element={<Editprofile getUser={getUser} />}
            exact
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
