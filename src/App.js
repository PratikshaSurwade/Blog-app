import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Heading from "./component/heading.js";
import Latest from "./component/latest.js";
import Bollywood from "./component/page2/bollywood.js";
import React from "react";
import Homepage from "./component/homepage.js";
import Article from "./component/page3/article.js";
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>



class App extends React.Component{
   
    render(){
        
        return(
            <BrowserRouter>
                <Heading />
                    <Routes>
                        <Route path="/home" element={<Homepage />} />
                        <Route path="/Latest" element={<Latest />} />
                        <Route path="/article" element={<Article />} />
                      
                        <Route path="/bollywood" element={<Bollywood />} />
                    </Routes>
            </BrowserRouter>
         );
    }
}
export default App;