import { getUserCookies, getToken } from './cookiesServices';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { nodeEnv } = publicRuntimeConfig

const getEndpoint = () => {
    switch (nodeEnv.trim()) {
        case 'production':
            return 'https://joinsanarm.com/api/'
        case 'preprod':
            return 'https://joinsanarm.com/api/'
        default:
            return 'https://joinsanarm.com/api/'
    }

}
const endpoint = getEndpoint()

const defaultErrorHandler = (error) => {
    console.error('Ajax call fail', error)
}

export async function ajaxCallGetAsync(apiPath) {
    return await fetch(`${endpoint}${apiPath}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",

        },
    })
        .then(response => response.json())
        .catch(errorHandler)
}

const ajaxCall = (apiPath, method, contentType, body, callBack, errorHandler = defaultErrorHandler) => {
    fetch(`${endpoint}${apiPath}`, {
        method: method,
        headers: {
            "Content-Type": contentType,
            "Authorization": `Bearer ${getToken()}`,
            //  "x-access-token": `${getToken()}`,
        },
        body: body && JSON.stringify(body),
    })
        .then(response => response.json())
        .then(callBack)
        .catch(errorHandler)
}
const ajaxCallFormData = (apiPath, method, body, callBack, errorHandler = defaultErrorHandler) => {
    fetch(`${endpoint}${apiPath}`, {
        method: method,
        headers: {
            "Authorization": `Bearer ${getToken()}`,
            // "x-access-token": `${getToken()}`,
        },
        body: body && body,
    })
        .then(response => response.json())
        .then(callBack)
        .catch(errorHandler)
}
export const ajaxCallGet = (apiPath, callBack, errorHandler) => {
    ajaxCall(
        apiPath,
        'GET',
        'application/json',
        null,
        callBack,
        errorHandler
    )
}

export const ajaxCallPost = (apiPath, body, callBack, errorHandler) => {
    ajaxCall(
        apiPath,
        'POST',
        'application/json',
        body,
        callBack,
        errorHandler
    )
}

export const ajaxCallPatch = (apiPath, body, callBack, errorHandler) => {
    ajaxCall(
        apiPath,
        'PATCH',
        'application/json',
        body,
        callBack,
        errorHandler
    )
}

export const ajaxUploadFile = (apiPath, formData, callBack, errorHandler) => {
    ajaxCallFormData(
        apiPath,
        'POST',
        formData,
        callBack,
        errorHandler
    )
}