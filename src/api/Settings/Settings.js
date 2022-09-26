import axios from 'axios';
import {API} from '../../utils/config';


// Get  general setting
export const getGeneralSettings = (token) =>{
    return axios.get(`${API}/admin/setting/general`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Update general setting
export const updateGeneralSetting = (token,setting) =>{
    return axios.put(`${API}/admin/setting/general`,setting,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// get apperance
export const getAppearance = (token) =>{
    return axios.get(`${API}/admin/setting/appearance`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// post apperance
export const createAppearance = (token,setting) =>{
    return axios.post(`${API}/admin/setting/appearance`,setting,{
        headers: {
            'Accept': 'application/json',
            'Content-type':'multipart/form-data',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// get question
export const getQuestion = (token) =>{
    return axios.get(`${API}/admin/setting/questions`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// get question by id
export const getQuestionByID = (token,id) =>{
    return axios.get(`${API}/admin/setting/questions/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// post question
export const createQuestion = (token,setting) =>{
    return axios.post(`${API}/admin/setting/questions`,setting,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// update question
export const updateQuestion = (token,id,setting) =>{
    return axios.put(`${API}/admin/setting/questions/${id}`,setting,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// delete question
export const deleteQuestion = (token,id) =>{
    return axios.delete(`${API}/admin/setting/questions/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}