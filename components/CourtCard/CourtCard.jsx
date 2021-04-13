import React from 'react';
import propTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames'

import './CourtCard.scss';
import Button from '../Common/Button/Button'
import DiscountBadge from '../DiscountBadge/DiscountBadge'
import { having, baht } from '../../service/wordingServices'

export const mapToCourtCard = (props) => {
    return {
        ...props,
        district: props.district.name_th,
        courtAmount: props.courtAmount,
        openDate: `${props.openDate.startDate} - ${props.openDate.endDate}`,
        openTime: props.openTime.time,
        closeTime: props.closeTime.time,
        haveRacket: having(props.haveRacket),
        haveShuttlecock: having(props.haveShuttlecock),
        priceHour: props.priceHour,
        isShowReserveDay: props.reserverDay != 0,
        disableSelect: props.disableSelect,
    }
}

const CourtCard = props => {
    const handleClickCard = () => {
        props && !props.disableSelect && props.onClick(props)
    }
    const renderButton = () => {
        if(props.disableSelect) return 
        return <Button className="btn btn-success button" >{props.textButton || 'เลือก'}</Button>
    }
    return (
        <div className={classnames('card', props.className)} onClick={handleClickCard}>
            <div className="card-bg">
                <img src={props.imageUrl} className="card-img" />
            </div>
            <div className="card-footer">
                <Row>
                    <Col xs={6} md={6}>
                        <div className="header">{props.courtName}</div >
                    </Col>
                    <Col className="courtAddress" xs={6} md={6}>
                        <a href={props.mapUrl} target="_blank">
                            <i className="courtAddress--location fa fa-map-marker-alt"></i>
                        </a>
                        <span className="courtAddress--district ">
                            {props.district}
                        </span>
                        {props.discount && <DiscountBadge discount={props.discount} />}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="pl-sm-3" >
                        <div className="detail">เปิด: {props.openTime}-{props.closeTime}  ราคา/ชม: {props.priceHour} </div>
                        <div className="detail">จำนวนสนาม: {props.courtAmount}สนาม เปิด:{props.openDate} </div>

                    </Col>
                </Row>

                <Row>
                    <Col xs={7} md={7} className="pl-sm-3" >


                        <div className="option">ไม้แบด: {props.haveRacket} ลูกแบด: {props.haveShuttlecock}</div>
                    </Col>
                    <Col xs={5} md={5} className=" pl-sm-3 detailcourt" >
                        {props.isShowReserveDay && <div className="btn reserver-detal">จองล่วงหน้าอย่างน้อย 7 วัน</div>}
                        {renderButton()}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

CourtCard.propTypes = {
    courtlist: propTypes.array
}

export default CourtCard;