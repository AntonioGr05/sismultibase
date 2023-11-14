const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'popsql',
  password: 'Antonio5467q',
  port: 5432,
});

module.exports = pool;