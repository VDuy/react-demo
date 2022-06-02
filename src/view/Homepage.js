import React from 'react';

import OpenMenu from "../components/OpenMenu"
import SideBar from "../components/sidebar/Sidebar"

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <OpenMenu></OpenMenu>
                <SideBar></SideBar>
            </div>
        )
    }
}
