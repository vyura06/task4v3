const db = require('../database');

class UserController {

  ///CREATEUSER

  async createUser(req, res) {
    try {
      const { name, mail, password } = req.body;
      const newUser = await db.query(`INSERT INTO "public".user(name, mail, password, status, createddate, lastvisit) values ($1, $2, $3, null, $4, null) RETURNING *`,
        [name, mail, password, getFormattedDateTime(new Date())]
      );
      res.json({ user: newUser.rows[0] });
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
    }

  }

  ///GETALLUSERS

  async getUsers(req, res) {
    try {
      if (req.query.mail) {
        const { mail, password } = req.query;
        const users = await db.query(`SELECT * FROM "public".user WHERE mail = $1 and password = $2`, [mail, password]);

        if (users.rowCount) {
          const user = await db.query(
            `UPDATE "public".user SET lastvisit = $1 where id = $2 RETURNING *`,
            [getFormattedDateTime(new Date()), users.rows[0].id]
          );

          res.json({ user: user.rows[0] });
        } else {
          res.status(400).json({});
        }
      }
      else {
        const users = await db.query(`SELECT * FROM "public".user`);
        res.json({ users: users.rows });
      }
      console.log(req.body);
    } catch (err) {
      console.error(err.message);
    }
  }

  ///BLOCKUSER

  async blockUser(req, res) {
    try {
      const id = +req.params.id;
      const user = await db.query(`UPDATE "public".user SET status = true where id = $1 RETURNING *`, [id]);
      res.json({ user: user.rows[0] });
      res.json("User was blocked")
    } catch (err) {
      console.error(err.message);
    }
  }

  ///BLOCKALLUSERS

  async blockAllUsers(req, res) {
    try {
      const users = await db.query(`UPDATE "public".user SET status = true where id = id RETURNING *`);
      res.json({ user: users.rows });
      res.json("Users was blocked")
    } catch (err) {
      console.error(err.message);
    }
  }

  ///UNBLOCKUSER

  async unblockUser(req, res) {
    try {
      const id = +req.params.id;
      const user = await db.query(`UPDATE "public".user SET status = null where id = $1 RETURNING *`, [id]);
      res.json({ user: user.rows[0] });
      res.json("User was unblocked")
    } catch (err) {
      console.error(err.message);
    }
  }

  ///DELETEUSER

  async deleteUser(req, res) {
    try {
      const id = +req.params.id;
      const user = await db.query(`DELETE FROM "public".user where id = $1 RETURNING *`, [id]);
      res.json({ user: user.rows[0] });
    } catch (err) {
      console.error(err.message);
    }
  }

  ///DELETEALLUSERS

  async deleteAllUsers(req, res) {
    try {
      const users = await db.query(`DELETE FROM "public".user where id = id RETURNING *`);
      res.json({ user: users.rows });
      res.json("Users was deleted")
    } catch (err) {
      console.error(err.message);
    }
  }
}

function getFormattedDateTime(dateTime) {
  const date = dateTime.toDateString();

  const getTimeNumberFormat = (num) => num < 10 ? "0" + num : num;

  const hours = getTimeNumberFormat(dateTime.getHours());
  const minutes = getTimeNumberFormat(dateTime.getMinutes());
  const seconds = getTimeNumberFormat(dateTime.getSeconds());

  return `${date}, ${hours}:${minutes}:${seconds}`;
}

module.exports = new UserController();