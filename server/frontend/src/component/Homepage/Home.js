import axios from "axios";
import Latest from "./latest";
import Posts from "../page2/page2sub2/posts";
import React from "react";
import Bollysub from "../page2/page2sub1/bollysub1.js";
import "./../../Styles/home.css"
import Homeimage from "./homeimage";
import Homestory from "./homestories";
import "./../../component/page2/page2sub2/subpost.css";
import Mainimg from "./mainimg";
import { NavLink } from "react-router-dom";

class Homepage extends React.Component{
    /*
    state={
        latestdata : latestdata,
        latestart:postContain,
        conTaint:postConTain,
        homeStory:HomeStoryy,
    }
    */
    constructor(props){
        super(props);
        this.state={
            mainImg:[],
            latestdata :[],
            latestart:[],
            conTaint:[],
            homeStory:[]
        };
        this.mainImg = this.mainImg.bind(this);
        this.latestdata = this.latestdata.bind(this);
        this.latestart = this.latestart.bind(this);
        this.conTaint = this.conTaint.bind(this);
        this.homeStory = this.homeStory.bind(this);
        
    }
    

	componentDidMount() {
        
		this.setState(() => {
            this.mainImg();
            this.latestdata();
            this.latestart();
			this.conTaint();
            this.homeStory();
            
		});
	   
    }
    mainImg(){
        axios.get("http://localhost:7001/homepage")

			.then(response => {
				this.setState({
					mainImg: response.data
				});
                // console.log((response.data));
			})
			.catch(err => console.error(err));
    }
    latestdata() {
		// axios.get("https://blog-app-be.herokuapp.com/thelatest")
        axios.get("http://localhost:7001/thelatest")

			.then(response => {
				this.setState({
					latestdata: response.data
				});
                // console.log((response.data));
			})
			.catch(err => console.error(err));
            console.log("Fetching dataa bollydata 1/homedata 1");
	}
    latestart() {
		// axios.get("https://blog-app-be.herokuapp.com/latestart")

		axios.get("http://localhost:7001/latestart")
        .then(response => {
				this.setState({
					latestart: response.data
				});
                // console.log((response.data));
			})
			.catch(err => console.error(err));
            console.log("Fetching dataa bollydata 1/homedata 1");
	}
    conTaint() {
		// axios.get("https://blog-app-be.herokuapp.com/bollydata1")
		axios.get("http://localhost:7001/topposts")
        .then(response => {
				this.setState({
					conTaint: response.data
				});
                // console.log((response.data));
			})
			.catch(err => console.error(err));
            console.log("Fetching dataa homedata2");
	}
    homeStory() {
		// axios.get("https://blog-app-be.herokuapp.com/homestory")
		axios.get("http://localhost:7001/homestory")
			.then(response => {
				this.setState({		
					homeStory: response.data
				});
                // console.log((response.data));
			})
			.catch(err => console.error(err));
            console.log("Fetching dataa hoemstorydata 3");
	}

    render(){
    return(
        <>
            
            {/* {this.state.mainImg.map((item)=>(
                            <Mainimg key={item._id} mainimg={item}/>


                ))} */}
                <Mainimg />
            <h1 className="latestHead">The Latest</h1>
            <div className="cardContainer">
                {this.state.latestdata.map((item)=>(
                            <Latest key={item.id2} latestdata={item}/>

                ))}
            </div>
            <h1 className="latestHead">Latest Articles</h1>
            <div className="articlePage">
                <div className="articles">
                    {this.state.latestart.map((item)=>(
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
        
                    {this.state.homeStory.map((item)=>(
                        // {this.state.postList.map((item)=>(<div key={item.id}>
                    <Homestory key={item.id} storyinfo={item}/> 
                    ))}  
            <span className="viewmore"> View More</span><span><i className="arrow2 fas fa-arrow-right"></i></span>
        </>
    )
}
}
export default Homepage;

