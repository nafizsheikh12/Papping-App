import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import SignupQuestionModal from "./SignupQuestionModal";
import EditSignupQuestionModal from "./EditSignupQuestionModal";
// import { Button } from '@mui/material';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { userInfo } from "../../../../utils/auth";
import { deleteQuestion, getQuestion } from "../../../../api/Settings/Settings";
import DeleteIcon from "@mui/icons-material/Delete";

import CachedIcon from "@mui/icons-material/Cached";
import { Button } from "@mui/material";

import {Button as BootstrapBtn} from "react-bootstrap";

const SignUpQuestion = () => {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [values, setValues] = useState({
    name: "",
    placeholder: "",
    required: "",
    editID: null,
    questions: [],
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
    editID,
    questions,
    loading,
    error,
    success,
    disabled,
    errorMsg,
  } = values;
  const { token } = userInfo();
  const loadData = () => {
    getQuestion(token)
      .then((response) => {
        if (response.status === 200) {
          setValues({
            ...values,
            questions: response.data,
            error: false,
            success: success,
            disabled: false,
            loading: false,
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
          loading: true,
        });
      });
  };
  useEffect(() => {
    loadData();
  }, []);
  const setEditModal = (id) => {
    setValues({
      ...values,
      editID: id,
    });
    setTimeout(() => {
      setEditModalShow(true);
    }, 300);
  };
  const deleteRecord = (id) => {
    deleteQuestion(token,id)
      .then((response) => {
        if (response.status === 200) {
          loadData();
          setValues({
            ...values,
            error: false,
            errorMsg: "Question deleted Successfully!!",
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
    <div>
      <Box container spacing={2} className="Settings__SignUpQuestion">
        <div className="SignUpQuestion__header">
          <p className="SignUpQuestion__title">Signup Additional Question</p>

          <BootstrapBtn variant="primary m_btn" onClick={() => setModalShow(true)}>
            Create
          </BootstrapBtn>
        </div>
        <SignupQuestionModal
          className="SignUpQuestion__modal"
          show={modalShow}
          loadedData={loadData}
          onHide={() => setModalShow(false)}
        />
        <EditSignupQuestionModal
          className="SignUpQuestion__modal"
          show={editModalShow}
          loadedData={loadData}
          id={editID}
          onHide={() => setEditModalShow(false)}
        />
        <div>
          <TableContainer component={Paper} className="SignUpQuestionTable">
            <Table aria-label="simple table" responsive>
              <TableHead className="table__header">
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Question</TableCell>
                  <TableCell align="center">Placeholder</TableCell>
                  <TableCell align="center">Required Status</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {questions.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className="table__row"
                  >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.placeholder}</TableCell>
                    <TableCell align="center">
                      {row.required == 1 ? "Required" : "Not Required"}
                    </TableCell>
                    <TableCell align="center">
                      <div style={{ display: "flex", gap: 8 }}>
                        <Button
                          variant="contained"
                          size="small"
                          className="reverse__Btn mr-2"
                          onClick={() => setEditModal(row.id)}
                        >
                          <CachedIcon className="reverse__icon" />
                          <p>Edit</p>
                        </Button>

                        <Button
                          variant="contained"
                          size="small"
                          className="delete__Btn"
                          onClick={() => deleteRecord(row.id)}
                        >
                          <DeleteIcon className="delete-icon" />
                          <p>Delete</p>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </div>
  );
};

export default SignUpQuestion;
