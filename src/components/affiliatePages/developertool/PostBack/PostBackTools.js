import React from "react";
import Layout from "../../../Layout/Layout";
import { Table } from "react-bootstrap";
import "./PostBackTools.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UserAvata from "../../../../assets/avata.png";

import {  Card, CardContent, Grid, TextField } from "@mui/material";
import FormSliderTop from "../../../../shared/SharedComponents/FormSlider/FormSliderTop";
import { Button } from "react-bootstrap";

const PostBackTools = () => {
  return (
    <Layout title="Tools PostBack" className="affiliateDeveloperTool" activeNum="15"    subActive="affiliateDeveloperTool.postback">
      <div id="PostBackTools">
        <div className="ManagerHeader">
          <h2>global postback</h2>
        </div>
        <FormSliderTop title="Global Postback">
          <div className="ManageForm">
            <form>
              <Card className="mangeCard">
                <CardContent>
                  <Grid container spacing={2} columns={11}>
                    <Grid item lg={9} md={9} xs={12}>
                      <h5>global s2S postback URL</h5>
                      <TextField
                        label="https://track22ad.com/postback?click_id={aff_click_id}"
                        placeholder="https://track22ad.com/postback?click_id={aff_click_id}"
                        variant="outlined"
                        style={{ width: "100%" }}
                      />
                    </Grid>

                    <Grid item lg={2} md={2} xs={12}>
                      <div className="button__wrapper">
                        <h5 style={{ opacity: "0" }}>Email</h5>
                        <Button variant="primary m_btn" className='px-5 py-3'>Save</Button>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </form>
          </div>
        </FormSliderTop>
        <div className="accordion__from ">
          <div className="header">
            <h2>postback tokens</h2>
          </div>
        </div>
        <Grid container style={{justifyContent: 'center'}}>
          <Grid item lg={8}>
            <Table>
              <thead>
                <tr>
                  <th>
                    token <ArrowDropDownIcon />
                  </th>
                  <th>
                    {" "}
                    description <ArrowDropDownIcon />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
                <tr>
                  <td>
                    <span>salkmasdf</span>
                  </td>
                  <td>campain ID</td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default PostBackTools;
