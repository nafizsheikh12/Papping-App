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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./EditAffiliate.scss";
import Layout from "../../../Layout/Layout";
import { userInfo } from "../../../../utils/auth";
import {
  getAffiliateByID,
  updateAffiliate,
} from "../../../../api/Affiliate/Affiliate";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";
import { useLocation } from "react-router-dom";
import { getManager } from "../../../../api/Manager/Manager";
import { countryList } from "../../../../utils/Country";

const CreateAffiliate = () => {
  const [files, setFiles] = useState([]);
  const [managers, setManager] = useState([]);
  const [values, setValues] = useState({
    first__name: "",
    last__name: "",
    email: "",
    password: "",
    country: "",
    balance: "",
    skype: "",
    status: "",
    reffer_id: "",
    manager_id: "",
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
    country,
    skype,
    reffer_id,
    manager_id,
    country_id,
    balance,
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
  const location = useLocation();
  useEffect(() => {
    const id = location.search.split("=")[1];

    getManager(token)
      .then((manager) => {
        setManager([...manager.data]);
      })
      .catch((err) => {
        console.log(err);
      });

    getAffiliateByID(token, id)
      .then((affiliate) => {
        console.log(affiliate);
        setValues({
          ...values,
          first__name: affiliate.data.first_name,
          last__name: affiliate.data.last_name,
          email: affiliate.data.email,
          balance: affiliate.data.balance,
          reffer_id: affiliate.data.reffer_id,
          skype: affiliate.data.skype,
          avatar: affiliate.data.affiliate,
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
    const id = location.search.split("=")[1];
    e.preventDefault();
    updateAffiliate(token,id, {
      first_name: first__name,
      last_name: last__name,
      email,
      country_id: country_id,
      skype: skype,
      manager_id,
      password,
      password_confirmation:password,
      status,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setValues({
            ...values,
            error: false,
            errorMsg: "Affiliate Updated Successfully!!",
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
    <Layout title="CreateManager"  className='affiliate' subActive='affiliate.edit' activeNum='3'>
      <div id="CreateAffiliate">
        <Typography gutterBottom variant="h3" align="center">
          Edit Affiliate
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card className="MainForm">
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
                        value={password}
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>Manager</FormLabel>
                      <TextField
                        select
                        fullWidth
                        label="manager"
                        variant="outlined"
                        required
                        sx={{ borderRadius: 4, border: "outlined" }}
                        name="manager_id"
                        onChange={handleChange}
                        value={manager_id}
                      >
                        {managers.map((res) => (
                          <MenuItem key={res.id} value={res.id}>
                            {res.first_name + " " + res.last_name}
                          </MenuItem>
                        ))}
                      </TextField>
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
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>Status</FormLabel>
                      <TextField
                        select
                        fullWidth
                        label="status"
                        variant="outlined"
                        required
                        sx={{ borderRadius: 4, border: "outlined" }}
                        name="status"
                        onChange={handleChange}
                        value={status}
                      >
                          <MenuItem value="approved">Approved</MenuItem>
                          <MenuItem value="rejected">Rejected</MenuItem>
                          <MenuItem value="pending">Pending</MenuItem>
                          <MenuItem value="suspened">Suspended</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>Skype</FormLabel>
                      <TextField
                        placeholder="Your Skype id"
                        label="skype id"
                        variant="outlined"
                        fullWidth
                        required
                        name="skype"
                        onChange={handleChange}
                        value={skype}
                      />
                    </Grid>

                    <Grid item xs={12} align="center" sx={{ mt: 2 }}>
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

export default CreateAffiliate;
