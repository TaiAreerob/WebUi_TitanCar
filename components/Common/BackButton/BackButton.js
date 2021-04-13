import propTypes from 'prop-types'
import classnames from 'classnames'
import  './BackButton.scss'

const BackButton = (props) => {
    const handleBack = () => props && props.router && props.router.back()

    return (
        <span onClick={handleBack} className="btn--backPage">
            <i className="fas fa-chevron-left" />
        </span>
    )
}

export default BackButton
