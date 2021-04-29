import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import './FieldAndInput.scss'

const FieldAndInput = props => {

    const className = classnames(
        "fieldAndInput",
        props.className,
    )

    const onChange = (e) => {
        e && e.target && props.onChange && props.onChange(e.target.value)
    }

    const inputClassName = classnames(
        'form-control',
        {
            invalidInput: props.isInvalidInput,
        },
    )

    const renderInput = () => {
        if (props.inputType == 'textarea') {
            return (
                <textarea
                    disabled={props.disable}
                    onChange={onChange}
                    required={props.isRequired}
                    value={props.value}
                    placeholder={props.placeholderText}
                    className={inputClassName} />
            )
        }
        return [
            <input
                disabled={props.disable}
                type={props.inputType}
                onChange={onChange}
                required={props.isRequired}
                value={props.value}
                placeholder={props.placeholderText}
                max={props.max}
                min={props.min}
                maxLength={props.maxLength}
                className={inputClassName} />,
            // props.inputType == 'date'  && <div className="fieldAndInput__dateValue">{props.value}</div>
        ]
    }
    return (
        <div className={className}>
            <span>{props.title}</span>
            {renderInput()}
        </div>
    )
}


FieldAndInput.defaultProps = {
    disable: false,
}

FieldAndInput.propTypes = {
    disable: propTypes.bool,
    value: propTypes.any,
    title: propTypes.string,
    inputType: propTypes.string.isRequired,
    isRequired: propTypes.bool,
    onChange: propTypes.func,
    isInvalidInput: propTypes.bool,
}

export default FieldAndInput