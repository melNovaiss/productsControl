import axios from "axios";

const api = axios.create({
  // baseURL: "http://10.0.0.102:8081/api/v1",
  baseURL: "http://localhost:3000/burgers",
});

export default api;
