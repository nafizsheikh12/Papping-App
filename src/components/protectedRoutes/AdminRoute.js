import React,{useState,useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom';
import { isAuthenticated, userInfo } from '../../utils/auth';
import { useSelector } from 'react-redux';
import { getUser } from '../../api/Auth/apiAuth';
import { useDispatch } from 'react-redux';

const  AdminRoute = ({ children, ...rest }) => {
    const { user,loading} = useSelector((state) => state.users);
    const userrole =  JSON.parse(localStorage.getItem("userRole"));
    console.log(userrole)
    return (
     <>
    
      <Route
        {...rest}
        render={({ location }) =>
        isAuthenticated() && userrole === 'Admin' ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
  
    </>  
    );
  }

  export default AdminRoute;