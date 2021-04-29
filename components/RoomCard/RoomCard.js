import React, { Component } from 'react';
import propTypes from 'prop-types'
import Link from 'next/link'
import _ from 'lodash'
import moment from 'moment'
import UserImage from '../UserImage/UserImage'
import DiscountBadge from '../DiscountBadge/DiscountBadge'
import './RoomCard.scss'
class RoomCard extends React.Component {

    getPlayingTime = () => {
        const diff = moment(this.props.endTime).diff(this.props.startTime)
        return moment.duration(diff).hours()
    }

    getPrice = () => {
        const price = this.props.price
        return price.toFixed(0)
    }

    renderDate = () => {
        if (_.isEmpty(this.props.date)) return null
        const dateFormated = moment(this.props.date).format("MMM Do YYYY")
        if (dateFormated) {
            return <span>วันที่ตี {dateFormated}</span>
        }
    }

    renderStartTime = () => {
        return (
            <span className="time">Start : {`${moment(this.props.startTime).format('HH:mm')} - ${moment(this.props.endTime).format('HH:mm')}`}</span>
        )
    }

    renderCloseTime = () => {
        return <span className="time">Close : {moment(this.props.closeTime).format('HH:mm')}</span>
    }

    renderUser(player, key) {
        return (
            <div key={key} className="player">
                <UserImage
                    width={20}
                    height={20}
                    isRounded
                    isDisplayBlock
                    imgURL={player.playerImg}
                />
            </div>
        )
    }

    renderPlayerList() {
        return (
            <div className="roomMembers">
                {this.props.playerList && this.props.playerList.map(
                    (player, key) => this.renderUser(player, key)
                )}
                <span className="playerAmount">{this.props.playerList.length}/{this.props.maxPlayer}</span>
            </div>
        )
    }

    renderTitle() {
        return (
            <h6 className="roomTitle">
                <span className="courtName">{this.props.courtName}</span>
                <span className="price">{this.getPrice()} Baht<span className="price--description">/Person</span></span>
            </h6>
        )
    }

    renderDetail() {
        return (
            <div className="roomDetail">
                <div className="closeTime">
                    {this.renderDate()}
                </div>
                <span>Level : {this.props.level}</span>
                {this.renderCloseTime()}
                {this.renderStartTime()}
            </div>
        )
    }

    renderRoomDescription = () => {
        return (
            <div className="roomDescription">
                {this.props.discount && <DiscountBadge discount={this.props.discount} />}
                <span className="courtAddress">{this.props.courtAddress}</span>
                <h6 className="roomDescription--name">{this.props.roomName}</h6>
                <p className="roomDescription--detail">{this.props.roomDetail}</p>
                {this.renderRoomStatus()}
                {this.renderPlayerList()}
            </div>
        )
    }

    renderRoomStatus = () => {
        return [
            <span style={{ backgroundColor: this.props.roomStatusColor }} className="roomStatus">{this.props.roomStatus}</span>,
            this.props.bookedCourtNumber ? <span className="roomDescription--bookedCourtNumber">สนามที่ {this.props.bookedCourtNumber}</span> : null
        ]
    }

    renderTag = () => {
        if (this.props.isCreator || this.props.isJoiner) {
            return (
                <div className="roomCard__Status">
                    Joined
                </div>
            )
        }

        // Old Design Tag
        if (this.props.isCreator) {
            return (
                <div className="roomCard__tag roomCard__tag--green">
                    สร้างห้อง
                </div>
            )
        }
        if (this.props.isJoiner) {
            return (
                <div className="roomCard__tag roomCard__tag--red">
                    เข้าร่วมแล้ว
            </div>
            )
        }

    }

    render() {
        return (
            <Link href={`/roomDetail?rid=${this.props.roomId}`}>
                <div className="roomCard" >
                    {this.renderTag()}
                    <div className="roomCardPadding">
                        {this.renderTitle()}
                        {this.renderRoomDescription()}
                        {this.renderDetail()}
                    </div>
                </div>
            </Link>

        )
    }
}

RoomCard.propTypes = {
    roomName: propTypes.string,
    roomId: propTypes.string,
    roomDetail: propTypes.string,
    roomStatus: propTypes.any,
    roomStatusColor: propTypes.string,
    courtName: propTypes.string,
    date: propTypes.any, // Datetime
    startTime: propTypes.any, // Datetime
    endTime: propTypes.any, // Datetime
    closeTime: propTypes.any, // Datetime
    mapLocation: propTypes.string,
    type: propTypes.any,
    cost: propTypes.any,
    level: propTypes.any,
    courtPrice: propTypes.string,
    minPlayer: propTypes.number,
    maxPlayer: propTypes.number,
    playerList: propTypes.array,
}

export default RoomCard
