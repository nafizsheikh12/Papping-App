import {
  Card,
  CardContent,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./AdvertiserCreate.scss";
import Layout from "../../../Layout/Layout";
import { userInfo } from "../../../../utils/auth";
import { createAdvertiser } from "../../../../api/Advertiser/Advertiser";
import { Button } from "react-bootstrap";
import {

  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";

const AdvertiserCreate = () => {
  const [values, setValues] = useState({
    name: " ",
    company: " ",
    email: " ",
    contact_person: " ",
    skype:"",
    website:"",
    manager: " ",
    date: " ",
    errors: false,
    country: " ",
    errorMsg: " ",
    error: false,
    loading: false,
    disabled: false,
    success: false,
    err: {
      status: false,
    },
  });

  const {
    name,
    company,
    email,
    contact_person,
    manager,
    website,
    skype,
    loading,
    error,
    success,
    disabled,
    errorMsg,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      error: false,
      loading: true,
      disabled: true,
    });

    createAdvertiser(token, {
      name: name,
      email: email,
      contact_person: contact_person,
      skype,
      manager: manager,
      website,
    })
      .then((response) => {
        if (response.status === 201) {
          setValues({
            ...values,
            error: false,
            errorMsg: "Advertiser Created Successfully!!",
            loading: false,
            disabled: false,
            success: true,
          });
        }
        e.target.reset();
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
    <Layout title="Advertiser Create" className='advertiser' subActive='advertiser.create'  activeNum='1'>
      <div id="AdvertiserCreate">
        <Typography gutterBottom variant="h3" align="center">
          create advertiser
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card style={{ maxWidth: "50%", margin: "0 auto" }} className="cssmuicard">
              <CardContent className="css-46bh2pCustom">
                <form onSubmit={handleSubmit}>
                  {showError(error, errorMsg)}
                  {showLoading(loading)}
                  {showSuccess(success, errorMsg)}
                  <Grid container spacing={2} >
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>advertiser Name</FormLabel>
                      <TextField
                        onChange={handleChange}
                        name="name"
                        placeholder="advertiser Name"
                        label="advertiser Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>company</FormLabel>
                      <TextField
                        onChange={handleChange}
                        name="company"
                        placeholder="company"
                        label="company"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>Email</FormLabel>
                      <TextField
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        required
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>contact person</FormLabel>
                      <TextField
                        onChange={handleChange}
                        name="contact_person"
                        placeholder="Contact person"
                        label="contact person"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>Manager</FormLabel>
                      <TextField
                        onChange={handleChange}
                        name="manager"
                        placeholder="manager name"
                        label="manager name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>Skype</FormLabel>
                      <TextField
                        onChange={handleChange}
                        name="skype"
                        placeholder="skype id"
                        label="skype id"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>Website</FormLabel>
                      <TextField
                        onChange={handleChange}
                        name="website"
                        placeholder="website link"
                        label="website link"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                   
                    
                    <Grid item xs={12} align="center" sx={{ mt: 2 }}>
                      <Button
                        type="submit"
                        variant="primary m_btn"
                        disabled={loading}
                        sx={{
                          paddingRight: 10,
                          paddingLeft: 10,
                          backgroundColor: "#7040FF",
                        }}
                      >
                        {loading ? "loading..." : "Submit"}
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

export default AdvertiserCreate;
