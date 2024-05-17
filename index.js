
const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();

const port = process.env.PORT || 4000;

app.use(express.json())

const todoRoute = require("./routes/todos")

app.use("/api/v1",todoRoute)


//start server
app.listen(port, () => {
    console.log(`Server started successfully at ${port}`);
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default routes
app.get("/", (req,res)=>{
    res.send(`<h1>This is home page baby navin</h1>`)
})
