const express = require('express');
const app = express()
const cors = require('cors');
const pool = require('./database');
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

app.use('/api', userRouter)

/*app.post("/users", async (req, res) =>{
  try{
    const { name, mail, password } = req.body;
    const newUser = await pool.query(`INSERT INTO "public".user(name, mail, password) values ($1, $2, $3) RETURNING *`,
      [name, mail, password, status]
    );
    res.json({user: newUser.rows[0] });
    console.log(req.body);
  }catch{
    console.error(err.message);
  }
});*/


/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}*/

app.listen(PORT, () => console.log(`server started on port ${PORT}`))