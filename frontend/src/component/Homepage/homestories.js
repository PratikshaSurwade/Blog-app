import "./../../Styles/home.css";
import "./../../Styles/homestyle.css";
import { NavLink } from "react-router-dom";


function Homestory(props){
    // console.log(props);
    return(
        <> 
            <div className="storyInfo">
            <NavLink className="cardLink" to={`/article/${props.storyinfo._id}`}>

                <h3>{props.storyinfo.title}</h3>
                </NavLink>

                <p className="description">{props.storyinfo.decription}</p>
                <span className="postThumbnail">{props.storyinfo.categories}</span>
                <span className="date">
                    <code>   </code>/<code>   </code>{props.storyinfo.date}
                </span>
            </div>
         
            <hr className="hrMargin"></hr>
        </>
    )
}
export default Homestory;
/*
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

export default App;*/