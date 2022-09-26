import axios from 'axios';
import {API} from '../../utils/config';

export const register = (user) =>{
    console.log(user);
    return axios.post(`${API}/register`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
};


export const login = (user) =>{
    return axios.post(`${API}/login`,user,{
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
};
export const getUser = (token) =>{
    return axios.get(`${API}/user`,{
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
};
