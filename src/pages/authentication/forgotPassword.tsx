import React, { useState, useContext, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { API_BASE_URL } from "../../lib/settings";
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
import { useStyles } from "./style";
import { Formik } from "formik";
import { FormHelperText } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { CircularProgress } from '@material-ui/core';

function ForgotPassword() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Fragment>
      <Grid className={classes.onBoardingLayout}>
        <AppBar position="static" className={classes.onBoardAppBar}>
          <img src={ON_BOARD_LOGO_IMG} alt="logo" />
        </AppBar>
        <Formik
          initialValues={{ email: "" }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            async function submit() {
              const result = await fetch(
                `${API_BASE_URL}/api/users/forgot-password?email=${values.email}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              ).then((response) => response.json());
  
              const { success, data, errors } = result;
              setSubmitting(false);
              if (success) {
                window.location.href = "/login?q=true";
              } else {
                enqueueSnackbar(errors[0], { variant: "error" });
                setErrors({ email: errors[0] });
              }
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
                  <Typography variant="h4">Forgot Password</Typography>
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
                            {/* <IconButton
                              aria-label="toggle password visibility"
                              edge="end"
                            > */}
                            <EmailIcon />
                            {/* </IconButton> */}
                          </InputAdornment>
                        }
                      />
                      <FormHelperText>
                        {errors.email && touched.email && errors.email}
                      </FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid className={classes.userSignIn}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={classes.signButton}
                      variant="contained"
                    >
                      {isSubmitting && <CircularProgress style={{'color': 'white'}} size={20} />}
                      {!isSubmitting && 'SUBMIT'}
                    </Button>
                  </Grid>

                  <Grid className={classes.createNewAccount}>
                    <NavLink to={"/login"} className={classes.navLink}>
                      Sign In
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>

        <AppBar position="static" className={classes.footerAppBar}>
          <a
            href="https://www.sample-app.com/privacy"
            target="_blank"
            className={classes.navLinkFooter}
          >
            Privacy Policy
          </a>

          <a
            href="https://www.sample-app.com/cookie-policy"
            target="_blank"
            className={classes.navLinkFooter}
          >
            Cookie Policy
          </a>

          <a
            href="https://www.sample-app.com/terms-of-use"
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

export default ForgotPassword;
