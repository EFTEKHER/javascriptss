const express = require('express');
const router = require('./router/api');
const app=new express();
//security
const rate_limit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
const mongo_sanitize = require("express-mongo-sanitize");
const xss=require("xss-clean");
const hpp=require("hpp");


app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(mongo_sanitize());
app.use(xss());
app.use(hpp());
app.use(rate_limit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));
app.use(mongo_sanitize());
app.use("/api/v1",router)
app.use("*",function(req, res){
    res.status(404).json({ status: "Error", message: "Page not found" });
});

// base url /api/v1/hello-get

module.exports =app;