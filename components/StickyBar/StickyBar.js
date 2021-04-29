import React, { Component }  from 'react';
import propTypes from 'prop-types'
import classnames from 'classnames'
import './StickyBar.scss'

class StickyBar extends React.Component {

    getStickyBarClassName = () => {
        return classnames(
            'StickyBar',
            this.props.className,
        )
    }

    render() {
        return (
            <div className={this.getStickyBarClassName()}
                style={{
                    background: "linear-gradient(90deg, #39d8dd 10%, #3eb5ee 60%)",
                    position: "fixed",
                    width: "100%",
                    top: 0
                }}
            >
                {this.props.children}
            </div>
        )
    }
}


export default StickyBar
