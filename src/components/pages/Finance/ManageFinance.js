import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import { Table, Button } from "react-bootstrap";
import AddPayment from "./Elements/AddPayment";
import EditPayment from "./Elements/EditPayment";
import "./Finance.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  EditIcons,
  DeleteIcons,
  WatchIcons,
  CheckedIcons,
} from "../../../assets/Icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { userInfo } from "../../../utils/auth";
import {
  showError,
  showSuccess,
  showLoading,
} from "../../../utils/messages";
import { deleteFinance, getFinance } from "../../../api/Finance/Payment";

const ManageFinance = () => {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [values, setValues] = useState({
    payment_name: "",
    payment_description: "",
    editID: null,
    payments:[],
    errorMsg: "",
    error: false,
    loading: false,
    disabled: false,
    success: false,
  });

  const {
    payment_name,
    payment_description,
    editID,
    payments,
    loading,
    error,
    success,
    disabled,
    errorMsg,
  } = values;
  const { token } = userInfo();
   const loadData = () => {
    getFinance(token)
      .then((response) => {
        if (response.status === 200) {
          setValues({
            ...values,
            payments: response.data,
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
   }
  useEffect(() => {
    loadData()
  }, []);
  const setEditModal = (id) =>{
    setValues({
      ...values,
      editID: id
    });
    setTimeout(() => {
      setEditModalShow(true);
    }, 300);
  }
      const deleteRecord = (id) =>{
        deleteFinance(token,id)
          .then((response) => {
            if (response.status === 200) {
              loadData();
              setValues({
                ...values,
                error: false,
                errorMsg: "Payment deleted Successfully!!",
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
      }
  return (
    <Layout
      title="Manage Finance"
      className="finance"
      subActive="finance.manage"
      activeNum="6"
    >
      <div id="MangeFinance">
        <div className="accordion__from">
          <div className="manageFinaceHeader  pt-3 px-3 header">
            <h2>Manage Finance</h2>
            <Button
              variant="primary duplicate__m_btn"
              onClick={() => setModalShow(true)}
            >
              add a payment mathod
            </Button>
            <AddPayment
              show={modalShow}
              loadedData={loadData}
              onHide={() => setModalShow(false)}
            />
            <EditPayment
              show={editModalShow}
              id={editID}
              loadedData={loadData}
              onHide={() => setEditModalShow(false)}
            />
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                ID <ArrowDropDownIcon />
              </th>
              <th>payment method name</th>
              <th>payment method description</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr>
                <td>{payment.id}</td>
                <td>{payment.name}</td>
                <td>{payment.description}</td>
                <td>
                  <DropdownButton
                    variant="outline-secondary"
                    title="..."
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item
                      href="#"
                      className="edit"
                      onClick={() => setEditModal(payment.id)}
                    >
                      {EditIcons}edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      className="delete"
                      onClick={() => deleteRecord(payment.id)}
                    >
                      {DeleteIcons} delete
                    </Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Layout>
  );
};

export default ManageFinance;
