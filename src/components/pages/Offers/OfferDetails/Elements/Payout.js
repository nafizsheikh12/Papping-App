import CommonModal from "./Modal/CommonModal";
import React, { useState, useEffect, useCallback } from "react";
import {  useParams } from "react-router-dom";
import { CreateIcon } from "../../../../../assets/Icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button as BootstrapButton } from "react-bootstrap";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import {Table} from 'react-bootstrap'
import { TextField, Grid, MenuItem } from "@mui/material";
import { userInfo } from "./../../../../../utils/auth";
import { createPayout, deletePayoutById, getPayoutById } from "./../../../../../api/Offer/Payout";
import {
  showError,
  showLoading,
  showSuccess,
} from "../../../../../utils/messages";
import { getAffiliate } from "../../../../../api/Affiliate/Affiliate";
import useCountries from "../../../../../customHooks/useCountries";

const Payout = () => {
  const [modalShow, setModalShow] = useState(false);
  const { id } = useParams();
  const { token } = userInfo();
  const countries = useCountries();

  const [affiliate, setAffiliate] = useState([]);
  const [payout, setPayout] = useState([]);

  const [values, setValues] = useState({
    user_id: "",
    offer_id: +id,
    country_id: "",
    revenue: "",
    payout: "",
    errorMsg: "",
    successMsg: "",
    error: false,
    success: false,
    loading: false,
  });

  const { errorMsg, successMsg, error, success, loading } = values;

  // set default state when modal open or close
  const handleModalOpen = () => {
    setValues({
      ...values,
      errorMsg: "",
      successMsg: "",
      error: false,
      success: false,
      loading: false,
    });
    setModalShow(true);
  };
  const handleModalHide = () => {
    setValues({
      ...values,
      errorMsg: "",
      successMsg: "",
      error: false,
      success: false,
      loading: false,
    });
    setModalShow(false);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      error: false,
      success: false,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      error: false,
      loading: true,
    });
    const requiredValue = {
      offer_id: values?.offer_id,
      country_id: values?.country_id,
      user_id: values?.user_id,
      revenue: +values?.revenue,
      payout: +values?.revenue,
    };

    createPayout(token, requiredValue)
      .then((response) => {
        if (response.status === 201 || 200) {
          setValues({
            ...values,
            error: false,
            successMsg: "New Country Payout Created Successfully!!",
            errorMsg: "",
            loading: false,
            success: true,
          });

          // Clone payout data to prevent Immediate update object issue
          // const cloneData = JSON.parse(JSON.stringify(payout));
          // const newData = [...cloneData, response.data.data];
          // setPayout(newData);
        }
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        let errMsg = "Something went wrong!";
        if (err.message) {
          errMsg = err.message;
        } else if (err.response.data !== undefined) {
          errMsg = err.response.data.message;
        } else {
          errMsg = "Something went wrong!";
        }
        setValues({
          ...values,
          error: true,
          errorMsg: errMsg,
          successMsg: "",
          loading: false,
        });
      });
  };

  // Get All affiliate data to getting user ID
  const getAllAffiliateData = () => {
    getAffiliate(token).then((res) => {
      if (res.status === 200) {
        setAffiliate(res.data);
      }
    });
  };

  // Remove Payout Data using ID
  const removeItem = (id) => {
    setValues({
      ...values,
      errorMsg: "",
      successMsg: "",
      error: false,
      success: false,
      loading: false,
    });
    if (!window.confirm("Are You Sure?")) return;
    deletePayoutById(token, id)
      .then((response) => {
        setValues({
          ...values,
          error: false,
          success: true,
          successMsg: "Deleted Successfully!!",
          errorMsg: "",
          loading: false,
        });
      })
      .catch((err) => {
        let errMsg = "Something went wrong!";
        if (err.response.data !== undefined) {
          errMsg = err.response.data.message;
        } else {
          errMsg = "Something went wrong!";
        }
        setValues({ ...values, error: true, errorMsg: errMsg, successMsg: "" });
      });
  };

  useEffect(() => {
    getAllAffiliateData();
  }, []);

  // Get all payout data using Offer Id
  // Used useCallback hook to memorize id and token to prevent re-rendering
  const getPayout = useCallback(() => {
    getPayoutById(token, id).then((res) => {
      if (res.status === 200) {
        setPayout(res.data);
      }
    });
  }, [id, token]);

  useEffect(() => {
    getPayout();
  }, [getPayout, values]);

  return (
    <div id="customerPayout">
      <h3>
        Country payout{" "}
        <BootstrapButton onClick={handleModalOpen} variant="primary duplicate-m_btn">
          {CreateIcon} create
        </BootstrapButton>
      </h3>

      <CommonModal show={modalShow} onHide={handleModalHide}>
        <h4>Add category</h4>
        <form onSubmit={handleSubmit}>
          {showError(error, errorMsg)}
          {showLoading(loading)}
          {showSuccess(success, successMsg)}
          <Grid xs={12} sm={12} item>
            <TextField
              select
              fullWidth
              label="Country"
              variant="outlined"
              required
              value={values?.country_id}
              name="country_id"
              onChange={handleChange}
            >
              {countries === [] && showLoading(true)}
              {countries.map((country) => (
                <MenuItem key={country.id} value={country.id}>
                  {country.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid xs={12} sm={12} item className="mt-3">
            <TextField
              select
              fullWidth
              label="User Id"
              variant="outlined"
              required
              value={values?.user_id}
              name="user_id"
              onChange={handleChange}
            >
              {affiliate.map((result) => {
                return (
                  <MenuItem value={result.id} key={result.id}>
                    {`${result.first_name} ${result.last_name}`}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
          <Grid xs={12} sm={12} item className="mt-3">
            <TextField
              fullWidth
              label="Revenue"
              variant="outlined"
              required
              type="number"
              value={values?.revenue}
              name="revenue"
              onChange={handleChange}
            />
          </Grid>
          <Grid xs={12} sm={12} item className="mt-3">
            <TextField
              fullWidth
              label="Payout"
              variant="outlined"
              required
              value={values?.payout}
              name="payout"
              type="number"
              onChange={handleChange}
            />
          </Grid>

          <Button type="submit" variant="primary duplicate__m_btn">
            {values.loading ? "Loading..." : "Save"}
          </Button>
        </form>
      </CommonModal>
      <div className="main0table">
         <Table className="table" responsive>
           <thead>
                <tr>
                    <th>Country </th>
                     <th>Type </th>
                     <th>Revenue </th>
                     <th>Payout </th>
                    <th>action</th>
                </tr>
           </thead>
          
          <tbody>
             
             {showError(error,errorMsg)}
             {showSuccess(success,successMsg)}
             {showLoading(payout === [] ? true:false)}
             {payout.map((result) => {  
              return (
                <tr>
                   <td>
                       <div className="affitlate-table-name">
                           
                            <p className="text">{result.countries ? result.countries[0]?.name:null}</p>
                       </div>
                   </td>
                   <td>
                     <span className="cpa">Cpa</span>
                   </td>
                   <td>
                     <p>{result?.revenue}</p>
                   </td>
                   <td>
                      <p>{result?.payout}</p>
                   </td>
                    <td>
                          <Button variant="contained" size="small" className="delete__Btn" onClick={() => removeItem(result.id)}>
                               <DeleteIcon className="delete-icon" />
                               <p>Delete</p>
                          </Button>
                    </td>
                </tr>
              );
             })} 
           </tbody>
          
         </Table>
      </div>
    </div>
  );
};

export default Payout;
