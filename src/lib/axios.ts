import { Axios } from 'axios'

const axiosInstace = new Axios({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  },
  data: {}
})

axiosInstace.interceptors.response.use(res => res)

export default axiosInstace
