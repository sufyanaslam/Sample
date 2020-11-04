import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ON_BOARD_BG from "../../img/onboarding-bg.jpg";
import ON_BOARD_MOBILE_BG from "../../img/mobile-bg.jpg";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    onBoardingLayout: {
      backgroundImage: `url(${ON_BOARD_BG})`,
      backgroundColor: "#140735",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",

      [theme.breakpoints.down("sm")]: {
        backgroundImage: `url(${ON_BOARD_MOBILE_BG})`,
      },
    },

    onBoardAppBar: {
      backgroundColor: "transparent",
      textAlign: "left",
      boxShadow: "none",
      display: "flex",
      alignItems: "baseline",
      padding: "22px 25px 0px",

      [theme.breakpoints.down("sm")]: {
        padding: "10px 7px 0px",
      },

      "& img": {
        width: 174,
      },
    },

    onBoardContainer: {
      minHeight: "calc(100vh - 125px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      [theme.breakpoints.down("sm")]: {
        minHeight: "calc(100vh - 108px)",
      },
    },

    snippetContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "& .MuiTypography-subtitle2": {
        margin: "15px 0px",
      },

      "& .MuiTypography-subtitle1": {
        marginBottom: 15,
      },
    },

    onBoardContainerSignUpWidget: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    onBoardForm: {
      maxWidth: 527,
      width: "100%",
      background: "#ffffff",
      textAlign: "center",
      padding: "40px 80px",
      margin: "20px 0px 30px",

      [theme.breakpoints.down("sm")]: {
        width: "90%",
        padding: "20px",
        margin: "20px 0px",
      },

      "& .MuiTypography-h4": {
        fontSize: 34,
        letterSpacing: 0.25,
        fontWeight: 300,
        marginBottom: 40,
        color: "rgba(0, 0, 0, 0.88)",
        // color: "#ffffff",
      },

      "& .MuiButton-contained.Mui-disabled": {
        backgroundColor: "#333333",
        color: "#535353",
      },
    },

    onBoardSignUpWidgetForm: {
      width: "100%",
      textAlign: "center",

      [theme.breakpoints.down("sm")]: {
        padding: "20px 0px",
      },

      "& .MuiTypography-h4": {
        fontSize: 34,
        letterSpacing: 0.25,
        fontWeight: 300,
        marginBottom: 40,
        color: "rgba(0, 0, 0, 0.88)",
      },
    },

    rootTextField: {
      "& .MuiOutlinedInput-root.Mui-error": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#C51D4C",
        },
      },

      "& .MuiFormControl-root": {
        width: "100%",
        marginBottom: 20,
        color: "#898989",
      },

      "& .MuiSelect-selectMenu": {
        textAlign: "left",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#888888",
        borderWidth: "2px",
      },

      "& .MuiButtonBase-root": {
        color: "#CC1A66",
      },

      "& .MuiFormLabel-root.Mui-focused": {
        color: "#898989",
      },

      "& .MuiInputLabel-outlined": {
        color: "#898989",
        backgroundColor: "#ffffff",
      },

      "& .MuiOutlinedInput-inputAdornedEnd": {
        color: "#121212",
      },

      "& .MuiOutlinedInput-input": {
        color: "#121212",
      },

      "& .MuiOutlinedInput-root.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#898989",
        },
      },

      "& .MuiOutlinedInput-root": {
        borderRadius: 0,

        "& fieldset": {
          borderColor: "#898989",
        },
        "&:hover fieldset": {
          borderColor: "#898989",
        },
      },
    },

    forgotPassword: {
      textAlign: "left",

      "& .MuiButton-text": {
        color: "#C51D4C",
        fontSize: 14,
        textTransform: "capitalize",
      },
    },

    termsCondition: {
      textAlign: "left",

      "& .MuiCheckbox-colorSecondary.Mui-checked": {
        color: "#C41D4C",
      },

      "& .MuiTypography-body1": {
        fontSize: 14,
        color: "#AAAAAA",

        [theme.breakpoints.down("sm")]: {
          fontSize: 12,
        },
      },

      "& .MuiFormControlLabel-root": {
        marginRight: 6,
      },

      "& a": {
        color: "#C51D4C",
        textDecoration: "none",
        fontSize: 14,
        lineHeight: "42px",

        [theme.breakpoints.down("sm")]: {
          fontSize: 12,
        },
      },
    },

    userSignIn: {
      textAlign: "center",
    },

    signButton: {
      background: "#C51D4C",
      borderRadius: 20,
      minWidth: 162,
      height: 36,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0.75,
      textTransform: "uppercase",
      color: "#ffffff",
      marginTop: 30,

      "&:hover": {
        background: "#CC1A66",
      },
    },

    navLink: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",

      "&:hover,&:focus": {
        color: "#ffffff",
        textDecoration: "none",
      },
    },

    // user detect screen
    userDetectMedia: {
      width: 107,
      height: 104,

      "& img": {
        width: "100%",
      },
    },

    userDetectBox: {
      background: "#ffffff",
      padding: "50px 50px 35px",
      maxWidth: 850,
      width: "100%",
      margin: "20px 0px",
      textAlign: "center",

      [theme.breakpoints.down("sm")]: {
        width: "90%",
        padding: "30px 20px",
      },

      "& .MuiTypography-h4": {
        fontWeight: 300,
        fontSize: 34,
        letterSpacing: 0.25,
        color: "#000000",
        marginBottom: 5,
      },

      "& .MuiTypography-body1": {
        fontSize: 14,
        letterSpacing: 0.5,
        color: "rgba(0, 0, 0, 0.5)",
        marginBottom: 25,
      },
    },

    createAccount: {
      "& .MuiButton-text": {
        color: "#C51D4C",
        fontSize: 14,
        textTransform: "initial",
        marginTop: 20,
      },
    },

    cardUserDetect: {
      background: "rgba(0, 0, 0, 0.12)",
      borderRadius: 0,
      boxShadow: "none",

      "& .MuiCardContent-root": {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        width: "100%",
        padding: "0px !important",

        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "center",
          padding: "20px !important",
        },
      },

      "& .MuiBox-root": {
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      },
    },

    userProfileInfo: {
      textAlign: "left",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        marginTop: 15,
      },

      "& .MuiTypography-h5": {
        fontSize: 24,
        color: "#000000",
        lineHeight: "15px",
      },

      "& .MuiTypography-subtitle1": {
        fontSize: 14,
        color: "rgba(0, 0, 0, 0.5)",
      },
    },

    userContinue: {
      padding: "0px 15px 15px 15px",

      [theme.breakpoints.down("sm")]: {
        padding: 0,
        marginTop: 20,
      },
    },

    userContinueButton: {
      background: "#C51D4C",
      borderRadius: 20,
      minWidth: 162,
      height: 36,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0,
      textTransform: "uppercase",
      color: "#ffffff",

      [theme.breakpoints.down("sm")]: {
        fontSize: 12,
      },

      "&:hover": {
        background: "#CC1A66",
      },
    },

    // your account screen

    yourAccountTable: {
      background: "rgba(255, 255, 255, 0.12)",
      boxShadow: "none",
      borderRadius: 0,
      marginBottom: 20,

      "& .MuiTableCell-head": {
        fontSize: 15,
        fontWeight: "bold",
      },

      "& .MuiTableCell-root": {
        color: "#000000",
        borderBottom: "1px solid #484848",
        padding: "7px 16px",
      },
    },

    createNewAccount: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 15,
      color: "#121212",

      "& a": {
        color: "#C51D4C",
        marginLeft: "5px",

        "&:hover": {
          color: "#C51D4C",
        },
      },
    },

    // stepper

    stepper: {
      maxWidth: 830,
      width: "100%",
      background: "#ffffff",
      textAlign: "center",
      padding: "40px 80px",

      [theme.breakpoints.down("sm")]: {
        width: "90%",
        padding: "10px",
        margin: "20px 0px",
      },

      "& .MuiTypography-h4": {
        fontSize: 34,
        letterSpacing: 0.25,
        fontWeight: 300,
        marginBottom: 40,
        color: "rgba(0, 0, 0, 0.88)",
      },

      "& .MuiButton-contained.Mui-disabled": {
        backgroundColor: "#333333",
        color: "#535353",
      },
    },

    buttonStyle: {
      width: 162,
      height: 36,
      backgroundColor: "#C51D4C",
      borderRadius: 200,
      color: "#ffffff",
      fontWeight: 500,
      fontSize: 14,
      letterSpacing: 0.75,
      textTransform: "uppercase",
      marginTop: 20,
    },

    snippetCard: {
      backgroundColor: "#ECF5FD",
      boxShadow: "none",
      marginBottom: 15,
      clear: "both",

      "& .MuiCardContent-root": {
        display: "flex",
        alignItems: "center",
        padding: "16px !important",

        "& img": {
          width: "100%",
        },
      },
    },

    inputDivider: {
      "& .MuiTypography-h5": {
        fontSize: "20px",
        color: "#888888",
        position: "relative",
        left: "4px",

        [theme.breakpoints.down("xs")]: {
          display: "none",
        },
      },
    },

    textArea: {
      border: "2px solid #898989",
      padding: "10px 15px",
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      fontSize: 16,
      color: "#ffffff",

      "&::placeholder": {
        // color: "#888888",
        color: "#ffffff",
      },

      "&:focus": {
        outline: "none",
        borderRadius: 0,
      },
    },

    chipInput: {
      "& .MuiInputBase-root": {
        padding: "8px 14px !important",

        "& input": {
          padding: "10px 0px",
          margin: 0,
          height: "auto",
        },
      },

      "& .MuiChip-clickable": {
        marginBottom: 0,
      },

      "& .MuiFormHelperText-root.Mui-error": {
        margin: 0,
        fontSize: 14,
        color: "#C51D4C",
        marginTop: 5,
      },

      "& .MuiChip-label": {
        color: "rgba(0, 0, 0, 0.88)",
      },
    },

    formControlOutlinedInputDiv: {
      "& .MuiFormHelperText-contained": {
        marginLeft: 0,
        marginRight: 0,
        color: "#C51D4C",
        fontSize: 14,
      },

      "& .textAreaError": {
        marginLeft: 0,
        marginRight: 0,
        color: "#C51D4C",
        textAlign: "left",
        fontSize: 14,
      },
    },

    defaultError: {
      color: "#C51D4C",
      fontSize: 14,
      textAlign: "left",
    },

    cardUserDetectApp: {
      "& .MuiCardContent-root": {
        alignItems: "center",
        padding: "20px !important",

        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          padding: "20px !important",
        },
      },
    },

    footerAppBar: {
      backgroundColor: "transparent",
      boxShadow: "none",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      maxWidth: 612,
      margin: "0px auto",
      background: "red",
      padding: 15,
    },

    navLinkFooter: {
      fontSize: 14,
      color: "rgba(255, 255, 255, 0.75)",
      textTransform: "capitalize",
      textDecoration: "none",
      marginRight: 20,

      "&:hover,&:focus": {
        color: "rgba(255, 255, 255, 0.75)",
        textDecoration: "none",
      },

      [theme.breakpoints.down("xs")]: {
        fontSize: 11,
        marginRight: 8,
      },
    },

    settingLoader: {
      // width: "100%",
      background: "#12171f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      position: "absolute",
      left: 0,
      right: 0,
      zIndex: 9999,
    },
  })
);
