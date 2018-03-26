var express = require('express')
var ws = require('./ws')
var vis = require('vis');
var app = express()
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/views/ws.html');
})
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
var dataobj = [{
        "x": -117,
        "y": -24,
        "id": "0",
        "title": "informations",
        "connections": [
            1,
            4
        ]
    },
    {
        "x": -7,
        "y": 3,
        "id": "1",
        "connections": [
            0,
            2,
            4
        ]
    },
    {
        "x": 97,
        "y": 40,
        "id": "2",
        "connections": [
            1,
            3
        ]
    },
    {
        "x": 201,
        "y": 88,
        "id": "3",
        "connections": [
            2
        ]
    },
    {
        "x": -42,
        "y": -109,
        "id": "4",
        "connections": [
            0,
            1
        ]
    }
];

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 40510 })
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        var data = {}
        try {
            data = JSON.parse(message);
            dataobj = data;
        } catch (e) {
            console.log(e);
        }
        wss.clients.forEach(function each(ws) {
            ws.send(JSON.stringify(dataobj));
        })
    })
})