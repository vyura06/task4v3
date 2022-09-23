//const db = require('../database');

class UserController {
  /*async getUsers(req, res) {
    if (req.query.mail) {
      const { mail, password } = req.query;
      const users = await db.query("SELECT * FROM user WHERE mail = $1 and password = $2", [mail, password]);

      if (users.rowCount) {        
        const user = await db.query(
          "UPDATE user SET lastvisit = $1 where id = $2 RETURNING *",
          [getFormattedDateTime(new Date()), users.rows[0].id]
        );

        res.json({ user: user.rows[0] });
      } else {
        res.status(400).json({});
      }
    }
    else {
      const users = await db.query("SELECT * FROM user");
      res.json({ users: users.rows });
    }
  }

  */async createUser(req, res) {
    const { name, mail, password } = req.body;

    /*const newUser = await db.query(`INSERT INTO user (name, mail, password)
      values ($1, $2, $3) RETURNING *`,
      [name, mail, password]
    );*/

    res.json('ok'/*,{ user: newUser.rows[0] }*/);
  }

 /* async blockUser(req, res) {
    const id = +req.params.id;
    const user = await db.query("UPDATE user SET status = 'Blocked' where id = $1 RETURNING *", [id]);
    res.json({ user: user.rows[0] });
  }

  async blockAllUsers(req, res) {
    const users = await db.query("UPDATE user SET status = 'Blocked' where id = id RETURNING *");
    res.json({ user: users.rows });
  }

  async unblockUser(req, res) {
    const id = +req.params.id;
    const user = await db.query("UPDATE user SET status = null where id = $1 RETURNING *", [id]);
    res.json({ user: user.rows[0] });
  }

  async deleteUser(req, res) {
    const id = +req.params.id;
    const user = await db.query("DELETE FROM user where id = $1 RETURNING *", [id]);
    res.json({ user: user.rows[0] });
  }

  async deleteAllUsers(req, res) {
    const users = await db.query("DELETE FROM user where id = id RETURNING *");
    res.json({ user: users.rows });
  }*/
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