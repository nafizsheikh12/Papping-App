import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { getGeneralSettings, updateGeneralSetting } from "../../../../api/Settings/Settings";
import { userInfo } from "../../../../utils/auth";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";

const General = () => {
  const [values, setValues] = useState({
    site_title: "",
    site_description: "",
    footer_text: "",
    time_zone: "",
    affiliate_register: "",
    refer_comission: "",
    errors: false,
    errorMsg: " ",
    error: false,
    loading: false,
    disabled: false,
    success: false,
  });
  const {
    site_title,
    site_description,
    footer_text,
    time_zone,
    affiliate_register,
    refer_comission,
    errors,
    errorMsg,
    error,
    loading,
    disabled,
    success,
  } = values;
  const { token } = userInfo();
  const loadData = () => {
    getGeneralSettings(token)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setValues({
            ...values,
            site_title: response.data.site_title,
            site_description: response.data.site_description,
            footer_text: response.data.footer_text,
            time_zone: response.data.time_zone,
            affiliate_register: response.data.affiliate_registration,
            refer_comission: response.data.refer_comission,
            error: false,
            loading: false,
            disabled: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
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
  useEffect(() => {
    loadData();
  }, []);
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
    updateGeneralSetting(token, {
      site_title,
    site_description,
    footer_text,
    time_zone,
    affiliate_registration:affiliate_register,
    refer_comission,
    })
      .then((response) => {
        console.log('[updated]',response);
        if (response.status === 200) {
        setValues({
          ...values,
          error: false,
          errorMsg: "General Settings Updated Successfully!!",
          loading: false,
          disabled: false,
          success: true,
        });
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
      noValidate
      autoComplete="off"
      className="Settings__General"
    >
      <Typography mt={2} className="form-title">
        {" "}
        General
      </Typography>
        <div className="general__form">
      <form id="form" onSubmit={handleSubmit}>
        {showError(error, errorMsg)}
        {showLoading(loading)}
        {showSuccess(success, errorMsg)}
          <div className="form__input">
            <TextField
              id="filled-required"
              label="Site Title"
              fullWidth
              name="site_title"
              value={site_title}
              onChange={handleChange}
            />
          </div>
          <div className="form__input">
            <TextField
              id="filled-required"
              label="Site Description"
              fullWidth
              multiline
              rows={3}
              name="site_description"
              value={site_description}
              onChange={handleChange}
            />
          </div>
          <div className="form__input">
            <TextField
              id="filled-required"
              label="Footer Text"
              fullWidth
              name="footer_text"
              value={footer_text}
              onChange={handleChange}
            />
          </div>

          <div className="form__input">
            <FormControl fullWidth>
              <InputLabel id="select-label">Site Time Zone</InputLabel>
              <Select
                labelId="select-label"
                label="Time Zone"
                fullWidth
                name="time_zone"
                value={time_zone}
                onChange={handleChange}
              >
                <MenuItem value="5">GMT 5</MenuItem>
                <MenuItem value="6">GMT 6</MenuItem>
                <MenuItem value="7">GMT 7</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form__input">
            <FormControl fullWidth>
              <InputLabel id="select-label">Affiliate Register</InputLabel>
              <Select
                labelId="select-label"
                label="Affiliate Register"
                fullWidth
                name="affiliate_register"
                value={affiliate_register}
                onChange={handleChange}
              >
                <MenuItem value="1">True</MenuItem>
                <MenuItem value="0">False</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form__input">
            <TextField
              id="filled-required"
              label="Refer Commission"
              fullWidth
              name="refer_comission"
              value={refer_comission}
              onChange={handleChange}
            />
          </div>

          <div className="text-center">
            <Button variant="primary m_btn" color="primary" type="submit">
              Save Changes
            </Button>
          </div>
      </form>
        </div>
    </Box>
  );
};

export default General;
