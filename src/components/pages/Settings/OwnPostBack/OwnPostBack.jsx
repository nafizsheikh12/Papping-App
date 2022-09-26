import {
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import React from "react";

const OwnPostBack = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="Settings__OwnPostBack"
    >
      <Typography mt={2} className="form-title">
        {" "}
        Own PostBack
      </Typography>
      <div className="OwnPostBack__form">
        <div className="form__input">
          <TextField
            id="filled-required"
            label="Own Postback In Offer"
            placeholder="Enter Your Email"
            fullWidth
          />
        </div>
        <div className="form__input">
          <TextField
            id="filled-required"
            label="Own Postback In SmartLink"
            placeholder="Enter Your Email"
            fullWidth
          />
        </div>
       
        <div className="text-center">
          <Button variant="primary m_btn" color="primary" type="submit">
            Save Changes
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OwnPostBack;
