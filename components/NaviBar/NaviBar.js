import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import {BottomData} from './BottomData';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import "./NaviBar.css"


function NaviBar () {
        return(
            <>
                <BottomNavigation className = "menu-items">
                    {BottomData.map( (item,index) =>{
                        return(
                            <div key = {index} className ={item.cName}>
                                    
                                        <Link to ={item.path}> 
                                            <span>{item.icon}</span>
                                        </Link>
                                    
                                    
                            </div>
                            )    
                    })}    
                </BottomNavigation>

           
            </>
        )
}

export default NaviBar