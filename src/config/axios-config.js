import Axios from 'axios'

export const api = Axios.create({
    baseURL: 'http://18.206.231.160/api'
});