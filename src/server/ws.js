var express = require('express')
var ws = require('./ws')
var app = express()
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/ws.html');
})
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 40510 })
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        ws.send(JSON.stringify({
            nodes: [{ id: 1, label: 'Node 1' },
                { id: 2, label: 'Node 2' },
                { id: 3, label: 'Node 3' },
                { id: 4, label: 'Node 4' },
                { id: 5, label: 'Node 5' }
            ],
            edges: [{ from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 2, to: 4 },
                { from: 2, to: 5 },
                { from: 3, to: 3 }
            ]
        }));
    })
})