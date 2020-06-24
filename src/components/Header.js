import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Main from './Main';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  title: {
    flexGrow: 1,
    color: purple[800]
  },
  menuText: {
    color: purple[800],
    paddingRight: 10,
    fontSize: 19
  },
  menuButton: {
    marginLeft: -15,
  },
  twitter: {
    marginLeft: 10,
  },
});

export default function Header() {

  const[left, setLeft] = useState(false);
  const classes = useStyles(); //スタイルを決める

  const contents = [
    {text: 'About Me', link: './Main/Aboutme#linkAboutme'}
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setLeft(open);
    console.log(left);
  };

  const menuList = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {contents.map((temp) => (
          <ListItem button key={temp.text}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={temp.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

   return (
    <React.Fragment>
      <CssBaseline />
        <AppBar position="static" style={{ background: '#d1c4e9' }}>
          <Toolbar>
            <div>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer(true)}>
                <span className={classes.menuText}>Menu</span><MenuIcon style={{color: purple[800]}} />
              </IconButton>
              <Drawer open={left} onClose={toggleDrawer(false)}>
                {menuList}
              </Drawer>
            </div>
            <Typography variant="h6" className={classes.title} align="center" color="inherit">Shin-Nosuke</Typography>
            <a href="https://github.com/Shinnosuke7031"><i className="fa fa-github fa-2x" aria-hidden="true"></i> </a>
            <a href="https://twitter.com/web7031boushi" className={classes.twitter}><i className="fa fa-twitter fa-2x" aria-hidden="true"></i> </a>
          </Toolbar>
        </AppBar>
        <Main toggleDrawer={toggleDrawer}/>
    </React.Fragment>
  );
}


