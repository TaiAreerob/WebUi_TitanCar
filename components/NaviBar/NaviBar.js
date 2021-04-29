import React ,{ Component, useState } from 'react';
import "./NaviBar.css"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import UserInfo from '../UserInfo/UserInfo';
import firebase from 'firebase/app'
import { getUserCookies, removeUserCookies, setUserCookies } from '../../service/cookiesServices'
import Link from 'next/link'
    
    function NaviBar () {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    const singout = () => {
        firebase.auth().signOut();
        removeUserCookies();
    }
         
        return(
            <>
      
        <div className="menu-items">
                <a>
                <FaIcons.FaBars onClick={showSidebar} />
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
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          
            <div className='navbar-toggle'>
                <UserInfo/>
                <div className = "toggle-close">
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    <div className = "sign-out">
                    <Link href="/">
                    <button className ="button-signout" onClick ={singout}>sign out</button>
                    </Link>
                    </div>
                </div>
            </div>

        </nav>
      
    </>
                
            
        )
}

export default NaviBar


{/* <div className = "menu-items">

<a href = '#' className = "menu-bars" >
     <FaIcons.FaBars onClick={showSidebar}/>
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
</div> */}