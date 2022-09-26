import axios from 'axios';
import {API} from '../../utils/config';

// Create  Manager
export const createFinance= (token,payment) =>{
    return axios.post(`${API}/admin/finance`,payment,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Get All Manager
export const getFinance = (token) =>{
    return axios.get(`${API}/admin/finance`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Get Manager by id
export const getFinanceByID = (token,id) =>{
    return axios.get(`${API}/admin/finance/${id}/edit`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Delete Manager
export const deleteFinance = (token,id) =>{
    return axios.delete(`${API}/admin/finance/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Update Manager
export const updateFinance = (token,id,payment) =>{
    return axios.put(`${API}/admin/finance/${id}`,payment,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}