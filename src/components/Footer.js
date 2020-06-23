import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";

import footerIcons from "../assets/svg/footeIcons.svg";
import appStoreBtn from "../assets/svg/appStoreBtn.svg";
import googlePlayBtn from "../assets/svg/googlePlayBtn.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 50,
    position: "relative",
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
  },
  iconContaer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // position: "absolute",
    // transform: "translate(-50%,)",
  },
  iconsContainer: {
    width: "50%",
    height: "aotu",
  },
  icons: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  marketBtns: {
    width: 150,
    height: "auto",
  },
  navbarBtn: {
    fontFamily: "Trebuchet",
    color: "#a5a5a5",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth:2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgb(0, 0, 0)',
    fontSize: 15,
    textTransform: 'none',
    transition: "0.3s",
    "&:hover":{
      color: "rgb(4, 203, 197)",
      borderBottomColor: "rgb(4, 203, 197)"
    }
  },
  navbar:{
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  footerNavAndMarketsContainer:{
    borderBottomColor:"rgba(165, 165, 165, 0.5)",
    borderBottomStyle: 'solid',
    borderBottomWidth: "0.1px",
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.container}>
      <div className={classes.iconContaer}>
        <div className={classes.iconsContainer}>
          <img src={footerIcons} className={classes.icons} />
        </div>
      </div>
      <Grid container xs={12}>
        <Grid xs={1} md={2} xl={3} item />
        <Grid xs={10} md={8} xl={6} item container alignItems="center" justify="space-between" className={classes.footerNavAndMarketsContainer}>
          <Grid xs={12} md={4} item container>
            <Grid xs={12} sm={4} md={4}>
              <a href="">
                <img
                  src={appStoreBtn}
                  className={classes.marketBtns}
                  style={{ marginRight: 25 }}
                />
              </a>
            </Grid>
            <Grid xs={12} sm={4}  md={4}>
              <a href="">
                <img src={googlePlayBtn} className={classes.marketBtns} />
              </a>
            </Grid>
          </Grid>
          <Grid xs={12} md={6} className={classes.navbar}>
              <Button className={classes.navbarBtn}>About</Button>
              <Button className={classes.navbarBtn}>Services</Button>
              <Button className={classes.navbarBtn}>Support</Button>
              <Button className={classes.navbarBtn}>Gallery</Button>
              <Button className={classes.navbarBtn}>Terms</Button>
              <Button className={classes.navbarBtn}>Locations</Button>
          </Grid>
        </Grid>
        <Grid xs={1} md={2} xl={3} item />
        <div></div>
      </Grid>
    </Grid>
  );
};
