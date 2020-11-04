import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import ON_BOARD_LOGO_IMG from "../../img/logo.svg";

import { useStyles } from "./style";

function ShopSelection() {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Fragment>
      <Grid className={classes.onBoardingLayout}>
        <AppBar position="static" className={classes.onBoardAppBar}>
          <img src={ON_BOARD_LOGO_IMG} alt="logo" />
        </AppBar>

        <Grid container className={classes.onBoardContainer}>
          <Grid className={classes.userDetectBox}>
            <Typography variant="h4">Your Accounts</Typography>
            <Typography variant="body1">
              Use these accounts instead of creating a new one.
            </Typography>

            <TableContainer
              component={Paper}
              className={classes.yourAccountTable}
            >
              <Table aria-label="account table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <Radio
                        checked={selectedValue === "a"}
                        onChange={handleChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "A" }}
                      />
                    </TableCell>
                    <TableCell align="left">NAME</TableCell>
                    <TableCell align="left">DOMAIN</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">
                      <Radio
                        checked={selectedValue === "b"}
                        onChange={handleChange}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "B" }}
                      />
                    </TableCell>
                    <TableCell align="left">Pivyt </TableCell>
                    <TableCell align="left">
                      Pivyt.co
                      <br />
                      7969497
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <Radio
                        checked={selectedValue === "c"}
                        onChange={handleChange}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "C" }}
                      />
                    </TableCell>
                    <TableCell align="left">Harry</TableCell>
                    <TableCell align="left">
                      Pivyt.co
                      <br />
                      7969497
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <Radio
                        checked={selectedValue === "d"}
                        onChange={handleChange}
                        value="d"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "D" }}
                      />
                    </TableCell>
                    <TableCell align="left">Hannah Baker</TableCell>
                    <TableCell align="left">
                      {" "}
                      Pivyt.co
                      <br />
                      7969497
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Button variant="contained" className={classes.userContinueButton}>
              CONTINUE WITH THIS ACCOUNT
            </Button>

            <Grid className={classes.createAccount}>
              <Button variant="text">Create a new, fresh account</Button>
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

export default ShopSelection;
