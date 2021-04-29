import React, { Component }  from 'react';
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import Link from 'next/link'
import UserImage from '../UserImage/UserImage'
import './LogoBar.scss'


class LogoBar extends React.Component {
    
    renderProfile = () => {
        const { user } = this.props
        const displayName =  user ? user.displayName :''
        const coin =  user ? user.coin : ''
        const imageUrl =  user ?  user.imageUrl : ''
        const id =  user ?  user.id : ''
        return (
            <div className="wrapper-userProfile">
                <div className="userDetail">
                    <div className="userDetail--name">
                        {displayName}
                    </div>
                    <div className="userDetail--wallet">
                    {coin} Bath
                      
                    </div>
                </div>
                
                   
                        <UserImage isRounded width={35} height={35}
                            userid={id}
                            imgURL={imageUrl}
                        />
               
             
            </div>
        )
    }

    render() {
        return (
            <Container className="LogoBar">
                <Link href="/landingPage">
                <img className ="icon" src={"/static/assets/logo-web.png"} />
                </Link>
                {this.renderProfile()}
            </Container>
        )
    }
}

const mapStateToProps = (state) =>( {
    user: {...state.userProfileReducer},
})

export default connect(mapStateToProps)(LogoBar)
