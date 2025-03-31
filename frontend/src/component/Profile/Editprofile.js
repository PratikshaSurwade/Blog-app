import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import authHeader from '../../utils/Authheader';
import Getuser from '../../utils/Getuser';
import baseUrl from '../../utils/baseUrl';


const Editprofile = () => {

	const location = useLocation()
	const path = location.pathname.split("/")[1] === "editpost" ? location.pathname.split("/")[2] : location.pathname.split("/")[1];

	let navigate = useNavigate();

	const [editablePost, seteditablePost] = useState({})

	// const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);

	const [postId, setPostId] = useState(path ? path : null)
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("");
	const [photo1, setPhoto1] = useState(null);
	const [photo2, setPhoto2] = useState(null);

	console.log(JSON.parse(localStorage.getItem("blogUser")).username,"getttttttttttttt")
	const [userName, setUserName] = useState(path ? JSON.parse(localStorage.getItem("blogUser")).username : null);
	const [profilepic, setProfilepic] = useState(path ? JSON.parse(localStorage.getItem("blogUser")).profilepic : null);

	const [userId, setUserId] = useState(path ? JSON.parse(localStorage.getItem("blogUser"))._id : null);
	const [categories, setCategories] = useState();
	const [tag1, setTag1] = useState("");
	const [tag2, setTag2] = useState("");
	const [tag3, setTage3] = useState("");

	const [loader, setloader] = useState(false);
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};


	const addPostHandler = async (e) => {
		e.preventDefault();
		console.log(photo1,categories,"cate , phtoo1111")
		const post = 
		{ "title": title, 
		"decription": description, 
		"username": userName, 
		"userId": userId, 
		"categories": categories, 
		"authorphoto": profilepic,
		"tag1": tag1, 
		"tag2": "India",
		"tag3": categories, 
		"photo1": photo1, 
		"photo2": photo1 };
		console.log(post, "add post to server")
		try {
			const { data } = await axios.post(`${baseUrl}/article`, post, { headers: authHeader() });
			navigate(`/profile/${userId}`)
		} catch (error) {
			console.log(error.response.data.message)

			alert(error.response.data.message)
		}
	}

	const editPostHandler = async (e) => {
		e.preventDefault();
		console.log(photo1,categories,"cate , phtoo1111")
		const post = 
		{ "title": title, 
		"decription": description, 
		"username": userName, 
		"userId": userId, 
		"categories": categories, 
		"tag1": tag1, 
		"tag2": "India", 
		"tag3": categories[0],
		"photo1": photo1, 
		"photo2": photo1 };
		console.log(post, "edit post to server")
		try {
			const { data } = await axios.put(`${baseUrl}/article/${path}`, post, { headers: authHeader() });
			navigate(`/profile/${userId}`)
		} catch (error) {
			alert(error.response.data.message)
		}
	}

	const handleSubmission = async (e) => {
		e.preventDefault();
		// setloader(true)
		const files = e.target.files[0]
		const data = new FormData()
		data.append('file', files)
		data.append('upload_preset', 'ishop_profiles')
		setloader(true)
		const res = await fetch(
			'	https://api.cloudinary.com/v1_1/dn9hxyxud/image/upload',
			{
				method: 'POST',
				body: data
			}
		)
		const file = await res.json()
		// console.log(file.secure_url, "url")
		setPhoto1(file.secure_url);
		setloader(false);
	}

	useEffect(() => {
		setLoading(true);
		const getpost = async () => {

			if (path != "addpost") {
				try {
					const res = await axios.get(`${baseUrl}/article/${path}`, { headers: authHeader() })
					seteditablePost(res.data);
					

					setLoading(false);
				} catch (error) {
					alert(error.response.data.message)
					navigate("/login");
				}
			};
		}
		getpost();


	}, [path])


	return (
		<div className="AddEditProfilePage">
			{
				(path === "addpost") ?
					<h2 className="loginTitlde">Add New post</h2>
					:
					<h2 className="loginTitlde">Edit your post</h2>
			}
			{/* {error && 
            <div class="alert alert-danger" style={{margin:"1.5rem"}}>
                {error}
            </div>
        } */}
			<form className="loginForm">
				<label ><strong>Title</strong></label>
				<div contentEditable='true' className="inPutTab" placeholder="Enter your post title..." onInput={(e) => setTitle(e.target.textContent)}>{editablePost.title}</div>
			


<label ><strong>Description</strong></label>
				<div contentEditable='true' className="inPutTab" placeholder="Enter your descrpition..." onInput={(e) => setDescription(e.target.textContent)}>{editablePost.decription}</div>

				<label ><strong>Select Categories</strong></label>
				<select value={categories} className="inPutTab" onChange={(e) => setCategories(e.target.value)} >
					<option value="bollywood">Bollywood</option>
					<option value="hollywood">Hollywood</option>
					<option value="technology">Technology</option>
					<option value="food">Food</option>
					<option value="fitness">Fitness</option>
				</select>
				
				{/* <input type="radio" value="MALE" name="gender"/> Male
        <input type="radio" value="FEMALE" name="gender"/> Female */}

				<label ><strong>Enter Tag   <code> </code></strong></label>
				<div contentEditable='true' className="inPutTab" placeholder="Enter your descrpition..." onInput={(e) => setTag1(e.target.textContent)}>{editablePost.tag1}</div>

				<label><strong>Upload Related Image for Post</strong></label>
				{console.log(photo1, "photo")}
				{/* {photo1 ? <img src={photo1} style={{ width: '300px' }} /> : <></>} */}

				{
					(photo1 && photo2) ?
					(
						<div className='imageGrid'>
							<div>
							<input type="file"
					name="file"
					placeholder="Upload an image"
					onChange={handleSubmission}></input>
							<img src={photo1} syle={{ width: '300px' }} alt="Choose Image to View Preview" />

							</div>
							<div>
							<input type="file"
					name="file"
					placeholder="Upload an image"
					onChange={handleSubmission}></input>
							<img src={photo2} style={{ width: '300px' }} alt="Choose Image to View Preview" />

							</div>
						</div>
					) : (
						<>
						</>
					)
				}
				<input type="file"
					name="file"
					placeholder="Upload an image"
					onChange={handleSubmission}></input>

					{(loader) ? (
						<>
							<h3>Loading...</h3>
							<h6>Kindly wait for Preview...</h6>
						</>

					) : (
						(photo1) ?
						<img src={photo1} style={{ width: '300px' }} alt="Choose Image to View Preview" />
						:
						<div>Choose photo to display</div>
					)}
					{console.log(loader)}
				{
					(path === "addpost") ?
						<button disabled={loader} className="loginButton" onClick={addPostHandler} >Add Post</button>
						:
						<button disabled={loader} className="loginButton" onClick={editPostHandler} >Edit Post</button>
				}
			</form>
		</div>)
}

export default Editprofile