const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:7001"
    : "https://blog-mern-app-aefp.onrender.com";

module.exports = baseUrl;
