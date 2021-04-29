import React from 'react';
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import Link from 'next/link'
import UserImage from '../UserImage/UserImage'
import './UserInfo.css'
const mapStateToProps = (state) =>( {
    user: {...state.userProfileReducer},
})

class UserInfo extends React.Component {
    
    renderProfile = () => {
        const { user } = this.props
        const displayName =  user ? user.displayName :''
        const imageUrl =  user ?  user.imageUrl : ''
        const id =  user ?  user.id : ''
        return (
            <div className="content-userProfile">
                
                    <div className="avatar">
                        {/* {displayName} */}
                        <UserImage isRounded width={80} height={80}
                            userid={id}
                            imgURL={imageUrl}
                        />
                        <ul className="content">
                        {/* {coin} Bath */}
                        {displayName}
                        </ul>
                    </div>

            </div>
        )
    }

    render() {
        return (
            // <Container className="LogoBar">
            <div className="UserInfo">
                {/* <Link href="/landingPage">
                <img className ="icon" src={"/static/assets/logo-web.png"} />
                </Link> */}
                {this.renderProfile()}
            </div>
        )
    }
}



export default connect(mapStateToProps)(UserInfo)
