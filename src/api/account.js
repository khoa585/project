import axios from "./axios";
export const getDataURL = (url)=>{
    return axios.post("/getdataweb",{
        url
    });
}