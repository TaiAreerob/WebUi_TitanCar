
import classnames from 'classnames'
import './Section.scss'

const Section = (props) => {
    const className = classnames('section',
        {
            'content-center': props.isContentCenter,
            'last-section': props.isLastSection,
        }
    )
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default Section
