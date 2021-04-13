import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { InputGroup } from 'reactstrap'

import './FieldAndSelect.scss'

const mapDropdownData = (dataList, showingField = 'title') => {
    if (!dataList) return []
    return dataList.map(data => {
        if (data[showingField]) return [data[showingField], data.id]
        return [data.id, data.id]
    })
}

const FieldAndSelect = (props) => {

    const className = classnames(
        "fieldAndSelect",
        props.className,
    )

    const onSelectedChange = (e) => {
        e && e.target && props.onChange && props.onChange(e.target.value)
    }
    return (
        <div className={className}>
            <span >{props.title}</span>
            <select
                required={props.isRequired}
                className="form-control"
                onChange={onSelectedChange}
                value={props.value}

            >

                {props.options.map(([value, id]) => {
                    return (<option key={id} value={id} selected={props.value === id}>{value}</option>)

                })}
            </select>

        </div>
    )
}

FieldAndSelect.propTypes = {
    title: propTypes.string,
    options: propTypes.array.isRequired,
    isRequired: propTypes.bool,
    onChange: propTypes.func,
}

export default FieldAndSelect
export { mapDropdownData }