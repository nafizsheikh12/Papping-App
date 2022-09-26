import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../../utils/messages";
import { userInfo } from "../../../../utils/auth";
import { createQuestion, getQuestionByID, updateQuestion } from "../../../../api/Settings/Settings";

const SignupQuestionModal = (props) => {
  const [values, setValues] = useState({
    name: "",
    placeholder: "",
    required: "",
    errorMsg: "",
    error: false,
    loading: false,
    disabled: false,
    success: false,
  });

  const {
    name,
    placeholder,
    required,
    loading,
    error,
    success,
    disabled,
    errorMsg,
  } = values;

  const { token } = userInfo();
  useEffect(() => {
    getQuestionByID(token, props.id)
      .then((res) => {
        setValues({
          ...values,
          name: res.data.name,
          placeholder: res.data.placeholder, 
          required: res.data.required 
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

    updateQuestion(token,props.id, { name,placeholder,required })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          props.loadedData()
          setValues({
            ...values,
            error: false,
            errorMsg: "Question Updated Successfully!!",
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
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {showError(error, errorMsg)}
        {showLoading(loading)}
        {showSuccess(success, errorMsg)}
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Placeholder
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Required"
              name="placeholder"
              value={placeholder}
              onChange={handleChange}
            />
          </div>
          <div className="form__input">
            <label for="exampleFormControlInput1" class="form-label">
              Required
            </label>
            <Select
              labelId="select-label"
              fullWidth
              name="required"
              value={required}
              onChange={handleChange}
            >
              <MenuItem value="1">True</MenuItem>
              <MenuItem value="0">False</MenuItem>
            </Select>
          </div>
          <Button type="submit" className="m_btn">
            {" "}
            {loading ? "Loading...." : "Save"}
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SignupQuestionModal;
