const { Pool } = require('pg');

const pool = new Pool({
  /*user: "ipskszmljuughc",
  password: "e5a18c627dddbf0f32e8d7bf3b878fc08e96c68d8f3fbae50d9d94967c888a8b",
  database: "dfbb739hmum04q",
  host: "ec2-44-209-57-4.compute-1.amazonaws.com",
  port: 5432,
  ssl: { rejectUnauthorized: false }*/
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "task",
  port: 5432
});

pool.connect()

module.exports = pool;

