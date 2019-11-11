import axios from 'axios'

// 通过axios.defaults.baseURL设置全局的基准路径
axios.defaults.baseURL = '//api.iwealthmanagement.net'

export const getlogin = (password) => axios.get('/api/Login/Get?password=' + password).then(res => res.data)

export const GetContentsById = (obj) => axios.get(`/api/Menu/GetContentsById?accountId=${obj.accountId}&menuId=${obj.menuId}`).then(res => res.data)
