import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "./bollywood.css"

//Json importing
import Bollysub from "./page2sub1/bollysub1.js";
import Posts from "./page2sub2/posts";
// import postContain from "./bollydata1";
// import bollyNews from "./bollydata2";


class Bollywood extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            conTaint:[],
            bollyNews:[]
        };
        this.conTaint = this.conTaint.bind(this);
        this.bollyNews = this.bollyNews.bind(this);
    }
    
	componentDidMount() {
		this.setState(() => {
			this.conTaint();
            this.bollyNews();
		});
	   
    }
    conTaint() {
		axios.get("http://localhost:3001/bollydata1")
			.then(response => {
				this.setState({
					conTaint: response.data
				});
                console.log((response.data));
			})
			.catch(err => console.error(err));
            console.log("Fetching dataa bollydata 1");
	}
    bollyNews() {
		axios.get("http://localhost:3001/bollydata2")
			.then(response => {
				this.setState({
					
					bollyNews: response.data
				});
                console.log((response.data));
			})
			.catch(err => console.error(err));
            console.log("Fetching dataa bollydata 2");
	}



    render(){
        return(
            <>
                <div className="home">
                    <div className="bollywood">
                        <h1 className="bollyhead">Bollywood</h1>
                        {this.state.bollyNews.map((item)=>(
                            <NavLink className="bollywood" to="/article">
                                <Bollysub key={item.id2} bollyNews={item}/>
                            </NavLink>
                            ))}
                        <i className="arrow fas fa-arrow-down"><blockquote>      </blockquote></i><span className="loadmore"> Load More</span> 
                    </div>
                    <div className="posts">
                        <h1 className="posthead">Top Posts</h1>
                        <NavLink className="posts" to="/article">

                            <Posts conTaint={this.state.conTaint}/>
                        
                        </NavLink>
                        <div className="advertise">Advertisement</div>
                    </div>
                </div>
                
            </>
        )
    }
}
export default Bollywood;