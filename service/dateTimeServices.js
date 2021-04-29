import moment from 'moment-timezone'

export const DATE_FORMAT = 'YYYY-MM-DD'
export const TIME_FORMAT = 'HH:mm'

const convertDateFormat = (date, dateFormat) => {
    return moment(date).format(dateFormat)
}

export const convertMomentToDate = (momentDate) => {
    return convertDateFormat(momentDate, DATE_FORMAT)
}

export const convertDateToMoment = (date, time = 0) => {
    return moment(`${date} ${time}`, `${DATE_FORMAT} ${TIME_FORMAT}`)
}

export const convertMomentToTime = (momentDate) => {
   
    return convertDateFormat(momentDate, TIME_FORMAT)
}
export const showconvertMomentToTime = (momentDate) => {
   
    return moment(momentDate).tz('Asia/Bangkok').format(TIME_FORMAT)
}

