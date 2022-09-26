import axios from 'axios';
import {API} from '../../utils/config';


// get Offer
export const getSingleOffer = (token,id) =>{
    return axios.get(`${API}/admin/offer/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}




