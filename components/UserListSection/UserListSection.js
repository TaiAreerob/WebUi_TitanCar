import React, { Component } from 'react';
import classnames from 'classnames'
import { Row, Col } from 'reactstrap'
import _ from 'lodash'
import UserImage from '../UserImage/UserImage'
import './UserListSection.scss'

const UserListSection = (props) => {
    const userDetail = (player, key) => {
        const className = classnames('userDetail',{
            'userDetail--creator': props.createdBy == player.id,
        })
        return (
            <Col className={className} xs={6} sm={6} key={key}>
                <UserImage
                    isRounded
                    width={65}
                    height={65}
                    userid={'123'}
                    imgURL={player.playerImg}
                    userid={player.id}
                />
                <div className="userDetail__user">
                    <div className="userDetail__user__name">
                        {player.playerName}
                    </div>
                    <div className="userDetail__user__playtime">
                        played {player.playTimes} times
                    </div>
                </div>
            </Col>
        )
    };

    return (
        <div className="userListSection">
            <Row>
                {props.playerList.map((player, key) => userDetail(player, key))}
            </Row>

        </div>
    )
}

export default UserListSection
