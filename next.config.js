const withPlugins = require('next-compose-plugins');

const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withAutoprefixer = require('autoprefixer')

require('dotenv').config()
const webpack = require('webpack')

module.exports = withPlugins([
    withSass,
    withCSS,
    withAutoprefixer,
    {
        exportPathMap: async function (defaultPathMap) {
            return {
                '/': { page: '/' },
                '/login': { page: '/login' }
                // '/addCourt': { page: '/addCourt' },
                // '/policy': { page: '/policy' },
                // '/rooms': { page: '/rooms' },
                // '/roomDetail/:rid': ({ rid }) => ({ page: '/roomDetail', query: { rid } }),
                // '/courts': { page: '/courts' },
                // '/payment': { page: '/payment' },
                // '/landingPage': { page: '/landingPage' },
                // '/createBooking': { page: '/createBooking' },
            }
        },
        publicRuntimeConfig: {
            appId: process.env.APP_ID,
            host: process.env.HOST,
            restAPIKey: process.env.REST_API_KEY,
            nodeEnv: process.env.NODE_ENV,
        },
    },
]) 
