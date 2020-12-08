const crypto = require('crypto')
const combine = require('stream-combiner')
const stream = crypto.createDecipheriv('aes256', ...process.argv.slice(2,4))

combine(process.stdin, stream, process.stdout)

//this looks like it works but stream-adventure hangs
