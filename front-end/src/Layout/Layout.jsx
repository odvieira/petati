import React from "react";
import NavBar from "../Components/nav-bar/nav-bar";
import BottomBar from "../Components/bottom-bar/bottom-bar";

import './Layout.css'

const Layout = ({ children }) => {
    return (
        <div className="mainDiv">
            <NavBar/>
            <div className="content">
                {children}
            </div>
            <BottomBar />
        </div>
    );
};

export default Layout;
