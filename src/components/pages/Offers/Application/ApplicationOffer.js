import React from 'react'
import Layout from '../../../Layout/Layout'
import {Table} from 'react-bootstrap';
import './ApplicationOffer.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {EditIcons,DeleteIcons} from '../../../../assets/Icons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UserAvata from '../../../../assets/avata.png';
import { Button as BoostrapButton} from "react-bootstrap";
import {
    Card,
    CardContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select
  } from "@mui/material";
import FormSliderTop from '../../../../shared/SharedComponents/FormSlider/FormSliderTop';

import Tooltip from "@mui/material/Tooltip";
import UserLogo from "../../../../assets/Rectangle 42.png";
import { Button } from "@mui/material";


const ApplicationOffer = () => {
  const TooltipsContent = (avata, userTitle) => (
    <div className="text-center">
      <img src={avata} alt="avata.png" style={{ width: "200px" }} />
      <p className="mt-3 text-black"> {userTitle}</p>
    </div>
  );
  return (
    <Layout
      title="Offer Application"
      className="offer"
      subActive="offer.application"
      activeNum="2"
    >
      <div id="ApplicationOffer">
        <FormSliderTop title={`Other's Application Form`}>
          <div className="ManageForm">
            <form>
              <Card className="mangeCard">
                <CardContent>
                  <Grid container spacing={2} columns={11}>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                      <h5>offer</h5>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          choose one
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
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                      <h5>affiliate</h5>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          choose one
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

                    <Grid item xs={12} sm={12} md={3} lg={3}>
                      <h5>Status</h5>
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
                          <MenuItem value="Active">Active</MenuItem>
                          <MenuItem value="finace-cradit">Deactive</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={2} lg={2} >
                      <div className="button__wrapper">
                        <h5 style={{ opacity: "0" }}>Email</h5>
                        <BoostrapButton variant="primary m_btn">
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
        <div className="accordion__from mt-4">
          <div className="header">
            <h2>Offers application</h2>
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
                offer name <ArrowDropDownIcon />
              </th>
              <th>
                message <ArrowDropDownIcon />
              </th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
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
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>finace credit</td>
              <td>Molla Meehedi lorem12 adsfafafafasdfasdfasdfasdf</td>
              <td>
                <span className="active">Active</span>
              </td>
              <td>
                <DropdownButton
                  variant="outline-secondary"
                  title="..."
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#" className="edit">
                    {EditIcons}edit
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="delete">
                    {DeleteIcons} delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
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
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>finace credit</td>
              <td>Molla Meehedi lorem12 adsfafafafasdfasdfasdfasdf</td>
              <td>
                <span className="active">Active</span>
              </td>
              <td>
                <DropdownButton
                  variant="outline-secondary"
                  title="..."
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#" className="edit">
                    {EditIcons}edit
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="delete">
                    {DeleteIcons} delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
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
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>finace credit</td>
              <td>Molla Meehedi lorem12 adsfafafafasdfasdfasdfasdf</td>
              <td>
                <span className="active">Active</span>
              </td>
              <td>
                <DropdownButton
                  variant="outline-secondary"
                  title="..."
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#" className="edit">
                    {EditIcons}edit
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="delete">
                    {DeleteIcons} delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
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
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>finace credit</td>
              <td>Molla Meehedi lorem12 adsfafafafasdfasdfasdfasdf</td>
              <td>
                <span className="active">Active</span>
              </td>
              <td>
                <DropdownButton
                  variant="outline-secondary"
                  title="..."
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#" className="edit">
                    {EditIcons}edit
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="delete">
                    {DeleteIcons} delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
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
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>finace credit</td>
              <td>Molla Meehedi lorem12 adsfafafafasdfasdfasdfasdf</td>
              <td>
                <span className="active">Active</span>
              </td>
              <td>
                <DropdownButton
                  variant="outline-secondary"
                  title="..."
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#" className="edit">
                    {EditIcons}edit
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="delete">
                    {DeleteIcons} delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
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
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>finace credit</td>
              <td>Molla Meehedi lorem12 adsfafafafasdfasdfasdfasdf</td>
              <td>
                <span className="active">Active</span>
              </td>
              <td>
                <DropdownButton
                  variant="outline-secondary"
                  title="..."
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#" className="edit">
                    {EditIcons}edit
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="delete">
                    {DeleteIcons} delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
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
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>finace credit</td>
              <td>Molla Meehedi lorem12 adsfafafafasdfasdfasdfasdf</td>
              <td>
                <span className="active">Active</span>
              </td>
              <td>
                <DropdownButton
                  variant="outline-secondary"
                  title="..."
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#" className="edit">
                    {EditIcons}edit
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="delete">
                    {DeleteIcons} delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Tooltip
                  title={TooltipsContent(
                    UserLogo,
                    "new tR- smart link (US) only"
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
                    new tR- smart link (US) only
                  </Button>
                </Tooltip>
              </td>
              <td>finace credit</td>
              <td>Molla Meehedi lorem12 adsfafafafasdfasdfasdfasdf</td>
              <td>
                <span className="active">Active</span>
              </td>
              <td>
                <DropdownButton
                  variant="outline-secondary"
                  title="..."
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#" className="edit">
                    {EditIcons}edit
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="delete">
                    {DeleteIcons} delete
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>

           
          </tbody>
        </Table>
      </div>
    </Layout>
  );
}

export default ApplicationOffer;