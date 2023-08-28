import { Axios } from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

export default axios;
