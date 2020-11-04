import React, { useState, useContext, Fragment } from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import ON_BOARD_LOGO_IMG from "../../img/logo.svg";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { NavLink, useLocation } from "react-router-dom";
import { useStyles } from "./style";

import { API_BASE_URL } from "../../lib/settings";
import { Formik } from "formik";
import { AuthContext } from "../../contexts";
import { TOKEN } from "../../lib/constants";
import { FormHelperText } from "@material-ui/core";
import queryString from 'query-string';

function Register({ location }) {
  const classes = useStyles();
  const [checkedA, setCheckedA] = useState<boolean>(false);
  const authContext = useContext(AuthContext);
 
  const query = queryString.parse(location.search);

  const paramUserEmail = query.email ? query.email.split(' ').join('+') : '';
  const paramToken = query.q;
  return (
    <Fragment>
      <Grid className={classes.onBoardingLayout}>
        <AppBar position="static" className={classes.onBoardAppBar}>
          <img src={ON_BOARD_LOGO_IMG} alt="logo" />
        </AppBar>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: paramUserEmail ? paramUserEmail : "",
            password: "",
            passwordConfirmation: "",
            tokenInfo: paramToken ? paramToken : "",
          }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.firstName) {
              errors.firstName = "Name is required";
            }
            if (values.password) {
              if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
                  values.password
                )
              ) {
                errors.password =
                  "8 characters minimum. At least 1 lowercase, 1 uppercase, 1 number and 1 special character.";
              }
              if (values.password !== values.passwordConfirmation) {
                errors.passwordConfirmation =
                  "Password and confirm password do not match";
              }
            }
            if (values.passwordConfirmation) {
              if (values.password !== values.passwordConfirmation) {
                errors.passwordConfirmation =
                  "Password and confirm password do not match";
              }
            }

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
              const result: any = await fetch(
                `${API_BASE_URL}/api/users/sign-up`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values, null, 2),
                }
              ).then((response) => response.json());
  
              if (result.success) {
                const resultSignIn = await fetch(
                  `${API_BASE_URL}/api/users/sign-in`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values, null, 2),
                  }
                ).then((response) => response.json());
                const newSr = result.data.newSR;
                const { success, data, errors } = resultSignIn;
                if (success) {
                  authContext.setSessionId(data.sessionKey);
                  authContext.setUser(data);
                  localStorage.setItem(TOKEN, data.jwtToken);
                  if (newSr) {
                    window.location.href = "/";
                  } else {
                    window.location.href = "/onboarding-stepper";
                  }
                } else {
                  window.location.href = "/login";
                }
              } else {
                for (const i in result.errors) {
                  setErrors({ [result.errors[i].param]: result.errors[i].msg });
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
                  <Typography variant="h4">Register</Typography>
                  <Grid className={classes.rootTextField}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControlOutlinedInputDiv}
                    >
                      <InputLabel>Name</InputLabel>
                      <OutlinedInput
                        error={
                          errors.firstName && touched.firstName ? true : false
                        }
                        type="text"
                        value={values.firstName}
                        label="Name"
                        name="firstName"
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <PersonIcon />
                          </InputAdornment>
                        }
                      />
                      <FormHelperText>
                        {errors.firstName &&
                          touched.firstName &&
                          errors.firstName}
                      </FormHelperText>
                    </FormControl>

                    <FormControl
                      variant="outlined"
                      className={classes.formControlOutlinedInputDiv}
                    >
                      <InputLabel>Email</InputLabel>
                      <OutlinedInput
                        error={errors.email && touched.email ? true : false}
                        value={values.email}
                        label="Email"
                        name="email"
                        onChange={handleChange}
                        disabled={paramUserEmail ? true : false}
                        endAdornment={
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        }
                      />
                      <FormHelperText>
                        {errors.email && touched.email && errors.email}
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
                        value={values.password}
                        label="Password"
                        name="password"
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
                    </FormControl>

                    <FormControl
                      variant="outlined"
                      className={classes.formControlOutlinedInputDiv}
                    >
                      <InputLabel>Confirm Password</InputLabel>
                      <OutlinedInput
                        error={
                          errors.passwordConfirmation &&
                          touched.passwordConfirmation
                            ? true
                            : false
                        }
                        type="password"
                        value={values.passwordConfirmation}
                        label="Confirm Password"
                        name="passwordConfirmation"
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <LockIcon />
                          </InputAdornment>
                        }
                      />
                      <FormHelperText>
                        {errors.passwordConfirmation &&
                          touched.passwordConfirmation &&
                          errors.passwordConfirmation}
                      </FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid className={classes.termsCondition}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedA}
                          onChange={(e) => setCheckedA(e.target.checked)}
                          // onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="I agree to the"
                    />
                    <a
                      href="https://www.iubenda.com/terms-and-conditions/85376055"
                      target="_blank"
                    >
                      terms and conditions.
                    </a>
                  </Grid>

                  <Grid className={classes.userSignIn}>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !checkedA}
                      className={classes.signButton}
                      variant="contained"
                    >
                      Get Started
                    </Button>
                  </Grid>

                  <Grid className={classes.createNewAccount}>
                    Already have an account?{" "}
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

export default Register;
