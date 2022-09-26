

import * as React from 'react';
import {useState,useEffect} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Login2.scss';
import { Button } from '@mui/material';
import Login2Header from './Login2Header';
import {Link} from 'react-router-dom';
import {login} from '../../../api/Auth/apiAuth';
import {authenticate,isAuthenticated} from '../../../utils/auth'
import {Redirect } from 'react-router-dom';
import { showError, showLoading } from '../../../utils/messages';
import { useDispatch } from 'react-redux';


export default function Login2() {
  const [values, setValues] = useState({
    error: false,
    errorMsg:'',
    loading: false,
    disabled: false,
    redirect: false
});

const dispatch = useDispatch();

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

       localStorage.setItem("userRole",JSON.stringify(response.data.role)); 
    }
     dispatch({type:"userRole",payload:response.data.role})
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
    <div className='login__page'>
      <Login2Header />

      <div id="Login2">
        <Box  onSubmit={handleSubmit} component="form" noValidate autoComplete="off">
        {showError(error, errorMsg)}
                  {showLoading(loading)}
                  {redirectUser()}
          <h2 className="mb-3">Welcome Back</h2>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            autoComplete="current-password"
            fullWidth
            required
            name="email"
          />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
            required
              name="password"
          />
          <br />
          <Button type='submit'  variant="contained" fullWidth>
            Login
          </Button>
          <Button
            variant="contained"
            fullWidth
            className="mt-2 bg-secondary text-white"
          >
            Forget password?
          </Button>
        </Box>
      </div>
      <p className='text-muted text-center py-5 footer'> Copyright © 2022 CPAping LLC | All Rights Reserved</p>
    </div>
  );
}
