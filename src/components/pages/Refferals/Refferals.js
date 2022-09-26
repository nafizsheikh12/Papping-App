import React from 'react'
import Layout from '../../Layout/Layout'
import {Table} from 'react-bootstrap';
import './Refferals.scss';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UserAvata from '../../../assets/avata.png';

import { Button as BooststrapButton } from "react-bootstrap";
import {
    Card,
    CardContent,
    Grid,
    TextField,
  } from "@mui/material";
import FormSliderTop from '../../../shared/SharedComponents/FormSlider/FormSliderTop';


import Tooltip from "@mui/material/Tooltip";
import UserLogo from "../../../assets/Rectangle 42.png";
import { Button } from "@mui/material";

const Refferals = () => {
  const TooltipsContent = (avata, userTitle) => (
    <div className="text-center">
      <img src={avata} alt="avata.png" style={{ width: "200px" }} />
      <p className="mt-3 text-black"> {userTitle}</p>
    </div>
  );
  return (
    <Layout title="Refferals" className="referals">
      <div id="Refferals">
        <div className="accordion__from">
          <FormSliderTop title="Referal form">
            <div className="ManageForm">
              <form>
                <Card className="mangeCard">
                  <CardContent>
                    <Grid container spacing={2} columns={11}>
                      <Grid item xs={12} md={9} lg={9} >
                        <h5>your refer link</h5>
                        <TextField
                          label="https://affiliates.cpaping.com/register?refer_id=23"
                          placeholder="https://affiliates.cpaping.com/register?refer_id=23"
                          variant="outlined"
                          style={{ width: "100%" }}
                          disabled
                        />
                      </Grid>

                      <Grid item  xs={12} md={2} lg={2} >
                        <div className="button__wrapper">
                          <h5 style={{ opacity: "0" }}>Email</h5>
                          <BooststrapButton variant="primary m_btn" className='refferalBtn'>
                            Copy
                          </BooststrapButton>
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </form>
            </div>
          </FormSliderTop>
          <div className="header">
            <h2>refer user list</h2>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                ID <ArrowDropDownIcon />
              </th>
              <th>
                {" "}
                name <ArrowDropDownIcon />
              </th>
              <th>
                email <ArrowDropDownIcon />
              </th>
              <th>
                send time <ArrowDropDownIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1</td>
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
              <td>rakibbhm411@gmail.com</td>
              <td>15 jan, 2024</td>
            </tr>
            <tr>
              <td>#1</td>
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
              <td>rakibbhm411@gmail.com</td>
              <td>15 jan, 2024</td>
            </tr>
            <tr>
              <td>#1</td>
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
              <td>rakibbhm411@gmail.com</td>
              <td>15 jan, 2024</td>
            </tr>
            <tr>
              <td>#1</td>
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
              <td>rakibbhm411@gmail.com</td>
              <td>15 jan, 2024</td>
            </tr>
            <tr>
              <td>#1</td>
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
              <td>rakibbhm411@gmail.com</td>
              <td>15 jan, 2024</td>
            </tr>
            <tr>
              <td>#1</td>
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
              <td>rakibbhm411@gmail.com</td>
              <td>15 jan, 2024</td>
            </tr>
           
          </tbody>
        </Table>
      </div>
    </Layout>
  );
}

export default Refferals;