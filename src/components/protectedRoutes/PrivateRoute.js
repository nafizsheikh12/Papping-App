import {Route, Redirect} from 'react-router-dom';
import { isAuthenticated,userInfo } from '../../utils/auth';

const  PrivateRoute = ({ children, ...rest }) => {
  
    let {token} = userInfo();
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;