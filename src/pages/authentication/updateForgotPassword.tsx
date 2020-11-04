import React, { useState, useContext, Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
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

import LockIcon from "@material-ui/icons/Lock";
import { useStyles } from "./style";
import { Formik } from "formik";
import { FormHelperText } from "@material-ui/core";
import { CircularProgress } from '@material-ui/core';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function UpdateForgotPassword() {
  const classes = useStyles();
  let query = useQuery();

  return (
    <Fragment>
      <Grid className={classes.onBoardingLayout}>
        <AppBar position="static" className={classes.onBoardAppBar}>
          <img src={ON_BOARD_LOGO_IMG} alt="logo" />
        </AppBar>
        <Formik
          initialValues={{
            password: "",
            token: query.get("q"),
            user: "",
            link: "",
          }}
          validate={(values) => {
            const errors: any = {};
            if (!values.password) {
              errors.password = "Password is required";
            } else if (
              !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
                values.password
              )
            ) {
              errors.password =
                "8 characters minimum. At least 1 lowercase, 1 uppercase, 1 number and 1 special character.";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            async function submit() {
              const result = await fetch(
                `${API_BASE_URL}/api/users/update-password`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values, null, 2),
                }
              ).then((response) => response.json());
  
              const { success, data, errors } = result;
              setSubmitting(false);
              if (success) {
                window.location.href = "/login?q=updated-password";
              } else {
                for (const i in errors) {
                  setErrors({ [errors[i].param]: errors[i].msg });
                }
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
                  <Typography variant="h4">Update Password</Typography>
                  <Grid className={classes.rootTextField}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControlOutlinedInputDiv}
                    >
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        error={
                          (errors.password && touched.password) ||
                          errors.token ||
                          errors.user ||
                          errors.link
                            ? true
                            : false
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
                        {errors.token && touched.token && errors.token}
                        {errors.user && touched.user && errors.user}
                        {errors.link && touched.link && errors.link}
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
                      {!isSubmitting && 'UPDATE PASSWORD'}
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

export default UpdateForgotPassword;
