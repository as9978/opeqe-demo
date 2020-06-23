import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import TimerIcon from "@material-ui/icons/Timer";


const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 10,
    marginTop: 22,
    [theme.breakpoints.only("xs")]: {
      width: 233,
    },
    [theme.breakpoints.only("sm")]: {
      width: 330,
    },
    [theme.breakpoints.only("md")]: {
      width: 317,
    },
    [theme.breakpoints.only("lg")]: {
      width: 400,
    },
    [theme.breakpoints.only("xl")]: {
      width: 450,
    },
    marginRight: 15
  },
  imageContainer: {
    borderRadius: 10,
    marginRight: 15,
    position: "relative",
    [theme.breakpoints.only("xs")]: {
      width: 233,
      height: 150,
    },
    [theme.breakpoints.only("sm")]: {
      width: 330,
      height: 150,
    },
    [theme.breakpoints.only("md")]: {
      width: 317,
      height: 180,
    },
    [theme.breakpoints.only("lg")]: {
      width: 400,
      height: 220,
    },
    [theme.breakpoints.only("xl")]: {
      width: 450,
      height: 220,
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 5,
  },
  badge: {
    position: "absolute",
    bottom: 15,
    right: 5,
    backgroundColor: "black",
    borderRadius: 25,
    padding: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
  badgeText: {
    color: "white",
    fontFamily: "Trebuchet",
  },
  name: {
    fontFamily: "Trebuchet",
    fontSize: 18,
    marginTop: 10,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    fontFamily: "Trebuchet",
    color: "#026764",
    fontSize: 15,
  },
  dot: {
    fontFamily: "Trebuchet",
    fontSize: 20,
    lineHeight: 0,
  },
  subtitleText: {
    fontFamily: "Trebuchet",
    fontSize: 15,
    color: "#696969",
    marginLeft: 5,
  },
  icon: {
    fontSize: 14,
    backgroundColor: "#F5F5F5",
  },
  time: {
    fontFamily: "Trebuchet",
    fontSize: 14,
    color: "black",
    marginRight: 5,
    backgroundColor: "#F5F5F5",
  },
  price: {
    fontFamily: "Trebuchet",
    fontSize: 14,
    color: "black",
    backgroundColor: "#D7D7D7",
  },
  detail: {
    fontFamily: "Trebuchet",
    fontSize: 14,
    color: "#026764",
    backgroundColor: "#F5F5F5",
  },
}));

export default ({
  image,
  special,
  name,
  category,
  origin,
  meal,
  time,
  price,
  freePickup,
}) => {
  const classes = useStyles();

  return (
    <div style={{scrollSnapAlign:"start"}}>
      <div className={classes.container}>
        <div className={classes.imageContainer}>
          <img src={image} className={classes.image} />
          {special ? (
            <div className={classes.badge}>
              <Typography className={classes.badgeText}>{special}</Typography>
            </div>
          ) : null}
        </div>
        <Typography className={classes.name}>{name}</Typography>
        <div className={classes.textContainer}>
          <Typography className={classes.category}>{category}</Typography>
          <Typography color="textSecondary" className={classes.dot}>
            .
          </Typography>
          <Typography className={classes.subtitleText}>{origin}</Typography>
          <Typography color="textSecondary" className={classes.dot}>
            .
          </Typography>
          <Typography className={classes.subtitleText}>{meal}</Typography>
        </div>
        <div
          className={classes.textContainer}
          style={{ justifyContent: "space-between" }}
        >
          <div className={classes.textContainer}>
            <div className={classes.textContainer}>
              <TimerIcon className={classes.icon} />
              <Typography className={classes.time}>{time} Mins</Typography>
            </div>
            <Typography className={classes.price}>${price}</Typography>
          </div>
          <div>
            {freePickup ? (
              <Typography className={classes.detail}>Free Pickup</Typography>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
