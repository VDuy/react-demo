import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink, } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
      
          <NavLink to="/" >
            <IconButton edge="start" className={classes.menuButton}>
              <HomeIcon />
            </IconButton>
          </NavLink>

          <Typography variant="h6" className={classes.title}>
            Topsis stimulation
          </Typography>

          <a href='/topsis-demo.xlsx' download>
            <Button variant="contained" >Download</Button>
          </a>

        </Toolbar>
      </AppBar>
    </div>
  );
}



