const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { createReadStream } = require('fs');

const dev = process.env.NODE_ENV.trim() !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const getPort = () => {
    switch (process.env.NODE_ENV.trim()) {
        case 'production':
            return 8081
        case 'preprod':
            return 8082
        default:
            return 443;
    }
}
const port = getPort()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
        if (pathname === '/service-worker.js') {
            res.setHeader('content-type', 'text/javascript');
            createReadStream('./service-worker.js').pipe(res);
        } else if (pathname === '/a') {
            app.render(req, res, '/b', query)
        } else if (pathname === '/createBooking') {
            app.render(req, res, '/createBooking', query)
        } else if (pathname === '/profile') {
            app.render(req, res, '/profile', query)
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})
