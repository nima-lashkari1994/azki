import axios, {AxiosRequestConfig} from 'axios'

class API {
    protected baseURL: string

    constructor(baseURL?: string) {
        //we should put the baseUrl in env , but for demo purposes ...
        this.baseURL = baseURL || "https://www.azki.com/api/"
    }

    protected fetch(config: AxiosRequestConfig) {
        return axios.request({
            baseURL: this.baseURL,
            timeout: 40000,
            withCredentials: false,
            method: 'get',
            ...config,
        })
    }
}

export default API
