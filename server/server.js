const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', userRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))