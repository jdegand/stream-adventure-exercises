const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:8099')
const stream = WebSocket.createWebSocketStream(ws, { encoding: 'utf8' })

stream.write("hello\n");
stream.pipe(process.stdout);
