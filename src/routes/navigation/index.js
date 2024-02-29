import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as SiteLogo } from '../../assets/logo.svg'
import './navigation.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation" >
                <Link className="logo-container" to="/" >
                    <SiteLogo height={50} width={75}/>
                </Link>
                <div className="nav-links-container">
                 <Link className="nav-link" to="/shop" >
                    Shop
                 </Link> 
                 <Link className="nav-link" to="/signin" >
                    Sign In
                 </Link>                       
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;