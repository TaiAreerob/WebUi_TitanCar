import React from 'react';

import './DiscountBadge.scss'

const DiscountBadge = (props) => {
    return (
        <div className="DiscountBadge">
            {props.discount} %
        </div>
    )
}

export default DiscountBadge