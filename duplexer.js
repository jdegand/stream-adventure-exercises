const { spawn } = require('child_process')
const duplexer2 = require("duplexer2");

module.exports = function (cmd, args) {
  // spawn the process and return a single stream
  // joining together the stdin and stdout here
  const program = spawn(cmd, args)
  return  duplexer2(program.stdin, program.stdout)
          //this is reversed because it's a child process
}
