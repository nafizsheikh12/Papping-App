import axios from "axios";
import { API } from "../../utils/config";

// Create  New payout
export const createPayout = (token, payoutData) => {
  return axios.post(`${API}/admin/payout`, payoutData, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// get payout by ID
export const getPayoutById = (token, id) => {
  return axios.get(`${API}/admin/payout/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// // Delete payout user id
export const deletePayoutById = (token, id) => {
  return axios.delete(`${API}/admin/payout/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
