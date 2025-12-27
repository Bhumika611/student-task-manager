import axios from "axios";

const API = axios.create({
  baseURL: "https://student-task-backend-c5lx.onrender.com/api",
});

export default API;
