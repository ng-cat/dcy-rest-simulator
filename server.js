'use strict';

const server = require('./appServer')
var http = require('http');
var https = require('https');
var fs = require('fs');

var privateKey  = fs.readFileSync('selfsigned.key', 'utf8');
var certificate = fs.readFileSync('selfsigned.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

/*
server.appServer.listen(server.portServer, () => {
	console.log(`API REST running in http://localhost:${server.portServer}`);
});
*/

var httpServer = http.createServer(server.appServer);
var httpsServer = https.createServer(credentials, server.appServer);

httpServer.listen(8080);
httpsServer.listen(8443);
