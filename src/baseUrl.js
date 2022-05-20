import axios from "axios";

const instance = axios.create({
  baseURL: 'http://172.16.11.14:9090/',
});

export default instance;