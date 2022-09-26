import CommonModal from "./Modal/CommonModal";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CreateIcon } from "../../../../../assets/Icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import photo from "../../../../../assets/Ellipse 5.png";
import { Button as BootstrapButton } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { userInfo } from "../../../../../utils/auth";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import {Table} from 'react-bootstrap'

import {
  createOfferBlock,
  deleteOfferBlockByID,
  getOfferBlockByID,
} from "./../../../../../api/Offer/OfferBlock";
import { MenuItem } from "@mui/material";
import { getAffiliate } from "./../../../../../api/Affiliate/Affiliate";
import {
  showError,
  showLoading,
  showSuccess,
} from "./../../../../../utils/messages";

const OfferBlock = () => {
  const [modalShow, setModalShow] = useState(false);
  const { id } = useParams();
  const { token } = userInfo();

  const [affiliate, setAffiliate] = useState([]);
  const [offerBlock, setOfferBlock] = useState([]);
  console.log(affiliate);
  console.log(offerBlock)
  const [values, setValues] = useState({
    user_id: "",
    offer_id: +id,
    errorMsg: "",
    successMsg: "",
    error: false,
    success: false,
    loading: false,
  });

  const { errorMsg, successMsg, error, success, loading } = values;
console.log(values)
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
      user_id: values?.user_id,
      offer_id: values?.offer_id,
    };

    createOfferBlock(token, requiredValue)
      .then((response) => {
        if (response.status === 201 || 200) {
          setValues({
            ...values,
            error: false,
            successMsg: "Offer Block Created Successfully!!",
            errorMsg: "",
            loading: false,
            success: true,
          });

          // Clone offerblock data to prevent Immediate update object issue
          const cloneData = JSON.parse(JSON.stringify(offerBlock));
          const newData = [...cloneData, response.data.data];
          setOfferBlock(newData);
        }
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        let errMsg = "Something went wrong!";
        if (err.response.data !== undefined) {
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

  const getAllAffiliateData = () => {
    getAffiliate(token).then((res) => {
      if (res.status === 200) {
        setAffiliate(res.data);
      }
    });
  };
  // Get All affiliate data
  useEffect(() => {
    getAllAffiliateData();
  }, []);

  // Get Block data using Offer Id
  useEffect(() => {
    getOfferBlockByID(token, id).then((res) => {
      if (res.status === 200) {
        setOfferBlock(res.data);
      }
    });
  }, [offerBlock]);

  // Remove OfferBlock Data using ID
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
    deleteOfferBlockByID(token, id)
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
  return (
    <div id="customerPayout">
      <h3>
        affiliate offer block
        <BootstrapButton onClick={handleModalOpen} variant="primary duplicate-m_btn">
          {CreateIcon} create
        </BootstrapButton>
      </h3>

      {/* Create Modal */}
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
                    {`${result.first_name} ${result.last_name}`}{" "}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>

          <BootstrapButton type="submit" variant="primary duplicate__m_btn">
            {values.loading ? "Loading..." : "Save"}
          </BootstrapButton>
        </form>
      </CommonModal>

      <div className="main0table">
         <Table className="table" responsive>
           <thead>
                <tr>
                    <th>affilaiate</th>
                    
                    <th>action</th>
                </tr>
           </thead>
          
          <tbody>
             
             {showError(error,errorMsg)}
             {showSuccess(success,successMsg)}
             {showLoading(OfferBlock === [] ? true:false)}
             {offerBlock.map((result) => {  
              return (
                <tr>
                   <td>
                       <div className="affitlate-table-name">
                            <img src={photo} alt={photo} />
                            <p className="text">new tR- smart link (US) only</p>
                       </div>
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

export default OfferBlock;