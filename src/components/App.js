import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  header: {
    width: "100%",
    hight: "50px",
    backgroundColor: "#d1c4e9"
  }
}
);

function App() {
  const classes=useStyles(); 
  return (
    <div>
      <Header/>
      <div className={classes.header}>
      </div>
    </div>
  );
}

export default App;