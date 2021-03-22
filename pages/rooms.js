import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Item from '../components/Item/Item'

const Rooms = (props) => {
    console.log(props)
    return (
        <Layout>
            <div>Room list</div>
            <Item />
        </Layout>
    )
}

Rooms.getInitialProps = async () => {
    // http://api.coindesk.com/v1/bpi/currentPrice.json
    const res = await fetch('http://api.coindesk.com/v1/bpi/currentPrice.json')
    return await res.json()
}

export default Rooms
