import axios from 'axios';
import {API} from '../../../utils/config';


// Get All Offer
export const getOffer = (token) =>{
    return axios.get(`${API}/affiliate/offer`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}