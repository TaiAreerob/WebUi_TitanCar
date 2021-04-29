import React from 'react';
import propTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames'

import { having, baht } from '../../service/wordingServices'
import './CourtPin.scss'

export const THEME = {
    DEFAULT: 'DefaultTheme',
    RED: 'RedTheme',
}

export const mapToCourtPin = (props) => {
    return {
        displayName: props.displayName,
        lat: props.lat,
        lng: props.lng,
        district: props.district.name_th,
        courtAmount: props.courtAmount,
        openDate: `${props.openDate.startDate} - ${props.openDate.endDate}`,
        openTime: props.openTime.time,
        closeTime: props.closeTime.time,
        haveRacket: having(props.haveRacket),
        haveShuttlecock: having(props.haveShuttlecock),
        priceHour: props.priceHour,
        isshow: props.reserverDay != 0,
    }
}

const CourtPin = props => {
    const handleClickCard = () => {
        props && props.onSelectPin(props)
    }
    const className = classnames(
        'CourtPin',
         props.className, 
         props.theme,
         )
    return (
        <div lat={props.latitude} lng={props.longitude} className={className} onClick={handleClickCard}>
           <div> {props.displayName} </div>
            ฿ {props.priceHour}
        </div>
    )
}

CourtPin.propTypes = {
}

CourtPin.defaultProps = {
    theme: THEME.DEFAULT,
}

export default CourtPin;