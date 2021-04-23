import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";


export const BottomData = [
    {
        title: 'menu',
        path: '/MenuPage',
        icon : <FaIcons.FaBars/>,
        cName: 'nav-text'
    },

    {
        title: 'Home',
        path: '/landingPage',
        icon : <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: 'car',
        path: '/CarPage',
        icon : <FaIcons.FaCar/>,
        cName: 'nav-text'
    },
    {
        title: 'camera',
        path: '/CameraPage',
        icon : <BsIcons.BsFillCameraVideoFill/>,
        cName: 'nav-text'
    }


]