import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      position: "absolute",
      background: "rgba(0, 0, 0, 0.6)",
      width: "100%",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 999999,

      "& .MuiCircularProgress-colorPrimary": {
        color: "#888888",
      },

      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={60} />
    </div>
  );
}
