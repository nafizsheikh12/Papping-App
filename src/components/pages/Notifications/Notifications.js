import SendIcon from "@mui/icons-material/Send";
import { Card, Grid, TextField, Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import Stack from "@mui/material/Stack";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import "./Notifications.scss"

const Notifications = () => {
  return (
    <Layout title="Notifications" className="notification">
      <div id="Notifications" className="notificationMain">
        <Grid container spacing={4}>
          <Grid item lg={2} md={2} xs={12} className="notificationBtnParent">
           
              <div>
                <Button variant="primary outline__btn widthfull" color="primary">
                  Message
                </Button>
              </div>
              <div>
                <Link to="/notifications/update">
                  <Button variant="btn btn-primary m_btn widthfull">Update</Button>
                </Link>
              </div>
            
          </Grid>
          <Grid item lg={8} md={8} xs={12}>
            <Card sx={{ p: 4 }} className="custom_xt7fpq">
              <form id="form">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6">Notification</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Message</Typography>
                  </Grid>

                  <Grid item xs={12} className="css8ewp">
                    <TextField
                      label="Message"
                      multiline
                      rows={7}
                      placeholder="Type your message here"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12} align="center">
                    <Button variant="primary m_btn" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Notifications;
