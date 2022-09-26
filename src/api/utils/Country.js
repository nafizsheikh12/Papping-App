import axios from "axios";
import { API } from "../../utils/config";

// // Get All Country Data
export const getCountries = (token) => {
  return axios.get(`${API}/admin/countries`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};