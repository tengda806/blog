// import request from "../util/request"
import axios from "axios"
// export const getPost = data => {
//     return request({
//         method:'get',
//         url:'/post',
//         params:data    
//     })
// }
export const getPost = data => {
  return   axios.get('http://localhost:8808/get/post',{
    params:data
}).then(res=>{
    return res.data
})
}