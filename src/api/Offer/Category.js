import axios from 'axios';
import {API} from '../../utils/config';

// Create  Category
export const createCategory = (token,category) =>{
    console.log(category);
    return axios.post(`${API}/admin/category`,category,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Get All Categories
export const getCategory = (token) =>{
    return axios.get(`${API}/admin/category`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}

// Delete Category
export const deleteCategory = (token,id) =>{
    return axios.delete(`${API}/admin/category/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}
// Update Category
export const updateCategory = (token,id) =>{
    return axios.put(`${API}/admin/category/${id}`,{
        headers: {
            'Accept': 'application/json',
            "Authorization" : `Bearer ${token}`
        }
    })
}