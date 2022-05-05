import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Navbar from "./component/navbar.js";
import Bollywood from "./component/page2/bollywood.js";
import Homepage from "./component/Homepage/Home.js";
import Article from "./component/page3/article.js";
import ScrollToTop from "./Scrolltop.js"
import Articlebyid from "./component/page3/article2.js";
import Articlefun from "./component/page3/article3.js";

<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

class App extends React.Component{  
    render(){      
        return(
            <BrowserRouter>
                <Navbar />
                <ScrollToTop />
                    <Routes>
                            <Route path="/" element={<Homepage />} exact />
                            <Route path="/home" element={<Homepage />} exact />
                            <Route path="/bollywood" element={<Bollywood />} exact />
                            {/* <Route exact path="/article/:id" element={props => {
                            const{
                                match: {
                                    params: { id }
                                }
                            } = props;
                            return(
                            <Articlebyid {...props}/>
                            );
                            }} /> */}
                            {/* <Route exact path="/article/:id" render={props => {
                            const{
                                match: {
                                    params: { id }
                                }
                            } = props;
                            return(
                            <Articlebyid key={`id=${id}`} {...props}/>
                            );
                            }} /> */}
                            <Route path="/article/:id" element={<Articlebyid /> } exact />
                            <Route path="/article" element={<Article />} exact />
                            <Route path="/fitness/article" element={<Article />} exact />
                            <Route path="/food/article" element={<Article />} exact />
                    </Routes>
            </BrowserRouter>
         );
    }
}
export default App;