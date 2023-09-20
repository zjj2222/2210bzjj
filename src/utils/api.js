import http from './http'
export const tologin =(data)=>http.post('/api/auth/login',data)
export const getlist =(params)=>http.get('api/admin/users',{params})
export const addlist =(params)=>http.get('api/admin/users',params)
export const getUser = id =>http.get(`api/admin/users/${id}`)
export const getedit = (params) =>http.put(`api/admin/users/${params.id}`,params)