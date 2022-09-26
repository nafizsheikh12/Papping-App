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
import React, { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./CreatePostback.scss";
import Layout from "../../../../Layout/Layout";
import { userInfo } from "../../../../../utils/auth";
import { createAffiliate } from "../../../../../api/Affiliate/Affiliate";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../../utils/messages";
import { getManager } from "../../../../../api/Manager/Manager";
import { countryList } from "../../../../../utils/Country";
import { getOffer } from "../../../../../api/Offer/Offer";
import { getUser } from "../../../../../api/Auth/apiAuth";
import { createPostback } from "../../../../../api/Affiliate/Postback";

const CreatePostback = () => {
  const [users, setUser] = useState([]);
  const [offers, setOffer] = useState([]);
  const [managers, setManager] = useState([]);
  const [values, setValues] = useState({
    offer: "",
    user: "",
    country: "",
    revenue: "",
    payout: "",
    errors: false,
    errorMsg: " ",
    error: false,
    loading: false,
    disabled: false,
    success: false,
    countries: [],
  });

  const {
    offer,user,country,revenue,payout,
    
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
    getOffer(token)
      .then((offer) => {
        console.log('offer',offer.data);
        setOffer([...offer.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    getUser(token)
      .then((user) => {
        console.log('user',user);
        setUser([...user.data]);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    createPostback(token, {
      country_id:country,
      offer_id:offer,
      user_id:1,
      revenue,
      payout
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setValues({
            ...values,
            error: false,
            errorMsg: "Affiliate Postback Created Successfully!!",
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
    <Layout title="CreateManager" className='affiliate' subActive='affiliate.postback' activeNum='3'>
      <div id="CreateAffiliate">
        <Typography gutterBottom variant="h3" align="center">
          Create Postback
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
                    
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>Offer</FormLabel>
                      <TextField
                        select
                        fullWidth
                        label="offer"
                        variant="outlined"
                        required
                        sx={{ borderRadius: 4, border: "outlined" }}
                        name="offer"
                        onChange={handleChange}
                      >
                        {offers.map((offer) => (
                          <MenuItem key={offer.id} value={offer.id}>
                            {offer.name}
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
                    {/* <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>User</FormLabel>
                      <TextField
                        select
                        fullWidth
                        label="user"
                        variant="outlined"
                        required
                        sx={{ borderRadius: 4, border: "outlined" }}
                        name="user"
                        onChange={handleChange}
                      >
                        {users.map((user) => (
                          <MenuItem key={user.id} value={user.id}>
                            {user.first_name + ' ' + user.last_name}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid> */}
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>Revenue</FormLabel>
                      <TextField
                        placeholder="Your revenue"
                        label="revenue"
                        variant="outlined"
                        fullWidth
                        required
                        name="revenue"
                        onChange={handleChange}
                      />
                    </Grid>
                   
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>Payout</FormLabel>
                      <TextField
                        placeholder="Your payout"
                        label="payout"
                        variant="outlined"
                        fullWidth
                        required
                        name="payout"
                        onChange={handleChange}
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

export default CreatePostback;
