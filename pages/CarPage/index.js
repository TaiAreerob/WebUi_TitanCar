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
// import  '../../image/light_on0.png'
// import car from '../../car.png'

const ImagePath = {
    light_on0 : '../../image/light_on0.png',
    light_on1 : '../../image/light_on1.png'
}

class CarPage extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         displayID: '',
    //         playerId: 0,
    //         playerName: '',
    //         playerImg: '',
    //         playTimes: 0,
    //         money: 1,
    //         rooms: [],
    //         bookings: [],
    //     }
        
    // }
state = {
    open: true
        }
    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
      }

    getImageName = () => this.state.open ? 'light_on0' : 'light_on1'
    

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
                    <span className="singout-color" onClick={this.singout}>Signout </span>                 
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
        const imageName = this.getImageName();
        return (
            <div>
            
            
            <div className = ""> {this.renderComingSoon()} </div>
                 
                CarPage
                <span>
                <img style={{maxWidth: '50px'}} src={ImagePath[imageName]} onClick={this.toggleImage} />
                </span>
                <NaviBar/>
               
            </div>
        )
    }
}

export default withRouter(CarPage)

