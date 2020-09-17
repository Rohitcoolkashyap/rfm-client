const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://rfmapi.herokuapp.com"
    : "http://localhost:8000";

export default baseUrl;
