import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: "76193ed2bcf26de2dc230e6c660a549e",
  },
});

export default instance;
