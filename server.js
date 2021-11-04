'use strict';

const server = require('./appServer')

server.appServer.listen(server.portServer, () => {
	console.log(`API REST running in http://localhost:${server.portServer}`);
});

