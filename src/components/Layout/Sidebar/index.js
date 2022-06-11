import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const SideBar = ({ activeSideBar, setActiveSideBar }) => {
    return (
        <div className={activeSideBar ? 'SideBar SideBar-active' : 'SideBar'}>
            <div className={activeSideBar ? 'SideBar-Container SideBar-Container-Active' : 'SideBar-Container'}>
                <div className="header">
                    <h2 className="logo">Dashboard</h2>
                    <div className="close-btn" onClick={() => setActiveSideBar(false)}>
                    
                    </div>
                </div>
                <div >

                    <Link to="/excel-topsis" >
                        <div className="sidebar-item">
                            <span>Excel Topsis</span>
                        </div>
                    </Link>
                    <Link to="/topsis" >
                        <div className="sidebar-item">
                            <span>Topsis</span>
                        </div>
                    </Link>

                </div>
            </div>


        </div>
    )
};

export default SideBar;