import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinearStepper from '../topsis-react/component/LinearStepper';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink, } from 'react-router-dom';

import SideBar from "../components/sidebar/Sidebar"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  },
}));

export default class Topsis extends React.Component {

  render() {
    return (
      <div className={useStyles.root}>
        <AppBar position="static">

          <Toolbar >
            <NavLink to="/">
              <IconButton edge="start" className={useStyles.menuButton}>
                <HomeIcon />
              </IconButton>
            </NavLink>
            <Typography variant="h6" className={useStyles.title}>
              TOPSIS
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{
          display: "flex",
          flexDirection: 'row'
        }}>
          <SideBar></SideBar>
          <Container maxWidth="lg">
            <LinearStepper />
          </Container>
        </div>
      </div>
    );
  }
}

