import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
}
 const PrivateRouteCD = ({ component: CampaignDashBoard, ...rest }) => {
    return (
      <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
        ? <CampaignDashBoard {...props} />
              :
              <Redirect to="/login" />
              )} />
              )
    
  };
  export default PrivateRouteCD;