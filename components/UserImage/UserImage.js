import propTypes from 'prop-types'
import Link from 'next/link'
import _ from 'lodash'


const element = (props) => {
    const wrapperStyle = {
        display: props.isDisplayBlock ? 'block' : 'inline-block'
    }
    const imgStyle = {
        background: '#d8dce6 no-repeat center',
        width: props.width,
        height: props.height,
        borderRadius: props.isRounded ? '50%' : null,
    }
    return (
        <div style={wrapperStyle} className="UserImage">
            < img style={imgStyle} src={!_.isEmpty(props.imgURL) ? props.imgURL : '/static/assets/profile-logo.png'} />
        </div>
    )
}

const UserImage = (props) => {
    if (!_.isEmpty(props.userid))
        return (
            <Link href={`/profile?id=${props.userid}`} prefetch>
                {element(props)}
            </Link>
        )
    return element(props)
}

UserImage.defaultProps = {
    isLink: false,
    width: 100,
    height: 100,
}

UserImage.propTypes = {
    userid: propTypes.string,
    imgURL: propTypes.string,
    width: propTypes.number,
    height: propTypes.number,
    isRounded: propTypes.bool,
    isDisplayBlock: propTypes.bool,
}

export default UserImage