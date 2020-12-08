const combine = require('stream-combiner')
const split2 = require('split2')
const through2 = require('through2')
const zlib = require('zlib')

module.exports = function () {
    let stream = through2(write, end);
    let listPosition;

    function write (line, _, next) {
      if(line.length){
        let row = JSON.parse(line);

        if(row.type === 'genre'){
          if(listPosition){
            this.push(JSON.stringify(listPosition) + '\n')
          }
          listPosition = {name: row.name, books: []}
        }else {
          listPosition.books.push(row.name)
        }
        next()
      }
    }

      function end(done){
        if(listPosition){
          this.push(JSON.stringify(listPosition) + '\n')
        }
        done()
      }

    return combine(split2(), stream, zlib.createGzip())
  }
