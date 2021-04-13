import React from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import GoToPayment from '../GoToPayment/GoToPayment'
import Section from '../Section/Section'
import './ConfirmPopup.scss'

export const ConfirmPopupConfig = {
    'CREATE': { id: 'CREATE', text: 'create' },
    'JOIN': { id: 'JOIN', text: 'join' },
}

const ConfirmPopup = (props) => {

    const titleSection = () => {
        return (
            <>
                <div>
                    You are requesting to {props.popupConfig && props.popupConfig.text}
                </div>
                <div className="ConfirmPopup__RoomName">
                    {props.roomName}
                </div>
                <div className="ConfirmPopup__Wallet">
                    Your wallet: <span>{props.wallet}</span> Baht
                </div>
            </>
        );
    }

    const renderDetail = () => {
        return (
            <div className="ConfirmPopup__Detail">
                <div>
                    Court price {props.price} Baht/Person
                </div>
                <div>
                    Service charge {props.tax} Baht
                </div>
            </div>
        )
    }

    const renderTotalPrice = () => {
        return (
            <div className="totalPrice">
                <span>{props.playerAmount}</span> persons <span className="highLight">{props.totalPrice}</span> Baht
            </div>
        )
    }

    const renderGoToPayment = () => {
        return !props.isEnoughMoney && <GoToPayment />
    }

    const renderRedRemark = (messages) => {
        return (
            <div className="ConfirmPopup__Remark">
                *{messages}
            </div>
        )
    }

    return (
        <Modal
            centered
            className="ConfirmPopup"
            isOpen={props.isOpen}
            toggle={props.toggle}
        >
            <ModalBody>
                {titleSection()}
            </ModalBody>
            <ModalBody >
                {renderDetail()}
                {renderTotalPrice()}
                <div className="shuttlecock">share shuttlecock price at court</div>
                {renderRedRemark('หากมีคนมาหารเพิ่มหรืออยากเเลิกทางเราจะคืนค่าสยามที่ลดลงให้ผ่านทาง wallet')}
                {renderRedRemark('If room cancel or player unit increase we will refund to your wallet automatically.')}
                {renderGoToPayment()}
            </ModalBody>
            <Button className="ConfirmPopup__btn ConfirmPopup__btn--confirm" onClick={props.confirmSubmit}>{props.confirmSubmitText}</Button>
            <Button className="ConfirmPopup__btn ConfirmPopup__btn--cancel" onClick={props.toggle}>Cancel</Button>
        </Modal>
    )
}
ConfirmPopup.displayName = 'ConfirmPopup'
export default ConfirmPopup