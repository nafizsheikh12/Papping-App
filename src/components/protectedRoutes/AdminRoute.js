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
        render={({ location }) => {
        if(isAuthenticated() === false) {
            return <Redirect to="/login"/>;
          }
        if(isAuthenticated() && userrole === 'Admin') { 
          return  children
         }else{ 
           return <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
        
          }

          
        }
      }
      />
  
    </>  
    );
  }

  export default AdminRoute;