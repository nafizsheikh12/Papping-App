import axios from 'axios';
import {API} from '../../../utils/config';


// Get Account by ID
export const getAccountByID = (token) =>{
    return axios.get(`${API}/affiliate/account`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}


// Update Account
export const updateAccount = (token,account) =>{
    console.log('[ACCOUNT]',account)
    return axios.put(`${API}/affiliate/account`,account,{
        headers: {
            'Accept': 'application/json',
          
            "Authorization" : `Bearer ${token}`
        }
    })
}