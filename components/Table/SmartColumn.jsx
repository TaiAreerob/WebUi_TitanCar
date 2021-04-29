import React from 'react'

const VALUE_TYPE = {
    text1: 'text1',
    text2: 'text2',
    textClick1: 'textClick1',
    textClick2: 'textClick2',
    textUrl1: 'url1',
    textUrl2: 'url2',
}


const SmartColumnComponent = (props) => {
    const {
        payload,
        value,
        order,
    } = props
    if (order) {
        return order.map(i => value[i].text)
    }

    const renderAsText = (value, valueType) => {
        return value[valueType].text
    }

    const renderAsUrl = (value, valueType) => {
        return (
                <a href={value[valueType].url} target="_blank">
                    {value[valueType].text}
                </a>
        )
    }

    const renderAsTextClick = (value, valueType) => {
        // TODO : implement click handler
        return value[valueType].text
    }

    const renderValue = (value, valueType) => {
        if (value[valueType]) {
            if (value[valueType].url) {
                // URL
                return renderAsUrl(value, valueType)
            }

            if (value[valueType].param) {
                // Text clickable
                return renderAsTextClick(value, valueType)
            }

            // Normal Text
            return renderAsText(value, valueType)
        }
    }

    return <td>
        {[
            renderValue(value, VALUE_TYPE.text1),
            renderValue(value, VALUE_TYPE.textUrl1),
            renderValue(value, VALUE_TYPE.textClick1),
            renderValue(value, VALUE_TYPE.text2),
            renderValue(value, VALUE_TYPE.textUrl2),
            renderValue(value, VALUE_TYPE.textClick2),
        ]}
    </td>
}

const SmartColumn = React.memo(SmartColumnComponent)

export { SmartColumn }