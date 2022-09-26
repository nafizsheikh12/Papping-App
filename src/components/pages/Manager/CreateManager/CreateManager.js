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
import React, { useState, useEffect } from "react";
import "./CreateManager.scss";
import Layout from "../../../Layout/Layout";
import { userInfo } from "../../../../utils/auth";
import { createManager } from "../../../../api/Manager/Manager";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";
import ImageUpload from "../../../../utils/ImageUpload";
import { countryList } from "../../../../utils/Country";
import { Button } from 'react-bootstrap';

const CreateManager = () => {
  const [file, setFile] = useState([]);
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
    countries: [],
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
    countries,
  } = values;

  const { token } = userInfo();

  // useEffect(() => {
  //   countryList
  // }, []);
  const setSendFile = (file) => {
    setFile(file);
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
    const formData = new FormData();
    formData.append("first_name", first__name);
    formData.append("last_name", last__name);
    formData.append("email", email);
    formData.append("country_id", country);
    formData.append("skype", skype);
    formData.append("status", status);
    formData.append("password", password);
    formData.append("avatar", file[0]);
    createManager(token, formData)
      .then((response) => {
        // if (response.status === 201) {
        setValues({
          ...values,
          error: false,
          errorMsg: "Manager Created Successfully!!",
          loading: false,
          disabled: false,
          success: true,
        });
        e.target.reset();
        // }
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
    <Layout title="CreateManager"  className='manager' subActive='manager.create' activeNum='4'>
      <div id="CreateManager">
        <Typography gutterBottom variant="h3" align="center">
          Create Manager
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card className="MainForm CreateManagerForm">
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
                      >
                        <MenuItem value="approved">Approved</MenuItem>
                        <MenuItem value="pending">Pending</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <ImageUpload sendFileTo={setSendFile} />
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
                        variant="primary m_btn"
                        className='px-5'
                      >
                        Create
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
