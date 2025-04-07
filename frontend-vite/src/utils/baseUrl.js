const baseUrl =
  import.meta.env.MODE !== "production"
    ? "http://localhost:7001"
    : "https://blogapp-backend-zwng.onrender.com";

export default baseUrl;

