

import {
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";
import TextField from "@mui/material/TextField";
import React from "react";

const Smtp = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="Settings__Smtp"
    >
      <Typography mt={2} className="form-title">
        {" "}
        Smtp Setup
      </Typography>
      <div className="Smtp__form">
        <div className="form__input">
          <TextField
            id="filled-required"
            placeholder="Smtp"
            label="Smtp Driver"
            fullWidth
          />
        </div>
        <div className="form__input">
          <TextField id="filled-required" label="Smtp Host" fullWidth />
        </div>
        <div className="form__input">
          <TextField
            id="filled-required"
            label="Smtp Port"
            placeholder="507"
            fullWidth
          />
        </div>
        <div className="form__input">
          <TextField
            id="filled-required"
            label="Smtp Username"
            placeholder="no-reply@cpaping.com"
            fullWidth
          />
        </div>
        <div className="form__input">
          <TextField
            id="filled-required"
            label="Smtp Encryption"
            placeholder="TLS"
            fullWidth
          />
        </div>
        <div className="form__input">
          <TextField
            id="filled-required"
            label="From Mail"
            placeholder="no-reply@cpaping.com"
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

export default Smtp;
