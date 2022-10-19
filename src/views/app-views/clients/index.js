import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import UserEdit from "./user-list/UserEdit";

const Clients = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/user-list`} component={lazy(() => import(`./user-list`))} />
      <Route path={`${match.url}/edit-profile`} component={UserEdit} />
    </Switch>
  </Suspense>
);

export default Clients;