import axios from 'axios'
import { API_URL } from './settings'


const login = async credentials => {
    const { data } = await axios.post(API_URL + "/auth/login", credentials)
    console.log(data)
    return data
}


export default {
    login
}