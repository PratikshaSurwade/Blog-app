import React, { useEffect, useState } from "react";
import { BrowserRouter ,NavLink} from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Navbar from "./component/NavbarPage.js";
import Home from "./component/Homepage/Mainhomepage.js";
import ScrollToTop from "./Scrolltop.js"
import Articlebyid from "./component/page3/ArticlePage.js";
import Categorypage from "./component/page2/Categoriespage.js";
import Login from "./component/Authpages/login/Login.js";
import Register from "./component/Authpages/register/Register.js";
// import { Jwt } from "jsonwebtoken";
// import jwt from "jsonwebtoken";

<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

function App (){  
        
        return(
                <>
            <BrowserRouter>
                <Navbar />
                <ScrollToTop />
                    <Routes>
                            <Route path="/" element={<Home />} exact />

                            <Route path="/bollywood" element={<Categorypage />} exact />
                            <Route path="/technology" element={<Categorypage />} exact />
                            <Route path="/hollywood" element={<Categorypage />} exact />
                            <Route path="/fitness" element={<Categorypage />} exact />
                            <Route path="/food" element={<Categorypage />} exact />

                            <Route path="/article/:id" element={<Articlebyid />} exact />
                            <Route path="/login" element={<Login />} exact />
                            <Route path="/register" element={<Register />} exact />
                            
                            

                    </Routes>
                    
            </BrowserRouter>
            
            </>
            
         );
}
export default App;