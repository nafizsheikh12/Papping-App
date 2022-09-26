import React, { useState,useEffect } from 'react'
import Layout from '../../../Layout/Layout'
import {Table} from 'react-bootstrap';
import './ApplicationAffiliate.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {EditIcons,DeleteIcons} from '../../../../assets/Icons';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UserAvata from '../../../../assets/avata.png';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Button as BoostrapButton } from "react-bootstrap";
import {
    Card,
    CardContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    TextField,
} from "@mui/material";
  import Tooltip from "@mui/material/Tooltip";
  import UserLogo from "../../../../assets/Rectangle 42.png";
  import { Button } from "@mui/material";
import { useHistory } from 'react-router-dom';
import { deleteAffiliate, getAffiliate } from '../../../../api/Affiliate/Affiliate';
import { userInfo } from '../../../../utils/auth';
import FormSliderTop from '../../../../shared/SharedComponents/FormSlider/FormSliderTop';

const ApplicationAffiliate = () => {
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
        // console.log(res.data)
        setAffiliate([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const removeAffiliate = (id) => {
    console.log("delete", id);
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
      title="Affiliate Application"
      className="affiliate"
      subActive="affiliate.application"
      activeNum="3"
    >
      <div id="ApplicationAffiliate">
        <FormSliderTop title="Affiliate Application form">
          <div className="ManageForm">
            <form>
              <Card className="mangeCard">
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} lg={4} md={4}>
                      <h5>ID</h5>
                      <TextField
                        label="Search By ID"
                        placeholder="Search By ID"
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={4} md={4}>
                      <h5>Name</h5>
                      <TextField
                        label="Search By Name"
                        placeholder="Search By Name"
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={4} md={4}>
                      <h5>Name</h5>
                      <TextField
                        label="Search By Email"
                        placeholder="Search By Email"
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={12} lg={4} md={4}>
                      <h5>Country</h5>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Country
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Country"
                          // onChange={handleChange}
                        >
                          <MenuItem value="Us">Us</MenuItem>
                          <MenuItem value="bangladesh">Bangladesh</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={4} md={4}>
                      <h5>Status</h5>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Status"
                          // onChange={handleChange}
                        >
                          <MenuItem value="all">All</MenuItem>
                          <MenuItem value="active">Active</MenuItem>
                          <MenuItem value="deactive">Deactive</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={4} md={4}>
                      <h5>Manager</h5>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          choose one
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Staus"
                          // onChange={handleChange}
                        >
                          <MenuItem value="all">All</MenuItem>
                          <MenuItem value="finace-cradit">
                            Molla meehedi
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} lg={4} md={4}>
                      <div className="button__wrapper text-right">
                        <BoostrapButton variant="primary m_btn affiliate-application-btn">
                          Apply
                        </BoostrapButton>
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
            <h2>affiliate application</h2>
          </div>
        </div>
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
                <td>{res.manager_name}</td>
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
      </div>
    </Layout>
  );
}

export default ApplicationAffiliate;