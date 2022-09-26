import {
  Box,
  Button,
  Card,
  CardContent,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import "./EditManager.scss";
import Layout from "../../../Layout/Layout";
import { userInfo } from "../../../../utils/auth";
import { createManager, getManagerByID, updateManager } from "../../../../api/Manager/Manager";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";
import { useLocation } from "react-router-dom";
import { countryList } from "../../../../utils/Country";

const CreateManager = (props) => {
  const [files, setFiles] = useState([]);
  const [values, setValues] = useState({
    first__name: "",
    last__name: "",
    email: "",
    password: "",
    country: "",
    skype: "",
    status: "",
    errors: false,
    errorMsg: " ",
    error: false,
    loading: false,
    disabled: false,
    success: false,
  });

  const {
    first__name,
    last__name,
    email,
    password,
    country,
    skype,
    status,
    loading,
    error,
    success,
    disabled,
    errorMsg,
    photo,
  } = values;

  const { token } = userInfo();
  const location = useLocation();

  useEffect(() => {
    
    const id = location.search.split("=")[1];

    getManagerByID(token, id)
      .then((manager) => {
        setValues({
          ...values,
          first__name: manager.data.first_name,
          last__name: manager.data.last_name,
          email: manager.data.email,
          password: manager.data.password,
          country: manager.data.country,
          skype: manager.data.skype,
          status: manager.data.status,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

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
    const id = location.search.split("=")[1];
    updateManager(token, id,{
      first_name: first__name,
      last_name: last__name,
      email: email,
      country_id: country,
      skype: skype,
      status: status,
      password: password,
      avatar: null,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setValues({
            ...values,
            error: false,
            errorMsg: "Advertiser Updated Successfully!!",
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
    <Layout title="CreateManager" className='manager' subActive='manager.manage' activeNum='4'>
      <div id="CreateManager">
        <Typography gutterBottom variant="h3" align="center">
          Update Manager
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card className="MainForm editManagerForm">
              <CardContent>
                <form id="form" onSubmit={handleSubmit}>
                  {showError(error, errorMsg)}
                  {showLoading(loading)}
                  {showSuccess(success, errorMsg)}
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6} item>
                      <FormLabel sx={{ mb: 2 }}>
                        <h5>First Name</h5>
                      </FormLabel>
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
                      <FormLabel sx={{ mb: 2 }}>
                        <h5>Last Name</h5>
                      </FormLabel>
                      <TextField
                        placeholder="Enter last name"
                        label="Last Name"
                        variant="outlined"
                        name="last__name"
                        fullWidth
                        required
                        onChange={handleChange}
                        value={last__name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>
                        <h5>Email</h5>
                      </FormLabel>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        name="email"
                        fullWidth
                        required
                        onChange={handleChange}
                        value={email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>
                        <h5>Password</h5>
                      </FormLabel>
                      <TextField
                        type="password"
                        placeholder="Enter phone number"
                        label="password"
                        variant="outlined"
                        name="password"
                        fullWidth
                        required
                        onChange={handleChange}
                        value={password}
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>
                        <h5>Country</h5>
                      </FormLabel>
                      <TextField
                        select
                        fullWidth
                        label="country"
                        variant="outlined"
                        name="country"
                        onChange={handleChange}
                        required
                        sx={{ borderRadius: 4, border: "outlined" }}
                        value={country}
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.id} value={country.id}>
                            {country.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>
                        <h5>Skype</h5>
                      </FormLabel>
                      <TextField
                        placeholder="Your Skype id"
                        label="skype id"
                        variant="outlined"
                        name="skype"
                        fullWidth
                        onChange={handleChange}
                        required
                        value={skype}
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>
                        <h5>status</h5>
                      </FormLabel>
                      <TextField
                        select
                        fullWidth
                        label="status"
                        variant="outlined"
                        name="status"
                        onChange={handleChange}
                        required
                        sx={{ borderRadius: 4, border: "outlined" }}
                        value={status}
                      >
                        <MenuItem value="approved">Approved</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      align="center"
                      sx={{ mt: 2 }}
                      className="p-0 m-0"
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                          paddingRight: 10,
                          paddingLeft: 10,
                          backgroundColor: "#7040FF",
                        }}
                      >
                        Update
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

export default CreateManager;
