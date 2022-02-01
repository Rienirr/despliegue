const express= require("express");
const HellorController = require("../controllers/hello");
const api = express.Router();
api.get("/hello",HellorController.getHello);

module.exports=api;