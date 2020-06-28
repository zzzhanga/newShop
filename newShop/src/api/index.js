import ajax from './ajax.js'

let BASE_URL='./api'
export const reqAddress=(geohash)=>ajax('/api/position/'+geohash)

