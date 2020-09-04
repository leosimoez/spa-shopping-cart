import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

}));

const Checkout = props => {

  const classes = useStyles();

  return (
    <h1>Checkout</h1>
  );

}

export default withRouter(withStyles(useStyles)(Checkout));