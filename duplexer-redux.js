const duplexer2 = require("duplexer2");
const through = require('through2').obj;



module.exports = function (counter) {
// return a duplex stream to count countries on the writable side
// and pass through `counter` on the readable side
let counts = {};

const stream = through(write, end)

return duplexer2({objectMode: true},stream, counter)


function write (buffer, encoding, next) {

  counts[buffer.country] = (counts[buffer.country] || 0)+1
  next()
}

function end (done) {
  counter.setCounts(counts);
  done()
}

}
