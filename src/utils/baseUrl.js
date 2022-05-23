export default process.env.NODE_ENV === "production"
  ? "https://ranchat-app.herokuapp.com"
  : "http://localhost:4001";
