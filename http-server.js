const through2 = require('through2')
const http = require('http')


const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through2(function(buffer, _, next){
      this.push(buffer.toString().toUpperCase())
      next()
    })).pipe(res)
  } else {
    res.end('error')
  }
});

server.listen(process.argv[2])
