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
        }, 5000);
    });

    routerServer.get('/api/rest/application/:model/report/:report', (req,res)=>{
        let model = req.params.model;
        let report = req.params.report;
        var mock = fs.readFileSync('./scenarios/' + model + '-' + report + '.json');
        var data = JSON.parse(mock);
        setTimeout(() => {
            res.json(data);
        }, 0);
    });

    routerServer.get('/Orders', (req,res)=>{
        var mock = fs.readFileSync('./scenarios/orders.json');
        var data = JSON.parse(mock);
        setTimeout(() => {
            res.json(data);
        }, 10000);
    });


module.exports = routerServer;