import axios from "axios";
import { getCookie } from "cookies-next";

const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL || ""

const api = axios.create({
    baseURL: baseurl,
    headers:{
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

api.interceptors.request.use(
    async (config) => {
      const token = await getCookie("csrftoken");
    //   console.log("token: ", token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return null;
    }
  );
  
  export default api;