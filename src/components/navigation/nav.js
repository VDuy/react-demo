import React from 'react';
//import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import "./nav.css"
import { Button } from '@material-ui/core';
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">
                    <Button>
                        <HomeIcon ></HomeIcon>
                    </Button>
                </a>
                <a className="active" href="/topsis">
                    <Button>Topsis</Button>
                </a>
                <a className="active" href="/about">
                    <Button>About</Button>
                </a>
            </div>
        )
    }
}
export default Nav;