import React, { useEffect, useState } from "react";
import Layout from "../../../Layout/Layout";
import { Table } from "react-bootstrap";
import "./ManageAffiliate.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { EditIcons, DeleteIcons } from "../../../../assets/Icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UserAvata from "../../../../assets/avata.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import Tooltip from "@mui/material/Tooltip";
import UserLogo from "../../../../assets/Rectangle 42.png";

import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import {
  deleteAffiliate,
  getAffiliate,
} from "../../../../api/Affiliate/Affiliate";
import { userInfo } from "../../../../utils/auth";
import { useHistory } from "react-router-dom";
import { Loading, showError } from "../../../../utils/messages";
import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";

const ManageAffiliate = () => {
  const [affiliates, setAffiliate] = useState([]);
  const [values, setValues] = useState({
    errorMsg: "",
    error: false,
    loading: true,
    success: false,
    Categories_data: [],
  });
  const { loading, error, errorMsg, Categories_data, success } = values;
  const { token } = userInfo();

  const TooltipsContent = (avata, userTitle) => (
    <div className="text-center">
      <img src={avata} alt="avata.png" style={{ width: "200px" }} />
      <p className="mt-3 text-black"> {userTitle}</p>
    </div>
  );
  useEffect(() => {
    getAffiliate(token)
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
          setAffiliate([...res.data]);
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
  const removeAffiliate = (id) => {
    if (!window.confirm("Are You Sure?")) return;
    deleteAffiliate(token, id)
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
  const editAffiliate = (id) => {
    history.push({
      pathname: "/affiliate/edit",
      search: "?id=" + id,
    });
  };
  return (
    <Layout
      title="Manage Affiliate"
      className="affiliate"
      subActive="affiliate.manage"
      activeNum="3"
    >
      <div id="ManageAffiliate">
        <FormSliderTop title="Manage Affiliate Form">
          <div className="ManageForm">
            <form>
              <Card className="mangeCard">
                <CardContent>
                  <Grid container spacing={2} columns={11}>
                    <Grid item xs={12} md={3} lg={3}>
                      <h5>ID</h5>
                      <TextField
                        label="Search By ID"
                        placeholder="Search By ID"
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item  xs={12} md={3} lg={3}>
                      <h5>Name</h5>
                      <TextField
                        label="Search By Name"
                        placeholder="Search By Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item  xs={12} md={3} lg={3}>
                      <h5>Name</h5>
                      <TextField
                        label="Search By Email"
                        placeholder="Search By Email"
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </Grid>

                    <Grid item x xs={12} md={2} lg={2}>
                      <div className="button__wrapper">
                        <h5 style={{ opacity: "0" }}>Email</h5>
                        <Button className="apply__btn" variant="contained">
                          Apply
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </form>
          </div>
        </FormSliderTop>
        <div className="accordion__from">
          <div className="header">
            <h2>Manage Affiliates</h2>
          </div>
        </div>
        {/* </div> */}
        <Table className="table" responsive>
          <thead>
            <tr>
              <th>
                ID <ArrowDropDownIcon />
              </th>

              <th>
                Affiliate name <ArrowDropDownIcon />
              </th>
              <th>
                email <ArrowDropDownIcon />
              </th>
              <th>
                manager name <ArrowDropDownIcon />
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
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {affiliates.map((res) => (
              <tr key={res.id}>
                <td>{res.id}</td>

                {/* <td>{res.first_name + " " + res.last_name}</td> */}

                <td>
                  <Tooltip
                    title={TooltipsContent(
                      UserLogo,
                      res.first_name + " " + res.last_name
                    )}
                    className="text-center"
                    componentsProps={{
                      tooltip: {
                        sx: {
                          bgcolor: "white",
                          width: "400px",
                          padding: "10px 30px 10px 30px",
                          height: "auto",
                          borderRadius: "10px",
                          boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                        },
                      },
                    }}
                  >
                    <Button className="toolTipsStyle">
                      <img src={UserAvata} alt="avata.png" />
                      {res.first_name + " " + res.last_name}
                    </Button>
                  </Tooltip>
                </td>
                <td>{res.email}</td>
                <td>{res.manager_name.substring(0, 30)}</td>
                <td>{res.country_id}</td>
                <td>{res.skype}</td>
                <td>{res.balance}</td>
                <td>{res.created_at}</td>
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
                      onClick={() => editAffiliate(res.id)}
                    >
                      {EditIcons}edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      className="delete"
                      onClick={() => removeAffiliate(res.id)}
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

export default ManageAffiliate;
