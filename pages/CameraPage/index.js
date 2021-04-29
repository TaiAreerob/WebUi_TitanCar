import React, { Component } from 'react'
import { withRouter } from 'next/router'
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

class CameraPage extends Component {
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
                    <button className="singout-color" onClick={this.singout}>Signout </button>                 
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

    // renderSanarmbadShop = () => {
    //     return <Row>
    //         <Col className="icon-fed " xs={{ size: 9 }}>
    //             <Link href="/landingPage">
    //                 <div className="ActionBar">
    //                     <Button className="ActionBar__BookButton" onClick={() => { console.log("landingPage") }}>Sanarm Shop</Button>
    //                 </div>
    //             </Link>
    //         </Col>
    //     </Row>
    // }

    render() {
        return (
            <div>
            
            <div className = ""> {this.renderComingSoon()} </div>
                {/* <Col xs={5} className="userInfo__useImage" >
                                {this.renderSignoutButton()} 
                </Col>  */}
                CameraPage
                <NaviBar/>
                
            </div>
        )
    }
}

export default withRouter(CameraPage)

