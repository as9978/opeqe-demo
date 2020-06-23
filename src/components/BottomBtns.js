import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bottomTextContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: 20,
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
    fontSize: 16,
    fontFamily: "Trebuchet",
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
  DeliveryOrPickUpContainer: {
    position: "relative",
  },
  HighlightBar: {
    height: 2,
    background: "#026764",
    position: "absolute",
    width: 62,
    left: 0,
    transform: "translateX(0px)",
    transition: "all 0.3s ease",
  },
  DeliveryButton: {
    fontFamily: "Trebuchet",
    cursor: "pointer",
    display: "inline-block",
    marginBottom: 2,
  },
  PickUpButton: {
    fontFamily: "Trebuchet",
    cursor: "pointer",
    display: "inline-block",
    marginBottom: 2,
  },
  orText: {
    fontFamily: "Trebuchet",
    color: "#a5a5a5",
    fontSize: 16,
  },
  bottomPickAddress: {
    backgroundColor: "#996515",
    color: "white",
    fontFamily: "Trebuchet",
    fontSize: 16,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25,
    textTransform: 'none',
    lineHeight: 1.2
  },
}));

export default () => {
  const classes = useStyles();

  const [isDeliveryActive, setIsDeliveryActive] = useState(true);

  const HighLightBarRef = useRef(null);

  const HandleDeliveryPickUpClick = (e) => {
    HighLightBarRef.current.style.width = `${e.target.clientWidth}px`;
    HighLightBarRef.current.style.left = `${e.target.offsetLeft}px`;

    setIsDeliveryActive(!isDeliveryActive);
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
            ASAP {isDeliveryActive ? "Delivery" : "Pickup"}
          </Button>
          {!isDeliveryActive ? (
            <Button
              variant="text"
              className={classes.bottomeAddressBtn}
              disableRipple
              size={"small"}
            >
              Beverly Hills - 1008 Elden Way
            </Button>
          ) : (
            <Button variant="contained" className={classes.bottomPickAddress} size={'small'}>
              What's Your Address ? 
            </Button>
          )}
        </div>
        <Button variant="contained" className={classes.loginBtn} size="small">
          Change
        </Button>
        <div className={classes.DeliveryOrPickUpContainer}>
          <span
            className={classes.DeliveryButton}
            onClick={(e) => HandleDeliveryPickUpClick(e)}
          >
            Delivery
          </span>
          <span className={classes.orText}> or </span>
          <span
            className={classes.PickUpButton}
            onClick={(e) => HandleDeliveryPickUpClick(e)}
          >
            Pickup
          </span>
          <div className={classes.HighlightBar} ref={HighLightBarRef}></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
