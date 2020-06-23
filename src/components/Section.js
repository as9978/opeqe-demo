import React, { useRef } from "react";
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
    width: "100%",
    height: 1,
    backgroundColor: "#d7d7d7",
  },
  highlightLine: {
    position: "absolute",
    width: 31,
    height: 1.5,
    backgroundColor: "black",
    left: 0,
  },
  itemContainer: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
  },
}));

export default ({ title, items, isLast }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item container xs={10}>
        <Grid item xs={12}>
          <div className={classes.container}>
            <Typography className={classes.title}>{title}</Typography>
            <div className={classes.linesContainer}>
              <div className={classes.line} />
              <div className={classes.highlightLine} />
            </div>
            <div className={classes.itemContainer}>
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
