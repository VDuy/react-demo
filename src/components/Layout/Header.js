import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Typography, MenuItem, Menu } from '@mui/material';

import { Menu as Menus } from '@mui/material';
//import SearchIcon from '@material-ui/icons/Search';
// import AccountBox from '@material-ui/icons/AccountBox';

import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,

    '&:hover': {
      //  backgroundColor: rgba(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);

  };
  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>

      <NavLink to="/signin" >
        <div className="sidebar-item">

          <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
        </div>
      </NavLink>
      <NavLink to="/signup" a>
        <div className="sidebar-item">
          <MenuItem
            onClick={handleMenuClose}>Sign Up</MenuItem>
        </div>
      </NavLink>

    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/" >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="white"
              aria-label="open drawer">
              <Menus />
            </IconButton>
          </NavLink>
          <Typography className={classes.title} variant="h6" noWrap>
            Project Web
          </Typography>


          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountBox /> */}
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>

      {renderMenu}
    </div>
  );
}