import React, { useContext } from 'react';
import { Context } from '../../contexts/context';
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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  title: {
    flexGrow: 1,
    color: purple[800],
    cursor: "pointer",
    fontSize: "25px",
    fontFamily: "Avenir,Helvetica Neue,Helvetica,Arial,Hiragino Sans,ヒラギノ角ゴシック,YuGothic,Yu Gothic,メイリオ, Meiryo,ＭＳ Ｐゴシック,MS PGothic",
    fontWeight: 700,
  },
  menuText: {
    color: purple[800],
    paddingRight: 10,
    fontSize: 19,
  },
  menuButton: {
    marginLeft: -15,
  },
  twitter: {
    marginLeft: 10,
    //color: purple[800],
  },
});

 const Header: React.FC = () => {

  const {state, dispatch} = useContext(Context);
  const classes = useStyles(); //スタイルを決める

  const contents = [
    {text: 'Top', path: '/'},
    {text: 'About Me', path: '/aboutme'},
    {text: 'Output', path: '/output'},
    {text: 'Contact', path: '/contact'},
    {text: 'About This Site', path: '/about-this-site'}
  ];

  const toggleDrawer = (open: boolean) => {
    dispatch({
      type: 'CHANGE_IS_DRAWER_OPEN',
      bool: open
    })
  };

  const menuList = (
    <div
      className={classes.list}
      role="presentation"
      onClick={()=>toggleDrawer(false)}
      onKeyDown={()=>toggleDrawer(false)}
    >
      <List>
        {contents.map((temp, index) => (
          <Link to={temp.path} style={{textDecoration: "none", color: "black"}} key={index}>
            <ListItem button >
              <ListItemIcon><ArrowForwardIcon /></ListItemIcon>
              <ListItemText primary={temp.text} style={{textDecoration: "underline", textDecorationColor: "#DDA0DD"}} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

   return (
    <React.Fragment>
      <CssBaseline />
        <AppBar position="static" style={{ background: '#d1c4e9', zIndex: 100 }}>
          <Toolbar>
            <div>
              <IconButton onClick={()=>toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu" >
                <MenuIcon style={{color: purple[800]}} />
              </IconButton>
              <Drawer open={state.isDrawerOpen} onClose={()=>toggleDrawer(false)}>
                {menuList}
              </Drawer>
            </div>
            
              <Typography variant="h6" className={classes.title} align="center" color="inherit">
                <Link to='/' style={{textDecoration: "none", color: purple[800]}}>SHINNOSUKE</Link>
              </Typography>
            
            <a href="https://github.com/Shinnosuke7031"style={{color: "#6a1b9a"}}><i className="fa fa-github fa-2x" aria-hidden="true"></i> </a>
            <a href="https://twitter.com/web7031boushi" className={classes.twitter} style={{color: "#6a1b9a"}}><i className="fa fa-twitter fa-2x" aria-hidden="true"></i> </a>
          </Toolbar>
        </AppBar>
        
    </React.Fragment>
  );
}


export default Header;