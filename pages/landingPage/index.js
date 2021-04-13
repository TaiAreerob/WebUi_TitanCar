import React, { Component } from 'react'
import Router, { withRouter } from 'next/router'
import LogoBar from '../../components/LogoBar/LogoBar'
import classnames from 'classnames'
import { Container, Row, Col } from 'reactstrap';
import './index.scss'
import Carousel from 'nuka-carousel';
import Button from '../../components/Common/Button/Button'
import Link from 'next/link'
import { updateUserProfile } from '../../service/UserProfileServices'
import { JoinSanarmContact } from '../../components/JoinSanarmContact/JoinSanarmContact'
class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        updateUserProfile()
    }

    renderComingSoon = () => {
        return <div className="ComingSoon">
            Coming soon
        </div>
    }

    renderSanarmbadShop = () => {
        return <Row>
            <Col className="icon-fed " xs={{ size: 9 }}>
                <Link href="/landingPage">
                    <div className="ActionBar">
                        <Button className="ActionBar__BookButton" onClick={() => { console.log("landingPage") }}>Sanarm Shop</Button>
                    </div>
                </Link>
            </Col>
        </Row>
    }

    render() {
        return (
            <div className="LandingPage">
                <LogoBar />
       

                <JoinSanarmContact />
            </div >
        )
    }
}

export default withRouter(LandingPage)

