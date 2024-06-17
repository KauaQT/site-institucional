import axios from 'axios'

const api = axios.create({
    baseURL: 'http://back-carona.azurewebsites.net'
})

export default api