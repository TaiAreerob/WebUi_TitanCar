import classnames from 'classnames'
import './CrossOutText.scss'

const CrossOutText = (props) => {
    const classNames = classnames('CrossOutText', props.className)
    return (
        <div className={classNames}>
            {props.text}
            <div className="CrossOutText__Line" />
        </div>
    )
}

export { CrossOutText }
