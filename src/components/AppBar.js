import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import logo from "../assets/svg/logo.svg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#EFEFEF",
    padding: 7,
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 109.44,
    height: "auto",
    marginLeft: 30,
  },
  imageBtn: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  regularBtns: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 15,
    color: "#6F6F6F",
    textTransform: "none",
    fontFamily: "Trebuchet",
    transition: "0.2s",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "black",
      borderRadius: 25,
      color: "white",
    },
    borderRadius: 5,
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
  signUpBtn: {
    borderColor: "#026764",
    borderRadius: 25,
    color: "#026764",
    fontSize: 12,
    textTransform: "none",
    fontFamily: "Trebuchet",
    marginRight: 15,
    backgroundColor: "transparent",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  cartIcon: {
    color: "#026764",
    fontSize: 30,
  },
  rippleColor: {
    color: "#026764",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Button className={classes.imageBtn}>
          <img src={logo} className={classes.image} alt="logo" />
        </Button>
        <div className={classes.sectionDesktop}>
          <Button disableRipple className={classes.regularBtns}>
            Reservation
          </Button>
          <Button disableRipple className={classes.regularBtns}>
            Orders
          </Button>
          <Button disableRipple className={classes.regularBtns}>
            Locations
          </Button>
          <Button variant="contained" className={classes.loginBtn} size="small">
            Log In
          </Button>
          <Button variant="outlined" className={classes.signUpBtn} size="small">
            SignUp
          </Button>
          <IconButton TouchRippleProps={{ className: classes.rippleColor }}>
            <ShoppingBasketIcon className={classes.cartIcon} />
          </IconButton>
        </div>
        <div className={classes.sectionMobile}>
          <Button variant="contained" className={classes.loginBtn} size="small">
            Log In
          </Button>
          <IconButton TouchRippleProps={{ className: classes.rippleColor }}>
            <ShoppingBasketIcon className={classes.cartIcon} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
