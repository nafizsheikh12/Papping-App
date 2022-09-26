import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { userInfo } from "../../../../utils/auth";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";
import { createFinance, getFinanceByID, updateFinance } from "../../../../api/Finance/Payment";
import { useEffect } from "react";

export default function AddPayment(props) {
  const [values, setValues] = useState({
    payment_name: "",
    payment_description: "",
    errorMsg: "",
    error: false,
    loading: false,
    disabled: false,
    success: false,
  });

  const {
    payment_name,
    payment_description,
    loading,
    error,
    success,
    disabled,
    errorMsg,
  } = values;

  const { token } = userInfo();
  useEffect(() => {
    getFinanceByID(token, props.id)
      .then((res) => {
        setValues({
          ...values,
          payment_name: res.data.name,
          payment_description: res.data.description 
          });
    
      })
      .catch((err) => {
        let errMsg = "Something went wrong!";
        if (err.response.data !== undefined) {
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
  }, [props.id]);
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

    updateFinance(token,props.id, {
      name: payment_name,
      description: payment_description,
    })
      .then((response) => {
        if (response.status === 200) {
          props.loadedData();
          setValues({
            ...values,
            error: false,
            errorMsg: "Payment updated Successfully!!",
            loading: false,
            disabled: false,
            success: true,
          });
        }
      })
      .catch((err) => {
        let errMsg = "Something went wrong!";
        if (err.response.data !== undefined) {
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
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Payment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showError(error, errorMsg)}
        {showLoading(loading)}
        {showSuccess(success, errorMsg)}
        <form onSubmit={handleSubmit}>
          <Grid xs={12} sm={12} item>
            <TextField
              onChange={handleChange}
              name="payment_name"
              placeholder="Payment Name"
              label="Payment Name"
              variant="outlined"
              fullWidth
              required
              value={payment_name}
            />
          </Grid>
          <br />
          <Grid xs={12} sm={12} item>
            <TextField
              onChange={handleChange}
              name="payment_description"
              placeholder="Payment Description"
              label="Payment Description"
              variant="outlined"
              fullWidth
              required
              value={payment_description}
            />
          </Grid>
          <Button type="submit" className="m_btn">
            {" "}
            {loading ? "Loading...." : "Save"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
