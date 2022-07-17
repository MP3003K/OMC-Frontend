import Axios from 'axios'

export const api = Axios.create({
    baseURL: 'http://54.161.151.93/api'
});