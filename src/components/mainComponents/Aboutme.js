import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useSpring, animated} from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles({
  
});

export default function Aboutme() {
  const classes = useStyles();
  
  return(
    <div id="linkAboutMe">
      <div>
        <h1>About me</h1>
      </div>
      <div>
        <p>出生</p>
      </div>
    </div>
  );
}

