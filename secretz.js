const crypto = require('crypto')
const decipher = crypto.createDecipheriv(...process.argv.slice(2,5))
const tar = require('tar')
const parser = new tar.Parse()
const concat = require('concat-stream')

parser.on('entry', function (e) {
  if(e.type === 'File'){
    const hashStream = crypto.createHash('md5', { encoding: 'hex' });
    e.pipe(hashStream).pipe(concat(function(hash){
      console.log(`${hash} ${e.path}`)
    }))
  }
    e.resume()
});

process.stdin.pipe(decipher).pipe(parser)
