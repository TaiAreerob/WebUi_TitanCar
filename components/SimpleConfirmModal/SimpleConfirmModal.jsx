import React from 'react'
import { Button, Modal, ModalFooter, ModalBody } from 'reactstrap'
import './SimpleConfirmModal.scss'


const SimpleConfirmModal = (props) => {
    return (
        <Modal
            centered
            className="SimpleConfirmModal"
            isOpen={props.isOpen}
            toggle={props.toggle}
        >
            <ModalBody>
                <div>
                    {props.text}
                </div>
            </ModalBody>
            <Button className="ConfirmPopup__btn ConfirmPopup__btn--confirm" onClick={props.confirmSubmit}>{props.confirmSubmitText}</Button>
            <Button className="ConfirmPopup__btn ConfirmPopup__btn--cancel" onClick={props.toggle}>Cancel</Button>
        </Modal>
    )
}
export default SimpleConfirmModal