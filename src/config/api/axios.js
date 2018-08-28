
import axios from 'axios';
//import {baseUrl} from '../env';
import store from '../../store/index'
// 创建axios实例 application/x-www-data-urlencoded  application/json
const service = axios.create({
 // baseURL: baseUrl,
  timeout: 15000,
  headers: {
    "Accept": "application/json, text/plain, */*",
    'Content-Type':'application/json;charset=utf-8',
    "Accept-Language":"zh-CN,zh;q=0.8",
   // "keep-alive":"keep-alive"
    //"User-Agent":"Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; STF-AL00 Build/HUAWEISTF-AL00) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
    //"cookie":"PHPSESSID=vt83vvhgct23n0dv0q3gfsaug5"
  }
})




service.interceptors.request.use(function(config){
  store.dispatch('showloader');
  return config
},function(err){
  return Promise.reject(err)
});

service.interceptors.response.use(function(response){
  store.dispatch('hideloader');
  return response

},function(err){
  store.dispatch('hideloader');
  if(err && err.response){
    console.log(err);
      err =checkErr(err);
  }
  return Promise.reject(err)
});


/**
 * 错误判断
 * */
const  checkErr = err=>{
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }

    return err ;

  }

}


export default service
