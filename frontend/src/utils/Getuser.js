export default function getUser() {
    const user = JSON.parse(localStorage.getItem("blogUser"));
  
    if (user && user.accessToken) {
      return user;
    //   return { token: user.accessToken };
    } else {
      return {};
    }
}




// import React, { useState, useEffect } from 'react';
// import baseUrl from './baseUrl';
// import axios from 'axios';
// import authHeader from './Authheader';
// const Getuser = async () => {
//     const [getuser, setgetuser] = useState(null)

//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem("blogUser")) ? JSON.parse(localStorage.getItem("blogUser")) : null;
//         const getprofileDetails = async () => {
//             if (user) {
//                 try {
//                     const { data } = await axios.get(`${baseUrl}/user/${user._id}`, { headers: authHeader() })
//                 if (data.success === false) {
//                     localStorage.removeItem("blogUser")
//                     setgetuser(null);
//                 }
//                 else {
//                     // console.log({...data,accessToken:authHeader().token})
//                     setgetuser(data);
//                 }
//                 } catch (error) {
//                     console.log(error)
//                     setgetuser(null);

//                 }
//             }
//         };
//     }, [])
    
//   return getuser
// }

// export default Getuser