import React from "react";
import './../Styles/heading.css';
import { NavLink } from "react-router-dom";



class Heading extends React.Component{

    render(){
        return(
            <>
                <div className="heading">
                <h1 className="headstyle">
                    <span className="headstyle1">The</span>
                    <span className="headstyle2"> Siren</span>
                    <div className="sideIcon"><i class="fas fa-align-justify" ></i></div>
                </h1>
                <div className="Navbarstyle" id="Navbarstyle2">
                    <NavLink className="Linkitems" to="/home">Home</NavLink>
                    <NavLink className="Linkitems" to="/bollywood">Bollywood</NavLink>
                    <NavLink className="Linkitems" to="/Latest">Technology</NavLink>
                    <NavLink className="Linkitems" to="/article">Hollywood</NavLink>
                    <NavLink className="Linkitems" to="/Storrry">Fitness</NavLink>
                    <NavLink className="Linkitems" to="/food">Food</NavLink>

                </div>
                <hr style={{marginLeft:"10%",marginRight:"10%"}}></hr>

                </div>
            </>
        )
    }
}

export default Heading;