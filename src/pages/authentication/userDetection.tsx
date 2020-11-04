import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ON_BOARD_LOGO_IMG from "../../img/logo.svg";
import USER_DETECT_IMG from "../../img/user-detect.png";
import { useStyles } from "./style";

function UserDetection() {
  const classes = useStyles();
  function continueWithUser() {
    window.location.href = "/shop-selection";
  }

  return (
    <Fragment>
      <Grid className={classes.onBoardingLayout}>
        <AppBar position="static" className={classes.onBoardAppBar}>
          <img src={ON_BOARD_LOGO_IMG} alt="logo" />
        </AppBar>

        <Grid container className={classes.onBoardContainer}>
          <Grid className={classes.userDetectBox}>
            <Typography variant="h4">Welcome Back</Typography>
            <Typography variant="body1">
              It looks like you are already using shopping app.
            </Typography>

            <Card className={classes.cardUserDetect}>
              <CardContent>
                <Box
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="space-between"
                >
                  <CardMedia className={classes.userDetectMedia}>
                    <img src={USER_DETECT_IMG} alt="user" />
                  </CardMedia>
                  <Grid className={classes.userProfileInfo}>
                    <Typography component="h5" variant="h5">
                      Samantha D.
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      samantha@company.com
                    </Typography>
                  </Grid>
                </Box>

                <Grid className={classes.userContinue}>
                  <Button
                    className={classes.userContinueButton}
                    variant="contained"
                    onClick={() => continueWithUser()}
                  >
                    CONTINUE WITH THIS Account
                  </Button>
                </Grid>
              </CardContent>
            </Card>

            <Grid className={classes.createAccount}>
              <Button variant="text">Create account with a new user</Button>
            </Grid>
          </Grid>
        </Grid>

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

export default UserDetection;
