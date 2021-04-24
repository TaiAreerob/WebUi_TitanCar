import React from 'react';

import { Link } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import "./NaviBar.css"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";


function NaviBar () {
        return(
            
                <div className = "menu-items">

                   <a href = '/MenuPage'>
                        <FaIcons.FaBars/>
                    </a>

                    <a href = '/landingPage'>
                        <AiIcons.AiFillHome/>
                    </a> 

                    <a href = '/CarPage'>
                        <FaIcons.FaCar/>
                    </a> 

                    <a href = '/CameraPage'>
                        <BsIcons.BsFillCameraVideoFill/>
                    </a> 
                </div>
            
        )
}

export default NaviBar