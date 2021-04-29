import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames'
import { Button as ReactstrapButton } from 'reactstrap';

import './Button.scss';

const Button = props => {

    const getStyle = (buttonType) => {
        switch (buttonType) {
            case 'destructive':
                return 'btnDestructive'
            case 'default':
                return 'btnDefault'
            case 'none':
                return 'btnNone'
            default:
                return 'btnDefault'
        }

    }
    const className = classnames(
        'JsnButton',
        props.className, getStyle(props.buttonType),
        { JsnButtonRounded: props.isRounded },
    )
    return (
        <ReactstrapButton
            className={className}
            onClick={props.onClick}
        >
            {props.children}
        </ReactstrapButton>
    );


}

Button.propTypes = {
    buttonType: propTypes.string,
    className: propTypes.string,
    onClick: propTypes.func,
    isRounded: propTypes.bool,
}

export default Button;