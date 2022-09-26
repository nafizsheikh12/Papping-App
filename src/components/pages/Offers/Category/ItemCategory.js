import React, { useState } from "react";
import { EditIcons, DeleteIcons } from "../../../../assets/Icons";
import {  Form } from "react-bootstrap";
import moment from "moment";
import { userInfo } from "../../../../utils/auth";
import { updateCategory } from "../../../../api/Offer/Category";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

const ItemCategory = (props) => {
  const [values, setValues] = useState({
    name: props.data.name,
    errorMsg: " ",
    error: false,
    loading: false,
    disabled: false,
    success: false,
    inputFile: 0,
  });
  const { name, loading, error, success, disabled, errorMsg, inputFile } =
    values;

  const { token } = userInfo();
  const handleChange = (e) => {
    setValues({
      ...values,
      name: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.childSetInputFile(0)
    updateCategory(token, props.data.id, { name })
      .then((response) => {
        if (response.status === 200) {
          setValues({
            ...values,
            inputFile: 0,
            error: false,
            errorMsg: "Advertiser Created Successfully!!",
            loading: false,
            disabled: false,
            success: true,
          });
        }
        console.log(response);
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

  function buttonChange12(id) {
    props.childSetInputFile(id)
  }
  return (
    <>
      <tr>
        <td># {props.data.id}</td>
        <td className="categoryName">
          {props.data.id !== props.inputFile ? (
            name
          ) : (
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          )}
        </td>
        <td> {moment(props.data.created_at).format("D MMM, Y")}</td>
        <td className="w__20">
          <ul className="actionButton">
            <li>
              {props.inputFile === props.data.id ? (
                <Button className="edit m_btn" onClick={(e) => handleSubmit(e)}>
                  {EditIcons}Save
                </Button>
              ) : (
                <Button
                  className="reverse__Btn mr-2"
                  onClick={() => buttonChange12(props.data.id)}
                >
                  <EditIcon className="reverse__icon" />
                  <p>Edit</p>
                </Button>
              )}
            </li>
            <li>
              <Button className="delete__Btn" onClick={props.removeItem}>
                <DeleteIcon className="delete-icon" />
                <p>Delete</p>
              </Button>
            </li>
          </ul>
        </td>
      </tr>

    </>
  );
};

export default ItemCategory;
