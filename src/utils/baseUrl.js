const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://rfm-backend.herokuapp.com/"
    : "http://localhost:8000";

export default baseUrl;
