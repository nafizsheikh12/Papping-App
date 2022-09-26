import axios from 'axios';
import {API} from '../../utils/config';

// Create  Manager
export const createManager= (token,manager) =>{
    return axios.post(`${API}/admin/manager`,manager,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Get All Manager
export const getManager = (token) =>{
    return axios.get(`${API}/admin/manager`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Get Manager by id
export const getManagerByID = (token,id) =>{
    return axios.get(`${API}/admin/manager/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Delete Manager
export const deleteManager = (token,id) =>{
    return axios.delete(`${API}/admin/manager/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Update Manager
export const updateManager = (token,id,manager) =>{
    return axios.put(`${API}/admin/manager/${id}`,manager,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}