import _ from 'lodash'
import Cookies from 'js-cookie'
import { COOKIES_USER_KEY, COOKIES_JSN_TOKEN_KEY } from '../global/staticVariable'

// object of user information 
// return undefined if there is no user
export const getUserCookies = () => {
    try {
        if (Cookies.get(COOKIES_USER_KEY) && Cookies.get(COOKIES_USER_KEY) != 'undefined') {
            return Cookies.get(COOKIES_USER_KEY) ? JSON.parse(Cookies.get(COOKIES_USER_KEY)) : null
        }
        return null
    } catch (error) {
        console.error("Get user cookies", error)
        return null
    }
}

// set user to cookies
export const setUserCookies = (userCookies) => {
    Cookies.set(COOKIES_USER_KEY, userCookies, { expires: 2 })
}

// remove userCookies
export const removeUserCookies = () => {
    Cookies.remove(COOKIES_USER_KEY)
}

// return boolean
export const isUserCookiesEmpty = () => {
    return _.isEmpty(getUserCookies())
}

//get cookies
export const getCookies = (key) => {
    return Cookies.get(key) ? JSON.parse(Cookies.get(key)) : null
}
// set data to cookies
export const setCookies = (key, data) => {
    Cookies.set(key, data, { expires: 2 })
}

export const setToken = (token) => {
    setCookies(COOKIES_JSN_TOKEN_KEY, token)
}

export const removeToken = () => {
    Cookies.remove(COOKIES_JSN_TOKEN_KEY)
}

export const getToken = () => {
    return Cookies.get(COOKIES_JSN_TOKEN_KEY)
}