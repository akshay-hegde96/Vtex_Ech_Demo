import React, { Fragment } from "react";
import { Route } from "vtex.my-account-commons/Router";
// Component pages
import UserSupport from "./components/UserSupportPage/index";

const MyAppPage = () => (
  <Fragment>
    <Route exact path="/support" component={UserSupport} />
  </Fragment>
);

export default MyAppPage;
