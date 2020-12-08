const split2 = require('split2')
const through2 = require('through2')

let startingLineNumber = 0;

process.stdin
      .pipe(split2())
      .pipe(through2(function (buffer, _, next) {
          let line = buffer.toString();
          this.push(startingLineNumber % 2 === 0 ? line.toLowerCase() : line.toUpperCase() )
          startingLineNumber++;
          next();
      })).pipe(process.stdout)
