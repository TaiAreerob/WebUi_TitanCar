import { ajaxCallGet } from './apiServices'
import { isUserCookiesEmpty, getUserCookies, setUserCookies } from './cookiesServices'

export const updateUserProfile = () => {
    if (!isUserCookiesEmpty()) {
        const user = getUserCookies()
        ajaxCallGet(`users/${user.id}`, (updatedUser) => {
            setUserCookies(updatedUser.data)
        })
    }
}
