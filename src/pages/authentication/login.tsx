import React, { useContext, Fragment, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TOKEN } from "../../lib/constants";
import { API_BASE_URL } from "../../lib/settings";
import { AuthContext } from "../../contexts";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ON_BOARD_LOGO_IMG from "../../img/logo.svg";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { useStyles } from "./style";
import { Formik } from "formik";
import { FormHelperText } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSnackbar } from "notistack";
import { CircularProgress } from '@material-ui/core';

function Login() {
  const classes = useStyles();
  const authContext = useContext(AuthContext);

  const { enqueueSnackbar } = useSnackbar();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  function handleForgotPassword() {
    window.location.href = "/forgot-password";
  }

  const query = useQuery();

  useEffect(() => {
    const paramToken = query.get("q");
    if (paramToken === "true") {
      enqueueSnackbar("An email is sent for you to update your password.", { variant: "success" });
    } else if (paramToken === "updated-password") {
      enqueueSnackbar("Password is updated.", { variant: "success" });
    }
  }, []);

  return (
    <Fragment>
      <Grid className={classes.onBoardingLayout}>
        <AppBar position="static" className={classes.onBoardAppBar}>
          <img src={ON_BOARD_LOGO_IMG} alt="logo" />
        </AppBar>
        <ToastContainer />
        <Formik
          initialValues={{ email: "", password: "", err: "" }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            async function submit() {
              const result: any = await fetch(
                `${API_BASE_URL}/api/users/sign-in`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values, null, 2),
                }
              ).then((response) => response.json());
  
              const { success, data, errors } = result;
              if (success) {
                authContext.setSessionId(data.sessionKey);
                authContext.setUser(data);
                localStorage.setItem(TOKEN, data.jwtToken);
                const result: any = await fetch(
                  `${API_BASE_URL}/api/users/current`,
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `${localStorage.getItem(TOKEN)}`,
                    },
                  }
                ).then((response) => response.json());
  
                if (result.success) {
                  if (result.data.clients.length > 1) {
                    window.location.href = "/client-selection";
                  } else {
                    window.location.href = "/";
                  }
                } else {
                  alert("Something went wrong");
                }
              } else {
                for (const i in errors) {
                  setErrors({ err: errors[i].msg });
                }
              }
              setSubmitting(false);
            }
            submit();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container className={classes.onBoardContainer}>
                <Grid className={classes.onBoardForm}>
                  <Typography variant="h4">Welcome</Typography>
                  <Grid className={classes.rootTextField}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControlOutlinedInputDiv}
                    >
                      <InputLabel>Email</InputLabel>
                      <OutlinedInput
                        error={errors.email && touched.email ? true : false}
                        type="email"
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        }
                      />

                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : ""}
                      </FormHelperText>
                    </FormControl>

                    <FormControl
                      variant="outlined"
                      className={classes.formControlOutlinedInputDiv}
                    >
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        error={
                          errors.password && touched.password ? true : false
                        }
                        type="password"
                        label="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <LockIcon />
                          </InputAdornment>
                        }
                      />
                      <FormHelperText>
                        {errors.password && touched.password && errors.password}
                      </FormHelperText>

                      <Grid className={classes.defaultError}>
                        {errors.err && touched.err && errors.err}
                      </Grid>
                    </FormControl>
                  </Grid>

                  <Grid className={classes.forgotPassword}>
                    <Button onClick={handleForgotPassword} variant="text">
                      Forgot Password?
                    </Button>
                  </Grid>

                  <Grid className={classes.userSignIn}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={classes.signButton}
                      variant="contained"
                    >
                      {isSubmitting && <CircularProgress style={{'color': 'white'}} size={20} />}
                      {!isSubmitting && 'SIGN IN'}
                    </Button>
                  </Grid>

                  <Grid className={classes.createNewAccount}>
                    Create an account?{" "}
                    <NavLink to={"/register"} className={classes.navLink}>
                      Sign Up
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>

        <AppBar position="static" className={classes.footerAppBar}>
          <a
            href="https://www.sample.com/privacy"
            target="_blank"
            className={classes.navLinkFooter}
          >
            Privacy Policy
          </a>

          <a
            href="https://www.sample.com/cookie-policy"
            target="_blank"
            className={classes.navLinkFooter}
          >
            Cookie Policy
          </a>

          <a
            href="https://www.sample.com/terms-of-use"
            target="_blank"
            className={classes.navLinkFooter}
          >
            Terms & Conditions
          </a>
        </AppBar>
      </Grid>
    </Fragment>
  );
}

export default Login;
