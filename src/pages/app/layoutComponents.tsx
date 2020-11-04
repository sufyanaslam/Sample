import React, { useContext, useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ApplicationLatout } from "../../layouts";
import { AuthContext, ThemeContext } from "../../contexts";
import Dashboard from "./dashboard";
import ShoppingCenter from "./shoppingCenter";
import Archive from "./archive";
import Reports from "./reports";
import Team from "./team";
import HelpCenter from "./helpCenter";
import Settings from "./settings";
import ManageUser from "./manageUser";
import Profile from "./profile";
import { THEME_DETAILS } from "../../lib/constants";
import CheckOnboadingStepper from "./../../components/CheckOnboadingStepper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootBackground: (props: any) => {
      return {
        backgroundColor: props.backgroundColor,
      };
    },
  })
);

function LayoutComponent() {
  const authContext = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);
  const themeProps = THEME_DETAILS[themeContext.theme];
  const classes = useStyles(themeProps);
  const themeColor = themeContext.theme;

  return (
    authContext.user && (
      <Grid className={classes.rootBackground}>
        <CheckOnboadingStepper />
        {
          <ApplicationLatout>
            <Switch>
              <Redirect exact from="/" to="/dashboard" />
              <Route path={`/dashboard`} component={Dashboard} />
              <Route path={`/shopping-center`} component={ShoppingCenter} />
              <Route path={`/archive`} component={Archive} />
              <Route path={`/reports`} component={Reports} />
              <Route path={`/team`} component={Team} />
              <Route path={`/help-center`} component={HelpCenter} />
              {authContext.user.isAdminForActiveClient && (
                <Route path={`/manage-user`} component={ManageUser} />
              )}
              {authContext.user.isAdminForActiveClient && (
                <Route path={`/settings`} component={Settings} />
              )}
              <Route path={`/profile`} component={Profile} />
              <Redirect to="/" />
            </Switch>
          </ApplicationLatout>
        }
      </Grid>
    )
  );
}

export default LayoutComponent;
