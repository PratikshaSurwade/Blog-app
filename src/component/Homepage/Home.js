
import Latest from "./Latest";
import Posts from "../page2/page2sub2/Posts";
import React from "react";
import Bollysub from "../page2/page2sub1/Bollysub1.js";
import "./../../Styles/home.scss"
import Homeimage from "./Homeimage";
import Homestory from "./Homestories";
import "./../../component/page2/page2sub2/subpost.scss";
import Mainimg from "./Mainimg";
import { NavLink } from "react-router-dom";

//Import json 

import postContain from "./latestart.json"
import postConTain from "../page2/bollywood.json";
import HomeStoryy from "../page2/bollywood.json";

//importing axios

import { Component } from "react";
import axioms from 'axios';

class Homepage extends React.Component{
    state={
        bollyNew:postContain,
        conTaint:postConTain,
        homeStory:[],
    }
    componentDidMount(){
        axioms.get("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=55f9f9b698ee412c88a4a35a13e328e4")
        .then((response)=>{
            console.log(response.json());
            return response.json();
        }).then((data) => {
            this.setState({
                homeStory: data.articles,
            })
        })
        .catch((error)=>
            console.log(error))
            console.log("fetching data")
    }
    render(){
    return(
        <>
            <Mainimg />
            <Latest />
            <h1 className="latestHead">Latest Articles</h1>
            <div className="articlePage">
                <div className="articles">
                    {this.state.bollyNew.map((item)=>(
                        <NavLink className="articles" to="/bollywood">

                        <Bollysub key={item.id2} bollyNews={item}/>

                        </NavLink>
                        
                    ))}
                    <i className="arrow fas fa-arrow-down"><blockquote>      </blockquote></i><span className="loadmore"> Load More</span> 
                    <Homeimage />
                </div>
                <div  className="sidebarContainer">
                    <div className="homeAdvertise">Advertisement</div>
                    <h1 className="posthead">Top Posts</h1>
                    <div className="sidebar">
                        <NavLink className="sidebar" to="/bollywood">
                            <Posts conTaint={this.state.conTaint} />
                        </NavLink>
                    </div>
                </div>
            </div>
            <h1 className="latestHead1">Latest Stories</h1>
        
            <NavLink className="story" to="/bollywood">
                    {this.state.homeStory.map((item)=>(
                        // {this.state.postList.map((item)=>(<div key={item.id}>
                    <Homestory key={item.id} storyinfo={item}/> 
                    ))}  
            </NavLink>
            <span className="viewmore"> View More</span><span><i className="arrow2 fas fa-arrow-right"></i></span>
        </>
    )
}
}
export default Homepage;

/*******
import { Component } from "react";
import axioms from 'axios';

class App extends Component{
    state={
        postList:[],
    }
    componentDidMount(){
        axioms.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            console.log(response.data);
            this.setState({
                postList: response.data,
            })

        })
        .catch((error)=>
            console.log(error))
            console.log("fetching data")
    }
    render(){
        return(
            <>
                <h1>App</h1>
                {this.state.postList.map(
                    (item)=>(
                        <div key={item.id}>
                            <h3>{item.userId}</h3>
                            <h4>{item.id}</h4>
                            <p>{item.title}</p>
                            <h6>{item.completed}</h6>

                        </div>
                    )
                )}
            </>
        )
    }
} 



 */