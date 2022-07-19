import Axios from 'axios'

export const api = Axios.create({
    baseURL: 'http://54.83.31.4/api'
});