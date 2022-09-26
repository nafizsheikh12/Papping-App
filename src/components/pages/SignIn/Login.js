import React,{useState} from 'react'
import  dark_logo from '../../../assets/dark.png';
import light_logo from '../../../assets/light.png'
import './Login.scss' ;
import {rightAlign} from '../../../assets/Icons';
import {FaRegCopyright,FaLongArrowAltRight} from 'react-icons/fa';
import loginImg from '../../../assets/login.png';
import {Link} from 'react-router-dom';
import {login} from '../../../api/Auth/apiAuth';
import {authenticate,isAuthenticated} from '../../../utils/auth'
import {Redirect } from 'react-router-dom';
import { showError, showLoading } from '../../../utils/messages';

import {
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";

const Login = () => {
  const [values, setValues] = useState({
    error: false,
    errorMsg:'',
    loading: false,
    disabled: false,
    redirect: false
});

const redirectUser = () =>{
  if(redirect) return <Redirect to='/'/>
  if(isAuthenticated()) return <Redirect to='/'/>
}

const { loading, error,errorMsg, redirect, disabled } = values;

const handleSubmit = (event) => {
  event.preventDefault();

  setValues({ ...values,
    error:false, 
     disabled: false,
      loading: true,
      redirect:false, 
    });
    
  const data = new FormData(event.currentTarget);
  const email = data.get('email');
   const password =  data.get('password');
  login({email,password})
  .then(response =>{
    if(response.status === 200){
      authenticate(response.data.access_token, () =>{
          event.target.reset();
      })
      setValues({ ...values,
        error:false, 
         disabled: false,
          loading: false,
          redirect:true, 
        });
    }
      
      console.log(response);
     
      
  })
  .catch(err =>{
    console.log(err);
      let errMsg = 'Something went wrong!';
      if (err.response.data !== undefined) {
          errMsg = err.response.data.message;
      } else {
          errMsg = 'Something went wrong!';
      };
      console.log(errorMsg);
      setValues({ ...values,
        error:true, 
        errorMsg: errMsg,
         disabled: false,
          loading: false 
        });
  })
};


  return (
    <div id='login'>
      <header className='header'>
            <Grid container>
                    <Grid lg='6' sm='4'>
                        <img src={dark_logo} alt='logo.png'/>
                    </Grid>
                    <Grid lg='6' sm='8'>
                        <ul>
                            <li><Link to='/login' className='btn'>Login</Link></li>
                            <li><Link to='/register' className='btn hover m_btn'>Register</Link></li>
                            <li><button className='btn'>{rightAlign}</button></li>
                        </ul>
                    </Grid>
            </Grid>
      </header>
      <div className='loginContent'>
        <Grid container>
            <Grid lg='6' className='content_center'>
                <img src={loginImg} alt='login.png'/>
            </Grid>
            <Grid lg='5' sm='12'>
            <Card className="MainForm" >
              <CardContent>
              <form id="form" onSubmit={handleSubmit}>
                  {showError(error, errorMsg)}
                  {showLoading(loading)}
                  {redirectUser()}
                  <h2>Login to Your Account</h2>
                  <p>Need designs that will captivate, engage, and convert for your brand? Learn how high quality visuals can help you achieve your brand goals.</p>
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={12} item>
                      <TextField
                        placeholder="Enter your email"
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        required
                        name="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="password"
                        placeholder="Enter phone number"
                        label="password"
                        variant="outlined"
                        fullWidth
                        required
                        name="password"
                      />
                    </Grid>
                    <Grid item xs={12} align="center" sx={{ mt: 2 }}>
                      <button
                      className='logn_btn content_center'
                        type="submit"
                      >
                       <span> { loading ? 'Loading.....':'Login to Your Account'} </span>
                       <FaLongArrowAltRight/>
                      </button>
                      <br/>
                      <Link to=''>Forgotten password?</Link>
                        <p>Not Registered Yet? <Link to='/register'>Register Here</Link></p>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
            </Grid>
        </Grid>
      </div>
      <footer>
        <p><FaRegCopyright/> Copyright © 2021 CPAping LLC | All Rights Reserved.t</p>
      </footer>
    </div>
  )
}

export default Login
