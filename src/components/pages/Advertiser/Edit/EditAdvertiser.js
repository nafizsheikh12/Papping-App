import {

    Card,
    CardContent,
    FormLabel,
    Grid,
    MenuItem,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import "./EditAdvertiser.scss";
  import Layout from "../../../Layout/Layout";
  import { userInfo } from "../../../../utils/auth";
  import { createAdvertiser, getAdvertiserByID, updateAdvertiser } from "../../../../api/Advertiser/Advertiser";
  import {
    showError,
    showSuccess,
    showLoading,
  } from "../../../../utils/messages";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from 'react-bootstrap';
  
  const AdvertiserCreate = () => {
    const [values, setValues] = useState({
      name: " ",
      email: " ",
      contact_person: " ",
      manager: " ",
      date: " ",
      skype: " ",
      website: " ",
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
      skype,
      website,
      date,
      country,
      loading,
      error,
      success,
      disabled,
      errorMsg,
    } = values;
  
    const { token } = userInfo();
    const location = useLocation();

    useEffect(()=>{
        const id = location.search.split("=")[1];

    getAdvertiserByID(token, id)
      .then((response) => {
        setValues({
          ...values,
          name: response.data.name,
        email: response.data.email,
        contact_person: response.data.contact_person,
        skype: response.data.skype,
        manager: response.data.manager,
        website: response.data.website,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    },[])
  
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
      const id = location.search.split("=")[1];
      updateAdvertiser(token,id, {
        name: name,
        email: email,
        contact_person: contact_person,
        skype: skype,
        manager: manager,
        website: website,
      })
        .then((response) => {
          if (response.status === 200) {
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
      <Layout title="Advertiser Create">
        <div id="AdvertiserCreate">
          <Typography gutterBottom variant="h3" align="center">
            Edit Advertiser
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card style={{ maxWidth: "50%", margin: "0 auto" }}>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    {showError(error, errorMsg)}
                    {showLoading(loading)}
                    {showSuccess(success, errorMsg)}
                    <Grid container spacing={2}>
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
                          value={name}
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
                          value={email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormLabel sx={{ mb: 2 }}>Contact Person</FormLabel>
                        <TextField
                          onChange={handleChange}
                          name="contact_person"
                          placeholder="Contact person"
                          label="contact person"
                          variant="outlined"
                          fullWidth
                          required
                          value={contact_person}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormLabel sx={{ mb: 2 }}>manager</FormLabel>
                        <TextField
                          onChange={handleChange}
                          name="manager"
                          placeholder="manager name"
                          label="manager name"
                          variant="outlined"
                          fullWidth
                          required
                          value={manager}
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
                          value={skype}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormLabel sx={{ mb: 2 }}>Website</FormLabel>
                        <TextField
                          onChange={handleChange}
                          name="website"
                          placeholder="website"
                          label="website"
                          variant="outlined"
                          fullWidth
                          required
                          value={website}
                        />
                      </Grid>
                      
                      <Grid item xs={12} align="center" sx={{ mt: 2 }}>
                        <Button
                          type="submit"
                          variant="primary m_btn"
                          color="primary"
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
  