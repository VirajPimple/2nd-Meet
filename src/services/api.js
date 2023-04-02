import axios from "axios";



export const Loging = async (data) => {
  try {
    let response = await axios.post(`http://127.0.0.1:8000/api-auth/login`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};


