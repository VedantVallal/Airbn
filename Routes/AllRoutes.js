const express = require("express");
const app = express.Router();
const fun = require("../controller/homes");

// Home Get 
app.get("/",fun.default);

// AddHome get
app.get("/addhome",fun.getaddhome);

// POST Request handel 
app.post("/thankyou",fun.getthankyou);

// POST Request of Home
app.post("/home",fun.homepost);

module.exports = app;