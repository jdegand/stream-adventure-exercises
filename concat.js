const concat = require('concat-stream');

process.stdin
      .pipe(concat(function (buffer) {
          let strings = buffer.toString().split('').reverse().join('');
          process.stdout.write(strings)
      }))
