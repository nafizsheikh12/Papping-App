import { Card, Grid, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import './Notifications.scss';
import { Button } from 'react-bootstrap';

const Update = () => {
  return (
    <Layout title="Notifications">
      <Grid container spacing={4} className="notificationMain">
        <Grid item xs={2}>
          <Stack spacing={2}>
            <div>
              <Link to="/notifications">
                <Button variant="primary outline__btn">Message</Button>
              </Link>
            </div>
            <div>
              <Link c>
                <Button variant="primary m_btn">Update</Button>
              </Link>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ p: 4 }}>
            <form id="form">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6">Update</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2">Update</Typography>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="update"
                    multiline
                    rows={7}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} align="center">
                  <Button type="submit" variant="primary m_btn">
                    Update
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Update;
