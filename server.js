const { compose } = require('ramda')
const http = require('http')
const { json, logger, methods, mount, routes } = require('paperplane')
 
const PORT = process.env.PORT || 3000;

const hello = req => ({
  message: `Hello ${req.params.name}!`
})
 
const app = routes({
  '/hello/:name': methods({
    GET: compose(json, hello)
  })
})
 
http.createServer(mount({ app })).listen(PORT, logger);