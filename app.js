const http =require('http');

const server =http.createServer((req, res)=>{
    if (req.url ==='/') {
        res.write('welcome to our homepage')

    }
    if (req.url ==='/about'){
res.end('here is our about page')
    }
    res.end(`<h1>Oops <h1> <p>we can not seem to find the page<p>`)
})
server.listen(5001)