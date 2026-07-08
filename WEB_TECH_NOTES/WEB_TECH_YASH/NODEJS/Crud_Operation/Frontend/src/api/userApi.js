import axios from 'axios'

const API =axios.create({
    baseURL : "http://localhost:8000/api/users"
})


export const getUsers = () => API.get("/")

export const addUser = (data) => API.post("/",data)

export const updateUser = (id,data) => API.patch(`/${id}`,data)

export const deleteUser = (id) => API.delete(`/${id}`)