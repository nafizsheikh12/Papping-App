import axios from 'axios';
import {API} from '../../utils/config';

export const dayReport = (token,report) =>{
    console.log(report)
    console.log(token)
    return axios.get(`${API}/admin/report/day/${report}`,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}