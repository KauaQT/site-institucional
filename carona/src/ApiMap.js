import axios from 'axios'

const apiMap = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving'
})

export default apiMap