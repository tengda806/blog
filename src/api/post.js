import request from "../util/request"

export const getPost = data => {
    return request({
        method:'get',
        url:'/post',
        params:data    
    })
}