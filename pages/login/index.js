import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import firebase from 'firebase/app'
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUserCookies, setToken, removeUserCookies, removeToken } from '../../service/cookiesServices'
import Router, { withRouter } from 'next/router'
import FieldAndInput from '../../components/Common/FieldAndInput/FieldAndInput'
import { actions } from '../../redux/actions'
import { ajaxCallPost } from '../../service/apiServices'
import { COOKIES_JSN_TOKEN_KEY } from '../../global/staticVariable';
import './index.scss';

class SignInScreen extends Component {
  state = {
    isSignedIn: false,
    uid: '',
    displayName: '',
    email: '',
    phoneNumber: '',
    photoURL: '',
    providerId: '',
  };

  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // We will display Google , Facebook , Etc as auth providers.
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false
    },
  };

  sendUsersRequest = (jsonformat) => {
    ajaxCallPost('verify', jsonformat, (response) => {
      const userCookies = response.data.userData
      const joinSanarmToken = response.data.joinSanarmToken
      if (userCookies && joinSanarmToken) {
        setUserCookies(userCookies)
        setToken(joinSanarmToken)
        this.props.setUser(userCookies)

        Router.push('/landingPage')
      } else {
        this.doSignOut()
      }
    })
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(this.authenUser);
  }

  doSignOut() {
    removeUserCookies()
    removeToken()
  }

  authenUser = (user) => {
    if (user) {
      // User is sign in
      this.onLoginSuccess(user)

    } else {
      // No user is sign in
      this.doSignOut()
    }
  }
  onLoginSuccess = (user) => {
    const jsonformat = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      PhoneNumber: user.phoneNumber,
      PhotoURL: `${user.photoURL}?height=500&width=500`,
      ProviderID: user.providerId,
    }
    this.setState({
      isSignedIn: !!user,
      ...jsonformat,

    })
    this.sendUsersRequest(jsonformat)

  }
  render() {
    return (
      <div id="loginPage">
        <div className="fixed-bg "> </div>
        <Container>
          <Row>
            <Col xs={{ size: 10, offset: 1 }} sm={{ size: 4, offset: 5 }}>
              <p className="sub-title mt-4 ">
                TITAN
                  </p>
            </Col>
          </Row>
          <FieldAndInput
                    inputType="email"
                    title="ชื่อผู้ใช้/รหัสนักศึกษา"
                    isRequired={true}
                    value={this.state.email}
                    onChange={(value) => { this.setState({ email: value }) }}
                />
                 <FieldAndInput
                    inputType="email"
                    title="รหัสผ่าน"
                    isRequired={true}
                    value={this.state.email}
                    onChange={(value) => { this.setState({ email: value }) }}
                />
          {/* <Row>
            <Col xs={{ size: 10, offset: 1 }} sm={{ size: 4, offset: 4 }} className="text-center mt-4 ">
              <img src="image" width="60%"></img>
            </Col>
          </Row> */}
          <Row>
            <Col className="container login-button" xs={{ size: 10, offset: 1 }} sm={{ size: 4, offset: 4 }}>
              <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setUser: bindActionCreators(actions.userAction.setUser, dispatch)
})

export default connect(null, mapDispatchToProps)(SignInScreen);

