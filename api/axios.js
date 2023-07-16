import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL ?? "http://localhost:5050/api";
const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
