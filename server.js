const express = require('express');
const app = express()
const cors = require('cors');
const pool = require('./database');
const userRouter = require('./routes/user.routes')
const bodyParser = require("body-parser");

const PORT = 8080

app.use(cors())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use('/api', userRouter)
app.use(express.static("client/build"));


app.listen(PORT, () => console.log(`server started on port ${PORT}`))