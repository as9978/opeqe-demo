import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import Item from "./Item";
import RightArrow from "./carousel/RightArrow";
import LeftArrow from "./carousel/LeftArrow";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 30,
    marginBottom: 30,
    position: "relative",
  },
  title: {
    fontFamily: "Trebuchet",
    fontSize: 20,
    fontWeight: 700,
  },
  linesContainer: {
    position: "relative",
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#d7d7d7",
    paddingRight: 30,
  },
  highlightContainer: {
    position: "relative",
  },
  highlightLine: {
    position: "absolute",
    width: 30,
    height: 3,
    backgroundColor: "black",
    top: -1.5,
    left: 0,
    transition: "all 1s ease 0s",
  },
  itemContainer: {
    "&:hover #LeftArrow, &:hover #RightArrow":{
      transform:"scale(1.0)",
    },
    overflow: "scroll",
    overflowY: "hidden",
    scrollSnapType: "x mandatory",
    display: "flex",
    flexDirection: "row",
    scrollBehavior: "smooth",

  },
  LeftArrow: {
    position: "absolute",
    top: "50%",
    left: "5px",
    zIndex: 10,
    cursor: "pointer",
    transform:"scale(0)",
    transition:"all 0.3s ease",
    display:"none",
  },
  RightArrow: {
    position: "absolute",
    top: "50%",
    right: "5px",
    zIndex: 10,
    cursor: "pointer",
    transform:"scale(0)",
    transition:"all 0.3s ease"
  },
}));

export default ({ title, items, isLast }) => {
  const classes = useStyles();
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const scrollView = useRef(null)
  const RightArrowRef = useRef(null)
  const LeftArrowRef = useRef(null)

  const HandleScroll = (e) => {
    const element = e.target

    // Set Highlight ProgressBar Value
    var scrollPercentageValue = element.scrollLeft / (element.scrollWidth - element.clientWidth) * 100
    setScrollPercentage(scrollPercentageValue)

    // Show Hide Right Arrow
    if(scrollPercentageValue<100){
      RightArrowRef.current.style.transform = "scale(1)"
    }else{
      RightArrowRef.current.style.transform = "scale(0)"
    }

    // Show Hide Left Arrow
    if(scrollPercentageValue>0){
      LeftArrowRef.current.style.display = "block"
      LeftArrowRef.current.style.transform = "scale(1)"
    }else{
      LeftArrowRef.current.style.transform = "scale(0)"
    }
  }

  const HandleLeftButton = () => {
    console.log(scrollView.current.scrollLeft)
    scrollView.current.scrollLeft -= scrollView.current.clientWidth
  }

  const HandleRightButton = () => {
    console.log(scrollView.current.scrollLeft)
    scrollView.current.scrollLeft += scrollView.current.clientWidth
  }
  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item container xs={10}>
        <Grid item xs={12}>
          <div className={classes.container}>
            <Typography className={classes.title}>{title}</Typography>
            <div className={classes.linesContainer}>
              <div className={classes.line} >
                <div className={classes.highlightContainer}>
                  <div className={classes.highlightLine} style={{ left: `${scrollPercentage}%` }} />
                </div>
              </div>
            </div>
            <div className={classes.itemContainer} ref={scrollView} onScroll={(e) => HandleScroll(e)}>
              <div className={classes.LeftArrow} onClick={HandleLeftButton} id={"LeftArrow"} ref={LeftArrowRef}>
                <LeftArrow />
              </div>
              {items.map((item) => (
                <Item
                  key={item.id}
                  image={item.image}
                  special={item.special ? item.special : null}
                  name={item.name}
                  category={item.category}
                  origin={item.meal}
                  time={item.time}
                  price={item.price}
                  freePickup={item.freePickup}
                />
              ))}
              <div className={classes.RightArrow} onClick={HandleRightButton} id={"RightArrow"} ref={RightArrowRef}>
                <RightArrow />
              </div>
            </div>
            {isLast ? (
              <div className={classes.line} style={{ marginTop: 30 }} />
            ) : null}
          </div>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};
