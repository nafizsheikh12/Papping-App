import React from 'react'
import './Login2.scss'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import dark_logo from '../../../assets/dark.png'

const Login2Header = () => {
  return (
    <div id="Login2Header">
      <header className="header">
        <Grid container>
          <Grid lg="6" md="6">
            <img src={dark_logo} alt="logo.png" />
          </Grid>
          <Grid lg="6" md="6">
            <ul>
              <li>
                <Link to="/login" className="login__btn">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="btn  m_btn">
                  Register
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default Login2Header