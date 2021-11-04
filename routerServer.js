'use strict';

const express = require('express');
const routerServer = express.Router();
var cors = require('cors');
var bodyParser = require('body-parser')
var fs = require('fs');


    routerServer.use(cors());
    routerServer.use( bodyParser.json() );
    routerServer.use(bodyParser.urlencoded({
      extended: true
    }));

    routerServer.get('/', (req,res)=>{
        res.send({message: 'Ciao'});
    });

    routerServer.get('/report', (req,res)=>{
        var mock = fs.readFileSync('./scenarios/report.json');
        var data = JSON.parse(mock);
        setTimeout(() => {
            res.json(data);
        }, 10000);
    });

module.exports = routerServer;