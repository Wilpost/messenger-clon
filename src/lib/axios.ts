import { Axios } from 'axios'

const axiosInstace = new Axios({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosInstace
