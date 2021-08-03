const http = require('http')

const server = http.createServer((req,res)=> {
if(req.url==='/'){
res.end('Welcome to our homepage')
}
if(req.url === '/about'){
    res.end('This is a brief backgorund of our company')
}
res.end(`
<h1>Oops!</h1>
<p>Page cannot be found...</p>
<a href="/">Back to Homepage</a>
`)
})

server.listen(5000)