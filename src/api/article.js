import request from "../util/request"
// 增
export const saveArticle = data => {
    return request({
        method:"post",
        url:'/article/add',
        data
    })
}

// 删
export const deleteArticle = params =>{
    return request({
        method:'get',
        url:'/article/delete',
        params
    })
}

// 改
export const updateArticle = data =>{
    return request({
        method:'post',
        url:'/article/update',
        data
    })
}

//查
export const articleList = params => {
    return request({
        method:'get',
        url:'/article/articleList',
        params
    })
}

// detail 查询一条
export const detail = params => {
    return request({
        method:'get',
        url:'/article/detail',
        params
    })
}




