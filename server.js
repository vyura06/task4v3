const express = require('express');
const app = express()
const cors = require('cors');
const pool = require('./database');
const userRouter = require('./routes/user.routes')
require('dotenv').config()

const PORT = /*process.env.PORT || 8080*/ 8080

app.use(cors())
app.use(express.json())

app.use('/api', userRouter)
app.use(express.static("client/build"));

app.listen(PORT, () => console.log(`server started on port ${PORT}`))