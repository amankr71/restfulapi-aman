const express = require("express");
require("./db/conn");
const Student=require("./models/students");
const Router = require("./routers/student");

const app =express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(Router);


app.listen(port,() => {
    console.log(`connection is setup at ${port}`);
});