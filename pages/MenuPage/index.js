import React, { Component } from 'react'
import Router, { withRouter } from 'next/router'
import LogoBar from '../../components/LogoBar/LogoBar'
import classnames from 'classnames'
import './index.scss'
import Carousel from 'nuka-carousel';
import firebase from 'firebase/app'
import 'firebase/auth';
import { Button, Container, Row, Col } from 'reactstrap';
import Link from 'next/link'
import { updateUserProfile } from '../../service/UserProfileServices'
import { JoinSanarmContact } from '../../components/JoinSanarmContact/JoinSanarmContact'
import { getUserCookies, removeUserCookies, setUserCookies } from '../../service/cookiesServices'
import NaviBar from '../../components/NaviBar/NaviBar'
import UserInfo from '../../components/UserInfo/UserInfo'

class MenuPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayID: '',
            playerId: 0,
            playerName: '',
            playerImg: '',
            playTimes: 0,
            money: 1,
            rooms: [],
            bookings: [],
        }
    }
    

    singout = () => {
        firebase.auth().signOut();
        removeUserCookies();
    }
    componentDidMount() {
        updateUserProfile()
    }
    isYourProfile = () => {
        const userCookies = getUserCookies()
        return true
    }
    renderSignoutButton = () => {
        if (this.isYourProfile()) {
            return (
                <Link href="/">
                    <span className="singout-color" onClick={this.singout}>Sign out</span>
                    
                </Link>
                
            )
        }
        return null
    }
    renderComingSoon = () => {
        return <div className="ComingSoon">
            Coming soon
        </div>
    }

    

    render() {
        return (
            <div>
                
                
                

                <UserInfo/>
                <Col xs={5} className="userInfo__useImage" >
                                {this.renderSignoutButton()} 
                </Col> 
                <NaviBar/>
            </div>

            
        )
    }
}

export default MenuPage

