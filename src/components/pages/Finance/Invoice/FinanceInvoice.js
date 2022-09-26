import React from 'react'
import Layout from '../../../Layout/Layout'
import {Table,Button as BoostrapButton} from 'react-bootstrap';
import AddPayment from '../Elements/AddPayment';
import './FinanceInvoice.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {EditIcons,DeleteIcons} from '../../../../assets/Icons';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import UserAvata from '../../../../assets/avata.png';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import Tooltip from "@mui/material/Tooltip";
import UserLogo from "../../../../assets/Rectangle 42.png";
import { Button } from "@mui/material";

import {
    Card,
    CardContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
  } from "@mui/material";
import FormSliderTop from '../../../../shared/SharedComponents/FormSlider/FormSliderTop';
import InputDatePicker from './../../../../shared/SharedComponents/DatePicker/InputDatePicker';

const FinanceInvoice = () => {
  const [modalShow, setModalShow] = React.useState(false);
  
  const TooltipsContent = (avata, userTitle) => (
    <div className="text-center">
      <img src={avata} alt="avata.png" style={{ width: "200px" }} />
      <p className="mt-3 text-black"> {userTitle}</p>
    </div>
  );
  return (
    <Layout
      title="Finance Invoice"
      className="finance"
      subActive="finance.invoice"
      activeNum="6"
    >
      <div id="FinanceInvoice">
        <div className="accordion__from">
          <FormSliderTop title="Finance Invoice Form">
            <div className="ManageForm">
              <form>
                <Card className="mangeCard">
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4} lg={4}>
                        <h5>affiliate</h5>
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

                      <Grid item xs={12} md={4} lg={4}>
                        <h5>Date</h5>
                        <InputDatePicker />
                      </Grid>

                      <Grid item xs={12} md={4} lg={4}>
                        <div className="button__wrapper text-right">
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
          <div className="manageFinaceHeader pt-3 px-3 header">
            <h2>affiliate invoice</h2>
            <BoostrapButton
              variant="primary duplicate__m_btn"
              onClick={() => setModalShow(true)}
            >
              add a payment mathod
            </BoostrapButton>
            <AddPayment show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>

        <Table responsive>
          <thead>
            <tr style={{ whiteSpace: "nowrap" }}>
              <th>
                ID <ArrowDropDownIcon />
              </th>
              <th>
                affiliate name <ArrowDropDownIcon />
              </th>
              <th>
                finance <ArrowDropDownIcon />
              </th>
              <th>
                conversion <ArrowDropDownIcon />
              </th>
              <th>
                amount <ArrowDropDownIcon />
              </th>
              <th>
                start date <ArrowDropDownIcon />
              </th>
              <th>
                end date <ArrowDropDownIcon />
              </th>
              <th>
                wallet <ArrowDropDownIcon />
              </th>
              <th>
                created at <ArrowDropDownIcon />
              </th>
              <th>
                paid at <ArrowDropDownIcon />
              </th>
              <th>
                status <ArrowDropDownIcon />
              </th>
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
              <td>finance credit</td>
              <td>154</td>
              <td>$154.00</td>
              <td>15 jan, 2024</td>
              <td>15 jan, 2024</td>
              <td>$50.00</td>
              <td>15 jan, 2024</td>
              <td>15 jan, 2024</td>
              <td>
                <span className="active">Active</span>
              </td>
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
              <td>finance credit</td>
              <td>154</td>
              <td>$154.00</td>
              <td>15 jan, 2024</td>
              <td>15 jan, 2024</td>
              <td>$50.00</td>
              <td>15 jan, 2024</td>
              <td>15 jan, 2024</td>
              <td>
                <span className="active">Active</span>
              </td>
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
              <td>finance credit</td>
              <td>154</td>
              <td>$154.00</td>
              <td>15 jan, 2024</td>
              <td>15 jan, 2024</td>
              <td>$50.00</td>
              <td>15 jan, 2024</td>
              <td>15 jan, 2024</td>
              <td>
                <span className="active">Active</span>
              </td>
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
              <td>finance credit</td>
              <td>154</td>
              <td>$154.00</td>
              <td>15 jan, 2024</td>
              <td>15 jan, 2024</td>
              <td>$50.00</td>
              <td>15 jan, 2024</td>
              <td>15 jan, 2024</td>
              <td>
                <span className="active">Active</span>
              </td>
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
              <td>finance credit</td>
              <td>154</td>
              <td>$154.00</td>
              <td>15 jan, 2024</td>
              <td>15 jan, 2024</td>
              <td>$50.00</td>
              <td>15 jan, 2024</td>
              <td>15 jan, 2024</td>
              <td>
                <span className="active">Active</span>
              </td>
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

export default FinanceInvoice;