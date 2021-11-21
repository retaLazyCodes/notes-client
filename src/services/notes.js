import axios from 'axios'
import { API_URL } from './settings'

const baseUrl = `${API_URL}/notes`
let token = null

const setToken = newToken => {
    token = newToken
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const request = axios.post(baseUrl, newObject, config)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    const request = axios.put(`${baseUrl}/${id}`, newObject, config)
    return request.then(response => response.data)
}

const service = {
    getAll, create, update, setToken
}

export default service