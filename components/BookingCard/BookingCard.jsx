import { Col, Row } from 'reactstrap'
import './BookingCard.scss'

const allColumn = (col) => {
    return {
        xs: col,
        sm: col,
        md: col,
        lg: col,
        xl: col,
    }
}

const BookingCard = (props) => {

    return (
        <div className="BookingCard">
            <Row>
                <Col {...allColumn(12)}>
                    {props.courtName}
                    <a href={props.mapUrl} target="_blank">
                        <i className="courtAddress--location fa fa-map-marker-alt"></i>
                    </a>
                </Col>
            </Row>
            <Row className="BookingCard__Detail">
                <Col className="BookingCard__CourtDetail" {...allColumn(6)}>
                    <div>
                        {props.district}
                    </div>
                    <div>
                        <span
                            style={{ backgroundColor: props.roomStateColor, color: '#fff', padding: '0 8px', borderRadius: '10px' }}
                            className="BookingCard__Status">
                            {props.roomStateText}
                        </span>
                    </div>
                    {props.courtNo && (
                        <div>
                            court No.{props.courtNo}
                        </div>
                    )}
                </Col>
                <Col className="BookingCard__BookingDetail" {...allColumn(6)}>
                    {props.priceBreakDown.map(i => <div>{i}</div>)}
                </Col>
            </Row>
            <hr />
            <Row className="BookingCard__DateTime">
                <Col className="BookingCard__Date" {...allColumn(5)}>
                    {props.playDate}
                </Col>
                <Col className="BookingCard__Time" {...allColumn(7)}>
                    {props.playTime}
                </Col>
            </Row>
        </div>
    )
}

export { BookingCard }
