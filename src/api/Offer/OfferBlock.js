import axios from "axios";
import { API } from "../../utils/config";


// Create  offer Block
export const createOfferBlock = (token, offerBlock) => {
  return axios.post(`${API}/admin/block`, offerBlock, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// get offer block using offer id
export const getOfferBlockByID = (token, id) => {
  return axios.get(`${API}/admin/block/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};


// Delete offer block using user id
export const deleteOfferBlockByID = (token, id) => {
  return axios.delete(`${API}/admin/block/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
