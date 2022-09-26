import axios from 'axios';
import {API} from '../../utils/config';

// Create  offer
export const createOffer = (token,offer) =>{
    return axios.post(`${API}/admin/offer`,offer,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Get All Offer
export const getOffer = (token) =>{
    return axios.get(`${API}/admin/offer`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Get Offer by ID
export const getOfferByID = (token,id) =>{
    return axios.get(`${API}/admin/offer/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Delete Offer
export const deleteOffer = (token,id) =>{
    return axios.delete(`${API}/admin/offer/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Update Offer
export const updateOffer = (token,id,offer) =>{
    return axios.put(`${API}/admin/offer/${id}`,offer,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}