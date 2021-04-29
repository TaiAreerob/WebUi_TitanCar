import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import './layout.scss'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className="container">
                <div className="layout-sanarmbad">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout
