export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("blogUser"));
  
    if (user && user.accessToken) {
      return { token: 'Bearer ' + user.accessToken };
    //   return { token: user.accessToken };
    } else {
      return {};
    }
}