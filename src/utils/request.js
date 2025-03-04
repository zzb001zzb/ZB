import axios from "axios";
const aaa =axios.create({
    baseURL:"http://test.super-coder.top/api",
    timeout:50000
})
aaa.interceptors.request.use(
    (config)=>{
        return config
    },
    (error)=>{

    }
)
aaa.interceptors.response.use(
    (response)=>{
        return response.data
    },
    (error)=>{
        return Promise.reject(error)
    }
)
export default aaa