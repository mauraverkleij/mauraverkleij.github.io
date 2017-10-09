import React from 'react'
import {Link} from 'react-router'

const MainMenu = ({currentPage, color}) => {
    let menuClassName = "menu";
    let aboutbutton = <div className="menu-item">Maura</div>;
    let homebutton = <div className="menu-item">Projecten</div>;

    if (currentPage === '/') {
        homebutton = <div className="menu-item menu-item-active">Projecten</div>
    }

    if (color === 'yellow') {
        menuClassName = "menu menu-yellow";
        aboutbutton = <div className="menu-item menu-item-active">Maura</div>;
    }

    return (
    <div className={menuClassName}>
        <Link to={'about'}>
            {aboutbutton}
        </Link>
        <Link to={'/'}>
            {homebutton}
        </Link>
    </div>
    )
};

export default MainMenu;