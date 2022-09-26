import { Grid } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from './../../Layout/Layout';
import Appearance from './Appearance/Appearance';
import General from './General/General';
import OwnPostBack from './OwnPostBack/OwnPostBack';
import "./Settings.scss";
import SignUpQuestion from './SignUpQuestion/SignUpQuestion';
import Smtp from './Smtp/Smtp';

const Settings = () => {
    const { setting } = useParams()
    console.log(setting);
  return (
    <Layout title="Settings">
      <Grid container spacing={2} id="Settings">
        <Grid
          item
          xs={12}
          lg={3}
          md={3}
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={2}
          className="text-muted"
        >
            <ul className='setting-ui-li'>
                <li>             
                  <Link to="/settings/general" className="setting__url">
                    General
                  </Link>
                </li>  
                <li>
                  <Link to="/settings/appearance" className="setting__url">
                    Appearance
                  </Link>
                </li>
                <li>
                  <Link to="/settings/own-post-back" className="setting__url">
                    Own Post Back
                  </Link>
                </li>
                <li>  
                  <Link to="/settings/signup-ques" className="setting__url">
                    Sign Up Additional Questions
                  </Link>
                </li>
                <li> 
                  <Link to="/settings/smtp" className="setting__url">
                    Smtp
                  </Link>
                </li> 
             </ul>

        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {setting === undefined ? (
            <General />
          ) : setting === "general" ? (
            <General />
          ) : setting === "appearance" ? (
            <Appearance />
          ) : setting === "own-post-back" ? (
            <OwnPostBack />
          ) : setting === "signup-ques" ? (
            <SignUpQuestion />
          ) : setting === "smtp" ? (
            <Smtp />
          ) : (
            <h2> Please input valid url</h2>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Settings