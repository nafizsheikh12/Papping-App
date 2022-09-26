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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./CreateAffiliate.scss";
import Layout from "../../../Layout/Layout";
import ImageUpload from "../../../../utils/ImageUpload";
import { userInfo } from "../../../../utils/auth";
import { createAffiliate } from "../../../../api/Affiliate/Affiliate";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";
import { getManager } from "../../../../api/Manager/Manager";
import { countryList } from "../../../../utils/Country";
import { Button } from "react-bootstrap";
const CreateAffiliate = () => {
  const [file, setFile] = useState([]);
  const [managers, setManager] = useState([]);
  const [values, setValues] = useState({
    first__name: "",
    last__name: "",
    email: "",
    password: "",
    country: "",
    skype: "",
    status: "",
    manager_id: "",
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
    manager_id,
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
  useEffect(() => {
    getManager(token)
      .then((manager) => {
        setManager([...manager.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("first_name", first__name);
    formData.append("last_name", last__name);
    formData.append("email", email);
    formData.append("country_id", country);
    formData.append("skype", skype);
    formData.append("password", password);
    formData.append("password_confirmation", password);
    formData.append("manager_id", manager_id);
    formData.append("avatar", file[0]);
    createAffiliate(token, formData)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setValues({
            ...values,
            error: false,
            errorMsg: "Affiliate Created Successfully!!",
            loading: false,
            disabled: false,
            success: true,
          });
        }
        e.target.reset();
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
    <Layout
      title="CreateManager"
      className="managerAffiliate"
      subActive="managerAffiliate.create"
      activeNum="24"
    >
      <div id="CreateAffiliate">
        <Typography gutterBottom variant="h3" align="center">
          create affiliate
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card className="MainForm CreateAffiliateForm">
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
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>Password</FormLabel>
                      <TextField
                        type="password"
                        placeholder="Enter phone number"
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
                        name="country"
                        onChange={handleChange}
                      >
                        {countryList.map((country) => (
                          <MenuItem key={country.id} value={country.id}>
                            {country.name}
                          </MenuItem>
                        ))}
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
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>Manager</FormLabel>
                      <TextField
                        select
                        fullWidth
                        label="Manager"
                        variant="outlined"
                        required
                        sx={{ borderRadius: 4, border: "outlined" }}
                        name="manager_id"
                        onChange={handleChange}
                      >
                        {managers.map((res) => (
                          <MenuItem key={res.id} value={res.id}>
                            {res.first_name + " " + res.last_name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <ImageUpload sendFileTo={setSendFile} />
                    </Grid>
                    <Grid item xs={12} align="center" sx={{ mt: 2 }}>
                      <Button
                        type="submit"
                        variant="primary m_btn"
                        style={{
                          paddingRight: '80px',
                          paddingLeft: '80px',
                        
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
