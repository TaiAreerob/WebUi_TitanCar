
import { Input, Container } from 'reactstrap'
import Link from 'next/link'
import StickyBar from '../StickyBar/StickyBar'
import LogoBar from '../LogoBar/LogoBar'
import UserImage from '../UserImage/UserImage'
import Button from '../Common/Button/Button'
import './SearchBar.scss'

class SearchBar extends React.Component {

    render() {
        return (
            <StickyBar className="SearchBar">
                <LogoBar />
                <Container className="SearchBar__Container">
                    <Input className="SearchBar__input searchbox" onChange={this.props.onInputChange} placeholder="search your match" />
                    <i className="fas fa-search" />
                    <Link href="/createRoom" >
                        <Button className="btn-createRoom" color="primary">Create <span className="fas fa-plus"></span></Button>
                    </Link>
                    <Link href="/payment" >
                        <Button className="btn-payment" color="primary">เติมเงิน <span className=""></span></Button>
                    </Link>
                </Container>
            </StickyBar>
        )
    }
}

export default SearchBar
