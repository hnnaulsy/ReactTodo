import axios from 'axios'

// 配置请求的基础地址
axios.defaults.baseURL = 'http://localhost:3005'

// 处用响应拦截器将需要使用的数据直接返回给客户端
axios.interceptors.response.use(res => res.data)