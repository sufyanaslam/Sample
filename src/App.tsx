import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import AuthProvider from "./contexts/auth/provider";
import Login from "./pages/authentication/login";
import Logout from "./pages/authentication/logout";;
import CurrentUser from "./components/CurrentUser";
import ForgotPassword from "./pages/authentication/forgotPassword";
import UpdateForgotPassword from "./pages/authentication/updateForgotPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppPages from "./pages/app";
import Register from "./pages/authentication/register";
import "./App.css";
import { Grid } from "@material-ui/core";
import { SnackbarProvider } from 'notistack';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootApp: {
      "& .MuiButton-contained:hover": {
        backgroundColor: "#898989",
        color: "#ffffff",
      },

      "& .MuiInputAdornment-root": {
        "& .MuiSvgIcon-root": {
          color: "#C51D4C",
        },
      },
    },
  })
);

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto", "Montserrat", "sans-serif"].join(","),
  },
});

function App() {
  const classes = useStyles();

  return (
    <Grid className={classes.rootApp}>
      <AuthProvider>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <ThemeProvider theme={theme}>
            <Router>
              <CurrentUser />
              <Switch>
                <Route path={`/login`} exact component={Login} />
                <Route path={`/logout`} exact component={Logout} />
                <Route path={`/register`} exact component={Register} />
                <Route path={`/forgot-password`} component={ForgotPassword} />
                <Route
                  path={`/update-password`}
                  component={UpdateForgotPassword}
                />
                <Route component={AppPages} path="/" />
              </Switch>
            </Router>
          </ThemeProvider>
        </SnackbarProvider>
      </AuthProvider>
    </Grid>
  );
}

export default App;
