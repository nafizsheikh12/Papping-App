import { createReducer } from "@reduxjs/toolkit";


export const userReducer = createReducer(
    {},
    {
     
        userFetchStart: (state) => {
          state.loading = true;
          state.user= null
        },
        userfetchSuccess: (state, action) => {
          state.loading = false;
          state.user = action.payload;
        },
        userfetchFailure: (state) => {
          state.loading = false;
          state.error = true;
        },
        userRoleStart: (state,action) => {
            state.userrole = action.payload;
         },
        userRole: (state,action) => {
           state.userrole = action.payload;
           state.loading = false;
        },
        logoutRequest: (state) => {
          state.loading = true;
        },
        logoutSuccess: (state) => {
          state.user = null;
        },
        logoutFailure: (state, action) => {
          state.error = action.payload;
        },
    }
  );