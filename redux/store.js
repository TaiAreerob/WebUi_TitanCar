import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import getConfig from 'next/config'

import { actionTypes } from './actionTypes'
import { reducers } from './reducers'
import { actions } from './actions'


const { publicRuntimeConfig } = getConfig()
const { nodeEnv } = publicRuntimeConfig

const initialLanguage = {
    lang: 'th'
}

let middleWare = [
    thunkMiddleware,
]
if (nodeEnv.trim() != 'production') {
    middleWare = [
        ...middleWare,
        logger,
    ]
}

const makeStore = (initialState = initialLanguage) =>
    createStore(
        reducers,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                ...middleWare,
            )))

export {
    bindActionCreators,
    actionTypes,
    makeStore,
    actions,
}
