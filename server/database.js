const { Pool } = require('pg');

const pool = new Pool({
 /* user: "ukvelbblvtmaei",
  password: "daf553a5fa60de683b34f09009ef459e8a6d88109bc58089de032568ef129826",
  database: "dfj491eruek43b",
  host: "ec2-3-93-206-109.compute-1.amazonaws.com",
  port: 5432,
  ssl: { rejectUnauthorized: false }*/
  user: "postgres",
  password: "root",
  database: "task",
  host: "localhost",
  port: 5432
});

module.exports = pool;

