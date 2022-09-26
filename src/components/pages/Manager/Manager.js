import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { Table } from "react-bootstrap";
import "./Manager.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { EditIcons, DeleteIcons } from "../../../assets/Icons";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UserAvata from "../../../assets/avata.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { userInfo } from "../../../utils/auth";
import { getManager, deleteManager } from "../../../api/Manager/Manager";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { Loading, showError } from "../../../utils/messages";

const Manager = (props) => {
  const [managers, setManager] = useState([]);
  const [values, setValues] = useState({
    errorMsg: "",
    error: false,
    loading: true,
    success: false,
    Categories_data: [],
  });
  const { loading, error, errorMsg, Categories_data, success } = values;
  const { token } = userInfo();
  useEffect(() => {
    getManager(token)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setValues({
            ...values,
            error: false,
            success: success,
            disabled: false,
            loading: false,
          });
          setManager([...res.data]);
        }
      })
      .catch((err) => {
        let errMsg = "Something went wrong!";
        if (err.response.data !== undefined) {
          errMsg = err.response.data.message;
        } else {
          errMsg = "Something went wrong!";
        }
        setValues({ ...values, error: true, errorMsg: errMsg });
      });
  }, []);


  const removeManager = (id) => {
    if (!window.confirm("Are You Sure?")) return;
    deleteManager(token, id)
      .then((response) => {
        console.log(response);
        setValues({
          ...values,
          error: false,
          success: true,
          errorMsg: "Deleted Successfully!!",
          disabled: false,
          loading: false,
        });
      })
      .catch((err) => {
        let errMsg = "Something went wrong!";
        if (err.response.data !== undefined) {
          errMsg = err.response.data.message;
        } else {
          errMsg = "Something went wrong!";
        }
        setValues({ ...values, error: true, errorMsg: errMsg });
      });
  };
  let history = useHistory();
  const editManager = (id) => {
    history.push({
      pathname: "/manager/edit",
      search: "?id=" + id,
    });
  };
  return (
    <Layout
      tittle="Manger"
      className="manager"
      subActive="manager.manage"
      activeNum="4"
    >
      <div id="Manager">
        <div className="accordion__from">
          <div className="header">
            <h2>manage manager</h2>
          </div>
        </div>
        <Table className="table" responsive>
          <thead>
            <tr>
              <th>
                ID <ArrowDropDownIcon />
              </th>
              <th>
                Manger name <ArrowDropDownIcon />
              </th>
              <th>
                email <ArrowDropDownIcon />
              </th>
              <th>
                affiliate count <ArrowDropDownIcon />
              </th>
              <th>
                countries <ArrowDropDownIcon />
              </th>
              <th>
                skype <ArrowDropDownIcon />
              </th>
              <th>
                balance <ArrowDropDownIcon />
              </th>
              <th>created date</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((manager) => (
              <tr key={manager.id}>
                <td>{manager.id}</td>
                <td>
                  <img src={manager.avatar} alt={manager.avatar} />
                </td>
                <td>{manager.email}</td>
                <td>{manager.phone}</td>
                <td>{manager.country_id}</td>
                <td>{manager.skype}</td>
                <td>{manager.balance ? manager.balance : "--"}</td>
                <td>
                  
                  {moment(manager.created_at).format("D MMM, Y")}
                </td>
                <td>{manager.status}</td>
                <td>
                  <DropdownButton
                    variant="outline-secondary"
                    title="..."
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#" className="aprove">
                      <RemoveRedEyeIcon />
                      Login
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      className="edit"
                      onClick={() => editManager(manager.id)}
                    >
                      {EditIcons}edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      className="delete"
                      onClick={() => removeManager(manager.id)}
                    >
                      {DeleteIcons} delete
                    </Dropdown.Item>
                  </DropdownButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {showError(error, errorMsg)}
        {Loading(loading)}
      </div>
    </Layout>
  );
};

export default Manager;
