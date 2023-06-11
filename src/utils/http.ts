import axios, { AxiosInstance } from 'axios'
import { URL } from 'src/constants/url'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const http = new Http().instance
export default http
