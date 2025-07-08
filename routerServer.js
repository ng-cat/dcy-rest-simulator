"use strict";

const express = require("express");
const routerServer = express.Router();
var cors = require("cors");
var bodyParser = require("body-parser");
var fs = require("fs");

routerServer.use(cors());
routerServer.use(bodyParser.json());
routerServer.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

routerServer.get("/", (req, res) => {
  res.send({ message: "Ciao" });
});

routerServer.get("/report", (req, res) => {
  var mock = fs.readFileSync("./scenarios/report.json");
  var data = JSON.parse(mock);
  setTimeout(() => {
    res.json(data);
  }, 5000);
});

routerServer.post("/cassiopeaWeb/report/do.cas", (req, res) => {
  const revent = req.params.revent;
  const csMLO = req.params.csMLO;
  const idReportRequest = req.body.idReportRequest;
  try {
    var mock = fs.readFileSync(
      "./scenarios/contextMenu/" + idReportRequest.split("CTXSEP")[1] + ".js"
    );
    console.log("Mock file loaded:", idReportRequest);
  } catch (e) {
    var mock = fs.readFileSync("./scenarios/contextMenu/menu.js");
    console.log(
      "Mock file not found: " + idReportRequest + ", using default menu.js"
    );
  }
  setTimeout(() => {
    res.send(mock.toString());
  }, 0);
});

routerServer.get(
  "/api/v2/rest/application/:model/report/:report",
  (req, res) => {
    let model = req.params.model;
    let report = req.params.report;
    var mock = fs.readFileSync("./scenarios/" + model + "-" + report + ".json");
    var data = JSON.parse(mock);
    setTimeout(() => {
      res.json(data);
    }, 0);
  }
);

routerServer.get("/api/rest/application/:model/report/:report", (req, res) => {
  let model = req.params.model;
  let report = req.params.report;
  var mock = fs.readFileSync("./scenarios/" + model + "-" + report + ".json");
  var data = JSON.parse(mock);
  setTimeout(() => {
    res.json(data);
  }, 0);
});

routerServer.get(
  "/api/v2/rest/application/:model/report/:report/columns_definition",
  (req, res) => {
    let model = req.params.model;
    let report = req.params.report;
    var mock = fs.readFileSync(
      "./scenarios/columns_definition/" + model + "-" + report + ".json"
    );
    var data = JSON.parse(mock);
    setTimeout(() => {
      res.json(data);
    }, 0);
  }
);

routerServer.get(
  "/api/rest/application/:model/page/:page/report/:report",
  (req, res) => {
    let model = req.params.model;
    let report = req.params.report;
    var mock = fs.readFileSync("./scenarios/" + model + "-" + report + ".json");
    var data = JSON.parse(mock);
    setTimeout(() => {
      res.json(data);
    }, 0);
  }
);

routerServer.get(
  "/api/rest/user/:userId/application/:application/page/:page/widget/:widget/settings",
  (req, res) => {
    let model = req.params.model;
    let report = req.params.report;
    var mock = fs.readFileSync("./scenarios/settings/settings.json");
    var data = JSON.parse(mock);
    setTimeout(() => {
      res.json(data);
    }, 0);
  }
);

routerServer.get("/Orders", (req, res) => {
  var mock = fs.readFileSync("./scenarios/orders.json");
  var data = JSON.parse(mock);
  setTimeout(() => {
    res.json(data);
  }, 10000);
});

routerServer.post("/ALMC/:fileName", (req, res) => {
  let fileName = req.params.fileName;
  var mock = fs.readFileSync("./scenarios/ALMC/" + fileName + ".json");
  var data = JSON.parse(mock);
  setTimeout(() => {
    res.json(data);
  }, 0);
});

module.exports = routerServer;
