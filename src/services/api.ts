import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Erro na requisição");
        }
      }
      return Promise.reject(error);
    }
  );
  