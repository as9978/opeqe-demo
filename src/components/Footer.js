import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

import footerIcons from "../assets/svg/footeIcons.svg";
import appStoreBtn from "../assets/svg/appStoreBtn.svg";
import googlePlayBtn from "../assets/svg/googlePlayBtn.svg";
import logoWhite from "../assets/svg/logoWhite.svg";

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
    position: "absolute",
    top: -29,
    [theme.breakpoints.only("xs")]: {
      top: -22,
    },
    [theme.breakpoints.only("sm")]: {
      top: -24,
    },
    [theme.breakpoints.only("md")]: {
      top: -28,
    },
    [theme.breakpoints.only("lg")]: {
      top: -28,
    },
    [theme.breakpoints.only("xl")]: {
      top: -29,
    },
  },
  iconsContainer: {
    width: "40%",
    height: 60,
    [theme.breakpoints.only("xs")]: {
      width: "90%",
      height: 45,
    },
    [theme.breakpoints.only("sm")]: {
      width: "80%",
      height: 50,
    },
    [theme.breakpoints.only("md")]: {
      width: "55%",
      height: 60,
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      height: 60,
    },
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
    borderBottomWidth: 2,
    borderBottomStyle: "solid",
    borderBottomColor: "rgb(0, 0, 0)",
    fontSize: 15,
    textTransform: "none",
    transition: "0.3s",
    "&:hover": {
      color: "rgb(4, 203, 197)",
      borderBottomColor: "rgb(4, 203, 197)",
    },
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerNavAndMarketsContainer: {
    borderBottomColor: "rgba(165, 165, 165, 0.5)",
    borderBottomStyle: "solid",
    borderBottomWidth: "0.1px",
    marginTop: 60,
  },
  linksMainContainer: {
    marginTop: 30,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center",
    },
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 40,
  },
  poweredByText: {
    fontFamily: "Trebuchet",
    color: "#a5a5a5",
    fontSize: 12,
    lineHeight: 0.5,
    marginBottom: -2,
    marginLeft: 27,
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  linksTitle: {
    fontFamily: "Trebuchet",
    color: "white",
    fontSize: 20,
  },
  linksBtn: {
    fontFamily: "Trebuchet",
    color: "#a5a5a5",
    fontSize: 16,
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 4,
    paddingBottom: 4,
    textTransform: "none",
    transition: "0.3s",
    "&:hover": {
      color: "rgb(4, 203, 197)",
    },
  },
  footerFirstText: {
    fontFamily: "Trebuchet",
    color: "#d7d7d7",
    fontSize: 16,
  },
  textContainer: {
    marginTop: 25,
  },
  footerSecondText: {
    fontFamily: "Trebuchet",
    color: "#a5a5a5",
    fontSize: 16,
    marginBottom: 30,
  },
  watermark: {
    fontFamily: "Trebuchet",
    color: "#a5a5a5",
    fontSize: 16,
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 4,
    paddingBottom: 4,
    textTransform: "none",
  },
  textBtnsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  seperator: {
    fontFamily: "Trebuchet",
    color: "#a5a5a5",
    marginLeft: 3,
    marginRight: 3,
  },
  socialMediaIcons: {
    fontSize: 24,
    color: "white",
    transition: "0.3s",
    "&:hover": {
      color: "rgb(4, 203, 197)",
    },
  },
  socialMediaContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  socialMediaIconsAndBtnsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  marketsSpan: {
    cursor: "pointer",
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.container}>
      <div className={classes.iconContaer}>
        <div className={classes.iconsContainer}>
          <img src={footerIcons} className={classes.icons} alt="footer Icons" />
        </div>
      </div>
      <Grid container xs={12}>
        <Grid xs={1} md={2} xl={3} item />
        <Grid
          xs={10}
          md={8}
          xl={6}
          item
          container
          alignItems="center"
          justify="space-between"
          className={classes.footerNavAndMarketsContainer}
        >
          <Grid sm={12} md={6} lg={4} item container>
            <Grid xs={12} sm={3} md={6}>
              <span className={classes.marketsSpan}>
                <img
                  src={appStoreBtn}
                  className={classes.marketBtns}
                  style={{ marginRight: 25 }}
                  alt="App Store"
                />
              </span>
            </Grid>
            <Grid xs={12} sm={3} md={6}>
              <span className={classes.marketsSpan}>
                <img src={googlePlayBtn} className={classes.marketBtns} alt="google play"/>
              </span>
            </Grid>
          </Grid>
          <Grid sm={12} md={6} className={classes.navbar}>
            <Button className={classes.navbarBtn}>About</Button>
            <Button className={classes.navbarBtn}>Services</Button>
            <Button className={classes.navbarBtn}>Support</Button>
            <Button className={classes.navbarBtn}>Gallery</Button>
            <Button className={classes.navbarBtn}>Terms</Button>
            <Button className={classes.navbarBtn}>Locations</Button>
          </Grid>
          <Grid item container xs={12}></Grid>
        </Grid>
        <Grid xs={1} md={2} xl={3} item />
        <Grid xs={1} md={2} xl={3} item />
        <Grid
          xs={10}
          md={8}
          xl={6}
          item
          container
          // alignItems="flex-start"
          // justify="space-between"
          className={classes.linksMainContainer}
        >
          <Grid xs={12} sm={6} md={3} item className={classes.logoContainer}>
            <Typography className={classes.poweredByText}>
              Powered By
            </Typography>
            <img src={logoWhite} className={classes.logo} alt="logo"/>
          </Grid>
          <Grid xs={12} sm={6} md={3} item className={classes.linksContainer}>
            <Typography className={classes.linksTitle}>Main Menu</Typography>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Pickup
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={3} item className={classes.linksContainer}>
            <Typography className={classes.linksTitle}>Orders</Typography>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Upcoming Orders
            </Button>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Recent Orders
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={3} item className={classes.linksContainer}>
            <Typography className={classes.linksTitle}>Reservation</Typography>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Recent Reservation
            </Button>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Wait To Be Seated
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={3} item className={classes.linksContainer}>
            <Typography className={classes.linksTitle}>Profile</Typography>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Promos & Credits
            </Button>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Rewards
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={3} item className={classes.linksContainer}>
            <Typography className={classes.linksTitle}>
              Special Offers
            </Typography>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Chief Special
            </Button>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Breakfast Special
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={3} item className={classes.linksContainer}>
            <Typography className={classes.linksTitle}>Support</Typography>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Contact Us
            </Button>
            <Button
              variant="text"
              className={classes.linksBtn}
              size={"small"}
              disableRipple
            >
              Live Chat
            </Button>
          </Grid>
          <Grid xs={12} sm={6} md={3} item />
          <Grid item xs={12} className={classes.textContainer}>
            <Typography className={classes.footerFirstText}>
              Delight customers everywhere with a branded custom-built native
              iOS, native Android and Installable Website Application.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.footerSecondText}>
              Opeqe is reliable, fast and commission free all-in-one ordering
              solutions for multi-location or single location restaurants.
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            className={classes.socialMediaIconsAndBtnsContainer}
          >
            <Grid xs={12} md={7} className={classes.textBtnsContainer} item>
              <Typography className={classes.watermark}>
                ©2019 OPEQE INC
              </Typography>
              <Typography className={classes.seperator}>|</Typography>
              <Button className={classes.linksBtn}>Terms & Conditions</Button>
              <Typography className={classes.seperator}>|</Typography>
              <Button className={classes.linksBtn}>Privacy Policy</Button>
            </Grid>
            <Grid
              xs={6}
              sm={3}
              md={2}
              item
              className={classes.socialMediaContainer}
            >
              <InstagramIcon className={classes.socialMediaIcons} />
              <TwitterIcon className={classes.socialMediaIcons} />
              <FacebookIcon className={classes.socialMediaIcons} />
              <YouTubeIcon className={classes.socialMediaIcons} />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={1} md={2} xl={3} item />
      </Grid>
    </Grid>
  );
};
