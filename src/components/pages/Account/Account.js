import {
  Box,
  Card,
  CardContent,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./Account.scss";
import ImageUpload from "../../../utils/ImageUpload";
import { userInfo } from "../../../utils/auth";
import { showError, showSuccess, showLoading } from "../../../utils/messages";
import { getAccountByID, updateAccount } from "../../../api/Account/Account";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { countryList } from "../../../utils/Country";

const Account = () => {
  const [file, setFile] = useState([]);
  const [values, setValues] = useState({
    first__name: "",
    last__name: "",
    email: "",
    password: "",
    country_id: "",
    errors: false,
    errorMsg: " ",
    error: false,
    loading: false,
    disabled: false,
    success: false,
    countries: [],
  });

  const {
    first__name,
    last__name,
    email,
    password,
    country_id,
    loading,
    error,
    success,
    disabled,
    errorMsg,
    photo,
    countries,
  } = values;

  const { token } = userInfo();
  const handleChange = (e) => {
    setValues({
      ...values,
      error: false,
      success: false,
      [e.target.name]: e.target.value,
    });
  };
  const setSendFile = (file) => {
    setFile(file);
  };
  const location = useLocation();
  useEffect(() => {
    getAccountByID(token)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          first__name: res.data.first_name,
          last__name: res.data.last_name,
          email: res.data.email,
          avatar: res.data.avatar,
          country_id: res.data.country_id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("first_name", first__name);
    formdata.append("last_name", last__name);
    formdata.append("email", email);
    formdata.append("country_id", country_id);
    formdata.append("password", password);
    formdata.append("avatar", file[0]);

    console.log('formdata',formdata.get('avatar'))
    updateAccount(token,{
      first_name: first__name,
      last_name: last__name,
      email: email,
      password:password,
      password_confirmation:password,
      country_id:country_id,
      avatar:null
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setValues({
            ...values,
            error: false,
            errorMsg: "Account Updated Successfully!!",
            loading: false,
            disabled: false,
            success: true,
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

  return (
    <Layout title="Account" className="account">
      <div id="Account">
        <Typography gutterBottom variant="h3" align="center">
          Edit Account
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card className="MainForm accountForm">
              <CardContent>
                <form id="form" onSubmit={handleSubmit}>
                  {showError(error, errorMsg)}
                  {showLoading(loading)}
                  {showSuccess(success, errorMsg)}
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6} item>
                      <FormLabel sx={{ mb: 2 }}>First Name</FormLabel>
                      <TextField
                        placeholder="Enter first name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="first__name"
                        onChange={handleChange}
                        value={first__name}
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <FormLabel sx={{ mb: 2 }}>Last Name</FormLabel>
                      <TextField
                        placeholder="Enter last name"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="last__name"
                        onChange={handleChange}
                        value={last__name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>Email</FormLabel>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        name="email"
                        onChange={handleChange}
                        value={email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>Password</FormLabel>
                      <TextField
                        type="password"
                        placeholder="Enter password"
                        label="password"
                        variant="outlined"
                        fullWidth
                        required
                        name="password"
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>Country</FormLabel>
                      <TextField
                        select
                        fullWidth
                        label="country"
                        variant="outlined"
                        required
                        sx={{ borderRadius: 4, border: "outlined" }}
                        name="country_id"
                        onChange={handleChange}
                        value={country_id}
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.id} value={country.id}>
                            {country.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <ImageUpload sendFileTo={setSendFile} />
                    </Grid>
                    <Grid item xs={12} align="center" sx={{ mt: 2 }}>
                      <Button variant="primary m_btn" type="submit">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Account;
