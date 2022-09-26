import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { FormLabel, Grid, MenuItem, TextField } from "@mui/material";
import { userInfo } from "../../../../../utils/auth";
import { createCategory } from "../../../../../api/Offer/Category";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../../utils/messages";
import { getOffer } from "../../../../../api/Offer/Offer";
import { countryList } from "../../../../../utils/Country";
import { createPostback } from "../../../../../api/Affiliate/Postback";
import { Button } from 'react-bootstrap';

export default function AddPostback(props) {
  const [offers, setOffer] = useState([]);
  const [values, setValues] = useState({
    country: " ",
    offer: " ",
    revenue: " ",
    payout: " ",
    errorMsg: " ",
    error: false,
    loading: false,
    disabled: false,
    success: false,
  });

  const {
    country,
    offer,
    payout,
    revenue,
    loading,
    error,
    success,
    disabled,
    errorMsg,
  } = values;

  const { token } = userInfo();
  useEffect(() => {
    getOffer(token)
      .then((offer) => {
        console.log("offer", offer.data);
        setOffer([...offer.data]);
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
        if (response.status === 200) {
          setValues({
            ...values,
            error: false,
            errorMsg: "Affiliate Postback Created Successfully!!",
            loading: false,
            disabled: false,
            success: true,
          });
        }
        // e.target.reset();
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ top: '80px' }}
      className='create__modal'
    >
      <Modal.Body>
        {showError(error, errorMsg)}
        {showLoading(loading)}
        {showSuccess(success, errorMsg)}
        <h4>add postback</h4>
        <form onSubmit={handleSubmit}>
          <Grid xs={12} sm={12} item>
            <FormLabel sx={{ mb: 2 }} style={{ color: "black" }}>
              Countries
            </FormLabel>
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
          <Grid xs={12} sm={12} item style={{ marginTop: "15px" }}>
            <FormLabel sx={{ mb: 2 }} style={{ color: "black" }}>
              Offer
            </FormLabel>
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
          <Grid xs={12} sm={12} item style={{ marginTop: "40px" }}>
            <FormLabel sx={{ mb: 2 }} style={{ color: "black" }}>
              Revenue
            </FormLabel>
            <TextField
              type="text"
              onChange={handleChange}
              name="revenue"
              placeholder="Revenue"
              label="Revenue"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} sm={12} item style={{ marginTop: "40px" }}>
            <FormLabel sx={{ mb: 2 }} style={{ color: "black" }}>
              Payout
            </FormLabel>
            <TextField
              type="text"
              onChange={handleChange}
              name="payout"
              placeholder="Payout"
              label="Payout"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>

          <Button type="submit" variant="save__m_btn">
            {" "}
            {loading ? "Loading...." : "Save"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
