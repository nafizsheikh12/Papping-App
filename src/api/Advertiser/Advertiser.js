import axios from 'axios';
import {API} from '../../utils/config';

// Create  Advertiser
export const createAdvertiser = (token,advertiser) =>{
    return axios.post(`${API}/admin/advertiser`,advertiser,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// update  Advertiser
export const updateAdvertiser = (token,id,advertiser) =>{
    return axios.put(`${API}/admin/advertiser/${id}`,advertiser,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Get All Advertiser
export const getAdvertiser = (token) =>{
    return axios.get(`${API}/admin/advertiser`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Get All Advertiser
export const getAdvertiserByID = (token,id) =>{
    return axios.get(`${API}/admin/advertiser/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Delete Advertiser
export const deleteAdvertiser = (token,id) =>{
    return axios.delete(`${API}/admin/advertiser/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}