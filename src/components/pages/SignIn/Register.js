
import React,{useState} from 'react'
import  dark_logo from '../../../assets/dark.png';
import light_logo from '../../../assets/light.png'
import './Register.scss' ;
import {rightAlign} from '../../../assets/Icons';
import {FaRegCopyright,FaLongArrowAltRight} from 'react-icons/fa';
import loginImg from '../../../assets/login.png';
import {Link} from 'react-router-dom';
import {register} from '../../../api/Auth/apiAuth';
import {authenticate,isAuthenticated} from '../../../utils/auth'
import {Redirect } from 'react-router-dom';
import {
    showError,
    showSuccess,
    showLoading,
  } from "../../../utils/messages";
import ImageUpload from "../../../utils/ImageUpload";

import {
    Box,
    Button,
    Card,
    CardContent,
    FormLabel,
    Grid,
    MenuItem,
    TextField,
    Typography,
  } from "@mui/material";

const Register = () => {
    const [file, setFile] = useState([]);
  const [values, setValues] = useState({
    error: false,
    errorMsg:'',
    loading: false,
    disabled: false,
    redirect: false,
    success:false,
});
const setSendFile = (file) => {
    setFile(file);
  };
const redirectUser = () =>{
  if(redirect) return <Redirect to='/'/>
  if(isAuthenticated()) return <Redirect to='/'/>
}

const { loading, error,errorMsg, redirect, disabled ,success} = values;

const handleSubmit = (event) => {
  event.preventDefault();

  setValues({ ...values,
    error:false, 
     disabled: false,
      loading: true,
      redirect:false, 
    });
    
  const data = new FormData(event.currentTarget);
  const first_name  = data.get('first_name ');
  const last_name = data.get('last_name');
  const skype = data.get('skype');
  const email = data.get('email');
   const password =  data.get('password');
   const country_id =  data.get('country_id');
   const password_confirmation =  data.get('password_confirmation');
   register({first_name,last_name,email,skype,country_id,password,password_confirmation})
  .then(response =>{
    console.log(response);
    if(response.status === 200){
      // authenticate(response.data.access_token, () =>{
      //     event.target.reset();
      // })
      // setValues({ ...values,
      //   error:false, 
      //    disabled: false,
      //     loading: false,
      //     redirect:true, 
      //   });
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
    <div id='Registe'>
      <header className='header'>
            <Grid container>
                    <Grid lg='6' sm='4'>
                        <img src={dark_logo} alt='logo.png'/>
                    </Grid>
                    <Grid lg='6' sm='8'>
                        <ul>
                            <li><Link to='/login' className='btn'>Login</Link></li>
                            <li><button className='btn hover m_btn'>Register</button></li>
                            <li><button className='btn'>{rightAlign}</button></li>
                        </ul>
                    </Grid>
            </Grid>
      </header>
      <div className='loginContent'>
        <Grid container>
        <Grid container spacing={4}>
        <Grid item xs={8} className='m-auto'>
          <Grid item xs={8}  className='m-auto register_header'>
          <h2>Registration</h2>
                    <p>Need designs that will captivate, engage, and convert for your brand? Learn how high quality visuals can help you achieve your brand goals.</p>
          </Grid>
          
          
            <Card className="MainForm">
              <CardContent>
                <form id="form" onSubmit={handleSubmit}>
                    
                  {showError(error, errorMsg)}
                  {showLoading(loading)}
                  {showSuccess(success, errorMsg)}
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6} item>
                      <FormLabel sx={{ mb: 2 }}>First Name</FormLabel>
                      <TextField
                        placeholder="Enter first name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="first_name "
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <FormLabel sx={{ mb: 2 }}>Last Name</FormLabel>
                      <TextField
                        placeholder="Enter last name"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="last_name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>Email</FormLabel>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        name="email"
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>Country</FormLabel>
                      <TextField
                        select
                        fullWidth
                        label="country"
                        variant="outlined"
                        required
                        sx={{ borderRadius: 4, border: "outlined" }}
                        name="country_id"
                        
                      >
                        <MenuItem value="1">offer1</MenuItem>
                        <MenuItem value="2">offer2</MenuItem>
                        <MenuItem value="3">offer3</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>Password</FormLabel>
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
                    <Grid item xs={12}>
                      <FormLabel sx={{ mb: 2 }}>Password</FormLabel>
                      <TextField
                        type="password"
                        placeholder="Enter phone number"
                        label="password"
                        variant="outlined"
                        fullWidth
                        required
                        name="password_confirmation"
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <FormLabel sx={{ mb: 2 }}>Skype</FormLabel>
                      <TextField
                        placeholder="Your Skype id"
                        label="skype id"
                        variant="outlined"
                        fullWidth
                        required
                        name="skype"
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <TextField
                      style={{ fontSize:'20px',height:'20px',width:'20px',marginRight:'10px' }}
                      type='checkbox'
                        placeholder="Your Skype id"
                        label="skype id"
                        variant="outlined"
                        required
                        name="skype"
                      /> I have Read all requirement,
                    </Grid>
                    <Grid item xs={12} align="center" sx={{ mt: 2 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                          paddingRight: 10,
                          paddingLeft: 10,
                          backgroundColor: "#7040FF",
                        }}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Grid>
      </div>
      <footer>
        <p><FaRegCopyright/> Copyright © 2021 CPAping LLC | All Rights Reserved.t</p>
      </footer>
    </div>
  )
}

export default Register;
