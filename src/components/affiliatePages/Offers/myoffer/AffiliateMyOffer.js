import React, { useEffect, useState } from "react";
import Layout from "../../../Layout/Layout";
import { Table } from "react-bootstrap";
import "./AllOffer.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { EditIcons, DeleteIcons } from "../../../../assets/Icons";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Loading, showError, showSuccess } from "../../../../utils/messages";
import UserAvata from "../../../../assets/avata.png";


import Tooltip from "@mui/material/Tooltip";
import UserLogo from "../../../../assets/Rectangle 42.png";

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import { getOffer } from "../../../../api/AffiliatePageApi/Offer/Offer";
import { userInfo } from "../../../../utils/auth";
import { useHistory,Link } from "react-router-dom";
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
  const loadData = () => {
    getOffer(token)
      .then((res) => {
        if (res.status === 200) {
          setValues({
            ...values,
            error: false,
            success: success,
            disabled: false,
            loading: false,
          });
          setAffiliate([...res.data]);
          console.log(res)
          console.log(affiliates)
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
  };
  useEffect(() => {
    loadData();
  }, []);
  
  let history = useHistory();
  const editAffiliate = (id) => {
    history.push({
      pathname: "/offer/edit",
      search: "?id=" + id,
    });
  };
  return (
    <Layout
      title="My Offer"
      className="Aoffer"
      subActive="offer.my"
      activeNum="13"
    >
      <div id="ManageAffiliate">
        <div className="accordion__from ">
          <FormSliderTop title="All Offer form">
            <div className="ManageForm">
              <form>
                <Card className="mangeCard">
                  <CardContent>
                    <Grid container spacing={2} columns={11}>
                      <Grid item xs={12} lg={3} md={3}>
                        <h5>ID</h5>
                        <TextField
                          label="Search By ID"
                          placeholder="Search By ID"
                          variant="outlined"
                          style={{ width: "100%" }}
                        />
                      </Grid>
                      <Grid item xs={12} lg={3} md={3}>
                        <h5>Name</h5>
                        <TextField
                          label="Search By Name"
                          placeholder="Search By Name"
                          variant="outlined"
                          style={{ width: "100%" }}
                        />
                      </Grid>
                      <Grid item xs={12} lg={3} md={3}>
                        <h5>Name</h5>
                        <TextField
                          label="Search By Email"
                          placeholder="Search By Email"
                          variant="outlined"
                          style={{ width: "100%" }}
                        />
                      </Grid>

                      <Grid item xs={12} lg={2} md={2}>
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

          <div className="header my__table">
            <h2 className="">My Offer</h2>
          </div>
        </div>
        <Table className="table" responsive>
          <thead>
            <tr>
              <th>
                ID <ArrowDropDownIcon />
              </th>
              <th>
                Manager Name <ArrowDropDownIcon />
              </th>
              <th>
                Category <ArrowDropDownIcon />
              </th>
              <th>Advertiser</th>
              <th>
                Type <ArrowDropDownIcon />
              </th>
              <th>
                Revenue <ArrowDropDownIcon />
              </th>
              <th>
                Payout <ArrowDropDownIcon />
              </th>
              <th>
                Offer Status <ArrowDropDownIcon />
              </th>
              <th>Daily Cap</th>
              <th>Expire Date</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {affiliates.map((res) => (
              <tr key={res.id}>
                <td>{res.id}</td>

                <td>
                  <Tooltip
                    title={TooltipsContent(UserLogo, res.name)}
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
                      {res.name}
                    </Button>
                  </Tooltip>
                </td>
                <td>{res.category_id}</td>
                <td>{res.advertiser_id}</td>
                <td>{res.payout_type}</td>
                <td>{res.revenue}</td>
                <td>{res.payout}</td>
                <td>{res.status}</td>
                <td>{res.cap}</td>
                <td>{res.expire_date}</td>
                <td>
                  <DropdownButton
                    variant="outline-secondary"
                    title="..."
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item
                      href={`/offer/details/${res.id}`}
                      className="aprove"
                    >
                      <RemoveRedEyeIcon />
                      Details
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      className="edit"
                      onClick={() => editAffiliate(res.id)}
                    >
                      {EditIcons}edit
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
