import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Button, Tabs, Tab, Grid } from "@material-ui/core";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: 100,
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "black",
    padding: 0,
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  bottomTextContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  bottomMainText: {
    fontFamily: "Trebuchet",
    fontSize: 25,
    color: "black",
  },
  bottomSecondaryText: {
    fontFamily: "Trebuchet",
    fontSize: 18,
    color: "#a5a5a5",
  },
  bottomBtnsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  bottomLeftBtnsContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: 15,
  },
  bottomAsapBtn: {
    color: "#996515",
    fontFamily: "Trebuchet",
    padding: 0,
    fontSize: 16,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  bottomeAddressBtn: {
    color: "#a5a5a5",
    fontSize: 15,
    fontFamily: "Trebuchet",
    fontSize: 16,
    padding: 0,
    marginTop: -7,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  dopBtnContainer: {
    display: "flex",
    flexDirection: "row",
  },
  loginBtn: {
    backgroundColor: "black",
    color: "white",
    borderRadius: 25,
    fontSize: 12,
    textTransform: "none",
    fontFamily: "Trebuchet",
    marginLeft: 5,
    marginRight: 15,
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  bottomeTextMainContainer: {},
}));

export default () => {
  const classes = useStyles();

  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.bottomTextContainer}>
        <Typography className={classes.bottomMainText}>
          Ready to order ?
        </Typography>
        <Typography className={classes.bottomSecondaryText}>
          Browse our menu for dine-in, delivery or pickup and catering
        </Typography>
        <div className={classes.bottomBtnsContainer}>
          <div className={classes.bottomLeftBtnsContainer}>
            <Button
              variant="text"
              className={classes.bottomAsapBtn}
              disableRipple
              size={"small"}
            >
              ASAP Pickup
            </Button>
            <Button
              variant="text"
              className={classes.bottomeAddressBtn}
              disableRipple
              size={"small"}
            >
              Beverly Hills - 1008 Elden Way
            </Button>
          </div>
          <Button variant="contained" className={classes.loginBtn} size="small">
            Change
          </Button>
          <div>
          </div>
        </div>
    </div>
  );
};
