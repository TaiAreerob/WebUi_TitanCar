import propTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import './FieldAndValue.scss'

const FieldAndValue = (props) => {
    const className = classnames(
        "fieldAndValue",
        props.className,
    )
    return (
        <div className={className}>
            <span className="fieldAndValue__field">
                {props.field}
            </span>:
            <span className="fieldAndValue__value">
                {props.value}
                {props.children}
            </span>
        </div>
    )
}

FieldAndValue.propTypes = {
    className: propTypes.string,
    field: propTypes.string,
    value: propTypes.string,
}

export default FieldAndValue