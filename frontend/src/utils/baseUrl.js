const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:7001"
    : "https://blogapp-backend-zwng.onrender.com/";

module.exports = baseUrl;
