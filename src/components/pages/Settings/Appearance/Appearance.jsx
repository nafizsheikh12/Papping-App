import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import dark from "../../../../assets/dark.png";
import { Button } from 'react-bootstrap';
import { userInfo } from "../../../../utils/auth";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";
import { createAppearance, getAppearance } from "../../../../api/Settings/Settings";


const Appearance = () => {
  const [values, setValues] = useState({
    site_logo:null,
    site_favicon:null,
    errors: false,
    errorMsg: " ",
    error: false,
    loading: false,
    disabled: false,
    success: false,
  });
  const {
    site_logo,
    site_favicon,
    errors,
    errorMsg,
    error,
    loading,
    disabled,
    success,
  } = values;
  const { token } = userInfo();
  useEffect(()=>{
    getAppearance(token).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  },[])
  const handleChange = (e) => {
    console.log(e.target.files);
    setValues({
      ...values,
      error: false,
      success: false,
      [e.target.name]: e.target.files[0],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('site_logo',site_logo)
    formdata.append('site_favicon',site_favicon)
    createAppearance(token,formdata).then((response) => {
      console.log(response);
      if (response.status === 200) {
      setValues({
        ...values,
        error: false,
        errorMsg: "Appearance Created Successfully!!",
        loading: false,
        disabled: false,
        success: true,
      });
      e.target.reset();
      }
    })
    .catch((err) => {
      let errMsg = "Something went wrong!";
      if (err.response.data != undefined) {
        errMsg = err.response.data.message;
      } else {
        errMsg = "Something went wrong!";
      }
      setValues({
        ...values,
        error: true,
        errorMsg: errMsg,
        disabled: false,
        loading: false,
      });
    });
  };
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="Settings__Appearance"
      onSubmit={handleSubmit}
    >
      <Typography mt={2} className="form-title">
        {" "}
        Appearance
      </Typography>
      <div className="appearance__form">
      {showError(error, errorMsg)}
                  {showLoading(loading)}
                  {showSuccess(success, errorMsg)}
        <div>
          <img src={dark} alt="dark-theme" />
          <div class="mb-3 form__input">
            <label for="exampleFormControlInput1" class="form-label">
              Site Logo
            </label>
            <input
              type="file"
              class="form-control"
              id="exampleFormControlInput1"
              name="site_logo"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <img src={dark} alt="dark-theme" />
          <div class="mb-3 form__input">
            <label for="exampleFormControlInput1" class="form-label">
              Site favicon
            </label>
            <input
              type="file"
              class="form-control"
              id="exampleFormControlInput1"
              name="site_favicon"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="primary m_btn"
            color="primary"
            type="submit"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Appearance;
