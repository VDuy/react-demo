import React from 'react';
import Readexcel from '../components/Readexcel';
import OpenTopsis from "../components/OpenTopsis"
import SideBar from '../components/sidebar/Sidebar';

export default class extends React.Component {

    render() {
        return (
            <div>
                <OpenTopsis />
                <div style={{
                    display: "flex",
                    flexDirection: 'row'
                }}>
                    <SideBar />
                    <Readexcel />
                </div>
            </div>
        )
    }
}

