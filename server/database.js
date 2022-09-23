const { Pool } = require('pg');

const pool = new Pool({
  user: "teqbkmbmmmgczf",
  password: "e367f67446302a834e1061d5cb4bd4c07fe37940cf45b3f97bb604bd2d169531",
  database: "deaoh989v8kvmg",
  host: "ec2-52-207-90-231.compute-1.amazonaws.com",
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
