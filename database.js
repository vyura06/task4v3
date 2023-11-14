const { Pool } = require('pg');

const pool = new Pool({
  user: "default",
  password: "yd0mrMBAEOt1",
  database: "verceldb",
  host: "ep-royal-leaf-42735115-pooler.us-east-1.postgres.vercel-storage.com",
  port: 5432,
  ssl: { rejectUnauthorized: false }
  /*host: "localhost",
  user: "postgres",
  password: "root",
  database: "task",
  port: 5432*/
});

pool.connect()

module.exports = pool;

