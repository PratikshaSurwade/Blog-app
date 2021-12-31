import React from "react";
import './../Styles/heading.scss';
import { NavLink } from "react-router-dom";

import "./../Styles/header.scss"

class Heading extends React.Component{

    render(){
        return(
            <>
                <div className="heading">
                <div className="headingOne">
                  <h1 className="headstyle">
                    <span className="headstyle1">The</span>
                    <span className="headstyle2"> Siren</span>
                  </h1>
                  <div className="Navbarstyle" id="Navbarstyle2">
                    <NavLink className="Linkitems" to="/home">Home</NavLink>
                    <NavLink className="Linkitems" to="/bollywood">Bollywood</NavLink>
                    <NavLink className="Linkitems" to="/article">Technology</NavLink>
                    <NavLink className="Linkitems" to="/hollywood/article">Hollywood</NavLink>
                    <NavLink className="Linkitems" to="/fitness/article">Fitness</NavLink>
                    <NavLink className="Linkitems" to="/food/article">Food</NavLink>

                  </div>
                  <hr style={{marginLeft:"10%",marginRight:"10%"}}></hr>
                </div>
                



                <div className="headingTwo">
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex aligns-items-center">
                  <div className="container-fluid">
                    <h1 className="headstyle">
                      <span className="headstyle1">The</span>
                      <span className="headstyle2"> Siren</span>
                    </h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-bs-light" id="navbarSupportedContent">
                      <center><ul className="navbar-nav mr-auto ml-auto mb-2 ">
                      <li className="nav-item">
                      <NavLink className="Linkitems" to="/home">Home</NavLink>
                        <hr className="navHr"></hr>
                      </li>
                      <li className="nav-item">
                      <NavLink className="Linkitems" to="/bollywood">Bollywood</NavLink>
                        <hr className="navHr"></hr>
                      </li>
                      <li className="nav-item">
                      <NavLink className="Linkitems" to="/technology/article">Technology</NavLink>
                      <hr className="navHr"></hr>
                      </li>
                      <li className="nav-item">
                      <NavLink className="Linkitems" to="/hollywood/article">Hollywood</NavLink>
                        <hr className="navHr"></hr>
                      </li>
                      <li className="nav-item">
                      <NavLink className="Linkitems" to="/fitness/article">Fitness</NavLink>
                        <hr className="navHr"></hr>
                      </li>
                      <li className="nav-item">
                      <NavLink className="Linkitems" to="/food/article">Food</NavLink>
                        <hr className="navHr"></hr>
                      </li>
                    </ul></center>
                    
      
                  </div>
                </div>
              </nav>
              </div>


                

                </div>

            </>
        )
    }
}

export default Heading;