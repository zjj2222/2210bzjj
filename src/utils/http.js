import axios from 'axios'
const instance=axios.create({
    baseURL:'https://api.shop.eduwork.cn/',
    timeout:5000,
})
// 添加请求拦截器
instance.interceptors.request.use(function(config){
    // 在发送请求之前做些什么
    let token =localStorage.getItem('token')
    if(token){
        config.headers.Authorization=`Bearer${token}`
    }
    return config
},function (error){
    // 对请求错误做些什么
    return Promise.reject(error)
});

// 添加响应拦截
instance.interceptors.response.use(function (response){
    // 对响应数据做点什么
   return response.data;
},function (error){
    // 对响应错误做点什么
    return Promise.reject(error)
})
// 暴露出去
export default instance
