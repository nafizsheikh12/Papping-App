import axios from 'axios';
import {API} from '../../utils/config';

// Create  Affiliate
export const createPostback= (token,affiliate) =>{
    return axios.post(`${API}/admin/payout`,affiliate,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Get All Affiliate
export const getPostback = (token) =>{
    return axios.get(`${API}/admin/payout`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Get All Affiliate
export const getPostbackByID = (token,id) =>{
    return axios.get(`${API}/admin/payout/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Delete Affiliate
export const deletePostback = (token,id) =>{
    return axios.delete(`${API}/admin/payout/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Update Affiliate
export const updatePayout = (token,id,affiliate) =>{
    return axios.put(`${API}/admin/payout/${id}`,affiliate,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}