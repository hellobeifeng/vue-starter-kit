import axios from 'axios'
import { createError } from './util'

const request = axios.create({
  baseURL: '/'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        return reject(createError(400, 'no data'))
      }
      // if (!data.success) {
      //   return reject(createError(400, data.message))
      // }
      resolve(data.data)
    }).catch(err => {
      const resp = err.response
      console.log('------- error --------', resp)
    })
  })
}

export default {
  testProxy () {
    console.log('###requestmodelhere')
    return handleRequest(request.get('/api/testProxy'))
  }
}
