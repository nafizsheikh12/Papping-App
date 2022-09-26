import axios from 'axios';
import {API} from '../../utils/config';

// Create  Affiliate
export const createAffiliate= (token,affiliate) =>{
    console.log(affiliate)
    return axios.post(`${API}/admin/affiliate`,affiliate,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Get All Affiliate
export const getAffiliate = (token) =>{
    return axios.get(`${API}/admin/affiliate`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Get All Affiliate
export const getAffiliateByID = (token,id) =>{
    return axios.get(`${API}/admin/affiliate/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Delete Affiliate
export const deleteAffiliate = (token,id) =>{
    return axios.delete(`${API}/admin/affiliate/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Update Affiliate
export const updateAffiliate = (token,id,affiliate) =>{
    console.log('token',token)
    return axios.put(`${API}/admin/affiliate/${id}`,affiliate,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}