import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#026764",
    width: 40,
    height: 40,
    borderRadius: 500,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  icon:{
    color: 'white'
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ArrowForwardIosIcon className={classes.icon}/>
    </div>
  );
};
