const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:7001"
    : "https://blog-my-mern-app.herokuapp.com";

module.exports = baseUrl;
