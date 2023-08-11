import axios from "axios";

export default axios.create({
    baseURL:"https://jayramin.000webhostapp.com/",
    headers:{
        "Content-Type": "application/json"
    }
})