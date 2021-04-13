import React from 'react'
import GoogleMapReact from 'google-map-react'
import { isEmpty } from 'lodash'

import CourtCard from '../CourtCard/CourtCard'
import './Map.scss'

const YourLocation = () => {
    return (
        <div className="YourLocation"><img className="image-map" src="/static/assets/map-logo.png"/></div>
        
    )
    
}


class MapClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            center: {
                lat: 13.767788,
                lng: 100.517572,
            }
        }

    }

    componentDidMount() {
        this.getCurrentLocation()
    }

    getCurrentLocation = () => {
        navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
            })
        })
    }

    renderCourtCard = () => {
        if (isEmpty(this.props.selectedCourt)) {
            return null
        }
        return (
            <CourtCard
                {...this.props.selectedCourt}
                className="SelectedCourt"
            />
        )
    }


    render() {
        let Locationshow =true;
        if(this.state.center.lat==13.767788){
             Locationshow = false;
        }
      
       console.log(Locationshow);
        return (
            < div className="GoogleMap" style={{ height: this.props.height }}>
                <GoogleMapReact
                    draggable
                    bootstrapURLKeys={{ key: 'AIzaSyDkdlp-OP4rUy76NkywfX0otOd1lk_mHf4' }}
                    center={this.state.center}
                    zoom={12}
                   
                >
                    {this.props.children}

                    {Locationshow ? <YourLocation lat={this.state.center.lat} lng={this.state.center.lng} /> : <div></div>}
                  
                </GoogleMapReact>
                {this.renderCourtCard()}
            </div >
        )
    }

}
const Map = (MapClass)
export { Map }
