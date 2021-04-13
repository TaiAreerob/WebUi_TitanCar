import React from 'react'
import { Provider, connect } from 'react-redux'
import Router, { withRouter } from 'next/router'

import App, { Container } from 'next/app'
import Cookies from 'js-cookie'
import _ from 'lodash'
import { COOKIES_USER_KEY } from '../global/staticVariable'
import firebase from 'firebase/app'
import 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import ReactGA from 'react-ga';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";
import withRedux from 'next-redux-wrapper'
import { makeStore, actions, bindActionCreators } from '../redux/store'
import { getUserCookies } from '../service/cookiesServices'
import 'react-toastify/dist/ReactToastify.min.css';
import './index.scss'

import { updateUserProfile } from '../service/UserProfileServices'
const firebaseConfigBackup = {
    apiKey: "AIzaSyAblb_CCEBtdUmHt3xsrKQhIiHRxs7rZEE",
    authDomain: "sanarmbad-cf78d.firebaseapp.com",
    databaseURL: "https://sanarmbad-cf78d.firebaseio.com",
    projectId: "sanarmbad-cf78d",
    storageBucket: "sanarmbad-cf78d.appspot.com",
    messagingSenderId: "223249597233"
};
const firebaseConfig = { //joinsanarm#gmail.com
    apiKey: "AIzaSyAVHEWyEMASO0bepdQHaZK72YSx3Ayh_Rw",
    authDomain: "joinsanarm-240014.firebaseapp.com",
    databaseURL: "https://joinsanarm-240014.firebaseio.com",
    projectId: "joinsanarm-240014",
    storageBucket: "",
    messagingSenderId: "1097916988053",
    appId: "1:1097916988053:web:23fe9c11c52ff44b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    doGoogleAnalytic = () => {
        ReactGA.initialize('UA-140382806-1')
        ReactGA.pageview(this.props.router.route)
    }

    componentDidMount() {
        if (_.isEmpty(Cookies.get(COOKIES_USER_KEY))) {
            Router.push('/')
        } else {
            updateUserProfile();
            this.props.setUser(getUserCookies());
        }
        this.doGoogleAnalytic()
        if ('serviceWorker' in navigator) {
            console.log("Will the service worker register?");
            navigator.serviceWorker.register('/service-worker.js')
                .then(function (reg) {
                    console.log("Yes, it did.");
                }).catch(function (err) {
                    console.log("No it didn't. This happened:", err)
                });
        }
    }

    componentDidUpdate() {
        this.doGoogleAnalytic()
    }

    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <Provider store={store}>

                    <Component {...pageProps} />
                    <ToastContainer
                        className="joinsanarm__toast"
                        autoClose={3000}
                        hideProgressBar
                    />
                    {process.env.NODE_ENV !== 'production' && (
                        <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
                    )}
                </Provider>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setUser: bindActionCreators(actions.userAction.setUser, dispatch)
})

export default withRedux(makeStore)(connect(null, mapDispatchToProps)(withRouter(MyApp)))