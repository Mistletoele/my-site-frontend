import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const verify = (url: any, newObject: any) => {
  const request = axios.post(`${baseUrl}/${url}`, newObject).then(response => response.data)
  return request
}

const register = (url: any, newObject: any) => {
  const request = axios.post(`${baseUrl}/${url}`, newObject).then(response => response.data)
  return request
}

const update = (id: any, newObject: any) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default {
  getAll: getAll,
  verify: verify,
  register: register,
  update: update
}